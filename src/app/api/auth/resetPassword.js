"use server";

import { connectDB } from "@/lib/db";
import User from "@/models/usersSchema";
import { getRandomMessage, resetPasswordMessages } from "@/utils/validators";
import bcrypt from "bcrypt";

const BCRYPT_SALT = parseInt(process.env.BCRYPT_SALT, 10);

export default async function resetPassWordAction(formData) {
  const phone = formData.get("phone")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";
  const hashPassword = await bcrypt.hash(password, BCRYPT_SALT);

  try {
    await connectDB();

    const user = await User.findOne({ phone });
    if (!user)
      return {
        success: false,
        message: getRandomMessage(resetPasswordMessages.error),
      };

    await User.findOneAndUpdate(
      { phone },
      {
        password: hashPassword,
      },
      { upsert: true, new: true }
    );

    return {
      success: true,
      message: getRandomMessage(resetPasswordMessages.success),
      redirection: `/signIn`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!— ",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
