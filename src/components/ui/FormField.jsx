import Error from "../../../public/assets/svg/error";
export default function FormField({ label, error, children }) {
  return (
    <div className="w-full relative">
      {label && (
        <label className="block text-sm font-trap font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      {children}
      
      <h6
        className={`absolute top-1/2 -translate-y-1/2 right-3 transition-all duration-200 ease-initial ${
          error ? "opacity-100 visible" : "opacity-0 invisible"
        } pointer-events-none select-none`}
      >
        <Error width={20} height={20} color={"oklch(57.7% 0.245 27.325)"} />
      </h6>
    </div>
  );
}
