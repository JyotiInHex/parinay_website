import { getRandomMessage, otpMessages, textMessagesSet } from "@/utils/validators";
import TwilioSDK from "twilio";

const owner = process.env.TWILIO_PHONE;
const client = TwilioSDK(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export const SendOTP = async (phone, otp) => {
    let bodyMsg = getRandomMessage(otpMessages.phoneMsgBody);
    const msg = bodyMsg.replace("{otp}", otp);
    try {
        const message = await client.messages.create({
            to: `+91${phone}`,
            from: owner,
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

export const SendWelcomeMsg = async (phone, user) => {
    let bodyMsg = getRandomMessage(textMessagesSet.welcome)
    const msg = bodyMsg.replace("{username}", user);
    try {
        await client.messages.create({
            to: `+91${phone}`,
            from: owner,
            body: msg
        })
    } catch (error) {
        return {
            success: false,
            message: error.message,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}