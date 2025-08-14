export default async function resetPassWordAction(formData) {
    const phone = formData.get("phone")?.toString();
    try {
        await connectDB();

        
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong. Please try again.",
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}