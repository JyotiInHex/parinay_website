import AuthBackground from "@/components/ui/authBackground";
import { CustomLink } from "@/components/ui/customLink";
import {
  StartFour,
  StartOne,
  StartThree,
  StartTwo,
} from "../../../public/assets/svg/stars";
import LayoutWrapper from "@/global/LayoutWrapper";

export const metadata = {
  title: "Authentication",
  description: "Log in or join Parinay – where love begins.",
};

export default function AuthLayout({ children }) {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* <div className="overflow-x-hidden w-screen max-w-screen"><AuthBackground /></div> */}
        
        
        {children}





        {/* <p className="mt-0 lg:mt-8 md:mt-20 text-center md:col-span-2 text-xs md:text-base text-zinc-500 font-trap select-none pointer-events-none">
          "All profiles go through strict Verification. We never share your
          data. Your safety is our first priority."
        </p>

        <ul className="hidden lg:flex md:flex items-center justify-around lg:mt-6 md:mt-8 w-full h-auto lg:py-4 md:py-5 lg:px-15 bg-gradient-to-r from-orange-500 to-pink-600 select-none pointer-events-none">
          {[
            {
              name: "Trusted Connection",
              icon: <StartOne width={20} fill={"white"} />,
            },
            {
              name: "Verified with Love",
              icon: <StartTwo width={20} fill={"white"} />,
            },
            {
              name: "Rooted in Culture",
              icon: <StartThree width={20} fill={"white"} />,
            },
            {
              name: "New Age Platform",
              icon: <StartFour width={20} fill={"white"} />,
            },
          ].map((tags, index) => (
            <li
              key={index}
              className="text-base text-white font-medium font-mono flex items-center justify-center gap-2.5"
            >
              <figure>{tags.icon}</figure>
              {tags.name}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex md:flex lg:flex-row md:flex-col items-center justify-between md:gap-4 w-full h-fit lg:mt-0 md:mt-5 lg:py-8 lg:px-15 bg-[#f9efdd] ">
          <ul className="flex items-center gap-2.5">
            {[
              { name: "Terms_Of_Use", path: "termsOfUse" },
              { name: "Privacy_Policy", path: "privacyPolicy" },
              { name: "FAQ", path: "faqPage" },
            ].map((tags, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-2.5"
              >
                <CustomLink
                  key={index}
                  index={index}
                  path={tags.path}
                  label={tags.name}
                />
                <span
                  key={index + "-bar"}
                  className="w-0.5 h-5 bg-zinc-600 rounded-full "
                ></span>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block md:block select-none pointer-events-none">
            <p className="text-sm text-zinc-900 font-trap font-semibold">
              Copyright &copy; {new Date().getFullYear()} Parinay. All rights
              reserved. Made with <span className="text-pink-600">❤</span> in
              Assam.
            </p>
            <p className="text-sm text-zinc-900 font-trap font-semibold lg:text-right md:text-center">
              A platform by dreamers, for soulmates.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}
