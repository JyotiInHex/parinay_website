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
        "We’ve introduced our first web-based app — a sleek, mobile-optimized experience installable right from your browser. It officially rolls out after 15th August. Native iOS and Android apps are also in the works — stay tuned for the full journey ahead!",
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
          "We’ve introduced our first web-based app — a sleek, mobile-optimized experience installable right from your browser. It officially rolls out after 15th August. Native iOS and Android apps are also in the works — stay tuned for the full journey ahead!",
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
