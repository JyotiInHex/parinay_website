"use client";
import { AuthFooter, AuthForm, AuthHero } from "../Ui";
import { authenticationPages } from "@/data/siteStaticData";

const page = () => {
  const { signInPage } = authenticationPages;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit px-5 md:px-10 py-6 lg:py-0 gap-5 lg:gap-5 select-none">
      <AuthHero {...signInPage} />

      <div className="grid place-content-center py-10">
        <AuthForm {...signInPage} />
      </div>
    </div>
  );
};

export default page;
