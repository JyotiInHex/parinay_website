'use server';

export async function contactFormSubmit(data) {
    const entries = Object.fromEntries(data.entries())
    console.log(entries)

    return { success: true, massage: "from submitted" }
}