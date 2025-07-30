export const metadata = {
  title: "Legal",
  description: "Explore Porinoi’s legal pages including Terms, Privacy Policy, and more.",
};

export default function LegalLayout({ children }) {
  return (
    <div className="w-full h-auto overflow-hidden">
      {children}
    </div>
  );
}