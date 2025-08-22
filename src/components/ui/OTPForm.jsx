"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { WordStaggerFlowTitle } from "./sectionTitle";
import { useToast } from "@/context/ToastContext";
import { usePopup } from "@/context/PopUpContext";
import { SendVerifyCode, VerifyOTPCode } from "@/app/api/auth/forgotPassAction";
import { popUpForms } from "@/data/siteStaticData";
import Arrow from "../../../public/assets/svg/arrow";
import { formValidationCheck } from "@/utils/validators";
import Clear from "../../../public/assets/svg/clear";
import Loading from "../../../public/assets/svg/loading";

const { otpForm } = popUpForms;
const { serverAction, formFields } = otpForm.resetPassWord.formDetails;

const OTPForm = ({ formData, switchForm = "" }) => {
  const formRef = useRef();
  const inputRefs = useRef([]);

  const router = useRouter();
  const { closePopup } = usePopup();
  const { ThrowToast } = useToast();

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const [formStep, setFormStep] = useState("verify");
  const [errors, setErrors] = useState({});
  const [reqFormData, setReqFormData] = useState({});
  const [isTouched, setTouched] = useState(null);
  const [pending, setPending] = useState(false);

  const isOtpComplete = otp.every((digit) => digit.trim() !== "");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };
  const inputVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  useEffect(() => {
    setReqFormData((prev) => ({
      ...prev,
      phone: formData.phone || "",
    }));
  }, [formData.phone]);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

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
    const { success, message } = res;

    ThrowToast({
      message,
      state: success ? "success" : "warning",
      timeOut: 7500,
      direction: "center",
      timeStampView: true,
    });

    if (success && switchForm) setFormStep(switchForm);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = formValidationCheck({
      formFields,
      formData: reqFormData,
    });
    if (!isValid) return setErrors(errors);

    const formattedData = new FormData();
    Object.entries(reqFormData).forEach(([key, value]) => {
      Array.isArray(value)
        ? value.forEach((v) => formattedData.append(key, v))
        : formattedData.append(key, value);
    });

    const result = await serverAction(formattedData);
    const { success, message, redirection } = result;

    ThrowToast({
      message,
      state: success ? "success" : "error",
      timeOut: 7500,
      direction: "center",
      timeStampView: true,
    });

    if (success) {
      formRef.current.reset();
      setReqFormData({});
      setErrors({});
      closePopup();
      if (redirection) router.push(redirection);
    }
  };

  return (
    <motion.div
      key="popupMain"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      exit={{ y: 50 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className="w-[470px] h-fit bg-white my-auto rounded-xl p-8 py-10 flex flex-col space-y-5 select-none"
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
          {otpForm[formStep].description[0]} <br />
          <span className="font-semibold tracking-wider">
            {otpForm[formStep].description[1].replace(
              "{userPhone}",
              formData.phone
            )}
          </span>
        </p>
      </div>

      {formStep === "verify" && (
        <form className="w-full mx-auto pt-3 flex flex-col items-center gap-y-5">
          <motion.fieldset
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {otp.map((digit, idx) => {
              const isEmpty = !digit.trim();
              return (
                <motion.input
                  key={idx}
                  variants={inputVariants}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  onChange={(e) => handleOTPInputs(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  onBlur={() => {
                    setTouched(true);
                  }}
                  className={`w-12 h-12 mx-1 text-center text-lg font-semibold font-mono border-[2px]  rounded-lg focus:ring-3 focus:outline-none transition-all duration-300 ease-linear ${
                    isTouched && isEmpty
                      ? "border-red-300 ring-red-200 focus:border-red-600 "
                      : "border-zinc-300 ring-green-200 focus:border-green-600 "
                  }`}
                />
              );
            })}
          </motion.fieldset>

          <div className="mt-5 w-full flex flex-col-reverse justify-between gap-3">
            {[
              {
                label: "Clear",
                icon: <Clear width={16} height={16}/>,
                type: "reset",
                onClick: () => setOtp(new Array(6).fill("")),
                disabled: null,
                variant: "clear",
              },
              {
                label: pending ? "Verifying..." : "Verify",
                icon: pending && (
                  <Loading width={16} height={16} className="animate-none" />
                ),
                type: "submit",
                onClick: async (e) => {
                  e.preventDefault();
                  setPending(true);
                  await handleOtpVerification(formData.phone, otp);
                  setPending(false);
                },
                disabled: !isOtpComplete,
                variant: "verify",
              },
            ].map((btn, idx) => {
              const basicClass =
                "w-full px-5 py-[3.5px] flex flex-row items-center justify-center gap-2 text-base font-mono font-semibold rounded-md cursor-pointer transition-colors";

              const variant = {
                clear:
                  "border-2 border-gray-400 text-gray-700 bg-white hover:bg-gray-100",
                verify: btn.disabled
                  ? "border-2 border-gray-300 bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-2 border-green-600 bg-green-600 text-white hover:bg-green-700",
              };

              return (
                <button
                  key={idx}
                  disabled={btn.disabled}
                  type={btn.type}
                  onClick={btn.onClick}
                  className={`${basicClass} ${variant[btn.variant]}`}
                >
                  {btn.icon && btn.icon} {btn.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-y-2 place-content-center">
            <p className="text-sm font-semibold font-porinoi-sans text-zinc-500 pointer-events-none">
              Didn’t receive it?
            </p>
            <button
              type="button"
              disabled={timer > 0}
              onClick={async (e) => {
                e.preventDefault();
                setTimer(60);
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
              className={`space-y-1.5 text-sm text-zinc-800 font-semibold font-porinoi-sans ${
                timer > 0 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </button>
          </div>

          <div className="flex items-center gap-1.5 mt-7">
            <p className="text-sm text-gray-600 font-porinoi-sans font-normal select-none">
              Wrong number?
            </p>
            <button
              type="button"
              onClick={closePopup}
              className="text-sm text-blue-600 font-porinoi-sans font-semibold cursor-pointer hover:text-blue-700 transition-colors"
            >
              Change
            </button>
          </div>
        </form>
      )}

      {formStep === "resetPassWord" && (
        <form ref={formRef} onSubmit={handleFormSubmit}>
          <div className="w-full h-auto space-y-5">
            {[
              {
                id: "phone-fixed",
                type: "hidden",
                name: "phone",
                value: formData.phone,
                readOnly: true,
              },
              ...formFields,
            ].map((field, idx) => {
              return (
                <fieldset key={idx} className="flex flex-col gap-2">
                  <label
                    htmlFor={field.id || field.name}
                    className="text-lg text-zinc-800 font-semibold font-porinoi-sans"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id || field.name}
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    value={reqFormData[field.name] || field.value || ""}
                    readOnly={field.readOnly}
                    placeholder={field.placeholder}
                    className="text-sm text-zinc-800 font-semibold font-porinoi-sans border-b-[2px]"
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setReqFormData((prev) => ({
                        ...prev,
                        [name]: value,
                      }));
                    }}
                  />
                  <AnimatePresence mode="wait" initial={false}>
                    {errors?.[field.name]?.message && (
                      <motion.span
                        key={`${idx}-error`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "anticipate" }}
                        className="text-base text-red-500 font-medium font-porinoi-sans mt-1"
                      >
                        {errors[field.name].message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </fieldset>
              );
            })}
            <button
              type="submit"
              className="py-2 w-full h-auto bg-[#FFB360]/12 hover:bg-[#FFB360]/100 flex flex-row items-start justify-center gap-3 text-zinc-800 text-base font-porinoi-sans font-semibold cursor-pointer transition-colors duration-300 ease-linear"
            >
              Submit <Arrow width={20} height={20} />
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default OTPForm;
