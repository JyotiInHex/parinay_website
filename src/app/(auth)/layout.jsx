import { authenticationPages } from "@/data/siteStaticData";
import { AuthFooter } from "./Ui";

export const metadata = {
  title: "Authentication",
  description: "Log in or join Porinoi – where love begins.",
};

export default function AuthLayout({ children }) {
  return (
    <div className="w-full h-auto overflow-hidden">
      {children}
      <AuthFooter {...authenticationPages}/>
    </div>
  );
}
