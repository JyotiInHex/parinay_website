"use server";
import { connectDB } from "@/lib/db";
import bcrypt from "bcrypt";
import crypto from "crypto";
import User from "@/models/usersSchema";
import UserOTP from "@/models/otpSchema";
import { SendOTP } from "@/lib/auth/twilio";
import {
    getRandomMessage,
    otpMessages,
} from "@/utils/validators";

const otpLimit = process.env.OTP_LIMIT;
const oneHourAgo = new Date(new Date().getTime() - 60 * 60 * 1000);

async function GenerateOTP(length = 4) {
    const min = 10 ** (length - 1);
    const max = 10 ** length;
    return crypto.randomInt(min, max).toString();
}

export default async function forgotPasswordAction(formData) {
    const phone = formData.get("phone")?.toString();
    const OTP = await GenerateOTP(6);
    const hashedOTP = await bcrypt.hash(OTP, 10);

    try {
        await connectDB();

        const user = await User.findOne({ phone });
        if (!user) return {
            success: false,
            message: getRandomMessage(otpMessages.userNotFound),
        };

        const recentOTPsCount = await UserOTP.countDocuments({
            phone,
            createdAt: { $gte: oneHourAgo },
        });
        if (recentOTPsCount >= otpLimit) return {
            success: false,
            message: getRandomMessage(otpMessages.limitReach).replace(
                "{userPhone}",
                phone
            ),
        };

        await UserOTP.create({
            phone,
            otp: hashedOTP,
            createdAt: new Date(),
        });
        SendVerifyCode(phone, OTP);

        let message = getRandomMessage(otpMessages.sent);
        message = message.replace("{userPhone}", phone) + OTP;
        return { success: true, message, popupType: "otpForm", switchTo: "resetPassWord" };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong. Please try again.",
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}

export async function SendVerifyCode(phone, OTP) {
    const hashedOTP = await bcrypt.hash(OTP, 10);
    await UserOTP.findOneAndUpdate(
        { phone },
        {
            otp: hashedOTP,
            createdAt: new Date(),
        },
        { upsert: true, new: true }
    );
    
    const result = await SendOTP(phone, OTP);
    if (!result || !result.sid) return {
        success: false,
        message: getRandomMessage(otpMessages.error),
    };
    
    let message = getRandomMessage(otpMessages.resent);
    message = message.replace("{userPhone}", phone);
    return { success: true, message };
}

export async function VerifyOTPCode(phone, otp) {
    const otpStringify = otp.join("");
    try {
        await connectDB();

        const otpRecord = await UserOTP.findOne({ phone }).sort({ createdAt: -1 }).exec();
        if (!otpRecord) return {
            success: false,
            message: getRandomMessage(otpMessages.invalidOTP),
        };

        const now = new Date();
        const otpCreatedTime = new Date(otpRecord.createdAt);
        const difference = now - otpCreatedTime;
        if (difference > 5 * 60 * 1000) return {
            success: false,
            message: getRandomMessage(otpMessages.expiredOTP),
        };

        const isMatch = await bcrypt.compare(otpStringify, otpRecord.otp);
        if (!isMatch) return {
            success: false,
            message: getRandomMessage(otpMessages.invalidOTP),
        };
        await UserOTP.deleteMany({ phone: phone });

        return {
            success: true,
            message: getRandomMessage(otpMessages.verified),
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong. Please try again.",
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}
