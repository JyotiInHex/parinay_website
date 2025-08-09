import Mail from "../../public/assets/svg/mail";
import MapPin from "../../public/assets/svg/map-pin";
import Star from "../../public/assets/svg/star";
import Heart2 from "../../public/assets/svg/heart-2";
import Arrow from "../../public/assets/svg/arrow";
import Arrow45deg from "../../public/assets/svg/arrow45deg";

import signinAction from "@/app/api/auth/signInAction";
import signupAction from "@/app/api/auth/signUpAction";
import forgotPasswordAction from "@/app/api/auth/forgotPassAction";
import { Facebook, Instagram } from "../../public/assets/svg/socialMedia";
import Edit from "../../public/assets/svg/edit";
import { contactAction } from "@/app/api/contact/contact";

const year = new Date().getFullYear();

export const FAQData = {
  items: [
    {
      question: "Is Porinoi only for Assamese people?",
      answer:
        "Porinoi is built with love for Assam, but anyone who resonates with our values and approach is welcome.",
    },
    {
      question: "Can I update my profile after submitting?",
      answer:
        "Absolutely. You can edit your profile anytime by logging into your dashboard.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use secure protocols and end-to-end encryption to keep your data protected at every step. Your privacy is our top priority — always.",
    },
    {
      question: "Is it free to contact you?",
      answer: "Yes! Reaching out is free — we’re here to help.",
    },
    {
      question: "Do you offer personalized matchmaking?",
      answer:
        "Yes, we have human-assisted and algorithm-powered matchmaking features under our premium plan.",
    },
    {
      question: "What documents are required to get started?",
      answer:
        "We keep it simple — a valid ID and a few basic details to ensure authenticity and trust.",
    },
    {
      question: "Can I hide my profile from public view?",
      answer:
        "Yes, you can choose to keep your profile private or limit visibility to only selected members.",
    },
    {
      question: "Do you verify member profiles manually?",
      answer:
        "Yes, every profile goes through a light manual review to maintain quality and integrity.",
    },
    {
      question: "Is there an app available for Porinoi?",
      answer:
        "We’ve introduced our first web-based app — a sleek, mobile-optimized experience installable right from your browser. It officially rolls out after 12th September. Native iOS and Android apps are also in the works — stay tuned for the full journey ahead!",
    },
    {
      question: "How do I install the Porinoi web app on my phone?",
      answer:
        "Go to the Porinoi website, register or log in, and you’ll see an option to install the app. Just tap it — Porinoi will be added to your home screen like any native app.",
    },
    {
      question: "Will the PWA support notifications or offline use?",
      answer:
        "Yes. The PWA will support key features like push notifications, offline access for certain sections, and fast load times — giving you a seamless experience anytime, anywhere.",
    },
    {
      question: "What devices or browsers are supported?",
      answer:
        "The web app works smoothly on all modern browsers — Chrome, Safari, Edge, and Firefox — across Android, iOS, and desktop. Make sure your browser is up to date for the best experience.",
    },
    {
      question: "When can I expect the native app to launch?",
      answer:
        "Our iOS and Android apps are currently in development. We’ll share early access and launch timelines soon after the PWA release — so stay connected!",
    },
    {
      question: "What makes Porinoi different from other platforms?",
      answer:
        "Porinoi blends tradition with tech — combining cultural sensitivity, human support, and smart matchmaking.",
    },
  ],
};

export const navigationSection = {
  logoText: {
    default: "PORINOI",
    menu: "Love Meets Legacy",
  },
  menu: {
    label: "Menu",
    closeLabel: "Close",
    video: {
      source: "/assets/video/nav-video.webm",
      caption: "",
    },
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Sign In", path: "/signIn" },
    ],
    cta: {
      label: "Begin the Journey",
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
      ],
    },
  },
};

export const footerSection = {
  introText: "Built with love in Assam.",
  note: "Find your story. Write your future. A new chapter of connection begins here.",
  callToAction: {
    label: "Begin the Journey",
    path: "/signUp",
  },

  contact: {
    email: {
      label: "hello@porinoi.com ↗",
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
      { label: "Help Center", path: "/help/helpCenter" },
      { label: "Privacy Policy", path: "/legal/privacyPolicy" },
      { label: "Terms of Use", path: "/legal/termsOfUse" },
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
  ],

  credits: {
    copyright: `© ${year} Porinoi. All rights reserved.`,
    tagline: "A platform by dreamers, for soulmates.",
  },

  logoText: {
    logo: "PORINOI",
  },
};

export const authenticationPages = {
  signUpPage: {
    imag: "/assets/img/signUp.webp",
    title:
      "We believe every story begins with intention. Let’s begin yours by knowing you a little better.",
    subTitle: "Set up your Porinoi profile — it starts with a hello.",

    formDetails: {
      formTitle: "Let’s take the first step together.",
      additionalInfo:
        "Your story is safe with us. We never share your data, and every profile is carefully verified to keep the Porinoi circle secure.",

      switchForm: {
        label: "Already a member? ",
        path: "/signIn",
        name: "[ Login Instead ]",
      },

      serverAction: signupAction,

      formFields: [
        {
          label: "Hi! My full name is",
          type: "text",
          placeholder: "e.g. Rupam Das",
          name: "name",
          required: true,
        },
        {
          label: "I heard about Porinoi through...",
          type: "select",
          name: "referralSource",
          options: [
            "Word of Mouth",
            "Instagram Ad or Post",
            "Facebook Page or Group",
            "Google Search Result",
            "Referred by a Friend",
          ],
          required: true,
          description: "Select",
        },
        {
          label: "You can call me at",
          type: "tel",
          placeholder: "Enter your 10-digit mobile number",
          prefix: "+91",
          name: "phone",
          required: true,
        },
        {
          label: "And I’d like to set a password",
          type: "password",
          placeholder: "e.g. Love@123 or something strong and secure",
          name: "password",
          minLength: 8,
          pattern:
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$",
          required: true,
        },
        {
          label: "Let’s confirm my secret key",
          type: "password",
          placeholder: "Type it again, just to be sure",
          name: "confirmPassword",
          required: true,
        },
      ],

      checkConfirm: {
        text: "I agree to Porinoi’s [Terms] and [Privacy Policy].",
        name: "termsAndPrivacy",
        required: true,
      },

      submitButton: {
        text: "[ Let’s Begin ]",
        icon: <Arrow width={24} height={24} />,
      },

      helpLinks: {
        link: {
          label: "Need help registering?",
          path: "/help/helpCenter",
          name: "[Help me out!]",
        },
      },
    },
  },

  signInPage: {
    imag: "/assets/img/signIn.webp",
    title:
      "Whether you're here to reconnect, rediscover, or restart — we're glad you're back.",
    subTitle: "Just a few clicks to continue your journey",

    formDetails: {
      formTitle: "Welcome back. We’ve missed you.",
      additionalInfo:
        "Your login is private, verified, and secure. We respect your trust — no spam, no sharing, no nonsense.",

      switchForm: {
        label: "New to Porinoi?",
        path: "/signUp",
        name: "[ Register Now ]",
      },

      serverAction: signinAction,

      formFields: [
        {
          label: "I’m signing in with my",
          type: "tel",
          placeholder: "[ Enter your mobile number* ]",
          prefix: "+91",
          name: "phone",
          pattern: "^[6-9]\\d{9}$",
          required: true,
        },
        {
          label: "And my password is",
          type: "password",
          placeholder: "[ Enter your password* ]",
          name: "password",
          required: true,
        },
      ],

      checkConfirm: {
        text: "Keep me logged in on this device",
        name: "keepLogin",
        required: false,
      },

      submitButton: {
        text: "[ Let Me In ]",
        icon: <Arrow width={24} height={24} />,
      },

      helpLinks: {
        link: {
          label: "Forgot Your Password?",
          path: "/forgotPassword",
          name: "[Reset it here]",
        },
      },
    },
  },

  forgotPasswordPage: {
    imag: "/assets/img/forgotPassword.webp",
    title: "Lost your key? No worries — we’ll help you find your way back.",
    subTitle: "Enter your registered number to reset your password.",

    formDetails: {
      formTitle: "Let’s get you back in.",
      additionalInfo:
        "Password resets are private, encrypted, and effortless. We’re here to help — no hassle, no hoops.",
      switchForm: {
        label: "Remembered your password?",
        path: "/signIn",
        name: "[ Sign In Instead ]",
      },

      serverAction: forgotPasswordAction,

      formFields: [
        {
          label: "I registered with my",
          type: "tel",
          placeholder: "[ Enter your mobile number* ]",
          prefix: "+91",
          name: "phone",
          pattern: "^[6-9]\\d{9}$",
          required: true,
        },
      ],

      submitButton: {
        text: "[ Send Otp ]",
        icon: <Arrow width={24} height={24} />,
      },

      helpLinks: {
        link: {
          label: "Need more help?",
          path: "/contactSupport",
          name: "[Contact Support]",
        },
      },
    },
  },

  links: [
    {
      label: "Terms Of Use",
      path: "/legal/termsOfUse",
    },
    {
      label: "Privacy Policy",
      path: "/legal/privacyPolicy",
    },
    {
      label: "Help Center",
      path: "/help/helpCenter",
    },
  ],

  credit: {
    copyright: `© ${year} Porinoi. All rights reserved.`,
    note: "A platform by dreamers, for soulmates.",
  },
};

export const landingPage = {
  hero: {
    title: ["FIND CONNECTION", "BEYOND TRADITION", "LOVE, REDEFINED."],
    subtitle:
      "A mindful approach to relationships — where culture meets clarity.",
    description:
      "Built on trust. Rooted in Assamese values. Aligned with modern love.",
    button: {
      label: "Begin the Journey",
      path: "/signUp",
    },
    image: {
      src: "/assets/img/hero-couple.webp",
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
    title: "Find Your Perfect Match in 3 Effortless Steps",
    description:
      "At Porinoi, we believe that meaningful connections begin with simplicity. Our thoughtfully designed three-step journey takes you from self-expression to heartfelt conversation—guiding you gently toward someone who truly understands you.",
    steps: [
      {
        title: "Tell Your Tale",
        description:
          "Begin by crafting a profile that reflects the real you—your values, passions, and the qualities you seek in a partner. Share your essence, and let your story set the stage for a genuine connection.",
        image: "/assets/img/Create Profile.jpeg",
        button: {
          text: "Start Creating",
          path: "/register",
        },
      },
      {
        title: "Uncover Possibilities",
        description:
          "Explore a curated selection of potential matches tailored to your preferences, lifestyle, and shared goals. Every profile you see is a door to possibility—waiting to be opened by curiosity and heart.",
        image: "/assets/img/Explore Matches.jpeg",
        color: "oklch(59.2% 0.249 0.584)",
      },
      {
        title: "Spark the Connection",
        description:
          "When sparks fly, don't hold back. Reach out, exchange thoughts, and build something real through open and thoughtful communication. It’s the beginning of something beautifully unexpected.",
        image: "/assets/img/Connect.jpeg",
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
        address: "Hello@porinoi.com",
      },
      {
        icon: <MapPin />,
        label: "Visit us",
        subLabel: "Come say hello at our Office HQ.",
        address: "Guwahati, Assam, India - 781001",
      },
    ],

    formDetails: {
      serverAction: contactAction,

      formFields: [
        {
          label: "How can we help you?",
          type: "select",
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
          required: true,
        },
        {
          label: "Your name",
          type: "text",
          placeholder: "Eg: Rupam Das",
          pattern: "^[A-Za-z]{2,}(?: [A-Za-z]{2,}){1,2}$",
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
          label: "Share your thoughts with Porinoi",
          type: "textarea",
          placeholder:
            "Share your thoughts, questions, or anything you'd like us to know…",
          name: "message",
          required: false,
        },
      ],
      submitButton: {
        text: "[ Count Me In ]",
        icon: <Arrow45deg width={13} height={13} />,
      },
    },
  },
};

export const aboutPage = {
  hero: {
    title: "At Porinoi, we believe love isn’t found — it’s nurtured.",
    subtitle:
      "Porinoi is more than just a matrimony platform — it’s a movement. Born in Assam, we blend cultural depth with conscious matchmaking to help you build a partnership that’s emotionally rich, spiritually aligned, and beautifully real.",
  },

  principles: {
    intro: "We follow values that honor emotion, tradition, and intention.",
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

export const contactPage = {
  title: "Let’s Begin With a Hello",
  subTitle: "We’re All Ears, Always.",
  description:
    "Whether you're searching for a soulmate, seeking support, or simply wishing to say hello — the Porinoi team is right here, ready to listen, guide, and grow with you. Your journey matters to us.",

  gif: "/assets/img/handShake.gif",

  tag: "Contact Porinoi —",

  formDetails: {
    serverAction: contactAction,
    
    formFields: [
      {
        label: "Hi! My name is",
        type: "text",
        name: "name",
        placeholder: "Enter your name*",
        required: true,
      },
      {
        label: "And I work in",
        type: "text",
        name: "profession",
        placeholder: "Mention your profession*",
        required: true,
      },
      {
        label: "I found Porinoi via",
        type: "checkbox",
        name: "referralSource",
        options: [
          "Word of Mouth",
          "Instagram Ad or Post",
          "Facebook Page or Group",
          "Google Search Result",
          "Referred by a Friend",
          "Other (Please Specify)",
        ],
        required: true,
        description: "Select*",
      },
      {
        label: "I’m reaching out about",
        type: "checkbox",
        name: "helpOptions",
        options: [
          "Registering my profile",
          "Finding a perfect match",
          "Partnership opportunity",
          "Collaboration or media",
          "Other support",
        ],
        required: true,
        description: "Select*",
      },
      {
        label: "You can reach me at",
        type: "email",
        placeholder: "example@email.com*",
        name: "email",
        required: true,
      },
      {
        label: "or call me at",
        type: "tel",
        placeholder: "Enter your phone number",
        name: "phone",
        prefix: "+91",
        pattern: "^[6-9]\\d{9}$",
        required: false,
      },
      {
        label: "Here’s a bit more about my request",
        type: "textarea",
        placeholder: "Describe your concern, query, or idea in brief.",
        name: "message",
        required: false,
      },
    ],

    consent: {
      text: "I agree with Porinoi's",
      links: {
        label: "Privacy Policy",
        path: "/legal/privacyPolicy",
      },
      required: true,
    },

    submitButton: {
      text: "Send Inquiry",
    },
  },

  faq_section: {
    title: "Frequently Asked questions",
    subTitle: "You Might Be Wondering",
    description:
      "We’ve gathered some common questions to help you get to know Porinoi better. If you’re curious, confused, or just exploring — these might be just what you’re looking for.",
    items: [
      {
        question: "What makes Porinoi different from other platforms?",
        answer:
          "Porinoi blends tradition with tech — combining cultural sensitivity, human support, and smart matchmaking.",
      },
      {
        question: "Is Porinoi only for Assamese people?",
        answer:
          "Porinoi is built with love for Assam, but anyone who resonates with our values and approach is welcome.",
      },
      {
        question: "Is there an app available for Porinoi?",
        answer:
          "We’ve introduced our first web-based app — a sleek, mobile-optimized experience installable right from your browser. It officially rolls out after 12th September. Native iOS and Android apps are also in the works — stay tuned for the full journey ahead!",
      },
      {
        question: "How do I install the Porinoi web app on my phone?",
        answer:
          "Go to the Porinoi website, register or log in, and you’ll see an option to install the app. Just tap it — Porinoi will be added to your home screen like any native app.",
      },
      {
        question: "Can I update my profile after submitting?",
        answer:
          "Absolutely. You can edit your profile anytime by logging into your dashboard.",
      },
      {
        question: "How secure is my data?",
        answer:
          "We use secure protocols and end-to-end encryption to keep your data protected at every step. Your privacy is our top priority — always.",
      },
      {
        question: "Do you offer personalized matchmaking?",
        answer:
          "Yes, we have human-assisted and algorithm-powered matchmaking features under our premium plan.",
      },
      {
        question: "What documents are required to get started?",
        answer:
          "We keep it simple — a valid ID and a few basic details to ensure authenticity and trust.",
      },
    ],
    cta: {
      label: "Still curious? Browse Help Center",
      href: "/help/helpCenter",
    },
  },
};

export const profilePage = {
  pendingProfile: {
    title: "Welcome, {Name} ❤ — your story starts here.",
    subTitle: ["Your journey towards", "a meaningful connection begins now."],
    description: [
      "We're truly delighted to welcome you, {UserName}!",
      " Porinoi isn’t just another matrimony platform — it’s a heartfelt Assamese initiative crafted to honor your roots, your rhythm, and your romantic aspirations.",
    ],
    context: {
      title: "By completing your profile, you will:",
      subtitle: [
        "A little detail goes a long way.",
        "Start strong, connect deeper, and make it count.",
      ],
      bulletPoints: [
        "Unlock exclusive rewards after our grand public launch.",
        "Shine brighter with priority visibility to others.",
        "Get matches handpicked just for you.",
        "Join a safe, respectful, and culturally enriched community.",
      ],
      callToAction: {
        heading: "Start strong. Shine brighter.",
        message:
          "Your journey begins here — let your profile reflect the future you're building.",
        button: {
          label: "Build My Profile",
          path: "/completeProfile",
        },
      },
    },
  },

  completedProfile: {
    title: "Beautifully done, {Name} — your journey begins. 🎉",
    subTitle: ["YOU'RE NOW OFFICIALLY", "PART OF THE PORINOI COMMUNITY."],
    description: [
      "YOUR PROFILE IS NOW COMPLETE, AND THE PAΤΗ AHEAD IS WIDE OPEN.",
      "FROM THIS MOMENT ON, YOUR PRESENCE IS LIVE - VISIBLE TO POTENTIAL MATCHES WHO ARE EQUALLY SERIOUS, RESPECTFUL, AND CULTURALLY ALIGNED.",
    ],
    context: {
      title: "Here’s what happens next:",
      subtitle: [
        "STAY TUNED! WE'LL LET YOU KNOW AS SOON AS WE GO LIVE.",
        "UNTIL THEN, FEEL FREE TO UPDATE YOUR DETAILS OR SPREAD THE WORD.",
      ],
      bulletPoints: [
        "Receive better, more accurate match suggestions",
        "Get noticed faster by compatible users",
        "Start meaningful conversations with confidence",
        "Participate in exclusive Porinoi events and features",
      ],
      callToAction: {
        message:
          "Refine your story, connect with kindred spirits, and take the next step toward something truly meaningful.",
        buttons: [
          {
            label: "RE-SHAPE MY STORY – EDIT PROFILE",
            path: "/editProfile",
            icon: (
              <Edit
                width={30}
                height={30}
                className="text-zinc-800 transition-colors duration-300 ease-linear group-hover:text-white scale-65 lg:scale-100"
              />
            ),
          },
          {
            label: "LIVE IN COLOR – FOLLOW ON INSTAGRAM",
            path: "https://www.instagram.com/porinoi_assam",
            icon: (
              <Instagram
                width={30}
                height={30}
                className="text-zinc-800 transition-colors duration-300 ease-linear group-hover:text-white scale-65 lg:scale-100"
              />
            ),
          },
          {
            label: "LIVE IN COMMUNITY – JOIN US ON FACEBOOK",
            path: "https://www.facebook.com/porinoi_assam",
            icon: (
              <Facebook
                width={30}
                height={30}
                className="text-zinc-800 transition-colors duration-300 ease-linear group-hover:text-white scale-65 lg:scale-100"
              />
            ),
          },
        ],
      },
    },
  },
};

export const helpPage = {
  title: "Do you have a question on your mind?",
  subTitle: "We bring you the answers you care about",
  description:
    "Porinoi Help Center — your starting point for smooth, simple support. Whether you're setting up, exploring, or waiting for a match — we're here to help.",
  image: "/assets/img/helpHero.webp",
  questions: {
    categories: [
      {
        title: "Getting Started – SignUp & SignIn",
        subTitle:
          "The beginning of your journey toward a culturally rooted and meaningful connection. Signing up is simple, secure, and just takes a minute.",
        questions: [
          {
            question: "How do I sign up on Porinoi?",
            answer: "Follow these steps to create your Porinoi account:",
            answerList: [
              "Open the Porinoi app or visit the official website.",
              "Enter your full name, mobile number, and create a secure password.",
              'Tap "Sign Up" to complete your registration.',
            ],
            note: "Once registered, you’ll be guided to complete your profile and preferences for better matchmaking.",
          },
          {
            question: "What should my password include?",
            answer: "Your password should meet these requirements:",
            answerList: [
              "At least 6 characters long",
              "A mix of letters and numbers",
              "Unique — avoid using your name, birthdate, or phone number",
            ],
            note: "Strong passwords help keep your account secure.",
          },
          {
            question: "How do I log in to my Porinoi account?",
            answer: "Follow these steps to log in:",
            answerList: [
              "Go to the login screen.",
              "Enter your registered mobile number and password.",
              'Tap "Sign In."',
            ],
            note: "Make sure you use the same number you signed up with.",
          },
          {
            question: "I forgot my password. How do I reset it?",
            answer: "To reset your password:",
            answerList: [
              'Tap "Forgot Password?" on the login screen.',
              "Enter your registered mobile number.",
              "You’ll receive an OTP via SMS.",
              "Enter the OTP and create a new password.",
            ],
            note: "",
          },
          {
            question: "I didn’t receive the OTP for password reset.",
            answer: "If the OTP doesn’t arrive, try these steps:",
            answerList: [
              "Wait for a moment and check your mobile network.",
              'Tap "Resend OTP."',
              "Make sure your number is entered correctly.",
            ],
            note: "Still having issues? Reach out to us via the Contact Us page or email support@porinoi.in.",
          },
          {
            question: "Can I change my password later?",
            answer: "Yes, you can change your password anytime.",
            answerList: [
              "Log in to your account.",
              "Go to Settings > Change Password.",
              "Enter your new password.",
              "Enter the OTP sent to your registered mobile number to confirm and save changes.",
            ],
            note: "",
          },
          {
            question: "Can I use the same account on multiple devices?",
            answer:
              "Yes, you can log in using the same mobile number and password.",
            answerList: [],
            note: "Only one active session is allowed at a time for your security.",
          },
          {
            question: "Is signing up on Porinoi free?",
            answer:
              "Yes, signing up and creating your profile is completely free.",
            answerList: [],
            note: "Premium features will be introduced in the future — but joining Porinoi will always be free.",
          },
          {
            question: "What happens after I sign up?",
            answer: "After signing up, you’ll be guided through:",
            answerList: [
              "Filling in personal and community-related details",
              "Uploading your photo (optional)",
              "Setting partner preferences",
            ],
            note: "A complete profile means better matches and a richer experience on Porinoi.",
          },
        ],
      },
      {
        title: "Profile Completion & Setup",
        subTitle:
          "A complete profile is your passport to meaningful matches. The more we know, the better we connect you with the right people — culturally, personally, and emotionally.",
        questions: [
          {
            question: "Why is it important to complete my profile now?",
            answer: "Completing your profile early helps us:",
            answerList: [
              "Prepare better match suggestions once matchmaking is live",
              "Understand user preferences and improve the platform",
              "Place you on priority for early access features",
            ],
            note: "",
          },
          {
            question: "What information is required in the profile?",
            answer: "Key profile fields include:",
            answerList: [
              "Personal details like name, age, gender, location",
              "Cultural and community background",
              "Education and occupation details",
              "Lifestyle and preferences",
              "Profile photo (optional, but highly recommended)",
            ],
            note: "",
          },
          {
            question: "Can I skip profile setup and come back later?",
            answer:
              "Yes, you can skip for now. However, a completed profile gives you better visibility and access to features when matchmaking begins.",
            answerList: [],
            note: "",
          },
          {
            question: "What happens after I complete my profile?",
            answer:
              "You’ll be eligible for early access to matchmaking features, get noticed faster, and receive personalized suggestions when we go live.",
            answerList: [],
            note: "",
          },
          {
            question: "Are my profile details visible to others now?",
            answer:
              "Currently, your profile is only visible to you. Once public matchmaking launches, visibility will be managed according to your privacy preferences.",
            answerList: [],
            note: "",
          },
          {
            question: "Can I edit my profile after completing it?",
            answer:
              "Yes, your profile is always editable from the ‘Profile Settings’ section — update anytime, as needed.",
            answerList: [],
            note: "",
          },
          {
            question: "What if I don’t want to upload a photo right now?",
            answer:
              "Uploading a photo is optional for now. But profiles with photos tend to receive more attention once matchmaking is enabled.",
            answerList: [],
            note: "",
          },
          {
            question: "Is there any profile verification process right now?",
            answer:
              "At this early stage, we do not require full verification. However, verification features will be introduced soon to enhance trust and authenticity.",
            answerList: [],
            note: "",
          },
          {
            question: "I made a mistake during setup. How do I fix it?",
            answer:
              "Simply go to the Profile Settings section and update the incorrect fields. If you're stuck, reach out via the Contact Us form.",
            answerList: [],
            note: "",
          },
          {
            question: "Will I lose my profile data before launch?",
            answer:
              "No. All your profile data is securely stored and will be preserved even as we upgrade the platform before launch.",
            answerList: [],
            note: "",
          },
        ],
      },
      {
        title: "Photos & Privacy (Preview Stage)",
        subTitle:
          "Your photos help express your identity, but we understand privacy matters too. During this preview stage, you're in full control of what to share and when.",
        questions: [
          {
            question: "Will I lose my profile data before launch?",
            answer:
              "No. All your profile data, including photos, is securely saved and will remain intact even as the platform evolves toward full launch.",
            answerList: [],
            note: "",
          },
          {
            question: "Can I upload my photo right now?",
            answer:
              "Yes, you can upload one or more profile photos while completing or editing your profile. It's optional for now — but highly encouraged. A photo adds warmth and authenticity to your presence.",
            answerList: [],
            note: "",
          },
          {
            question: "Will my photo be visible to others?",
            answer:
              "Currently, your photo is only visible to you. Once public matchmaking is launched, photo visibility settings will be available for you to control.",
            answerList: [],
            note: "",
          },
          {
            question: "Can I blur or hide my photo from public view?",
            answer:
              "Yes. Once photo privacy controls are live, you’ll be able to choose who can see your photo, blur it, or keep it hidden completely.",
            answerList: [],
            note: "",
          },
          {
            question: "How can I update or remove my photo?",
            answer:
              "Go to your Profile Settings → Photos section. You can add, replace, or delete your photo anytime with just a few taps.",
            answerList: [],
            note: "",
          },
          {
            question: "Will photo verification be required?",
            answer:
              "Photo verification is not mandatory right now, but we plan to introduce it later to enhance trust, safety, and authenticity on the platform.",
            answerList: [],
            note: "",
          },
          {
            question: "Is my photo stored securely?",
            answer:
              "Absolutely. All profile photos are encrypted and stored securely. Your data privacy is a top priority for Porinoi.",
            answerList: [],
            note: "",
          },
        ],
      },
      {
        title: "Early Access & Feature Info",
        subTitle:
          "You're among the first to experience Porinoi. While some features are still on the way, your early engagement helps shape the future of the platform.",
        questions: [
          {
            question: "What can I do in this Early Access version?",
            answer: "Right now, you can:",
            answerList: [
              "Create an account",
              "Complete your profile",
              "Upload photos",
              "Edit and save your details",
            ],
            note: "These early steps help prepare your profile for full functionality when matchmaking goes live.",
          },
          {
            question: "Which features are coming soon?",
            answer: "We're actively building:",
            answerList: [
              "Match suggestions based on culture and preferences",
              "Messaging and chat tools",
              "Profile verification",
              "Privacy settings and visibility control",
              "Subscription and premium plans",
            ],
            note: "Stay tuned — the full experience is arriving soon!",
          },
          {
            question: "Will I need to sign up again after full launch?",
            answer:
              "No. Your current Porinoi account will stay active. All your profile details, photos, and preferences will carry over seamlessly into the full version.",
            answerList: [],
            note: "",
          },
          {
            question: "How will I know when new features go live?",
            answer:
              "We’ll notify you through in-app alerts, emails, or SMS (based on your preferences). You can also follow our official channels to stay updated.",
            answerList: [],
            note: "",
          },
          {
            question: "Can I invite others to join Porinoi?",
            answer:
              "Yes! We welcome early supporters. Share the app or website link with your friends and family — the more the merrier in this community of meaningful connections.",
            answerList: [],
            note: "",
          },
          {
            question: "What if I find a bug or have a suggestion?",
            answer:
              "We’re all ears! Email us at support@porinoi.in or use the in-app feedback form (coming soon). Your feedback helps build a better Porinoi.",
            answerList: [],
            note: "",
          },
        ],
      },
      {
        title: "Support & Feedback",
        subTitle:
          "We’re here for you. Whether it’s a question, a bug, or a brilliant idea, your voice shapes the Porinoi experience.",
        questions: [
          {
            question: "How can I contact the Porinoi team?",
            answer: "You can reach us in the following ways:",
            answerList: [
              "Fill out the form on our Contact Us page",
              "Email us directly at support@porinoi.in",
              "In-app feedback option is coming soon!",
            ],
            note: "Your messages go directly to our core team — nothing gets lost in the void.",
          },
          {
            question: "How quickly will I get a response?",
            answer:
              "We aim to respond within 24–48 hours. During high-volume periods, it might take a bit longer — but we never ignore genuine feedback.",
            answerList: [],
            note: "",
          },
          {
            question: "I found a bug! What should I do?",
            answer:
              "Please report it immediately by email or the Contact Us form.",
            answerList: [
              "Mention the steps to reproduce it",
              "Describe what you expected and what happened",
              "Attach screenshots if possible",
            ],
            note: "",
          },
          {
            question: "Can I suggest a new feature?",
            answer:
              "Absolutely! We love hearing your ideas. Every feature you suggest is considered by our team and could shape future updates.",
            answerList: [],
            note: "",
          },
          {
            question: "Will I be notified when you release updates?",
            answer:
              "Yes. We’ll send in-app alerts, emails, or SMS based on your notification preferences. Major changes will also be shared through our official pages.",
            answerList: [],
            note: "",
          },
          {
            question: "What kind of feedback is most helpful right now?",
            answer: "We’re especially looking for:",
            answerList: [
              "Suggestions for user experience improvement",
              "Bug reports",
              "Feature ideas",
              "Design/usability feedback",
              "Anything you feel is confusing or incomplete",
            ],
            note: "",
          },
          {
            question: "Is my feedback really being read?",
            answer:
              "Yes — every message is read by a real team member. Some feedback even inspires entire features. So don’t hold back — your voice truly matters!",
            answerList: [],
            note: "",
          },
        ],
      },
    ],
  },

  contact: {
    title: ["Need a hand", "or have something to share?"],
    subTitle:
      "Porinoi is just getting started — and your experience matters deeply to us. If you couldn’t find what you’re looking for or want to share your thoughts, don’t hesitate. ",
    image: "/assets/img/helpFooter.webp",
    body: [
      "We’re in the early chapters of our journey, and every voice helps shape the story. Whether it’s a bug you bumped into, a bright idea that crossed your mind, or simply a kind word — it all matters here. You’re not just using Porinoi… you’re helping build it.",
      "Our team reads and responds personally with patience, curiosity, and a genuine desire to help.",
    ],
    contactOptions: [
      {
        label: "Email",
        value: "support@porinoi.in",
        note: "We read every message and try our best to reply quickly.",
      },
      {
        label: "Contact Us",
        value: "/contactUs",
        note: "Go to the Contact Us page on our website to send us a message easily.",
      },
    ],
  },
};
