"use client";
import { motion } from "framer-motion";
import { AuthForm, AuthHero } from "../UIContent";
import { CustomLink } from "@/components/ui/customLink";
import InputField from "@/components/ui/InputField";
import { authenticationPages } from "@/data/siteStaticData";

export default function SampleForm() {
  const { signUpPage } = authenticationPages;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit px-5 md:px-10 py-6 lg:py-0 gap-5 lg:gap-5 select-none">
      <AuthHero {...signUpPage} />

      <div className="py-20">
        <AuthForm {...signUpPage} />
      </div>
    </div>
  );
}
