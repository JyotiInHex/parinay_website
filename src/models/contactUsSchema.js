import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        profession: {
            type: String,
            trim: true,
        },
        referralSource: {
            type: String,
            trim: true,
        },
        helpOptions: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

const ContactUs = mongoose.models.ContactUs || mongoose.model("ContactUs", contactUsSchema);
export default ContactUs;
