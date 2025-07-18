import { motion } from "framer-motion";
import { landingPage } from "@/data/siteStaticData";
import SectionTitle from "@/components/ui/sectionTitle";
import Arrow from "../../public/assets/svg/arrow";
import ImageCard from "@/components/ui/imageCard";

export default function StandOutSection() {
  const { title, cards, image } = landingPage.whyStandOut;

  return (
    <div className="select-none w-auto h-max">
      <SectionTitle className="text-center text-3xl font-trap font-bold">
        {title}
      </SectionTitle>
      <div className="py-14 grid grid-cols-[auto_1fr_auto] items-center gap-x-10 gap-6 w-full h-full">
        <div className="space-y-6">
          {cards.slice(0, 2).map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 350, rotate: 20 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 1,
                ease: "anticipate",
                delay: index * 0.15,
              }}
              className="active"
            >
              <Card className="rounded-xl drop-shadow-2xl drop-shadow-[#27272a0e] activeContainer">
                <p className="flex flex-row gap-2.5 items-center text-lg text-zinc-800 group-hover:text-white font-trap font-semibold transition-all duration-300 ease-in-out activeText">
                  <Arrow width={20} height={20} />
                  {card.title}
                </p>
                <h3 className="text-xl text-zinc-800 group-hover:text-white font-trap font-semibold transition-all duration-300 ease-in-out activeText">
                  {card.description}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>

        <figure className="relative">
          <ImageCard
            imagePath={image}
            width={1000}
            height={1000}
            className="rounded-xl w-fit h-auto"
          />
        </figure>

        <div className="space-y-6">
          {cards.slice(2, 4).map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -360, rotate: -20 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 1,
                ease: "anticipate",
                delay: index * 0.15,
              }}
            >
              <Card className="rounded-xl drop-shadow-2xl drop-shadow-[#27272a0e]">
                <p className="flex flex-row gap-2.5 items-center text-lg text-zinc-800 font-trap font-semibold transition-all duration-300 ease-in-out">
                  <Arrow width={20} height={20} />
                  {card.title}
                </p>
                <h3 className="text-xl text-zinc-800 font-trap font-semibold transition-all duration-300 ease-in-out">
                  {card.description}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Card = ({ children, className }) => {
  return (
    <motion.div
      className={`p-5 bg-white w-fit h-max max-w-[31vw] space-y-6 transition-color duration-700 ease-linear ${className}`}
    >
      {children}
    </motion.div>
  );
};
