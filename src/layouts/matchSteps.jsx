import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { landingPage } from "@/data/siteStaticData";
import SectionTitle from "@/components/ui/sectionTitle";
import Arrow from "../../public/assets/svg/arrow";

export default function MatchStepsSection() {
  const { title, description, steps } = landingPage.stepsSection;
  return (
    <div className="w-full h-auto select-none">
      <SectionTitle className="max-w-2/6 h-auto text-left text-3xl text-zinc-800 font-trap font-bold">
        {title}
      </SectionTitle>
      <div className="mt-20 relative w-full h-auto  flex flex-col lg:flex-row gap-7">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} i={index} />
        ))}
      </div>
      <motion.p
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.995 }}
        transition={{
          y: { duration: 0.8, ease: "easeOut" },
          opacity: { duration: 0.5, ease: "easeOut" },
        }}
        className="w-2/3 mt-11 text-left text-base text-zinc-800 font-trap font-medium"
      >
        {description}
      </motion.p>
    </div>
  );
}

const StepCard = ({ step, i }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{
        x: i === 0 ? -100 : i === 2 ? 100 : 0,
        y: i === 1 ? 20 : 0,
        rotate: i === 0 ? 5 : i === 2 ? -5 : 0,
        scale: 0.8,
        width: "50%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0.995 }}
      transition={{
        x: { duration: 0.8, ease: "easeOut", delay: i * 0.15 },
        y: { duration: 0.8, ease: "easeOut", delay: i * 0.15 },
        scale: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
        rotate: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
        opacity: { duration: 0.5, ease: "easeOut", delay: i * 0.15 },
        width: { duration: 0.5, ease: "easeInOut" },
      }}
      whileHover={{
        width: "100%",
      }}
      className="h-full rounded-xl overflow-hidden "
      style={{ backgroundColor: step.color }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        className="w-fit h-fit p-6 grid grid-cols-[14rem_1fr] justify-between gap-5"
      >
        <div className="pt-12 w-full h-[40vh] flex flex-col items-start justify-start space-y-5">
          <h3 className="text-[20px] text-white font-semibold font-trap">
            {step.title}
          </h3>

          <p className="text-[22px] text-white font-semibold font-trap">
            {step.description}
          </p>

          {step.button && (
            <motion.button
              type="button"
              initial="initial"
              whileHover="hover"
              onClick={() => router.push(step.button.path)}
              className="group mt-5 text-base text-white font-trap font-semibold flex items-end justify-end gap-1.5 cursor-pointer"
            >
              <span>{step.button.text}</span>
              <Arrow
                width={30}
                height={30}
                className="group-hover:rotate-45 transition-all duration-200 ease-linear"
              />
            </motion.button>
          )}
        </div>

        <motion.figure
          variants={{
            rest: { x: 50, y: 150, scale: 0.9, rotate: 10, opacity: 0 },
            hover: { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 },
          }}
          transition={{
            duration: 0.4,
            ease: "linear",
          }}
          className="w-full min-w-[20vw] h-[40vh] overflow-hidsden rounded-2xl"
        >
          <Image
            src={step.image}
            width={1000}
            height={1000}
            alt="img"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.figure>
      </motion.div>
    </motion.div>
  );
};
