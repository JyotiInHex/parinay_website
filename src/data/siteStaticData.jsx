import Mail from "../../public/assets/svg/mail";
import MapPin from "../../public/assets/svg/map-pin";
import { Instagram, WhatsApp } from "../../public/assets/svg/socialMedia";
import {
  StartFour,
  StartOne,
  StartThree,
  StartTwo,
} from "../../public/assets/svg/stars";

const year = new Date().getFullYear();

export const landingPage = {
  hero: {
    title: "When tradition dances with destiny, love takes form",
    subtitle: "Porinoi Unites Hearts.",
    description: "Begin a bond built on",
    buttonValue: "Join Now",
  },

  about: {
    title: "Short Story About Us",
    description:
      "Porinoi.com is more than just a matrimony platform. It is a heartfelt initiative born in Assam to connect Assamese individuals seeking life partners with shared values, backgrounds, and aspirations. Whether you are in Guwahati or across the globe, Porinoi helps you find someone who feels like home. Our mission is to preserve the elegance of Assamese tradition while embracing modern technology to ensure a secure, private, and personalized matchmaking experience.",
    points: ["Secure and Private", "Personalized Matches", "Global Reach"],
    buttonValue: "Learn More",
  },

  whyStandOut: {
    title: "Why Porinoi Stands Out?",
    cards: [
      {
        title: "Cultural Alignment",
        description:
          "Celebrate Assamese heritage with filters for community. language, district, and values.",
      },
      {
        title: "Verified Profiles",
        description:
          "Every user is thoroughly verified to ensure authenticity and safety",
      },
      {
        title: "Family-Centric",
        description:
          "Designed for both individuals and families to participate in the matchmaking journey.",
      },
      {
        title: "Seamless Experience",
        description:
          "Optimized for mobile and desktop with intuitive, user-friendly design.",
      },
    ],
    image: "/assets/img/couple_2.jpeg",
  },

  stepsSection: {
    title: "Find Your Perfect Match in 3 Simple Steps",
    description:
      "At Porinoi, we believe in making the matchmaking process as simple and effective as possible. Our three-step approach ensures that you find your ideal partner with ease and confidence.",
    steps: [
      {
        title: "Create Profile",
        description: "Share your basic information and preferences.",
        image: "/assets/img/Create Profile.jpeg",
        button: {
          text: "Start Creating",
          path: "/register",
        },
        color: "oklch(75% 0.183 55.934)",
      },
      {
        title: "Explore Matches",
        description:
          "Browse through personalized matches based on your criteria and interests.",
        image: "/assets/img/Explore Matches.jpeg",
        color: "oklch(59.2% 0.249 0.584)",
      },
      {
        title: "Communicate",
        description:
          "Initiate conversations with potential matches and get to know them better.",
        image: "/assets/img/Connect.jpeg",
        color: "oklch(70.7% 0.165 254.624)",
      },
    ],
  },

  contactSection: {
    title: "Curious about Porinoi? Let’s start a conversation.",
    subtitle: "We're building something meaningful — and your thoughts matter.",
    description:
      "Have a question, feedback, or just want to say hello? We'd love to hear from you. Whether you're searching for your soulmate or exploring partnership opportunities — we're just a message away.",

    contactDetails: [
      {
        icon: <Mail />,
        label: "Chat to us",
        subLabel: "Our friendly team is here to help.",
        address: "support@porinoi.com",
      },
      {
        icon: <MapPin />,
        label: "Visit us",
        subLabel: "Come say hello at our Office HQ.",
        address: "Guwahati, Assam, India - 781001",
      },
    ],

    socialLinks: [
      {
        handleName: "@parinayassam",
        icon: <Instagram width={25} height={25} />,
        url: "https://www.instagram.com/parinayassam",
        backgroundColor:
          "linear-gradient(136deg,rgba(249, 206, 52, 1) 0%, rgba(238, 42, 123, 1) 40%, rgba(98, 40, 215, 1) 89%)",
      },
      {
        handleName: "@parinayCommunity",
        icon: <WhatsApp width={25} height={25} />,
        url: "https://www.whatsApp.com/porinoi",
        backgroundColor:
          "linear-gradient(44deg,rgba(7, 94, 84, 1) 0%, rgba(37, 211, 102, 1) 28%)",
      },
    ],

    formDetails: {
      // formTitle: "",
      // formDescription: "",
      formFields: [
        {
          label: "Your name",
          type: "text",
          placeholder: "Eg: Rupam Das",
          name: "name",
          required: true,
        },
        {
          label: "Your email",
          type: "email",
          placeholder: "Eg: rupam@email.com",
          name: "email",
          required: true,
        },
        {
          label: "How can we help you?",
          type: "checkbox-group",
          name: "helpOptions",
          options: [
            "I want to know more about Porinoi.",
            "I'm curious — just exploring love online.",
            "I'm hoping to find my future match here.",
            "I’d love to invite someone I care about.",
            "I believe in meaningful, slow connections.",
            "I’m not ready yet, but Porinoi feels right.",
            "I’m cheering you on — love this idea!.",
            "I’d like early access before the app launches.",
            "I’m dreaming of something real and rooted.",
          ],
        },
        {
          label: "Share your thoughts with Porinoi",
          type: "textarea",
          placeholder:
            "Share your thoughts, questions, or anything you'd like us to know…",
          name: "message",
          required: true,
        },
        {
          label: "I’d love to join the early bird waitlist for Porinoi",
          type: "checkbox",
          name: "earlyAccess",
        },
        {
          label: "Phone number",
          type: "tel",
          placeholder: "Required for early invite access",
          name: "phone",
          prefix: "+91",
          pattern: "^[6-9]\\d{9}$",
          required: true,
          requiredIf: "earlyAccess",
        },
      ],
      submitButton: {
        text: "Count Me In",
      },
    },
  },

  footer: {
    logo: "assets/svg/logo_main.svg",
    description:
      "Porinoi is dedicated to connecting Assamese individuals with shared values and backgrounds. Join us in celebrating love, tradition, and community.",
    links: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Contact Us", path: "/contact" },
      { name: "About Us", path: "/about" },
      { name: "FAQ", path: "/faq" },
    ],
    copyright: `© ${year} Porinoi. All rights reserved.`,
    endParagraph: "Made with love in Assam, India.",
  },
};

export const authenticationPages = {
  signUpPage: {
    title: "Start your journey",
    subTitle: "of companionship, commitment, and community values.",
    button: {
      label: "Already a member?",
      path: "/signIn",
      name: "Login Instead",
    },
    formDetails: {
      formTitle: "Join Parinay Today",
      formFields: [
        {
          label: "Your Full Name",
          type: "text",
          placeholder: "Eg: Rupam Das",
          name: "fullName",
          required: true,
        },
        {
          label: "Mobile Number",
          type: "tel",
          placeholder: "Enter 10-digit mobile number",
          prefix: "+91",
          name: "phone",
          pattern: "^[6-9]\\d{9}$",
          required: true,
        },
        {
          label: "Set a password",
          type: "password",
          placeholder: "Try something like MyPass@123",
          name: "password",
          minLength: 8,
          pattern:
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$",
          required: true,
        },
      ],
      submitButton: {
        text: "Create an Account",
      },
      formLowerPart: {
        text: "By signing up you agree to our",
        links: [
          {
            label: "Terms Of Use",
            path: "/terms",
          },
          {
            label: "Privacy Policy",
            path: "/privacy-policy",
          },
        ],
      },
    },
  },

  signInPage: {
    title: "Sign in and continue your journey",
    subTitle:
      "toward meaningful connections rooted in trust, culture, and compatibility.",
    button: {
      label: "New here?",
      path: "/signUp",
      name: "Register Now!",
    },
    formDetails: {
      formTitle: "Welcome to Parinay",
      formDescription:
        "Enter your Register mobile number and we will send you a OTP for login",
      formFields: [
        {
          label: "Mobile Number",
          type: "tel",
          placeholder: "Enter Porinoi verified mobile number",
          prefix: "+91",
          name: "phone",
          pattern: "^[6-9]\\d{9}$",
          required: true,
        },
      ],
      submitButton: {
        text: "Generate OTP",
      },
      formLowerPart: {
        text: "Need Help in Login?",
        links: [
          {
            label: "Help Center",
            path: "/help-center",
          },
        ],
      },
    },
  },

  additionalInfo:
    "All profiles go through strict Verification. We never share your data. Your safety is our first priority.",

  highlights: [
    {
      name: "Trusted Connection",
      icon: <StartOne className={"text-white"} width={25} />,
    },
    {
      name: "Verified with Love",
      icon: <StartTwo className={"text-white"} width={25} />,
    },
    {
      name: "Rooted in Culture",
      icon: <StartThree className={"text-white"} width={25} />,
    },
    {
      name: "New Age Platform",
      icon: <StartFour className={"text-white"} width={25} />,
    },
  ],

  footer: {
    copyright: "© 2025 Parinay. All rights reserved.",
    note: "A platform by dreamers, for soulmates.",
    links: [
      {
        label: "Terms Of Use",
        path: "/terms",
      },
      {
        label: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        label: "FAQ",
        path: "/faq",
      },
    ],
  },
};
