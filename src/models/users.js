import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
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
    },
    { timestamps: true }
);

const User = mongoose.models.Users || mongoose.model('Users', userSchema);
export default User;
