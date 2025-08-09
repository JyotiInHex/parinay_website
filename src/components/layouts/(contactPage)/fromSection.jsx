"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LineStaggerFlowTitle,
  WordStaggerFlowTitle,
} from "@/components/ui/sectionTitle";
import { contactPage } from "@/data/siteStaticData";
import { CustomLink } from "@/components/ui/customLink";
import { formValidationCheck } from "@/utils/validators";
import { useToast } from "@/context/ToastContext";
import {
  InputField,
  SelectField,
  TextAreaField,
} from "@/components/ui/customForm";

export default function ContactForm() {
  const { tag, formDetails } = contactPage;
  const formRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);
  const { ThrowToast } = useToast();
  const formFields = formDetails.formFields;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = formValidationCheck({ formFields, formData });
    console.log(isValid);

    if (!isValid) {
      setErrors(errors);
      return;
    }

    const formattedData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      Array.isArray(value)
        ? value.forEach((v) => formattedData.append(key, v))
        : formattedData.append(key, value);
    });

    const result = await formDetails.serverAction(formattedData);
    const { success, message, redirection } = result;

    console.log(success + message);

    ThrowToast({
      message,
      state: success ? "success" : "error",
      timeOut: 5500,
      direction: "center",
      timeStampView: true,
    });

    if (success) {
      formRef.current.reset();
      setFormData({});
      setErrors({});
      setSubmitted(true);
      if (redirection) router.push(redirection);
    }
  };

  useEffect(() => {
    const clearSetTimeOut = setTimeout(() => {
      setSubmitted(false);
    }, 200);
    return clearTimeout(() => clearSetTimeOut);
  }, [isSubmitted]);

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
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full lg:mt-5 lg:grid grid-cols-2 gap-10 lg:gap-5 space-y-5 lg:space-y-0"
        >
          {formDetails.formFields.map((field, idx) => {
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
                return (
                  <InputField
                    key={idx}
                    {...commonProps}
                  />
                );
              case "textarea":
                return (
                  <div className="md:col-span-2 w-full" key={idx}>
                    <TextAreaField
                      key={idx}
                      {...commonProps}
                      rows={3}
                    />
                  </div>
                );
              case "checkbox":
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
