'use server'
import { connectDB } from '@/lib/db'
import User from '@/models/usersSchema';
import bcrypt from 'bcrypt';
import { getRandomMessage, signupMessages } from '@/utils/validators';

const BCRYPT_SALT = parseInt(process.env.BCRYPT_SALT, 10);

export default async function signupAction(formData) {
    try {
        await connectDB();
        const name = formData.get('name')?.toString().trim() || ''
        const phone = formData.get('phone')?.toString().trim() || ''
        const referralSource = formData.get('referralSource')?.toString()
        const password = formData.get('password')?.toString().trim() || ''
        const profileStatus = "pending";
        const userName = `@${name.split(' ')[0]}_${phone.slice(-4)}`

        const existingUser = await User.findOne({ phone })
        if (existingUser) {
            return { success: false, message: getRandomMessage(signupMessages.duplicate) }
        }

        const hashPassword = await bcrypt.hash(password, BCRYPT_SALT)
        const newUser = await User.create({
            userName, name, phone, password: hashPassword, referralSource, profileStatus,
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
            message: 'Something went wrong during signup. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}
