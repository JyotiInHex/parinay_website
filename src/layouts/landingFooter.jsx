import Image from "next/image";
import { motion } from "framer-motion";
import { landingPage } from "@/data/siteStaticData";
import Link from "next/link";
import { CustomBtn2 } from "@/components/ui/customBtn";

const LandingFooter = () => {
  const { logo, description, links, copyright, endParagraph } =
    landingPage.footer;
  return (
    <>
      <figure className="w-full h-full lg:h-fit mt-10 py-5 grid lg:block place-content-center">
        <Image
          src={logo}
          width={500}
          height={500}
          alt="footer_logo"
          className="object-cover w-full h-fit"
        />
      </figure>
      <h5 className="text-lg text-zinc-500 font-trap font-semibold">{description}</h5>
      <hr className="my-6 w-full border border-x-zinc-900 rounded-full" />
      <footer className="w-full h-fit lg:h-full flex flex-col items-center justify-center">
        <ul className="flex flex-col lg:flex-row items-center gap-3 mb-5">
          {links.map((link, idx) => {
            return (
              <li key={idx}>
                <CustomBtn2 type="button" path={link.path}>
                  {link.name}
                </CustomBtn2>
              </li>
            );
          })}
        </ul>
        <h6 className="text-base text-zinc-800 font-trap font-semibold">
          {copyright}
        </h6>
        <p className="text-sm text-zinc-600 font-trap font-semibold">
          {endParagraph}
        </p>
      </footer>
    </>
  );
};

export default LandingFooter;
