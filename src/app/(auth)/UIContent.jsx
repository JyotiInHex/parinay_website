import { motion } from "framer-motion";
import { CustomBtn2 } from "@/components/ui/customBtn";
import CustomForm from "@/components/ui/customForm";

export const AuthHero = ({ title, subTitle, button }) => {
  return (
    <div className="w-full h-fit lg:p-34 lg:px-18 md:p-10 md:px-0 flex items-center md:items-start justify-center flex-col gap-2 bgnu">
      <motion.h3
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "linear" }}
        className="text-center md:text-left text-2xl md:text-4xl text-zinc-900 font-black font-trap"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "linear" }}
        className="text-center md:text-left text-lg lg:text-2xl text-zinc-500 font-semibold font-trap"
      >
        {subTitle}
      </motion.p>

      <motion.span
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "linear" }}
        className="flex flex-col md:flex-row items-center justify-center text-base font-trap text-zinc-900 font-semibold gap-2 whitespace-nowrap"
      >
        {button.label}{" "}
        <CustomBtn2 path={button.path} icon={false}>
          {button.name}
        </CustomBtn2>
      </motion.span>
    </div>
  );
};

export const AuthForm = ({ formDetails }) => {
  const { formTitle, description, formFields, submitButton, formLowerPart } =
    formDetails;
  return (
    <CustomForm
      formTitle={formTitle}
      description={description}
      formFields={formFields}
      submitButton={submitButton}
      backGround={"#dbe5ffff"}
    />
  );
};
