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
        "Parinay - Matrimony",
        "Destiny weaves the bond. Parinay brings it closer",
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
    title: "About Parinay",
    subtitle: "Because Love is More Than Just Matching",
    intro: `At Parinay, we believe that love isn’t just about finding the one — it’s about growing with them. Rooted in the soul of Assam, we’re more than a matrimony platform — we are a celebration of connection, culture, and companionship.`,
    highlight: `We don’t just match profiles; we nurture partnerships that thrive on trust, tenderness, and timeless tradition.`,
    image: "/assets/img/about_bg.jpeg",
  },

  sections: [
    {
      id: "mission",
      title: "Our Mission",
      content: `To build a relationship that thrives on communication, emotional honesty, mutual respect, and unwavering support in every chapter of life. Whether it’s laughter under the spring sun or silent strength in the storm — Parinay is here to hold space for love in all its seasons.`,
    },
    {
      id: "vision",
      title: "Our Vision",
      content: `To become the eternal melody of two souls — dancing through storms, shining through sunsets, and walking hand in hand across lifetimes. A sacred bond where love is not just a feeling, but a home — built with trust, poetry, passion, and silent understanding.`,
    },
    {
      id: "story",
      title: "Our Story",
      content: `Born in the heart of Assam, Parinay was envisioned to bridge the wisdom of tradition with the openness of today’s love. We saw the gap between digital matchmaking and meaningful connection — and we filled it with culture, compassion, and clarity. Every couple has a story. We’re here to help them write it — beautifully, authentically, together.`,
    },
    {
      id: "offerings",
      title: "What We Offer",
      content: [
        "Assamese-rooted Matchmaking: Matches aligned with your values, dreams, and cultural nuances.",
        "Real Love Stories & Tips: Curated blog posts, traditions, advice, and guest writer pieces.",
        "Safe & Honest Space: Verified profiles. Respectful intentions. True conversations.",
        "Community & Expression: Be it couples, writers, or readers — all hearts are welcome.",
      ],
    },
    {
      id: "callToAction",
      title: "Join the Parinay Journey",
      content: `Come for love. Stay for meaning. Whether you're ready for marriage or just soaking in soulful stories — this is your home. Let’s return to a time when love was poetry, marriage was harmony, and connection was sacred.`,
      quote: `“Parinay — because finding a partner should feel like coming home.”`,
    },
  ],
};
