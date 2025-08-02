export const nameRegex = /^[A-Za-z]{2,}(?: [A-Za-z]{2,}){1,2}$/;
export const phoneRegex = /^[6-9]\d{9}$/;
export const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const pinCodeRegex = /^[1-9][0-9]{5}$/;
export const aadhaarRegex = /^\d{4}\s?\d{4}\s?\d{4}$/;
export const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
export const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
export const urlRegex = /^(https?:\/\/)?([\w\d-]+\.){1,}[\w]{2,}(\/.+)*\/?$/;
export const imageFileRegex = /\.(jpg|jpeg|png|gif)$/i;
export const otpRegex = /^\d{4,6}$/;

export const fieldNameToPattern = {
    name: nameRegex,
    fullName: nameRegex,
    phone: phoneRegex,
    mobile: phoneRegex,
    password: passwordRegex,
    email: emailRegex,
    pincode: pinCodeRegex,
    pinCode: pinCodeRegex,
    aadhaar: aadhaarRegex,
    pan: panRegex,
    dob: dateRegex,
    date: dateRegex,
    website: urlRegex,
    url: urlRegex,
    image: imageFileRegex,
    avatar: imageFileRegex,
    otp: otpRegex,
};

const validField = (value, pattern) => {
    if (!value || !pattern) return false;
    const regex = new RegExp(pattern);
    return regex.test(value);
};

const requiredFallbackMessages = [
    "Can’t skip this!",
    "Need this filled.",
    "Oops, empty!",
    "Required here.",
    "Don’t leave it blank.",
    "This one's a must.",
    "No ghost fields allowed.",
    "Hey, something should go here!",
    "This can’t be invisible.",
    "Missing magic—please type!",
];

const patternFallbackMessages = [
    "Format’s off.",
    "Try again?",
    "Hmm… not right.",
    "Check the format.",
    "Almost! Fix format.",
    "That’s not quite it.",
    "Syntax sorcery needed!",
    "Oopsie, wrong shape.",
    "Try a better combo!",
    "Like a lock and key—this doesn’t fit.",
];

const mismatchMessages = [
    "Not quite a match!",
    "These should be twins.",
    "Mismatch alert!",
    "Try matching both.",
    "Close, but nope.",
    "They're out of sync!",
    "Double-check that duo.",
    "Not seeing double—yet.",
    "Mismatch in the matrix.",
    "Make them mirror each other.",
];

export const signupMessages = {
    success: [
        "You’re in — welcome to PORINOI, where hearts connect.",
        "Signup complete — your journey to love begins now.",
        "All set! Let’s turn moments into meaningful matches.",
        "Welcome aboard — destiny just got your RSVP.",
        "Nice move! You’re officially part of something beautiful.",
    ],
    duplicate: [
        "Looks like you’re already part of the PORINOI story.",
        "This number’s spoken for — how about logging in?",
        "Already registered? Love might still be waiting.",
        "You’ve signed up before — maybe it's time to sign in again?",
        "Oops! You’re already on our list of hopeful hearts.",
    ],
    error: [
        "Looks like love took a timeout — try signing up again.",
        "Something went off-script — give it another go?",
        "We couldn’t seal the deal just yet — refresh and retry.",
        "A little hiccup in the love line — try once more?",
        "Tech glitch! But don’t worry, romance is patient.",
    ],
};

export const signinMessages = {
    success: [
        "Welcome back to PORINOI — love might just be a swipe away.",
        "You're in! Someone’s heart is waiting.",
        "Back again? Someone's lucky you're here.",
        "Signed in — now let’s spark something beautiful.",
        "You’re in — let’s make a real connection today.",
    ],
    invalidCredentials: [
        "Love might be blind, but your login can’t be — try again?",
        "That combo didn’t spark — double-check and retry.",
        "Hmm... those details didn’t quite woo our system.",
        "No match found — maybe your fingers slipped?",
        "We didn’t feel the chemistry — check your phone and password.",
    ],
    userNotFound: [
        "We couldn’t find your profile — maybe love starts with signing up?",
        "No match in our books — could be a typo, or fate nudging you to register.",
        "You're not in our story yet — care to create your chapter?",
        "Hmm... we searched, but didn’t find your spark — try again?",
        "Still no sign of you — want to join the love circle?",
    ],
    error: [
        "Looks like love’s on pause — try again in a moment.",
        "A tiny glitch in the romance matrix — we’re fixing it.",
        "Something went wrong — even Cupid has off days.",
        "Hold tight! We’re untangling a little tech knot.",
        "Oops! Trouble signing in — refresh and let the magic begin.",
    ],
};

export const getRandomMessage = (messages) => {
    return messages[Math.floor(Math.random() * messages.length)];
};

export const formValidationCheck = ({ formFields, formData }) => {
    const errors = {};

    formFields.forEach((field) => {
        const initialValue = formData[field.name];
        const value = initialValue?.toString().trim() || "";

        if (field.required && value === "") {
            errors[field.name] = {
                status: true,
                message: getRandomMessage(requiredFallbackMessages),
            };
            return;
        }

        if (value !== "") {
            const pattern =
                field.pattern || fieldNameToPattern[field.name.toLowerCase()];
            if (pattern && !validField(value, pattern)) {
                errors[field.name] = {
                    status: true,
                    message: getRandomMessage(patternFallbackMessages),
                };
                return;
            }
            return;
        }

        if (!errors[field.name]) {
            errors[field.name] = {
                status: false,
                message: null,
            };
        }
    });

    if (
        "password" in formData &&
        "confirmPassword" in formData &&
        formData.password.trim() !== formData.confirmPassword.trim()
    ) {
        errors.confirmPassword = {
            status: true,
            message: getRandomMessage(mismatchMessages),
        };
    }


    const isValid = Object.values(errors).every((msg) => !msg);
    return { isValid, errors };
};
