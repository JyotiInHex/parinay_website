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
    title: "Get in Touch",

    description:
      "Have a question, feedback, or just want to say hello? We'd love to hear from you. Whether you're searching for your soulmate or exploring partnership opportunities - we're just a message away.",

    contactDetails: {
      label: "Our Address",
      location: "Guwahati, Assam, India - 781001",
      email: "support@Porinoi.com",
      icons: { location: "location", email: "email" },
    },

    socialLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/porinoi",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/porinoi",
      },
    ],
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
