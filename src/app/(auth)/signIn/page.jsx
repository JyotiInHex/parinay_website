"use client";
import React, { useState } from "react";
import { CustomLink } from "@/components/ui/customLink";
import InputField from "@/components/ui/InputField";
import CustomBtn from "@/components/ui/customBtn";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    phoneNumber: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = "dummy_token_abcdef";
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    document.cookie = `token=${token}; expires=${expiryDate.toUTCString()}; path=/`;
    router.push("/onboarding");
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit px-5 md:px-10 py-6 lg:py-0 gap-5 lg:gap-5 select-none">
        <div className="w-full h-fit lg:p-34 lg:px-18 md:p-10 flex items-center md:items-start justify-center flex-col gap-2">
          <h2 className="text-center md:text-left text-2xl md:text-4xl text-zinc-900 font-black font-trap">
            Sign in and continue your journey
          </h2>
          <h5 className="text-center md:text-left text-lg lg:text-2xl text-zinc-500 font-semibold font-trap">
            toward meaningful connections rooted in trust, culture, and
            compatibility.
          </h5>

          <span className="flex flex-col md:flex-row items-center justify-center text-base font-trap text-zinc-900 font-semibold gap-2 whitespace-nowrap">
            New here? <CustomBtn path={"/signUp"}>Create an account</CustomBtn>
          </span>
        </div>
        <div className="w-full h-fit lg:px-24 lg:pt-18 md:p-10 md:px-5 flex items-start justify-center flex-col">
          <div className="w-full h-auto bg-neutral-100 rounded-lg lg:rounded-2xl overflow-hidden shadow-[5px_5px_15px_rgba(0,0,0,0.2)]">
            <h4 className="w-full h-auto py-2 text-center bg-pink-600 text-base lg:text-lg font-semibold font-trap text-white">
              Welcome to Parinay
            </h4>
            <form
              action="POST"
              autoComplete="off"
              onSubmit={handleSubmit}
              className="my-5 lg:my-10 px-5 lg:px-10 w-full h-full flex flex-col gap-3 items-center justify-center"
            >
              <p className="text-sm lg:text-base font-trap font-semibold text-zinc-900">
                Enter your Register mobile number and we will send you a OTP for
                login
              </p>
              <div className="w-full flex items-center justify-center gap-3">
                <span className="border-2 border-pink-500 rounded-md px-2 lg:px-3 py-2 text-base text-zinc-900 font-semibold font-mono shadow-lg">
                  +91
                </span>
                <InputField
                  label=""
                  type="number"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  error={""}
                />
              </div>
              <button
                type="submit"
                className="p-2 w-full h-auto bg-gray-300 rounded-full text-sm lg:text-base font-semibold font-trap text-white cursor-pointer shadow-lg border-2 border-white border-solid"
              >
                Generate OTP
              </button>
            </form>
            <hr className="mx-8 my-2 border rounded-full border-zinc-700" />
            <p className="px-8 my-3 flex flex-wrap items-center justify-center gap-1 text-sm font-medium font-trap text-zinc-800 text-center">
              Need Help in Login?{" "}
              <span>
                <CustomLink
                  path={"/termOfUse"}
                  label={"Help_Center"}
                  customStyle={{
                    textDecorationLine: "underline",
                    color: "#155DFC",
                    fontSize: "14px",
                  }}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
