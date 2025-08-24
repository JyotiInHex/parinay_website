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

export const resetPasswordMessages = {
    success: [
        "Password reset successful — welcome back to a secure account.",
        "Your new password is set — now you’re ready to sign in.",
        "All locked in — your fresh password is ready to go.",
        "Reset complete — your account is safe again.",
        "You’re good to go — a secure fresh start awaits.",
    ],
    error: [
        "Something went wrong while resetting — please try again.",
        "We hit a small snag — give it another go.",
        "Reset failed — even secure systems have off days.",
        "A glitch interrupted your reset — try again in a moment.",
        "Reset attempt unsuccessful — let’s try that again.",
    ],
};

export const guardMessages = {
    302: [
        "You're already home — no need to knock twice.",
        "Redirected. The heart remembers the way.",
        "Already logged in — destiny doesn’t ask twice.",
        "Why knock again? You're inside already.",
        "Turned the page, but you’re on the same chapter.",
    ],

    400: [
        "Mixed signals — try again.",
        "That request was a bit messy.",
        "Not quite what we expected.",
        "Glitched heartbeat — your form forgot how to love.",
        "Oops! Your message was lost in translation.",
    ],

    401: [
        "Who goes there? Log in first.",
        "Access needs a heartbeat — yours.",
        "Love’s locked. You're not signed in.",
        "The stars don’t align — sign in to find your fate.",
        "A stranger at the door — kindly log in.",
    ],

    403: [
        "That door’s not yours to open.",
        "No access — love has rules.",
        "Forbidden. Even Cupid has boundaries.",
        "You knocked, but fate said no.",
        "The garden's locked — some stories aren’t yours to read.",
    ],

    404: [
        "A ghost page — nothing lives here.",
        "Lost in the ether — no path ahead.",
        "What you seek doesn’t exist anymore.",
        "Not all who wander find something.",
        "This chapter was never written.",
    ],
};

export const contactUsMessages = [
    "Your words just found their way into our day.",
    "Message received — and already making us smile.",
    "We’ve got your note, and it’s in good hands now.",
    "Your message landed softly in our inbox.",
    "The connection is made — thank you for reaching out.",
    "We heard you — and we’re so glad you spoke up.",
    "Your words are now part of our story.",
    "Delivered beautifully — we’ll reply with care.",
    "Your message arrived safe and sound.",
    "We’ve caught your note and tucked it somewhere safe.",
    "Thank you for trusting us with your words.",
    "Your thoughts are with us now — and we’re listening.",
    "All set — your message has a warm welcome here.",
    "Consider your note officially part of our world.",
    "Your voice just joined the Porinoi conversation.",
    "Your note just made our inbox a happier place.",
    "Message received — and already cared for.",
    "We’ve welcomed your words like an old friend.",
    "Your message has taken its first step toward us.",
    "We’re holding your words close until we reply.",
    "Your note arrived — and it brought a little sunshine with it.",
    "The bridge between us just got a little stronger.",
    "We’ve received your thoughts and are already thinking back.",
    "Your message has found a warm place to stay.",
    "We’re keeping your note safe while we craft our reply.",
];

export const otpMessages = {
    sent: [
        "Your OTP has been sent to +91-{userPhone} — someone’s heart is waiting for you!",
        "OTP delivered to +91-{userPhone}! Enter it to continue your journey on Porinoi.",
        "Check your phone +91-{userPhone} — your magic code is waiting.",
        "Your OTP is on the way to +91-{userPhone}! Love could be one step ahead.",
        "Code sent to +91-{userPhone}! Time to verify and unlock your Porinoi adventure.",
    ],
    resent: [
        "A fresh OTP has been sent to +91-{userPhone} — let’s keep the magic alive!",
        "We’ve sent you a new OTP at +91-{userPhone} — try again and make it count.",
        "Your updated OTP is on its way to +91-{userPhone} — the journey continues.",
        "Another code is headed to +91-{userPhone} — time to give it another shot.",
        "New OTP sent to +91-{userPhone} — your Porinoi story isn’t over yet."
    ],
    error: [
        "Oops! Something went wrong — even Cupid has off days.",
        "We hit a snag — try sending the OTP again.",
        "Looks like tech Cupid needs a moment — retry soon.",
        "A tiny glitch — don’t worry, your OTP is on the way soon.",
        "Trouble sending OTP — refresh and let the magic continue.",
    ],
    verified: [
        "OTP verified! You’re officially in — let the connections begin.",
        "Code accepted! Time to meet your potential match.",
        "Verified successfully! Cupid’s arrow is ready for launch.",
        "All set! Your phone is confirmed, now explore Porinoi.",
        "Success! Let’s spark some connections today.",
    ],
    invalidOTP: [
        "Hmm… that code didn’t match — try again?",
        "Oops! Wrong OTP — maybe love is testing you.",
        "Not quite right — double-check your digits.",
        "The magic code didn’t work — try re-entering it.",
        "No match! Your OTP seems off, give it another shot.",
        "That OTP doesn’t match — give it another try.",
        "Hmm… that code’s not quite right. Check and try again.",
        "Looks like the OTP is off — re-enter it carefully.",
        "That code isn’t a match — maybe try copying it again.",
        "Oops! Wrong OTP — double-check and try once more."
    ],
    expiredOTP: [
        "Time’s up! Your OTP expired — request a new one.",
        "Oops! This code has gone cold — generate a fresh OTP.",
        "The OTP has vanished like a fleeting spark — try again.",
        "Your OTP expired — don’t worry, love waits for no one!",
        "Expired! Request a new OTP and let’s continue.",
    ],
    limitReach: [
        "Whoa! You’ve requested too many OTPs — take a short break before trying again.",
        "Hold on! Your OTP limit for this hour has been reached. Cupid needs a pause too.",
        "Too many requests! Give it a moment and try again in a little while.",
        "Easy there! You’ve hit your OTP limit — wait a bit before sending another.",
        "Looks like love is waiting… You’ve reached the OTP limit. Try again after some time.",
    ],
    phoneMsgBody: [
        "Hey! Your Porinoi OTP is {otp}. Enter it within 5 minutes to confirm your number.",
        "Hey! Use OTP {otp} in Porinoi to confirm your phone. Valid for 5 minutes.",
        "Your Porinoi verification code is {otp}. It expires in 5 minutes, so hurry!",
        "Use {otp} as your OTP in Porinoi to verify your account. Valid for 5 minutes.",
        "Porinoi OTP: {otp}. Enter it in the app now — it’s valid for 5 minutes.",
    ],
    userNotFound: [
        "We couldn’t find an account for that phone — maybe sign up first?",
        "No match found — check your details or start your love story fresh.",
        "That phone isn’t in our records — perhaps it’s destiny nudging you to join.",
        "No account found — are you sure you’ve been here before?",
        "We searched our love ledger — no results for that phone.",
    ],
};

export const textMessagesSet = {
    welcome: [
        "Welcome to Porinoi, {username}! 💐 Your journey to finding a meaningful connection begins here. 🌸 With warmth, Team Porinoi",
        "Hi {username}, we’re so glad you joined Porinoi! 💛 Let’s take the first step towards your perfect match. ✨ Yours in togetherness, Porinoi Family",
        "Namaskar {username}, Porinoi family welcomes you! 🌸 Love, trust, and tradition await you. 💐 Forever bonds, Porinoi Family",
        "Welcome aboard, {username}! 🚀 Your profile is now part of Assam’s trusted matrimony community. 🌟 Always with you, Porinoi Team",
        "Hi {username}, thank you for choosing Porinoi! ✨ A new chapter of possibilities starts today. 💖 Heartfelt wishes, Porinoi Family",
        "We’re excited to have you, {username}! 💍 Start exploring and connect with genuine Assamese singles. 🌼 In trust and tradition, Porinoi",
        "A warm welcome, {username}! 🌼 Your meaningful match could be just around the corner. 🌺 With love and care, Porinoi",
        "{username}, your Porinoi journey begins now. 💖 Tradition and togetherness in one place. 🚀 Towards forever, Porinoi",
        "Hello {username}, you’re officially part of Porinoi! 🎉 Begin your search with confidence. 🌸 With warmth, Team Porinoi",
        "Welcome to Porinoi, {username}! 🌺 Love, culture, and companionship — all in one place. 💍 Together we grow, Porinoi",
    ],

    referral: [
        "I found Porinoi and thought of you, {username}. 💌 A safe and cultural space for Assamese matrimony. Join here: {link}",
        "Namaskar! 🌸 I’m on Porinoi, a modern Assamese matrimony platform. Come and explore with me: {link}",
        "{username}, I invite you to Porinoi 💛 where love meets tradition. Begin your story today: {link}",
        "Your perfect match could be waiting on Porinoi! ✨ I’m already here, {username}. Don’t miss out: {link}",
        "Discover meaningful connections on Porinoi 🌺. Join me today: {link}",
        "Let’s celebrate Assamese culture together, {username}. 🌼 Find your life partner on Porinoi: {link}",
        "Porinoi is more than an app, it’s a community of trust. 💛 Join us today, {username}: {link}",
    ],

    subscription: [
        "Hi {username}, your premium plan is the key to meaningful connections! 💍 Renew today to continue your journey. 🌸 With warmth, Team Porinoi",
        "{username}, love shouldn’t wait. ✨ Upgrade or renew your plan and unlock exclusive features! 💖 Heartfelt wishes, Porinoi Family",
        "A gentle reminder, {username} 🌼 — your subscription is expiring soon. Stay connected to discover your true match. 🚀 Towards forever, Porinoi",
        "Namaskar {username}, don’t miss out! 💛 Keep your profile active with premium benefits today. 🌺 With love and care, Porinoi",
        "Your journey matters, {username}. 💐 Renew now and enjoy uninterrupted access to trusted Assamese matches. 🌟 Always with you, Porinoi Team",
    ],

    engagement: [
        "Hey {username}, have you checked your matches today? 💞 Someone special might be waiting! 🌼 In trust and tradition, Porinoi",
        "Good morning {username}! 🌸 Start your day by exploring new connections on Porinoi. 💍 Together we grow, Porinoi",
        "Hi {username}, don’t let your perfect match slip away! ✨ Open Porinoi and connect now. 💐 Forever bonds, Porinoi Family",
        "{username}, meaningful conversations start with a hello. 🌺 Log in today and take the first step! 💖 Heartfelt wishes, Porinoi Family",
        "Namaskar {username}! 🚀 New profiles are waiting for you. Discover love, trust, and culture at Porinoi. 🌟 Always with you, Porinoi Team",
    ],

};

export const profileMessages = {
    success: {
        update: [
            "Your profile has been updated successfully.",
            "Changes saved — your profile looks even better now.",
            "Profile updated — everything is up to date.",
            "Edits applied — your profile just got a refresh.",
            "Update complete — your story keeps getting better.",
        ],
        complete: [
            "Profile completed — you’re all set to shine.",
            "Great! Your profile is now complete.",
            "Profile setup finished — you’re ready to connect.",
            "All details saved — your profile is complete.",
            "Done! Your profile is now ready for discovery.",
        ],
    },

    notFound: {
        update: [
            "We couldn’t update anything because your profile isn’t set up yet.",
            "No profile found to edit — create one first.",
            "Hmm... your details aren’t in our records, so there’s nothing to update.",
            "Profile missing — to edit, you’ll need to create it first.",
            "Still no profile detected — updates can’t be applied.",
        ],
        complete: [
            "We couldn’t find your profile — maybe it hasn’t been created yet?",
            "Your profile doesn’t exist yet — complete it to continue.",
            "No profile found — looks like you’ll need to start fresh.",
            "Hmm... we searched, but your profile isn’t in our records.",
            "Ready to begin? Create your profile to get started.",
        ],
        generic: [
            "We couldn’t locate your profile at the moment.",
            "Profile not found — double-check and try again.",
            "Something’s missing... your profile doesn’t seem to exist.",
        ],
    },

    error: {
        update: [
            "Something went wrong while updating your profile.",
            "We hit a snag — couldn’t save your changes.",
            "Update failed — please try again shortly.",
            "Oops! Profile update didn’t go through.",
            "An error occurred — your edits weren’t saved.",
        ],
        complete: [
            "Something went wrong while completing your profile.",
            "We couldn’t finish saving your profile — try again.",
            "Completion failed — please retry.",
            "Oops! Your profile couldn’t be completed just now.",
            "Error saving profile — give it another go.",
        ],
        generic: [
            "Looks like something went wrong — please try again.",
            "We ran into an issue — hold tight and retry.",
            "Oops! A technical error occurred.",
            "An unexpected error stopped the process.",
            "Something’s off — let’s give it another shot.",
        ],
    },
};

export const getRandomMessage = (messages) => {
    return messages[Math.floor(Math.random() * messages.length)];
};

export const formValidationCheck = ({ formFields = [], formData }) => {
    const errors = {};

    formFields.forEach((field) => {
        const initialValue = formData[field.name];
        const value = initialValue?.toString().trim() || "";

        let isRequired = field.required;
        if (field.conditional) {
            const targetValue = formData[field.conditional.field];
            if (targetValue === field.conditional.value) isRequired = true;
            else isRequired = false;
        }

        if (field.type === "checkbox" && isRequired) {
            if (formData[field.name] !== true) {
                errors[field.name] = {
                    status: true,
                    message: "This checkbox is required.",
                };
                return;
            }
        }

        if (isRequired && value === "" && !field.defaultOpt) {
            errors[field.name] = {
                status: true,
                message: getRandomMessage(requiredFallbackMessages),
            };
            return;
        }

        if (field.name.toLowerCase() === "dob" && value !== "") {
            const dob = new Date(value);
            const today = new Date();
            const cutoffDate = new Date("2025-01-01");

            if (dob >= cutoffDate) {
                errors[field.name] = {
                    status: true,
                    message: "Enter DOB before 01/01/2025.",
                };
                return;
            }

            const age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();
            const isUnder18 =
                age < 18 ||
                (age === 18 && m < 0) ||
                (age === 18 && m === 0 && today.getDate() < dob.getDate());

            if (isUnder18) {
                errors[field.name] = {
                    status: true,
                    message: "You must be 18 or older.",
                };
                return;
            }
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

    const isValid = Object.values(errors).every((err) => !err.status);
    return { isValid, errors };
};
