'use server'
import { connectDB } from '@/lib/db'
import User from '@/models/usersSchema';
import { getRandomMessage,} from '@/utils/validators';


const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export default async function forgotPasswordAction(formData) {
    try {

    } catch (error) {

    }
}