import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
    {
        phone: { type: String, required: true },
        otp: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, expires: 3600}, //1hr
    },
    { timestamps: true }
);

const UserOTP = mongoose.models.UserOTP || mongoose.model("UserOTP", otpSchema);
export default UserOTP;
