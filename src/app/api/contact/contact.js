'use server';

import { connectDB } from "@/lib/db";
import ContactUs from "@/models/contactUsSchema";
import { contactUsMessages, getRandomMessage } from "@/utils/validators";

export async function contactAction(formData) {
    try {
        await connectDB();
        const name = formData.get("name")?.toString();
        const profession = formData.get("profession")?.toString() || "";
        const referralSource = formData.get("referralSource")?.toString() || "";
        const helpOptions = formData.get("helpOptions")?.toString();
        const email = formData.get("email")?.toString();
        const phone = formData.get("phone")?.toString() || "";
        const message = formData.get("message")?.toString();

        await ContactUs.create({ name, profession, referralSource, helpOptions, email, phone, message })
        return {
            success: true,
            message: getRandomMessage(contactUsMessages),
        };
    } catch (error) {
        return {
            success: false,
            message: 'Something went wrong during Submitting. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}