"use server";
import { connectDB } from "@/lib/db";
import bcrypt from "bcrypt";
import User from "@/models/usersSchema";
import UserOTP from "@/models/otpSchema";
import { SendOTP } from "@/lib/auth/twilio";
import { getRandomMessage, otpMessages, signinMessages } from "@/utils/validators";

const otpLimit = parseInt(process.env.OTP_LIMIT, 10);

export default async function forgotPasswordAction(formData) {
    const phone = formData.get("phone")?.toString();
    
    try {
        await connectDB();

        const rawOTP = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedOTP = await bcrypt.hash(rawOTP, 10);
        const user = await User.findOne({ phone });

        if (!user) return {
            success: false,
            message: getRandomMessage(signinMessages.userNotFound),
        };

        const maxRequestLimit = otpLimit;
        const oneHourAgo = new Date(new Date().getTime() - 60 * 60 * 1000);

        const recentOTPsCount = await UserOTP.countDocuments({
            phone,
            createdAt: { $gte: oneHourAgo },
        });

        if (recentOTPsCount >= maxRequestLimit) return {
            success: false,
            message: getRandomMessage(otpMessages.limitReach).replace("{userPhone}", phone),
        };

        await UserOTP.create({
            phone,
            otp: hashedOTP,
            createdAt: new Date(),
        });

        const result = await SendOTP(phone, rawOTP);
        if (!result || !result.sid) {
            return {
                success: false,
                message: getRandomMessage(otpMessages.error),
            };
        }

        let message = getRandomMessage(otpMessages.sent);
        message = message.replace("{userPhone}", phone);
        return { success: true, message};
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong. Please try again.",
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}
