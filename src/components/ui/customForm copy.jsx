"use client";

import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Check from "../../../public/assets/svg/check";
import { CustomLink } from "./customLink";
import { WordStaggerFlowTitle } from "./sectionTitle";

export default function CustomForm({
  formTitle,
  switchForm,
  formFields,
  formLowerPart,
  submitButton,
  backGround,
}) {
  const [formData, setFormData] = useState({});
  const [showPhone, setShowPhone] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    // Add validation or API submission here

    setFormData({});
    setShowPhone(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-xl min-w-lg mx-auto rounded-xl shadow-2xl shadow-zinc-600/15 overflow-hidden px-12 py-10 space-y-1"
      style={{ background: backGround || "#f8f3e9" }}
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
        <div className="flex flex-row items-end gap-3">
          <WordStaggerFlowTitle className="text-sm lg:text-base text-zinc-700 font-porinoi-sans font-medium">
            {switchForm.label}
          </WordStaggerFlowTitle>
          <CustomLink
            path={switchForm.path}
            label={switchForm.name}
            className="text-lg lg:text-xl text-zinc-700 font-porinoi-sans font-medium cursor-pointer"
          />
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 w-full mt-10">
        {formFields.map((field, idx) => {
          if (
            field.type === "text" ||
            field.type === "email" ||
            field.type === "password" ||
            field.type === "tel"
          ) {
            if (field.requiredIf && !showPhone) return null;

            return (
              <InputField
                key={idx}
                {...field}
                value={formData[field.name] || ""}
                onChange={handleChange}
              />
            );
          }

          if (field.type === "textarea") {
            return (
              <TextareaField
                key={idx}
                {...field}
                value={formData[field.name] || ""}
                rows={5}
                onChange={handleChange}
              />
            );
          }

          if (field.type === "checkbox") {
            return (
              <CheckboxField
                key={idx}
                {...field}
                checked={formData[field.name] || false}
                onChange={handleChange}
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
              />
            );
          }
          return null;
        })}

        
      </form>

      {/* {formLowerPart && (
        <>
          <hr className="mx-auto w-11/12 border-zinc-400 py-0.5" />
          <div className="w-full h-auto py-4 px-6 flex flex-row flex-wrap items-center justify-center gap-1.5 text-sm font-semibold font-porinoi-sans">
            <h5 className="text-center">{formLowerPart.text}</h5>
            {formLowerPart.links &&
              formLowerPart.links.map((link, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <CustomLink
                      type="link"
                      path={link.path}
                      label={link.label}
                      className="underline text-orange-600"
                      customStyle={{ fontSize: "14px" }}
                    />
                    {idx < formLowerPart.links.length - 1 && <span>&</span>}
                  </React.Fragment>
                );
              })}
          </div>
        </>
      )} */}
    </motion.div>
  );
}

//fieldset

const CheckboxField = ({ label, name, checked, onChange }) => {
  const inputId = `${label.replace(/\s+/g, "-").toLowerCase()}-checkbox`;
  return (
    <fieldset className="mt-6 flex items-center space-x-2">
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
        className="text-base text-zinc-800 font-porinoi-sans font-medium cursor-pointer"
      >
        {label}
      </label>
    </fieldset>
  );
};

const CheckboxGroupField = ({ label, name, options, selected, onChange }) => (
  <fieldset className="space-y-4">
    <label className="block text-zinc-800 text-xl font-porinoi-sans font-medium capitalize">
      [{label}]
    </label>
    <div className="flex flex-row flex-wrap gap-2">
      {options.map((opt, idx) => (
        <label
          htmlFor={`for-${idx}-option`}
          key={idx}
          className="w-full grid grid-cols-[auto_1fr] items-start space-x-2 text-base text-zinc-800 font-porinoi-sans font-medium cursor-pointer"
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
          <span>{opt}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

const InputField = ({
  label,
  type,
  prefix,
  placeholder,
  name,
  required,
  value,
  minLength,
  pattern,
  onChange,
}) => {
  const inputId = `${label.replace(/\s+/g, "-").toLowerCase()}-${type}`;
  const isFilled = value && value.trim().length > 0;
  return (
    <fieldset>
      <label
        htmlFor={inputId}
        className="relative block text-zinc-800 text-xl font-porinoi-sans font-medium capitalize "
      >
        [{label}]
        <figure
          style={{
            opacity: isFilled ? 1 : 0,
            visibility: isFilled ? "visible" : "hidden",
            transition: "0.25s ease",
          }}
        >
          <Check
            className="absolute right-0 fill-green-500"
            width={20}
            height={20}
          />
        </figure>
      </label>
      <div className="flex items-center w-full border-2 border-l-0 border-r-0 border-t-0 border-zinc-600 px-0 py-2">
        {prefix && (
          <span className="text-base text-zinc-500 font-medium font-porinoi-sans pr-2 select-none">
            {prefix}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          pattern={pattern}
          minLength={minLength}
          onChange={onChange}
          autoComplete="off"
          autoCorrect="on"
          spellCheck={false}
          className="w-full bg-transparent outline-none text-base text-zinc-800 font-medium font-porinoi-sans"
        />
      </div>
    </fieldset>
  );
};

const TextareaField = ({
  label,
  placeholder,
  name,
  required,
  value,
  onChange,
  rows = 4,
}) => {
  const inputId = `${label.replace(/\s+/g, "-").toLowerCase()}-textarea`;
  const isFilled = value && value.trim().length > 0;
  const estimatedMaxLength = rows * 100 - 120;
  const [charCount, setCharCount] = useState(value?.length || 0);
  useLayoutEffect(() => {
    setCharCount(value?.length || 0);
  }, [value]);

  return (
    <fieldset className="relative">
      <label
        htmlFor={inputId}
        className="relative block text-zinc-800 text-xl font-porinoi-sans font-medium capitalize"
      >
        [{label}]
        <figure
          style={{
            opacity: isFilled ? 1 : 0,
            visibility: isFilled ? "visible" : "hidden",
            transition: "0.25s ease",
          }}
        >
          <Check
            className="absolute right-0 fill-green-500"
            width={20}
            height={20}
          />
        </figure>
      </label>
      <textarea
        id={inputId}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => {
          if (e.target.value.length <= estimatedMaxLength) {
            setCharCount(e.target.value.length);
            onChange(e);
          }
        }}
        className="w-full border-2 border-l-0 border-r-0 border-t-0 border-zinc-600 px-0 py-2 text-base text-zinc-800 font-medium font-porinoi-sans resize-none custom-scrollbar"
        rows={rows}
        maxLength={estimatedMaxLength}
      />
      <span
        className="absolute -bottom-4 right-0 text-xs text-gray-500 font-semibold font-porinoi-sans tracking-wide"
        style={{ color: charCount === estimatedMaxLength ? "red" : "" }}
      >
        {charCount}/{estimatedMaxLength}
      </span>
    </fieldset>
  );
};
