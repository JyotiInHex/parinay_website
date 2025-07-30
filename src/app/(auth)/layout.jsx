import { authenticationPages } from "@/data/siteStaticData";
import { AuthFooter } from "./Ui";

export const metadata = {
  title: "Authentication",
  description: "Log in or join Porinoi – where love begins.",
};

export default function AuthLayout({ children }) {
  return (
    <div className="w-full h-full min-h-screen px-24 pt-20 pb-8 flex flex-col items-center justify-between overflow-hidden select-none">
      {children}
    </div>
  );
}
