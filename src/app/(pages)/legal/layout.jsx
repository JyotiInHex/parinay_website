export const metadata = {
  title: "Legal",
  description: "Explore Porinoi’s legal pages including Terms, Privacy Policy, and more.",
};

export default function LegalLayout({ children }) {
  return (
    <div className="w-full h-auto select-none px-10 lg:px-24 pt-16 lg:pt-20">
      {children}
    </div>
  );
}