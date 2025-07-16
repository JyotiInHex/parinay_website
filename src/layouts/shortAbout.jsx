import { motion } from "framer-motion";
import { landingPage } from "@/data/siteStaticData";
import Paragraph from "../components/ui/paragraph";
import CustomBtn from "../components/ui/customBtn";
import Star from "../../public/assets/svg/star";
import SectionTitle from "@/components/ui/sectionTitle";

const ShortAboutSection = () => {
  const { about } = landingPage;
  return (
    <div className="flex md:flex-row items-center gap-10 select-none">
      <div className="w-2/3 space-y-5">
        <SectionTitle className="font-semibold text-xl text-zinc-800 font-trap">
          {about.title}
        </SectionTitle>

        <Paragraph
          value={about.description}
          className={"text-zinc-600 text-2xl font-trap font-medium justify-between"}
        />

        <ul className="flex flex-wrap flex-row items-center gap-3 text-zinc-600 text-lg font-trap font-medium">
          {about.points.map((feature, index) => (
            <motion.li
              key={index}
              className="text-zinc-600 text-lg font-trap font-medium flex items-start gap-1.5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
                delay: index * 0.25,
              }}
            >
              <figure className="w-6 h-6 flex items-center justify-center fill-pink-600">
                <Star width={15} height={15} />
              </figure>
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="md:px-10 grid place-content-center">
        <CustomBtn path="about" icon={true}>
          {about.buttonValue}
        </CustomBtn>
      </div>
    </div>
  );
};

export default ShortAboutSection;
