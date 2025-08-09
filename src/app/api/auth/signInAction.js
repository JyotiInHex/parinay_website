'use server'
import { connectDB } from '@/lib/db'
import User from '@/models/usersSchema';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers'
import { getRandomMessage, signinMessages } from '@/utils/validators';
import { createJWT } from '@/lib/auth/JWT';

export default async function signinAction(formData) {
    try {
        await connectDB()

        const phone = formData.get('phone')?.toString();
        const password = formData.get('password')?.toString();
        const keepLogin = formData.get('keepLogin') || false;

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

        const token = await createJWT({ id: user._id.toString() }, keepLogin);

        (await cookies()).set('auth_token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: keepLogin ? 60 * 60 * 24 * 30 : 60 * 60 * 24,
            path: "/"
        })

        return {
            success: true,
            message: getRandomMessage(signinMessages.success),
            redirection: `/profile/${user._id.toString()}`
        };
    } catch (error) {
        console.log(error.message)
        return {
            success: false,
            message: 'Something went wrong during signin. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}