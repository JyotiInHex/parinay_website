"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profilePage } from "@/data/siteStaticData";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import Arrow from "../../../../public/assets/svg/arrow";
import Check from "../../../../public/assets/svg/check";
import clsx from "clsx";
import { getZodiacFromName } from "@/utils/helpers";
import { formValidationCheck } from "@/utils/validators";

export default function Build(preFieldData) {
  const { completedProfileForm } = profilePage;
  const fields = [...completedProfileForm.sections];
  const [currentStep, setCurrent] = useState(0);
  const [revealedCount, setRevealedCount] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const checkValidations = () => {
    const { isValid, errors } = formValidationCheck({
      formFields: fields[currentStep].fields,
      formData,
    });

    if (!isValid) {
      setErrors(errors);
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (!checkValidations()) return;

    setErrors({});
    if (currentStep < fields.length - 1) {
      setCurrent((prev) => Math.min(prev + 1, fields.length));
      setRevealedCount((prev) => Math.min(prev + 1, fields.length));
    }
  };
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrent((prev) => Math.max(prev - 1, 0));
      setRevealedCount((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    if (preFieldData) {
      setFormData(preFieldData);
    }
  }, [preFieldData]);

  const handleInputChange = (e) => {
    const { type, name, value, checked } = e.target;
    setFormData((prev) => {
      const updatedForm = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "name" && value) {
        const result = getZodiacFromName(value);
        updatedForm.zodiac = result;
      }

      return updatedForm;
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData((perv) => ({ ...perv, [name]: value }));
  };

  const handleMultiSelect = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      const currentValues = prev[name] || [];

      let updatedValues;
      if (checked) {
        updatedValues = [...currentValues, value];
      } else {
        updatedValues = currentValues.filter((v) => v !== value);
      }

      return {
        ...prev,
        [name]: updatedValues,
      };
    });
  };

  const handleRadioChange = (name, value) => {
    setFormData((perv) => ({ ...perv, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkValidations()) return;
    setErrors({});

    setFormData({});
    setCurrent(0);
    setRevealedCount(1);
    console.log(formData);
  };

  return (
    <div className="w-full h-full lg:min-h-screen px-5 lg:px-24 py-14 lg:pt-14 my-0 lg:mt-5 lg:mb-44 ">
      <div className="flex flex-col lg:flex-row items-center gap-y-3 lg:gap-y-5">
        <div className="grid lg:grid-cols-[30%_1fr] items-center gap-0.5 lg:gap-y-2">
          <WordStaggerFlowTitle className="text-base lg:text-lg text-zinc-800 font-porinoi-sans font-normal uppercase">
            {completedProfileForm.tag}
          </WordStaggerFlowTitle>
          <div className="lg:w-fit">
            <WordStaggerFlowTitle className="text-2xl text-zinc-800 font-porinoi-sans font-semibold uppercase">
              {completedProfileForm.title}
            </WordStaggerFlowTitle>
          </div>
        </div>
        <div className="lg:w-[80%]">
          <WordStaggerFlowTitle
            delayStep={0.025}
            className="text-xs lg:text-base text-zinc-800 font-porinoi-sans font-medium uppercase"
          >
            {completedProfileForm.description}
          </WordStaggerFlowTitle>
        </div>
      </div>

      <div className="relative z-[2] w-full h-auto min-h-[90vh] lg:min-h-max lg:max-h-fit mt-20 lg:mt-16 flex flex-col items-center justify-center">
        {fields.slice(0, revealedCount).map((field, idx) => {
          const isActive = idx === currentStep;
          const distance = currentStep - idx;
          let opacity = 1,
            background = "bg-neutral-50";
          if (!isActive) {
            if (distance === 1)
              (opacity = 0.9), (background = "bg-neutral-100");
            else if (distance === 2)
              (opacity = 0.8), (background = "bg-neutral-200");
            else if (distance >= 3)
              (opacity = 0), (background = "bg-neutral-300");
          }

          const buttonsConfig = [
            {
              label: "Revisit",
              type: "button",
              onClick: prevStep,
              condition: idx > 0,
              hoverText: true,
              icon: <Arrow width={30} height={30} className="rotate-180" />,
            },
            {
              label: "Proceed",
              type: "button",
              onClick: nextStep,
              condition: idx !== fields.length - 1,
              hoverText: true,
              icon: <Arrow width={30} height={30} />,
            },
            {
              label: "Finish",
              type: "submit",
              onClick: null,
              condition: idx === fields.length - 1,
              hoverText: true,
              icon: <Check width={30} height={30} />,
            },
          ];

          return (
            <motion.div
              key={idx}
              initial={{ top: 50, opacity: 0, filter: "blur(10px)" }}
              animate={{
                top: isActive ? 0 : 1 - (currentStep - idx) * 32,
                scale: isActive ? 1 : 1 - (currentStep - idx) * 0.05,
                zIndex: idx === currentStep ? 10 : idx,
                filter: `blur(${Math.max(0, (currentStep - idx) * 1.01)}px)`,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40,
              }}
              className={`lg:mt-5 absolute left-0 w-full h-full my-auto flex flex-col gap-2 ${
                isActive ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div className="flex flex-row justify-between gap-1 w-full h-auto lg:px-5 lg:py-2">
                <WordStaggerFlowTitle className="text-sm lg:text-base text-zinc-800 font-porinoi-sans font-medium uppercase">
                  {`[${field.sectionTitle}] —`}
                </WordStaggerFlowTitle>
                <WordStaggerFlowTitle className="text-sm lg:text-base text-zinc-800 font-porinoi-sans font-medium uppercase">
                  {`[${(idx + 1).toLocaleString().padStart(3, "00")}]`}
                </WordStaggerFlowTitle>
              </div>

              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className={`p-8 lg:p-14 w-full h-full min-h-max lg:min-h-[86vh] lg:h-auto ${background} flex flex-col justify-between rounded-2xl rounded-br-xl drop-shadow-[0px_0_20px_rgba(0,0,0,0.1)]`}
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-9">
                  {field.fields.map((input, idx) => {
                    if (input.conditional) {
                      const { field: depField, value } = input.conditional;
                      if (formData[depField] !== value) return null;
                    }

                    const commonProps = {
                      ...input,
                      value: formData[input.name] || "",
                      error: errors,
                    };

                    const { type } = input;
                    switch (type) {
                      case "text":
                      case "password":
                      case "email":
                      case "tel":
                      case "number":
                      case "date":
                        return (
                          <Input
                            key={idx}
                            {...commonProps}
                            onChange={handleInputChange}
                            index={idx}
                          />
                        );
                      case "textarea":
                        return (
                          <Textarea
                            key={idx}
                            {...commonProps}
                            onChange={handleInputChange}
                            index={idx}
                          />
                        );
                      case "select":
                        return (
                          <Select
                            key={idx}
                            {...commonProps}
                            onChange={(value) =>
                              handleSelectChange(input.name, value)
                            }
                            index={idx}
                          />
                        );
                      case "checkbox":
                      case "radio":
                        return (
                          <Radio
                            key={idx}
                            {...commonProps}
                            onChange={(value) => {
                              handleRadioChange(input.name, value);
                            }}
                            index={idx}
                          />
                        );
                      case "range":
                      case "multiselect":
                        return (
                          <MultiSelect
                            key={idx}
                            {...commonProps}
                            onChange={handleMultiSelect}
                            index={idx}
                          />
                        );
                      default:
                        return null;
                    }
                  })}
                </div>

                {isActive && (
                  <div className="mt-5 lg:mt-0 lg:ml-auto w-full lg:w-fit flex gap-2 justify-between">
                    {buttonsConfig.map(
                      (btn, i) =>
                        btn.condition && (
                          <button
                            key={i}
                            type={btn.type}
                            className="group w-full lg:w-fit h-auto px-4 lg:px-10 py-2 bg-[#FFB360]/12 flex items-center-safe gap-2 cursor-pointer disabled:opacity-40 overflow-hidden transition-colors duration-300 ease-linear hover:bg-[#FFB360]/100"
                            onClick={btn.onClick}
                          >
                            {btn.icon}
                            {btn.hoverText ? (
                              <span className="text-base lg:text-lg text-zinc-800 font-mono font-medium uppercase transition-all duration-500 ease-linear ">
                                {btn.label}
                              </span>
                            ) : (
                              <span>{btn.label}</span>
                            )}
                          </button>
                        )
                    )}
                  </div>
                )}
              </form>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const Input = ({
  index,
  label,
  name,
  type = "text",
  value,
  placeholder,
  required,
  error,
  className,
  onChange,
  prefix,
  suffix,
  fields,
}) => {
  return (
    <fieldset
      key={index}
      className={clsx("w-full min-w-fit lg:max-w-full", className)}
    >
      <label
        htmlFor={label.split(" ").join("_")}
        className="w-fit text-lg lg:text-2xl text-zinc-800 font-semibold font-porinoi-sans"
      >
        {label}
      </label>

      <div
        className={`relative w-full mt-3 ${
          prefix && suffix && "flex flex-row items-center gap-1.5"
        }`}
      >
        {prefix && (
          <span className="text-sm lg:text-base text-zinc-500 font-porinoi-sans font-medium">
            {prefix}
          </span>
        )}
        <input
          type={type}
          name={name}
          id={label.split(" ").join("_")}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full max-w-[95%] h-auto border-b-[2px] border-zinc-400 lg:text-center text-base lg:text-lg text-zinc-500 font-porinoi-sans font-medium"
        />
        {suffix && (
          <span className="-ml-7 text-sm lg:text-base text-zinc-500 font-porinoi-sans font-medium">
            {value.includes("'") ? "ft" : value.includes('"') ? "in" : suffix}
          </span>
        )}
        <AnimatePresence mode="wait">
          {error?.[name]?.message && (
            <motion.p
              key={"errors"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.025 * index,
                ease: [0.645, 0.045, 0.355, 1],
              }}
              className="absolute text-xs text-red-500 font-mono font-medium pointer-events-none select-none"
            >
              {error[name]?.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </fieldset>
  );
};

const Select = ({
  index,
  label,
  name,
  value,
  options = [],
  placeholder,
  required,
  error,
  className,
  onChange,
}) => {
  const fieldRef = useRef(null);
  const [dropToggle, setDropToggle] = useState(false);

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (!fieldRef.current?.contains(e.target)) setDropToggle(false);
    };
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => document.removeEventListener("mousedown", closeOnClickOutside);
  }, []);

  return (
    <fieldset
      ref={fieldRef}
      key={index}
      className={clsx("w-full min-w-fit lg:max-w-full", className)}
    >
      <label
        htmlFor={label.split(" ").join("_")}
        className="w-fit text-lg lg:text-2xl text-zinc-800 font-semibold font-porinoi-sans"
      >
        {label}
      </label>
      <div className="relative mt-3">
        <input
          type={"select"}
          name={name}
          id={label.split(" ").join("_")}
          placeholder={placeholder}
          value={value}
          readOnly
          onClick={() => setDropToggle(!dropToggle)}
          className="w-full max-w-[95%] h-auto border-b-[2px] border-zinc-400 lg:text-center text-base lg:text-lg text-zinc-500 font-porinoi-sans font-medium"
        />
        <AnimatePresence mode="wait">
          {error?.[name]?.message && (
            <motion.p
              key={"errors"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.025 * index,
                ease: [0.645, 0.045, 0.355, 1],
              }}
              className="absolute text-xs text-red-500 font-mono font-medium pointer-events-none select-none"
            >
              {error[name]?.message}
            </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {dropToggle && (
            <motion.ul
              data-lenis-prevent
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute z-[200] mt-0.5 w-full max-h-[30vh] bg-neutral-100 rounded-lg overflow-auto shadow-xl"
            >
              {options.map((option, idx) => {
                return (
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
                      setDropToggle(false);
                    }}
                    className="hover:bg-neutral-200 p-3 cursor-pointer"
                  >
                    <span className="text-base text-zinc-800 font-semibold font-porinoi-sans">
                      {option}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </fieldset>
  );
};

const Textarea = ({
  index,
  label,
  name,
  value,
  placeholder,
  required,
  error,
  rows,
  className,
  onChange,
}) => {
  return (
    <fieldset
      key={index}
      className={clsx(
        "relative w-full min-w-fit lg:max-w-full lg:col-span-2",
        className
      )}
    >
      <label
        htmlFor={label.split(" ").join("_")}
        className="w-fit text-lg lg:text-2xl text-zinc-800 font-semibold font-porinoi-sans"
      >
        {label}
      </label>

      <textarea
        name={name}
        id={label.split(" ").join("_")}
        placeholder={placeholder || "Write something..."}
        value={value}
        rows={rows}
        onChange={onChange}
        className="w-full h-auto border-b-[2px] border-zinc-400 text-left text-base lg:text-lg text-zinc-500 font-porinoi-sans font-medium resize-none"
      ></textarea>
      <AnimatePresence mode="wait">
        {error?.[name]?.message && (
          <motion.p
            key={"errors"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.025 * index,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="absolute text-xs text-red-500 font-mono font-medium pointer-events-none select-none"
          >
            {error[name]?.message}
          </motion.p>
        )}
      </AnimatePresence>
    </fieldset>
  );
};

const Radio = ({
  index,
  label,
  name,
  value,
  options = [],
  required,
  error,
  className,
  onChange,
}) => {
  return (
    <fieldset
      key={index}
      className={clsx("w-full min-w-fit lg:max-w-full", className)}
    >
      <h6 className="w-full flex flex-col lg:flex-row lg:items-center justify-between text-lg lg:text-2xl text-zinc-800 font-semibold font-porinoi-sans">
        {label}
      </h6>

      <div className="relative flex flex-row lg:place-content-center gap-2 mt-3">
        {options.map((option, idx) => {
          return (
            <React.Fragment key={idx}>
              <div className="flex lg:first:flex-row-reverse items-center gap-3">
                <input
                  type="radio"
                  name={name}
                  id={option + "_" + idx}
                  className="radio-custom"
                  value={value}
                  onClick={() => onChange(option)}
                />
                <label htmlFor={option + "_" + idx} className="cursor-pointer">
                  <span className="w-full h-auto text-center text-base lg:text-lg text-zinc-500 font-porinoi-sans font-medium">
                    {option}
                  </span>
                </label>
              </div>
              <div
                className={`hidden lg:flex ${
                  idx === 0 && "px-3"
                } gap-1.5 items-center bg-zinc-300 rounded-full`}
              >
                {idx === 0 && (
                  <>
                    {Array.from({ length: 6 }).map((_, i) => {
                      const size = 7 - i;
                      return (
                        <span
                          key={i}
                          className={`rounded-full block bg-neutral-50`}
                          style={{
                            width: `${size}px`,
                            height: `${size}px`,
                          }}
                        />
                      );
                    })}
                    <input
                      type="radio"
                      name={name}
                      checked={!value}
                      className="relative appearance-none w-4 h-4 bg-neutral-50 before:absolute before:w-2 before:h-2 checked:before:bg-zinc-300 flex items-center justify-center rounded-full before:rounded-full"
                      readOnly
                    />
                    {Array.from({ length: 6 }).map((_, i) => {
                      const size = 2 + i;
                      return (
                        <span
                          key={i}
                          className={`rounded-full block bg-neutral-50`}
                          style={{
                            width: `${size}px`,
                            height: `${size}px`,
                          }}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            </React.Fragment>
          );
        })}
        <AnimatePresence mode="wait">
          {error?.[name]?.message && (
            <motion.p
              key={"errors"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.025 * index,
                ease: [0.645, 0.045, 0.355, 1],
              }}
              className="absolute -bottom-5 left-0 text-xs text-red-500 font-mono font-medium pointer-events-none select-none"
            >
              {error[name]?.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </fieldset>
  );
};

const MultiSelect = ({
  index,
  label,
  name,
  value = [],
  options = [],
  required,
  error,
  className,
  onChange,
}) => {
  return (
    <fieldset
      key={index}
      className={clsx("w-full min-w-fit lg:max-w-full", className)}
    >
      <h6 className="w-fit text-lg lg:text-2xl text-zinc-800 font-semibold font-porinoi-sans">
        {label}
      </h6>

      <ul className="relative flex flex-row flex-wrap items-end gap-2 lg:gap-4 lg:gap-y-5 mt-3">
        {options.map((option, idx) => {
          const optionId = option.replace(/\s+/g, "_") + "_" + idx;
          const isChecked = value.includes(option);
          return (
            <li
              key={option}
              className="grid grid-cols-[auto_1fr] gap-1 lg:gap-2"
            >
              <input
                type="checkbox"
                id={optionId}
                name={name}
                value={option}
                className="mr-1 checkbox-custom"
                checked={isChecked}
                onChange={onChange}
              />
              <label
                htmlFor={optionId}
                className="text-sm lg:text-base text-zinc-800 font-semibold font-porinoi-sans cursor-pointer"
              >
                {option}
              </label>
            </li>
          );
        })}

        <AnimatePresence mode="wait">
          {error?.[name]?.message && (
            <motion.p
              key={"errors"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.025 * index,
                ease: [0.645, 0.045, 0.355, 1],
              }}
              className="absolute -bottom-6 left-0 text-xs text-red-500 font-mono font-medium pointer-events-none select-none"
            >
              {error[name]?.message}
            </motion.p>
          )}
        </AnimatePresence>
      </ul>
    </fieldset>
  );
};
