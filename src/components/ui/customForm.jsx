import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Check from "../../../public/assets/svg/check";
import Arrow from "../../../public/assets/svg/arrow";
import { CustomBtn2 } from "./customBtn";

export default function CustomForm({
  formTitle,
  formDescription,
  formFields,
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
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-xl mx-auto p-6 rounded-2xl shadow-lg"
      style={{ background: backGround || "#f8f3e9" }}
    >
      <h2 className="text-zinc-800 text-2xl font-semibold font-trap">
        {formTitle}
      </h2>

      <p className="text-gray-600 text-base font-trap font-medium">
        {formDescription}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 mt-3 w-full">
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

        <CustomBtn2 type="submit">{submitButton.text}</CustomBtn2>
      </form>
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
        className="text-base text-zinc-800 font-trap font-medium cursor-pointer"
      >
        {label}
      </label>
    </fieldset>
  );
};

const CheckboxGroupField = ({ label, name, options, selected, onChange }) => (
  <fieldset className="space-y-4">
    <label className="block text-zinc-800 text-xl font-trap font-medium capitalize">
      [{label}]
    </label>
    <div className="flex flex-row flex-wrap gap-2">
      {options.map((opt, idx) => (
        <label
          htmlFor={`for-${idx}-option`}
          key={idx}
          className="w-full grid grid-cols-[auto_1fr] items-start space-x-2 text-base text-zinc-800 font-trap font-medium cursor-pointer"
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
  onChange,
}) => {
  const inputId = `${label.replace(/\s+/g, "-").toLowerCase()}-${type}`;
  const isFilled = value && value.trim().length > 0;
  return (
    <fieldset>
      <label
        htmlFor={inputId}
        className="relative block text-zinc-800 text-xl font-trap font-medium capitalize "
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
          <span className="text-base text-zinc-500 font-medium font-trap pr-2 select-none">
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
          onChange={onChange}
          autoComplete="off"
          autoCorrect="on"
          spellCheck={false}
          className="w-full bg-transparent outline-none text-base text-zinc-800 font-medium font-trap"
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
        className="relative block text-zinc-800 text-xl font-trap font-medium capitalize"
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
        className="w-full border-2 border-l-0 border-r-0 border-t-0 border-zinc-600 px-0 py-2 text-base text-zinc-800 font-medium font-trap resize-none custom-scrollbar"
        rows={rows}
        maxLength={estimatedMaxLength}
      />
      <span
        className="absolute -bottom-4 right-0 text-xs text-gray-500 font-semibold font-trap tracking-wide"
        style={{ color: charCount === estimatedMaxLength ? "red" : "" }}
      >
        {charCount}/{estimatedMaxLength}
      </span>
    </fieldset>
  );
};
