"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CustomLink } from "./customLink";
import { WordStaggerFlowTitle } from "./sectionTitle";
import { formValidationCheck } from "@/utils/validators";
import { useToast } from "@/context/ToastContext";

export default function CustomForm({
  formTitle,
  switchForm,
  formFields = [],
  checkConfirm,
  submitButton = { label: "Submit" },
  helpLinks,
  additionalInfo,
  serverAction,
}) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [showPhone, setShowPhone] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  const { ThrowToast } = useToast();

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (name === "earlyAccess") {
      setShowPhone(checked);
    }

    if (type === "tel") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length <= 10) {
        setFormData((prev) => ({
          ...prev,
          [name]: cleaned,
        }));
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = formValidationCheck({ formFields, formData });

    if (!isValid) {
      Object.entries(errors).forEach(([field, errorObj]) => {
        if (errorObj?.status)
          setErrors((prev) => ({
            ...prev,
            [field]: errorObj.message,
          }));
      });
      return;
    }

    const formattedData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => formattedData.append(key, val));
      } else {
        formattedData.append(key, value);
      }
    });

    const result = await serverAction(formattedData);
    if (result?.success) {
      console.log("Success:", result.message);

      ThrowToast({
        message: result.message,
        state: "success",
        timeOut: 3000,
        direction: "center",
        timeStampView: true,
      });

      // setFormData({});
      setErrors({});
      setSubmitted(true);
      setShowPhone(false);
    } else {
      ThrowToast({
        message: result.message,
        state: "error",
        timeOut: 3000,
        direction: "center",
        timeStampView: false,
      });
      console.log("Error:", result?.message || "Something went wrong.");
    }
  };

  useEffect(() => {
    const clearSetTimeOut = setTimeout(() => {
      setSubmitted(false);
    }, 100);
    return clearTimeout(() => clearSetTimeOut);
  }, [isSubmitted, setSubmitted]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="lg:max-w-xl lg:min-w-lg lg:bg-white mx-auto rounded-xl lg:shadow-2xl shadow-zinc-600/15 lg:overflow-hidden lg:px-12 py-5 lg:py-10 space-y-1"
    >
      {formTitle && (
        <WordStaggerFlowTitle
          delayStep={0.065}
          className="text-zinc-800 text-4xl font-semibold font-porinoi-sans leading-snug"
        >
          {formTitle}
        </WordStaggerFlowTitle>
      )}

      {switchForm && (
        <div className="flex flex-col lg:flex-row lg:items-end items-start justify-center lg:justify-start lg:gap-3 mb-10">
          <div className="w-fit">
            <WordStaggerFlowTitle className="text-base text-zinc-700 font-porinoi-sans font-medium">
              {switchForm.label}
            </WordStaggerFlowTitle>
          </div>
          <CustomLink
            path={switchForm.path}
            label={switchForm.name}
            className="text-lg lg:text-xl text-zinc-700 font-porinoi-sans font-medium cursor-pointer"
          />
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-6 w-full h-auto"
      >
        {formFields.map((field, idx) => {
          const textTypes = ["text", "email", "tel", "number", "password"];
          const checkTypes = ["checkbox", "radio"];

          if (textTypes.includes(field.type)) {
            if (field.requiredIf && !showPhone) return null;

            return (
              <div className="w-full" key={idx}>
                <InputField
                  indexKey={idx}
                  {...field}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  isSubmitted={isSubmitted}
                  error={errors[field.name]}
                />
              </div>
            );
          }

          if (checkTypes.includes(field.type)) {
            return (
              <CheckboxField
                key={idx}
                {...field}
                checked={formData[field.name] || false}
                onChange={handleChange}
                isSubmitted={isSubmitted}
              />
            );
          }

          if (field.type === "textarea") {
            return (
              <TextAreaField
                key={idx}
                indexKey={idx}
                {...field}
                value={formData[field.name] || ""}
                onChange={handleChange}
                isSubmitted={isSubmitted}
                error={errors[field.name]}
                rows={1}
              />
            );
          }

          if (field.type === "checkbox-group") {
            return (
              <CheckboxGroupField
                key={idx}
                {...field}
                selected={formData[field.name] || []}
                onChange={(e) => handleCheckboxGroup(e, field.name)}
                isSubmitted={isSubmitted}
              />
            );
          }

          if (field.type === "select") {
            return (
              <div className="w-full" key={idx}>
                <SelectField
                  indexKey={idx}
                  {...field}
                  value={formData[field.name] || ""}
                  onChange={(value) => handleSelectChange(field.name, value)}
                  isSubmitted={isSubmitted}
                />
              </div>
            );
          }
          return null;
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
          className="col-span-2 w-full flex flex-col items-start justify-end gap-2"
        >
          {checkConfirm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="grid grid-cols-[auto_1fr] items-start gap-3 mb-5"
            >
              <motion.input
                whileTap={{ scale: 0.5 }}
                type="checkbox"
                name={checkConfirm.name}
                id={checkConfirm.name}
                className="checkbox-custom inline-block bg-red-600 w-10"
                required={checkConfirm.required}
                checked={!!formData[checkConfirm.name]}
                onChange={(e) => {
                  const { name, checked } = e.target;
                  setFormData((prev) => ({
                    ...prev,
                    [name]: checked,
                  }));
                }}
              />

              <label
                htmlFor={checkConfirm.name}
                className="flex flex-wrap flex-row items-center gap-3 "
              >
                <WordStaggerFlowTitle className="text-xs lg:text-base text-zinc-800 font-medium font-porinoi-sans">
                  {checkConfirm.text}
                </WordStaggerFlowTitle>
              </label>
            </motion.div>
          )}

          <motion.button
            type="submit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="group flex flex-row items-center justify-center gap-2 overflow-hidden cursor-pointer md:col-span-2 w-full py-2 bg-[#FFB360]/12 transition-all duration-200 ease-linear  hover:bg-[#FFB360]/100 group"
          >
            <WordStaggerFlowTitle className="text-zinc-900 text-base font-porinoi-sans font-semibold transition-colors duration-200 ease-linear group-hover:text-zinc-800">
              {submitButton.text}
            </WordStaggerFlowTitle>
            {submitButton.icon}
          </motion.button>

          {helpLinks && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="mt-3 flex flex-col lg:flex-row items-center lg:gap-2 mx-auto"
            >
              <WordStaggerFlowTitle className="text-sm text-zinc-500 font-porinoi-sans font-medium">
                {helpLinks.link.label}
              </WordStaggerFlowTitle>
              <CustomLink
                path={helpLinks.link.path}
                label={helpLinks.link.name}
                className="text-lg lg:text-base text-zinc-700 font-porinoi-sans font-medium cursor-pointer"
              />
            </motion.div>
          )}
        </motion.div>
      </form>

      {additionalInfo && (
        <div className="mt-12">
          <WordStaggerFlowTitle className="justify-center text-xs text-zinc-400 font-porinoi-sans font-medium">
            {additionalInfo}
          </WordStaggerFlowTitle>
        </div>
      )}
    </motion.div>
  );
}




const CheckboxField = ({ label, name, checked, onChange }) => {
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

const CheckboxGroupField = ({
  label,
  name,
  options,
  selected,
  onChange,
  required,
}) => {
  return (
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
      <div className="flex flex-row flex-wrap gap-2">
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
};

const InputField = ({
  indexKey,
  name,
  label,
  type = "text",
  required,
  pattern,
  placeholder,
  prefix,
  value,
  onChange,
  isSubmitted,
  error,
  msg,
}) => {
  const [isTouched, setTouched] = useState(false);

  useEffect(() => {
    if (!isSubmitted) return;
    setTouched(false);
  }, [isSubmitted]);

  return (
    <fieldset className="space-y-3 lg:space-y-2.5">
      <label htmlFor={name} className="inline-block">
        <WordStaggerFlowTitle className="text-lg lg:text-2xl text-zinc-800 font-porinoi-sans font-medium">
          {`[${label}]`}
        </WordStaggerFlowTitle>
      </label>

      <div className="w-full items-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="overflow-hidden w-full items-end"
          style={{
            display: prefix ? "flex" : "inline-block whitespace-nowrap",
            gap: prefix ? "3px" : "0",
          }}
        >
          {prefix && (
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="inline-block whitespace-nowrap text-base text-zinc-400 font-medium font-porinoi-sans select-none"
            >
              {prefix}
            </motion.span>
          )}

          <motion.input
            variants={{
              hidden: { y: 100 },
              visible: { y: 0 },
            }}
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
            autoCorrect="false"
            spellCheck="false"
            aria-label={`${name}_input`}
            value={value}
            // required={required}
            onChange={onChange}
            onBlur={() => {
              if (required) {
                setTouched(true);
              } else {
                setTouched(false);
              }
            }}
            className={`w-full text-sm lg:text-base font-medium font-porinoi-sans outline-none border-b-2 focus:border-zinc-800 ${
              isTouched & !value?.trim()
                ? "border-red-500 text-red-500 "
                : value?.trim()
                ? "border-zinc-800 text-zinc-800"
                : "border-zinc-300"
            } transition-all duration-300 ease-in-out `}
          />
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={`${name}-error`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "anticipate" }}
            className=" text-base text-red-500 font-medium font-porinoi-sans mt-1"
          >
            {error}
          </motion.span>
        </AnimatePresence>
      </div>
    </fieldset>
  );
};

const SelectField = ({
  indexKey,
  label,
  name,
  description,
  options = [],
  value,
  required,
  onChange,
  isSubmitted,
}) => {
  const fieldRef = useRef(null);
  const [isToggleDropDown, setToggleDropDown] = useState(false);
  const [isTouched, setTouched] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (!isSubmitted) return;
    setTouched(false);
    setIsFocus(false);
  }, [isSubmitted]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fieldRef.current && !fieldRef.current.contains(event.target)) {
        setToggleDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <fieldset ref={fieldRef} className="relative">
      <label onClick={() => setToggleDropDown((prev) => !prev)}>
        <WordStaggerFlowTitle className="text-lg lg:text-2xl text-zinc-800 font-porinoi-sans font-medium">
          {`[${label}]`}
        </WordStaggerFlowTitle>
      </label>

      <div className="relative w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className=" overflow-hidden"
        >
          <motion.input
            variants={{
              hidden: { y: 100 },
              visible: { y: 0 },
            }}
            transition={{
              duration: 0.09,
              delay: indexKey * 0.04,
              ease: [0.33, 1, 0.68, 1],
            }}
            type={"text"}
            name={name}
            placeholder={description || ""}
            autoComplete="off"
            value={value}
            readOnly
            onClick={() => setToggleDropDown((prev) => !prev)}
            onBlur={() => {
              if (required) {
                setTouched(true);
              } else {
                setTouched(false);
              }
            }}
            className={`w-full  text-base font-medium font-porinoi-sans outline-none border-b-2
              text-transparent text-shadow-[0_0_0_#9f9fa9] ${
                isTouched & !value?.trim()
                  ? "border-red-500 text-red-300 text-shadow-[0_0_0_#ffa2a2]"
                  : value?.trim()
                  ? "border-zinc-800 text-zinc-800"
                  : isFocus
                  ? "border-zinc-800"
                  : "border-zinc-300 hover:border-zinc-800"
              }  hover:border-zinc-800 transition-all duration-500 ease-in-out`}
          />
          <motion.span
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
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

        <AnimatePresence mode="wait">
          {isToggleDropDown && (
            <motion.ul
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute right-0 z-100 mt-2 w-full lg:min-w-xs h-auto bg-neutral-100 flex flex-col items-center rounded-lg overflow-hidden shadow-xl"
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
                    setToggleDropDown(false);
                  }}
                  className="hover:bg-neutral-200 w-full p-3 transition-all duration-200 ease-linear cursor-pointer"
                >
                  <span className=" text-base text-zinc-800 font-semibold font-porinoi-sans cursor-pointer w-full pointer-events-none">
                    {option}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </fieldset>
  );
};

const TextAreaField = ({
  indexKey,
  label,
  name,
  placeholder,
  value,
  required,
  rows = 4,
  isSubmitted,
  error,
  msg,
  onChange,
}) => {
  const [isTouched, setTouched] = useState(false);
  const showError = isTouched && error;

  useEffect(() => {
    if (!isSubmitted) return;
    setTouched(false);
  }, [isSubmitted]);

  return (
    <fieldset>
      <label htmlFor={name} className="inline-block pt-2">
        <WordStaggerFlowTitle className="text-lg lg:text-2xl text-zinc-800 font-porinoi-sans font-medium">
          {`[${label}]`}
        </WordStaggerFlowTitle>
      </label>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className=" overflow-hidden"
      >
        <motion.textarea
          variants={{
            hidden: { y: 100 },
            visible: { y: 0 },
          }}
          transition={{
            duration: 0.09,
            delay: indexKey * 0.04,
            ease: [0.33, 1, 0.68, 1],
          }}
          id={name}
          name={name}
          placeholder={placeholder || "Write Something..."}
          value={value}
          rows={rows}
          onChange={onChange}
          onBlur={() => {
            if (required) {
              setTouched(true);
            } else {
              setTouched(false);
            }
          }}
          className={`w-full text-sm lg:text-base font-medium font-porinoi-sans outline-none border-b-2 focus:border-zinc-800 ${
            isTouched & !value?.trim()
              ? "border-red-500 text-red-500 "
              : value?.trim()
              ? "border-zinc-800 text-zinc-800"
              : "border-zinc-300"
          } transition-all duration-300 ease-in-out resize-none`}
        />
      </motion.div>

      <AnimatePresence mode="wait" initial={false}>
        {showError && (
          <motion.span
            key={`${name}-error`} // important for exit/enter distinction
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "anticipate" }}
            className="block text-base text-red-500 font-medium font-porinoi-sans mt-1"
          >
            {msg || (error && getRandomMessage(requiredFallbackMessages))}
          </motion.span>
        )}
      </AnimatePresence>
    </fieldset>
  );
};
