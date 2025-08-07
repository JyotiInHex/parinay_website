import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        referralSource: {
            type: String,
            default: null,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileStatus: {
            type: String,
            default: 'pending',
            trim: true,
        }
    },
    { timestamps: true }
);

const User = mongoose.models.Users || mongoose.model('Users', userSchema);
export default User;