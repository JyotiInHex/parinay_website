import { getRandomMessage, otpMessages } from "@/utils/validators";
import TwilioSDK from "twilio";

const client = TwilioSDK(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export const SendOTP = async (phone, otp) => {
    let bodyMsg = getRandomMessage(otpMessages.phoneMsgBody);
    const msg = bodyMsg.replace("{otp}", otp);
    try {
        const message = await client.messages.create({
            to: `+91${phone}`,
            from: process.env.TWILIO_PHONE,
            body: msg,
        });
        return { success: true, sid: message.sid };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};

