import mongoose from 'mongoose';
import { profilePage } from '@/data/siteStaticData';

const schemaFields = {};

const { profileBuilder } = profilePage;
const sections = [...profileBuilder.sections]

sections.forEach(section => {
    section.fields.forEach(field => {
        if (section.sectionTitle === "Final Note") return;

        if (field.type === "multiselect") {
            schemaFields[field.name] = {
                type: [String],
                default: [],
            };
        } else {
            schemaFields[field.name] = {
                type: String,
                trim: true,
                default: null,
            };
        }

        if (field.options) {
            schemaFields[field.name].enum = field.required
                ? field.options
                : [...field.options, null];
        }
    })
})


const userProfileSchema = new mongoose.Schema(
    {
        mappedId:{
            type: String,
            trim: true,
        },
        ...schemaFields,
        bio: {
            type: String,
            trim: true,
        },
        accountStatus: {
            type: String,
            enum: [
                "active",
                "suspended",
                "premium",
                "free",
                "verified",
                "inactive",
                "deleted",
                "pendingApproval"
            ],
            default: "active"
        },
    },
    { timestamps: true }
);

delete mongoose.connection.models['UsersProfile'];

const UsersProfile = mongoose.models.UsersProfile || mongoose.model('UsersProfile', userProfileSchema);
export default UsersProfile;