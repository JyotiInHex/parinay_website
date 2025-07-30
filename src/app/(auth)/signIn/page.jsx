"use client";
import { AuthWrapper } from "../Ui";
import { authenticationPages } from "@/data/siteStaticData";

export default function SignIn() {
  const { signInPage } = authenticationPages;
  return <AuthWrapper {...signInPage} />;
}
