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
            required: true,
            trim: true,
        },
        referralSource: {
            type: String,
            required: true,
            trim: true,
        },
        helpOptions: {
            type: String,
            required: true,
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
            trim: true,
        },
    },
    { timestamps: true }
);

delete mongoose.connection.models['ContactUs'];

const ContactUs = mongoose.models.ContactUs || mongoose.model("ContactUs", contactUsSchema);
export default ContactUs;
