import { AuthWrapper } from "../Ui";
import { authenticationPages } from "@/data/siteStaticData";

export default function SampleForm() {
  const { forgotPasswordPage } = authenticationPages;
  return <AuthWrapper {...forgotPasswordPage} />;
}
