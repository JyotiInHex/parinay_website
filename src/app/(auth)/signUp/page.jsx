import { AuthWrapper } from "../Ui";
import { authenticationPages } from "@/data/siteStaticData";

export default function SampleForm() {
  const { signUpPage } = authenticationPages;
  return <AuthWrapper {...signUpPage} />;
}
