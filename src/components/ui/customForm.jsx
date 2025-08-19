"use client";

import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { CustomLink } from "./customLink";
import { WordStaggerFlowTitle } from "./sectionTitle";
import { formValidationCheck } from "@/utils/validators";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";
import { usePopup } from "@/context/PopUpContext";
import OTPForm from "./OTPForm";

export default function CustomForm({
  formTitle,
  switchForm,
  formFields = [],
  checkConfirm,
  submitButton = { label: "Submit" },
  helpLinks,
  additionalInfo,
  serverAction,
  className,
}) {
  const formRef = useRef(null);
  const router = useRouter();
  const { ThrowToast } = useToast();
  const { openPopup } = usePopup();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "tel"
          ? value.replace(/\D/g, "").slice(0, 10)
          : value,
    }));
  };

  const handleCheckboxGroup = (e, groupName) => {
    const { value, checked } = e.target;
    const prev = formData[groupName] || [];
    setFormData((prevState) => ({
      ...prevState,
      [groupName]: checked
        ? [...prev, value]
        : prev.filter((item) => item !== value),
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = formValidationCheck({ formFields, formData });
    if (!isValid) return setErrors(errors);

    const formattedData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      Array.isArray(value)
        ? value.forEach((v) => formattedData.append(key, v))
        : formattedData.append(key, value);
    });
    const result = await serverAction(formattedData);
    const { success, message, redirection, popupType, switchTo } = result;

    ThrowToast({
      message,
      state: success ? "success" : "error",
      timeOut: 7500,
      direction: "center",
      timeStampView: true,
    });

    if (popupType === "otpForm")
      openPopup(<OTPForm formData={formData} switchForm={switchTo} />);

    if (success) {
      formRef.current.reset();
      setFormData({});
      setErrors({});
      setSubmitted(true);
      if (redirection) router.push(redirection);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timeout = setTimeout(() => setSubmitted(false), 100);
      return () => clearTimeout(timeout);
    }
  }, [isSubmitted]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
      className={clsx(
        "lg:max-w-xl mx-auto rounded-xl lg:shadow-2xl lg:px-12 py-5 lg:py-10 space-y-1",
        className
      )}
    >
      {formTitle && (
        <WordStaggerFlowTitle className="text-zinc-800 text-4xl font-semibold font-porinoi-sans leading-snug">
          {formTitle}
        </WordStaggerFlowTitle>
      )}

      {switchForm && (
        <div className="lg:flex flex-row lg:items-end gap-3 mb-10">
          <WordStaggerFlowTitle className="text-base text-zinc-700 font-porinoi-sans font-medium">
            {switchForm.label}
          </WordStaggerFlowTitle>
          <CustomLink
            path={switchForm.path}
            label={switchForm.name}
            className="text-lg text-zinc-700 font-porinoi-sans font-medium cursor-pointer"
          />
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-6 w-full"
      >
        {formFields.map((field, idx) => {
          const commonProps = {
            ...field,
            value: formData[field.name] || "",
            onChange: handleChange,
            isSubmitted,
            error: errors[field.name],
          };

          switch (field.type) {
            case "text":
            case "email":
            case "tel":
            case "number":
            case "password":
              return <InputField key={idx} {...commonProps} />;
            case "textarea":
              return <TextAreaField key={idx} {...commonProps} rows={1} />;
            case "checkbox":
            case "radio":
              return (
                <CheckboxField
                  key={idx}
                  {...field}
                  checked={!!formData[field.name]}
                  onChange={handleChange}
                  isSubmitted={isSubmitted}
                />
              );
            case "checkbox-group":
              return (
                <CheckboxGroupField
                  key={idx}
                  {...field}
                  selected={formData[field.name] || []}
                  onChange={(e) => handleCheckboxGroup(e, field.name)}
                  isSubmitted={isSubmitted}
                />
              );
            case "select":
              return (
                <SelectField
                  key={idx}
                  {...field}
                  value={formData[field.name] || ""}
                  onChange={(val) => handleSelectChange(field.name, val)}
                  isSubmitted={isSubmitted}
                  error={errors[field.name]}
                />
              );
            default:
              return null;
          }
        })}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
            },
          }}
          className="w-full flex flex-col items-start gap-2"
        >
          {checkConfirm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-[auto_1fr] items-start gap-3 mb-5"
            >
              <motion.input
                whileTap={{ scale: 0.5 }}
                type="checkbox"
                name={checkConfirm.name}
                id={checkConfirm.name}
                className="checkbox-custom"
                required={checkConfirm.required}
                checked={!!formData[checkConfirm.name]}
                onChange={handleChange}
              />
              <label
                htmlFor={checkConfirm.name}
                className="flex flex-wrap gap-3"
              >
                <WordStaggerFlowTitle className="text-xs lg:text-base text-zinc-800 font-medium font-porinoi-sans">
                  {checkConfirm.text}
                </WordStaggerFlowTitle>
              </label>
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="group flex justify-center items-center gap-2 w-full py-2 bg-[#FFB360]/12 hover:bg-[#FFB360]/100 cursor-pointer transition-colors duration-300 ease-linear"
          >
            <WordStaggerFlowTitle className="text-zinc-900 text-base font-semibold font-porinoi-sans group-hover:text-zinc-800">
              {submitButton.text}
            </WordStaggerFlowTitle>
            {submitButton.icon}
          </motion.button>

          {helpLinks && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 flex flex-col lg:flex-row items-center gap-2 mx-auto"
            >
              <WordStaggerFlowTitle className="text-sm text-zinc-500 font-porinoi-sans font-medium">
                {helpLinks.link.label}
              </WordStaggerFlowTitle>
              <CustomLink
                path={helpLinks.link.path}
                label={helpLinks.link.name}
                className="text-base text-zinc-700 font-medium font-porinoi-sans cursor-pointer"
              />
            </motion.div>
          )}
        </motion.div>
      </form>

      {additionalInfo && (
        <div className="mt-12">
          <WordStaggerFlowTitle className="text-xs text-zinc-400 font-porinoi-sans font-medium">
            {additionalInfo}
          </WordStaggerFlowTitle>
        </div>
      )}
    </motion.div>
  );
}

export const CheckboxField = ({ label, name, checked, onChange }) => {
  const inputId = `${label.replace(/\s+/g, "-").toLowerCase()}-checkbox`;

  return (
    <fieldset className="grid grid-cols-[auto_1fr] gap-3">
      <input
        id={inputId}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="checkbox-custom"
      />
      <label
        htmlFor={inputId}
        className="text-lg lg:text-base text-zinc-800 font-porinoi-sans font-medium cursor-pointer"
      >
        {label}
      </label>
    </fieldset>
  );
};

export const CheckboxGroupField = ({
  label,
  name,
  options,
  selected,
  onChange,
  required,
}) => (
  <fieldset className="relative space-y-3">
    <label className="inline-block">
      <WordStaggerFlowTitle className="text-lg lg:text-2xl text-zinc-800 font-porinoi-sans font-medium">
        {`[${label}]`}
      </WordStaggerFlowTitle>
      <input
        type="checkbox"
        tabIndex={-1}
        className="pointer-events-none opacity-0 absolute top-10 left-0"
        required={required}
        checked={selected.length > 0}
        onChange={() => {}}
      />
    </label>
    <div className="flex flex-wrap gap-2">
      {options.map((opt, idx) => (
        <motion.label
          key={idx}
          htmlFor={`for-${idx}-option`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            delay: idx * 0.025,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="w-full grid grid-cols-[auto_1fr] items-start space-x-2"
        >
          <input
            id={`for-${idx}-option`}
            type="checkbox"
            name={name}
            value={opt}
            checked={selected.includes(opt)}
            onChange={onChange}
            className="checkbox-custom"
          />
          <WordStaggerFlowTitle className="text-sm lg:text-base text-zinc-800 font-porinoi-sans font-medium cursor-pointer">
            {opt}
          </WordStaggerFlowTitle>
        </motion.label>
      ))}
    </div>
  </fieldset>
);

export const InputField = ({
  indexKey,
  name,
  label,
  type = "text",
  required,
  placeholder,
  prefix,
  value,
  onChange,
  isSubmitted,
  error,
  className,
}) => {
  const [isTouched, setTouched] = useState(false);

  useEffect(() => {
    if (isSubmitted) setTouched(false);
  }, [isSubmitted]);

  const isEmpty = !value?.trim();
  const showError = isTouched && isEmpty;

  return (
    <fieldset className={clsx("space-y-1", className)}>
      <label htmlFor={name} className="inline-block">
        <WordStaggerFlowTitle className="text-lg lg:text-xl text-zinc-800 font-porinoi-sans font-medium">
          {`[${label}]`}
        </WordStaggerFlowTitle>
      </label>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        className={`overflow-hidden w-full ${prefix ? "flex gap-1" : ""}`}
      >
        {prefix && (
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="text-base text-zinc-400 font-medium font-porinoi-sans select-none"
          >
            {prefix}
          </motion.span>
        )}
        <motion.input
          variants={{ hidden: { y: 100 }, visible: { y: 0 } }}
          transition={{
            duration: 0.09,
            delay: indexKey * 0.04,
            ease: [0.33, 1, 0.68, 1],
          }}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder || ""}
          autoComplete="off"
          value={value}
          onChange={onChange}
          onBlur={() => setTouched(required)}
          className={`w-full text-sm lg:text-base font-medium font-porinoi-sans outline-none border-b-2 transition-all duration-300 ease-in-out ${
            showError
              ? "border-red-500 text-red-500"
              : value?.trim()
              ? "border-zinc-800 text-zinc-800"
              : "border-zinc-300"
          }`}
        />
      </motion.div>

      <AnimatePresence mode="wait" initial={false}>
        {error && (
          <motion.span
            key={`${name}-error`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "anticipate" }}
            className="text-base text-red-500 font-medium font-porinoi-sans mt-1"
          >
            {error.message}
          </motion.span>
        )}
      </AnimatePresence>
    </fieldset>
  );
};

export const SelectField = ({
  indexKey,
  label,
  name,
  description,
  options = [],
  value,
  required,
  onChange,
  isSubmitted,
  error,
  className,
}) => {
  const fieldRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [isTouched, setTouched] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      setTouched(false);
      setOpen(false);
    }
  }, [isSubmitted]);

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (!fieldRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => document.removeEventListener("mousedown", closeOnClickOutside);
  }, []);

  const isEmpty = !value?.trim();
  const showError = isTouched && isEmpty;

  return (
    <fieldset ref={fieldRef} className={clsx("relative", className)}>
      <label onClick={() => setOpen((prev) => !prev)}>
        <WordStaggerFlowTitle className="text-lg lg:text-2xl text-zinc-800 font-porinoi-sans font-medium">
          {`[${label}]`}
        </WordStaggerFlowTitle>
      </label>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        className="relative"
      >
        <motion.input
          variants={{ hidden: { y: 100 }, visible: { y: 0 } }}
          transition={{
            duration: 0.09,
            delay: indexKey * 0.04,
            ease: [0.33, 1, 0.68, 1],
          }}
          type="text"
          name={name}
          placeholder={description || "Select Option"}
          readOnly
          value={value}
          onClick={() => setOpen(!isOpen)}
          onBlur={() => setTouched(required)}
          className={`w-full text-base font-medium font-porinoi-sans outline-none border-b-2
            transition-all duration-500 ease-in-out text-transparent text-shadow-[0_0_0_#9f9fa9] ${
              showError
                ? "border-red-500 text-shadow-[0_0_0_#ffa2a2]"
                : value?.trim()
                ? "border-zinc-800 text-zinc-800"
                : "border-zinc-300 hover:border-zinc-800"
            }`}
        />
        <motion.span
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: indexKey * 0.055,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="absolute right-0.5 bottom-2 pointer-events-none"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 27 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.76 3.5C11.915 1.5 14.803 1.5 15.957 3.5L23.312 16.248C24.466 18.248 23.022 20.748 20.713 20.748H6.00401C3.69501 20.748 2.25201 18.248 3.40601 16.248L10.759 3.5H10.76Z"
              fill="#9f9fa9"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.76 45.9961C11.915 47.9961 14.803 47.9961 15.957 45.9961L23.312 33.2481C24.466 31.2481 23.022 28.7481 20.713 28.7481H6.00401C3.69501 28.7481 2.25201 31.2481 3.40601 33.2481L10.759 45.9961H10.76Z"
              fill="#9f9fa9"
            />
          </svg>
        </motion.span>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            data-lenis-prevent
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute z-50 mt-2 w-full max-h-[50vh] bg-neutral-100 rounded-lg overflow-auto shadow-xl"
          >
            {options.map((option, idx) => (
              <motion.li
                key={option + idx}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: idx * 0.025,
                  ease: [0.33, 1, 0.68, 1],
                }}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="hover:bg-neutral-200 p-3 cursor-pointer"
              >
                <span className="text-base text-zinc-800 font-semibold font-porinoi-sans">
                  {option}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {error && (
          <motion.span
            key={`${name}-error`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "anticipate" }}
            className="text-base text-red-500 font-medium font-porinoi-sans mt-1"
          >
            {error.message}
          </motion.span>
        )}
      </AnimatePresence>
    </fieldset>
  );
};

export const TextAreaField = ({
  indexKey,
  label,
  name,
  placeholder,
  value,
  required,
  rows = 4,
  isSubmitted,
  error,
  onChange,
  className,
}) => {
  const [isTouched, setTouched] = useState(false);

  useEffect(() => {
    if (isSubmitted) setTouched(false);
  }, [isSubmitted]);

  const isEmpty = !value?.trim();
  const showError = isTouched && isEmpty;

  return (
    <fieldset className={clsx(className)}>
      <label htmlFor={name} className="inline-block pt-2">
        <WordStaggerFlowTitle className="text-lg lg:text-2xl text-zinc-800 font-porinoi-sans font-medium">
          {`[${label}]`}
        </WordStaggerFlowTitle>
      </label>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        <motion.textarea
          variants={{ hidden: { y: 100 }, visible: { y: 0 } }}
          transition={{
            duration: 0.09,
            delay: indexKey * 0.04,
            ease: [0.33, 1, 0.68, 1],
          }}
          id={name}
          name={name}
          placeholder={placeholder || "Write something..."}
          value={value}
          rows={rows}
          onChange={onChange}
          onBlur={() => setTouched(required)}
          className={`w-full text-sm lg:text-base font-medium font-porinoi-sans outline-none border-b-2 resize-none transition-all duration-300 ease-in-out ${
            showError
              ? "border-red-500 text-red-500"
              : value?.trim()
              ? "border-zinc-800 text-zinc-800"
              : "border-zinc-300"
          }`}
        />
      </motion.div>

      <AnimatePresence initial={false}>
        {error && (
          <motion.span
            key={`${name}-error`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "anticipate" }}
            className="text-base text-red-500 font-medium font-porinoi-sans mt-1"
          >
            {error.message}
          </motion.span>
        )}
      </AnimatePresence>
    </fieldset>
  );
};
