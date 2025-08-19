
export const metadata = {
  title: "User Profile",
  description: "View your profile details and information.",
  keywords: ["profile", "dashboard"],
  openGraph: {
    title: "User Profile - PORINOI",
    description: "Check out your profile.",
    type: "website",
  },
};

export default function UserProfileLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
