import Mail from "../../public/assets/svg/mail";
import MapPin from "../../public/assets/svg/map-pin";
import Star from "../../public/assets/svg/star";
import { Instagram, WhatsApp } from "../../public/assets/svg/socialMedia";
import {
  StartFour,
  StartOne,
  StartThree,
  StartTwo,
} from "../../public/assets/svg/stars";
import Heart2 from "../../public/assets/svg/heart-2";

const year = new Date().getFullYear();

export const navigationSection = {
  logoText: {
    default: "PORINOI",
    menu: "Love Meets Legacy",
  },
  menu: {
    label: "Menu",
    closeLabel: "Close",
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Sign In", path: "/signIn" },
    ],
    cta: {
      label: "Begin a Meaningful Bond",
      path: "/signUp",
    },
    footer: {
      tagline: "Tomorrow’s Bonds, Today.",
      social: [
        {
          label: "Instagram",
          url: "https://www.instagram.com/porinoi_assam?igsh=N3I3d2libDZpcXpj",
        },
        {
          label: "Facebook",
          url: "https://facebook.com/porinoi_assam/",
        },
        {
          label: "Threads",
          url: "https://www.threads.net/@porinoi_assam",
        },
      ],
    },
  },
};

export const footerSection = {
  introText: "Built with love in Assam.",
  note: "Find your story. Write your future. A new chapter of connection begins here.",
  callToAction: {
    label: "Join the Journey",
    path: "/signUp",
  },

  contact: {
    email: {
      label: "hello@porinoi.com ➚",
      path: "mailto:hello@porinoi.com",
    },
    location: "Based in Assam, rooted in culture.",
  },

  quickLinks: {
    discover: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
    connect: [
      { label: "Help Center", path: "/help" },
      { label: "Privacy Policy", path: "/legal/privacy" },
      { label: "Terms of Service", path: "/legal/terms" },
    ],
  },

  office: {
    title: "Porinoi Office",
    lines: ["Guwahati, Assam, India - 781001"],
  },

  social: [
    {
      label: "Instagram",
      url: "https://www.instagram.com/porinoi_assam",
    },
    {
      label: "Facebook",
      url: "https://facebook.com/porinoi_assam/",
    },
    {
      label: "Threads",
      url: "https://www.threads.net/@porinoi_assam",
    },
  ],

  credits: {
    copyright: "©2025 Porinoi",
    tagline: "A platform by dreamers, for soulmates.",
  },

  logoText: {
    logo: "PORINOI",
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
      formTitle: "Join Porinoi Today",
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
      formTitle: "Welcome to Porinoi",
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
    copyright: "© 2025 Porinoi. All rights reserved.",
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

export const landingPage = {
  hero: {
    title: "LOVE. WITH. MEANING.",
    subtitle:
      "Find your life partner with trust, dignity, and Assamese values.",
    description: "Porinoi blends tradition with modern love — mindfully.",
    buttonValue: "Join Now",
    image: {
      src: "/assets/img/hero-couple.jpeg",
      alt: "happy_couple_smiling",
    },
    scroller: {
      messages: [
        "Porinoi - Matrimony",
        "Destiny weaves the bond. Porinoi brings it closer",
      ],
      icon: <Star />,
      loop: true,
      speed: "medium",
    },
  },

  about: {
    title: "We are Porinoi,",
    description: {
      left: "A MATRIMONIAL PLATFORM CRAFTED TO UNITE ASSAMESE HEARTS WITH HONOR & HERITAGE.",
      right:
        "Porinoi blends the soul of Assamese tradition with a thoughtful digital experience, made for those seeking lasting bonds. Rooted in values of trust, cultural respect, and shared dreams, we go beyond algorithms - bringing heart, heritage, and humanity into every match. <br/> — Born in Assam, designed for the world - we're here to redefine meaningful matchmaking.",
    },
    points: [
      "End-to-End Privacy & Security",
      "Matches Tailored to You",
      "From Assam to Anywhere Hearts Belong",
    ],
    button: {
      text: "Learn More",
      path: "/about",
    },
  },

  whyStandOut: {
    title: "Why Porinoi Stands Out?",
    cards: [
      {
        title: "Cultural Alignment",
        description:
          "Celebrate Assamese heritage with filters for community. language, district, and values.",
        image: "/assets/img/cultural_alignment.jpeg",
      },
      {
        title: "Verified Profiles",
        description:
          "Every user is thoroughly verified to ensure authenticity and safety",
        image: "/assets/img/verified_profiles.jpeg",
      },
      {
        title: "Rooted in Relationships",
        description:
          "Built for genuine connections that involve and respect the role of family and culture.",
        image: "/assets/img/rooted_in_relationships.jpeg",
      },
      {
        title: "Seamless Experience",
        description:
          "Optimized for mobile and desktop with intuitive, user-friendly design.",
        image: "/assets/img/seamless_experience.jpeg",
      },
    ],
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
        color: "oklch(70.7% 0.165 254.624)",
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
        color: "oklch(75% 0.183 55.934)",
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
        handleName: "@porinoi_assam",
        icon: <Instagram width={25} height={25} />,
        url: "https://www.instagram.com/porinoi_assam?igsh=N3I3d2libDZpcXpj",
        backgroundColor:
          "linear-gradient(136deg,rgba(249, 206, 52, 1) 0%, rgba(238, 42, 123, 1) 40%, rgba(98, 40, 215, 1) 89%)",
      },
      {
        handleName: "@porinoi_community",
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
      { name: "FAQ", path: "/faq" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
    ],
    copyright: `© ${year} Porinoi. All rights reserved.`,
    endParagraph: "Made with love in Assam, India.",
  },
};

export const aboutPage = {
  hero: {
    title: "At Porinoi, we believe love isn’t found — it’s nurtured.",
    subtitle:
      "Porinoi is more than just a matrimony platform — it’s a movement. Born in Assam, we blend cultural depth with conscious matchmaking to help you build a partnership that’s emotionally rich, spiritually aligned, and beautifully real.",
  },

  principles: {
    intro:
      "At Porinoi, we follow values that honor emotion, tradition, and intention.",
    image: "/assets/img/principles-bg.png",
    points: [
      "Prioritize emotional authenticity over appearances.",
      "Create matches rooted in meaning, not algorithms.",
      "Let Assamese culture inspire soulful connection.",
    ],
    note: "These are more than principles — they are the pulse of every union we nurture. Through honesty, cultural depth, and mindful guidance, we shape love that grows beyond introductions into a life of togetherness.",
  },

  highlights: {
    sectionTitle: "Porinoi in Purpose, Vision, and Heart.",
    caption: "Where modern hearts meet ancient soulfulness.",
    image: "/assets/img/highlights-bg.png",
    items: [
      {
        title: "Our Vision",
        content:
          "To be every couple’s trusted companion — where tradition meets modern love, and every bond is formed with purpose, patience, and reverence.",
      },
      {
        title: "Our Story",
        content:
          "Born in Assam, Porinoi was created to bridge tradition and today’s dating world. We saw the gap between swipes and sincerity — so we built a space for real, culturally-grounded love.",
      },
      {
        title: "Our Mission",
        content:
          "We nurture meaningful relationships built on honesty, deep communication, and mutual respect. Porinoi is a space where love flows through every season — rooted in Assamese values, yet open to the modern soul.",
      },
    ],
  },

  whyChooseUs: {
    title: "Love, Rooted in Culture and Care . . .",
    description:
      "Love isn't found in swipes or stats — it's discovered through depth, understanding, and a spark that feels like home. At Porinoi, we don’t just match profiles; we unite souls on journeys meant to intertwine.",
    points: [
      {
        title: "Tailored Matchmaking, Just for You.",
        content:
          "You’re not a checkbox — you're a story worth telling. We take the time to listen, to truly see you, and align you with partners who reflect your values, spirit, and the love you seek.",
      },
      {
        title: "Rooted in Culture, Built for Connection.",
        content:
          "Shared traditions. Common values. A rhythm of life that flows in sync. We look beyond the surface to honor cultural harmony — where love feels both new and familiar.",
      },
      {
        title: "Guided With Care, Every Step.",
        content:
          "From first connection to forever after, our team walks with you — offering insight, empathy, and unwavering support. Because finding love should feel like being seen, not sorted.",
      },
    ],
  },

  ctaSection: {
    tag: "Tradition & Love",
    heading: "Return to Love That Feels Like Home.",
    subtext:
      "Real connection that goes beyond the surface. Cultural depth rooted in tradition. Stories worth remembering — and cherishing for a lifetime.",
    features: [
      {
        icon: <Star width={18} />,
        text: "Authentic cultural roots preserved through technology.",
      },
      {
        icon: <Heart2 width={18} />,
        text: "Matches that feel personal, respectful, and meant to be.",
      },
    ],
    btn: {
      cta: "Begin a Meaningful Bond",
      link: "/signUp",
    },
  },
};
