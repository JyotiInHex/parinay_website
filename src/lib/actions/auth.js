'use server'
import { connectDB } from '@/lib/db'
import User from '@/models/users';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers'
import { getRandomMessage, signinMessages, signupMessages } from '@/utils/validators';


const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const BCRYPT_SALT = parseInt(process.env.BCRYPT_SALT, 10);

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

        const hashPassword = await bcrypt.hash(password, BCRYPT_SALT)
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
        console.log(error)
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Something went wrong during signup. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}

export async function signinAction(formData) {
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

        const token = await new SignJWT({ id: user._id.toString() })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime(keepLogin ? '30d' : '1d')
            .setIssuedAt()
            .sign(JWT_SECRET);

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
        return {
            success: false,
            message: 'Something went wrong during signin. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}

export async function forgotPasswordAction(formData) {
    try {

    } catch (error) {

    }
}