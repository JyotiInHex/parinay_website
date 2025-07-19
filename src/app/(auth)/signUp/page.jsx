import { AuthFooter, AuthForm, AuthHero } from "../Ui";
import { authenticationPages } from "@/data/siteStaticData";

export default function SampleForm() {
  const { signUpPage } = authenticationPages;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit px-5 md:px-10 py-6 lg:py-0 gap-5 lg:gap-5 select-none">
      <AuthHero {...signUpPage} />

      <div className="py-8">
        <AuthForm {...signUpPage} />
      </div>
    </div>
  );
}
