"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { WordStaggerFlowTitle } from "./sectionTitle";
import { useToast } from "@/context/ToastContext";
import { usePopup } from "@/context/PopUpContext";
import { SendVerifyCode, VerifyOTPCode } from "@/app/api/auth/forgotPassAction";
import { popUpForms } from "@/data/siteStaticData";
import { CustomLink } from "./customLink";

const { otpForm } = popUpForms;
const fields = otpForm.resetPassWord.formDetails.formFields;

const OTPForm = ({ formData }) => {
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const { closePopup } = usePopup();
  const { ThrowToast } = useToast();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const isOtpComplete = otp.every((digit) => digit.trim() !== "");
  const [timer, setTimer] = useState(30);
  const [formStep, setFormStep] = useState("verify");
  const [formInputs, setFormInputs] = useState("");
  const [errors, setErrors] = useState({});

  const handleOTPInputs = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[idx] = value;
      setOtp(newOtp);
    }

    if (value && idx < otp.length - 1) inputRefs.current[idx + 1].focus();
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Tab" && !otp[idx]) return e.preventDefault();

    if (e.key === "Backspace" && !otp[idx] && idx > 0)
      inputRefs.current[idx - 1].focus();
  };

  const handleOtpVerification = async (phone, otp) => {
    const res = await VerifyOTPCode(phone, otp);
    const { success, message, switchTo } = res;

    if (success && switchTo) setFormStep(switchTo);
    ThrowToast({
      message,
      state: success ? "success" : "warning",
      timeOut: 7500,
      direction: "center",
      timeStampView: true,
    });
  };

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <motion.div
      key="popupMain"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      exit={{ y: 50 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className="w-[550px] h-fit bg-white my-auto rounded-xl p-8 py-10 flex flex-col space-y-5 select-none"
    >
      {formStep !== "verify" && (
        <button
          type="button"
          className="w-fit ml-auto text-base text-zinc-800 font-porinoi-sans font-medium cursor-pointer"
          onClick={closePopup}
        >
          Close
        </button>
      )}

      <div className="flex flex-col gap-y-3">
        <h2 className="w-fit mx-auto ext-zinc-800 text-lg lg:text-2xl font-semibold font-porinoi-sans">
          {otpForm[formStep].title}
        </h2>

        <p className="px-0.5 justify-center text-center text-zinc-400 text-sm lg:text-base font-normal font-porinoi-sans">
          {otpForm[formStep].description.replace("{userPhone}", formData.phone)}
        </p>
      </div>

      <form
        ref={formRef}
        className="w-full mx-auto pt-3 flex flex-col items-center gap-y-5"
      >
        {formStep === "verify" && (
          <>
            <WordStaggerFlowTitle className="px-0.5 justify-center text-center text-xs text-zinc-800 font-porinoi-sans font-medium">
              The code will expire in 5 minutes.
            </WordStaggerFlowTitle>
            <fieldset>
              {otp.map((digit, idx) => (
                <motion.input
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.055,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOTPInputs(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`w-12 h-12 text-center border-[2px] rounded mx-1 text-lg  font-semibold font-porinoi-sans ${
                    isOtpComplete
                      ? "border-green-400 bg-green-50 text-green-800"
                      : "border-zinc-400 text-zinc-900"
                  }`}
                />
              ))}
            </fieldset>
            <button
              type="button"
              disabled={timer > 0}
              onClick={async (e) => {
                e.preventDefault();
                setTimer(30);
                const res = await SendVerifyCode(
                  formData.phone,
                  Math.floor(100000 + Math.random() * 900000).toString()
                );
                ThrowToast({
                  message: res.message,
                  state: res.success ? "success" : "warning",
                  timeOut: 7500,
                  direction: "center",
                  timeStampView: true,
                });
              }}
              className={`text-sm text-zinc-800 font-semibold font-porinoi-sans ${
                timer > 0 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <span className="text-zinc-500">Didn’t receive it?</span>
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </button>
            <div className="w-full flex flex-row justify-between gap-3">
              {[
                {
                  label: "Cancel",
                  type: "reset",
                  onClick: closePopup,
                  disabled: null,
                },
                {
                  label: "Verify",
                  type: "submit",
                  onClick: () => {
                    handleOtpVerification(formData.phone, otp);
                  },
                  disabled: !isOtpComplete,
                },
              ].map((btn, idx) => {
                return (
                  <button
                    key={idx}
                    disabled={btn.disabled}
                    type="button"
                    onClick={btn.onClick}
                    className={`border-[2px] first:border-zinc-400  rounded-md px-5 py-2 w-full text-base text-zinc-800 font-porinoi-sans font-semibold cursor-pointer ${
                      !isOtpComplete
                        ? "nth-[2]:border-gray-400 nth-[2]:bg-gray-200 nth-[2]:text-gray-400"
                        : "nth-[2]:border-blue-400 nth-[2]:bg-blue-600  nth-[2]:text-white"
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
          </>
        )}



        {formStep === "resetPassWord" && (
          <div className="w-full space-y-5">
            //form
          </div>
        )}


        <div>
          {formStep !== "verify" && (
           <div>
            //button
           </div>
          )}


          {otpForm.resetPassWord.formDetails.helpLinks && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 flex flex-col lg:flex-row items-center gap-2 mx-auto"
            >
              <WordStaggerFlowTitle className="text-sm text-zinc-500 font-porinoi-sans font-medium">
                {otpForm.resetPassWord.formDetails.helpLinks.link.label}
              </WordStaggerFlowTitle>
              <CustomLink
                path={otpForm.resetPassWord.formDetails.helpLinks.link.path}
                label={otpForm.resetPassWord.formDetails.helpLinks.link.name}
                className="text-base text-zinc-700 font-medium font-porinoi-sans cursor-pointer"
              />
            </motion.div>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default OTPForm;
