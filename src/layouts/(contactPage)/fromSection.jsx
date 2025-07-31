"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LineStaggerFlowTitle,
  WordStaggerFlowTitle,
} from "@/components/ui/sectionTitle";
import { contactPage } from "@/data/siteStaticData";
import { CustomLink } from "@/components/ui/customLink";

export default function ContactForm() {
  const { tag, formDetails } = contactPage;
  const [formData, setFormData] = useState({});
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

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

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!formData.privacyPolicy) {
      return;
    }
    setIsPrivacyChecked(false);
    setFormData({});
    console.log("Form Submitted: ", formData);
  };

  useLayoutEffect(() => {
    const clearSetTimeOut = setTimeout(() => {
      setSubmitted(false);
    }, 200);
    return clearTimeout(() => clearSetTimeOut);
  }, [isSubmitted, setSubmitted]);

  return (
    <div className="px-10 lg:px-24 pb-20">
      <div className="w-full h-full">
        <div className="w-2/4 lg:mt-10 mb-5 lg:mb-0">
          <LineStaggerFlowTitle
            wordsPerLine={10}
            delayStep={0.06}
            className="text-base text-zinc-800 font-porinoi-sans font-medium"
          >
            {tag}
          </LineStaggerFlowTitle>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full lg:mt-5 lg:grid grid-cols-2 gap-2 space-y-6 lg:space-y-0"
        >
          {formDetails.formFields.map((field, idx) => {
            const textTypes = ["text", "email", "tel", "number", "password"];
            const selectTypes = ["checkbox", "select", "radio"];

            if (textTypes.includes(field.type)) {
              return (
                <div className="lg:w-full" key={idx}>
                  <InputField
                    indexKey={idx}
                    {...field}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    isSubmitted={isSubmitted}
                  />
                </div>
              );
            }

            if (selectTypes.includes(field.type)) {
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

            if (field.type === "textarea") {
              return (
                <div className="md:col-span-2 w-full" key={idx}>
                  <TextAreaField
                    indexKey={idx}
                    {...field}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
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
            className="lg:mt-5 col-span-2 w-full flex flex-col lg:flex-row lg:items-center justify-end gap-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="flex flex-row items-end lg:items-center gap-1 lg:gap-2"
            >
              <div className="flex flex-row items-center lg:items-start gap-1 lg:gap-2">
                <motion.input
                  whileTap={{ scale: 0.5 }}
                  type="checkbox"
                  name="privacyPolicy"
                  id="privacyPolicy"
                  className="checkbox-custom inline-block"
                  checked={!!formData.privacyPolicy}
                  required={formDetails.consent.required}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setFormData((prev) => ({
                      ...prev,
                      privacyPolicy: checked,
                    }));
                    setIsPrivacyChecked(checked);
                  }}
                />

                <label htmlFor="privacyPolicy">
                  <WordStaggerFlowTitle className="whitespace-nowrap text-sm lg:text-base text-zinc-800 font-medium font-porinoi-sans underline cursor-pointer">
                    {formDetails.consent.text}
                  </WordStaggerFlowTitle>
                </label>
              </div>

              <div className="w-fit">
                <CustomLink
                  path={formDetails.consent.links.path}
                  label={formDetails.consent.links.label}
                  className="text-sm lg:text-base text-zinc-800 font-medium font-porinoi-sans underline cursor-pointer"
                />
              </div>
            </motion.div>

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
              className="w-full lg:w-fit overflow-hidden"
            >
              <motion.button
                type="submit"
                disabled={!isPrivacyChecked}
                variants={{
                  hidden: { y: 100 },
                  visible: { y: 0 },
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.05,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="lg:col-span-2 w-full lg:w-fit lg:ml-auto bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all duration-200 ease-linear flex flex-row items-center justify-between group overflow-hidden cursor-pointer"
                style={{
                  opacity: !isPrivacyChecked && 0.5,
                  pointerEvents: !isPrivacyChecked && "none",
                }}
              >
                <span className="pl-6 text-white text-base font-porinoi-sans font-semibold">
                  <WordStaggerFlowTitle>
                    {formDetails.submitButton.text}
                  </WordStaggerFlowTitle>
                </span>
                <span className="relative w-12 lg:w-14 h-12 lg:h-14 before:w-[10px] before:h-[10px] before:bg-white before:rounded-full before:absolute before:mx-auto before:-z-1 flex items-center justify-center before:transition-all before:duration-300 before:ease-linear z-0 group-hover:before:w-[35px] group-hover:before:h-[35px] group-hover:lg:before:w-[38px] group-hover:lg:before:h-[38px]">
                  <i className="text-zinc-800 text-xl font-mono scale-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-linear">
                    🡭
                  </i>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

const InputField = ({
  indexKey,
  label,
  type,
  name,
  placeholder,
  value,
  required,
  pattern,
  prefix,
  onChange,
  isSubmitted,
}) => {
  const [isTouched, setTouched] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      setTouched(false);
    }
  }, [isSubmitted]);

  return (
    <fieldset className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
      <label htmlFor={name} className="lg:inline-block">
        <WordStaggerFlowTitle className="text-xl lg:text-4xl text-zinc-800 font-porinoi-sans font-medium">
          {label}
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
        className="lg:ml-2 overflow-hidden"
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
          type={type}
          name={name}
          id={name}
          placeholder={placeholder || ""}
          autoComplete="off"
          autoCorrect="false"
          spellCheck="false"
          aria-label={`${name}_input`}
          value={value}
          required={required}
          pattern={pattern}
          onChange={onChange}
          onBlur={() => {
            if (required) {
              setTouched(true);
            } else {
              setTouched(false);
            }
          }}
          className={`w-full lg:text-center text-base font-medium font-porinoi-sans outline-none border-b-2 focus:border-zinc-800 ${
            isTouched & !value?.trim()
              ? "border-red-500 text-red-500 "
              : value?.trim()
              ? "border-zinc-800 text-zinc-800"
              : "border-zinc-300"
          } transition-all duration-300 ease-in-out `}
        />
      </motion.div>
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
    if (isSubmitted) {
      setTouched(false);
      setIsFocus(false);
    }
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
    <fieldset
      ref={fieldRef}
      className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-3 items-center my-4"
    >
      <label onClick={() => setToggleDropDown((prev) => !prev)}>
        <WordStaggerFlowTitle className="text-xl lg:text-4xl text-zinc-800 font-porinoi-sans font-medium">
          {label}
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
          className="lg:ml-2 overflow-hidden"
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
            className={`w-full lg:text-center text-base font-medium font-porinoi-sans outline-none border-b-2
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
          <input
            type="text"
            name=""
            id=""
            className="absolute inset-0 opacity-0 pointer-events-none"
            tabIndex={-1}
            required={required}
            value={value || ""}
            onChange={() => {}}
            aria-hidden={true}
          />
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
                  className="hover:bg-neutral-200 w-full p-2 lg:p-3 transition-all duration-200 ease-linear cursor-pointer"
                >
                  <span className="text-center text-sm lg:text-base text-zinc-800 font-semibold font-porinoi-sans cursor-pointer w-full pointer-events-none">
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
  onChange,
  isSubmitted,
}) => {
  const [isTouched, setTouched] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      setTouched(false);
      setIsFocus(false);
    }
  }, [isSubmitted]);

  return (
    <fieldset className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 items-start">
      <label htmlFor={name} className="inline-block pt-2">
        <WordStaggerFlowTitle className="text-xl lg:text-4xl text-zinc-800 font-porinoi-sans font-medium">
          {label}
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
        className="lg:ml-2 overflow-hidden"
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
          placeholder={placeholder || ""}
          value={value}
          required={required}
          rows={1}
          onChange={onChange}
          onBlur={() => {
            if (required) {
              setTouched(true);
            } else {
              setTouched(false);
            }
          }}
          className={`w-full h-20 lg:h-auto pt-4 pb-1.5 resize-none lg:text-center text-base font-medium font-porinoi-sans outline-none border-b-2  ${
            isTouched & !value?.trim()
              ? "border-red-500 text-red-500"
              : value?.trim()
              ? "border-zinc-800 text-zinc-800"
              : isFocus
              ? "border-zinc-800"
              : "border-zinc-300 hover:border-zinc-800"
          }  hover:border-zinc-800 transition-all duration-500 ease-in-out`}
        />
      </motion.div>
    </fieldset>
  );
};
