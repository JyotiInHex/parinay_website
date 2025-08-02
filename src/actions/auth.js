'use server'
import { connectDB } from '@/lib/db'
import User from '@/models/users';
import { cookies } from 'next/headers'
import bcrypt from 'bcrypt';
import { getRandomMessage, signinMessages, signupMessages } from '@/utils/validators';

export async function signupAction(formData) {
    try {
        await connectDB();

        const name = formData.get('name')?.toString()
        const referralSource = formData.get('referralSource')?.toString()
        const phone = formData.get('phone')?.toString()
        const password = formData.get('password')?.toString()

        const existingUser = await User.findOne({ phone })
        if (existingUser) {
            return { success: false, message: getRandomMessage(signupMessages.duplicate) }
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            name, phone, password: hashPassword, referralSource
        })

        return {
            success: true, message: getRandomMessage(signupMessages.success), data: {
                id: newUser._id.toString(),
                phone: newUser.phone
            }
        }
    } catch (error) {
        return {
            success: false,
            message: 'Something went wrong during signup. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}

export async function signinAction(formData) {
    try {
        await connectDB()

        const phone = formData.get('phone')?.toString();
        const password = formData.get('password')?.toString();
        const keepLogin = formData.get('keepLogin')?.toString() || false;

        const user = await User.findOne({ phone });
        if (!user) return {
            success: false,
            message: getRandomMessage(signinMessages.userNotFound),
        };

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return {
            success: false,
            message: getRandomMessage(signinMessages.invalidCredentials)
        }


        return {
            success: true,
            message: getRandomMessage(signinMessages.success),
            data: {
                id: user._id.toString(),
                phone: user.phone,
                name: user.name,
            },
        };
    } catch (error) {
        return {
            success: false,
            message: 'Something went wrong during signin. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}
