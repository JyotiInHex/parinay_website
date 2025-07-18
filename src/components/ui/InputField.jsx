import FormField from "./FormField";

export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
}) {
  return (
    <FormField label={label} error={error}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={0}
        className="w-full border-2 border-pink-500 rounded-md px-3 py-2 
        text-base text-zinc-900 font-semibold font-mono shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200 ease-in-out"
      />
    </FormField>
  );
}
