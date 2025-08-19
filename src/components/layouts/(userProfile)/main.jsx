"use client";
import { motion } from "framer-motion";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import { profilePage } from "@/data/siteStaticData";
import Arrow from "../../../../public/assets/svg/arrow";
import Arrow45deg from "../../../../public/assets/svg/arrow45deg";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Main({ userName, name, profileStatus }) {
  const { pendingProfile, completedProfile } = profilePage;
  const [profileState, setProfileState] = useState(pendingProfile);
  const nameShort = name.split(" ")[0];
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  useLayoutEffect(() => {
    if (profileStatus !== "pending") {
      setProfileState(completedProfile);
    } else {
      setProfileState(pendingProfile);
    }
  }, [profileStatus, pendingProfile, completedProfile]);

  return (
    <div className="px-5 lg:px-24 lg:py-14 select-none lg:space-y-3 space-y-2 py-16">
      <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 items-start justify-between">
        <div className="w-35 lg:w-38">
          <WordStaggerFlowTitle
            delayStep={0.06}
            className="lg:text-base text-zinc-800 nth-[3]:text-red-500 font-porinoi-sans font-semibold uppercase leading-tight"
          >
            {profileState.title.replace("{Name}", nameShort)}
          </WordStaggerFlowTitle>
        </div>

        <div className="px-5 lg:px-20 w-fit">
          <div className="w-35 lg:w-54">
            <WordStaggerFlowTitle className="text-2xl lg:text-[35px] text-zinc-800 font-porinoi-sans font-semibold uppercase leading-tight">
              {profileState.subTitle[0]}
            </WordStaggerFlowTitle>
          </div>
          <div className="w-fit flex flex-row items-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "30%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 1.2,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="overflow-hidden"
            >
              <Arrow width={60} height={30} />
            </motion.div>
            <div className="w-50 lg:w-[300px]">
              <WordStaggerFlowTitle className="text-2xl lg:text-[35px] text-zinc-800 font-porinoi-sans font-semibold uppercase leading-tight">
                {profileState.subTitle[1]}
              </WordStaggerFlowTitle>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.52,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="w-auto flex flex-col items-end"
        >
          {profileStatus === "pending" ? (
            <>
              <Link
                href={profileState.context.callToAction.button.path + "/" + id}
                className="flex flex-col justify-between gap-y-8 lg:w-[25vw] h-auto p-5 bg-red-500"
              >
                <span className="grid grid-cols-[auto_auto] items-center">
                  <span className="lg:w-[80%]">
                    <WordStaggerFlowTitle className="justify-end text-base lg:text-lg text-white font-porinoi-sans font-semibold uppercase leading-tight">
                      {profileState.context.callToAction.heading}
                    </WordStaggerFlowTitle>
                  </span>
                  <Arrow45deg
                    width={45}
                    height={45}
                    className="text-white scale-65 lg:scale-100"
                  />
                </span>

                <span className="p-5 py-8 w-[135px] h-[135px] border-2 bg-red-500 border-white flex flex-col items-center justify-center shadow-[40px_-16px_0px_#ffffff30] rounded-full text-lg lg:text-xl text-white font-porinoi-sans font-semibold uppercase">
                  {profileState.context.callToAction.button.label}
                </span>
              </Link>

              <div className="mt-3 lg:w-[70%]">
                <WordStaggerFlowTitle className="justify-end text-xs lg:text-sm text-zinc-400 font-porinoi-sans font-semibold uppercase leading-tight">
                  {profileState.context.callToAction.message}
                </WordStaggerFlowTitle>
              </div>
            </>
          ) : (
            completedProfile.context.callToAction.buttons.map((btn, idx) => {
              return (
                <span
                  key={idx}
                  className="relative lg:w-[25vw] h-auto p-5 border-t first:border-t-0 border-zinc-300 before:w-full before:h-full before:absolute before:inset-0 after:absolute after:inset-0 after:-z-[1] after:scale-y-0 after:origin-top after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-y-100 hover:after:origin-bottom cursor-pointer group"
                >
                  <Link
                    href={btn.path + "/" + id}
                    className="z-0 relative flex flex-row items-center justify-between gap-y-8"
                  >
                    <span className="lg:w-[80%] space-x-3">
                      <WordStaggerFlowTitle className="justify-end text-base lg:text-lg text-zinc-800 font-porinoi-sans font-semibold uppercase leading-tight transition-colors duration-300 ease-linear before:w-full before:h-full before:absolute before:inset-0 after:absolute after:inset-0 after:-z-[1] after:scale-y-0 after:origin-top after:bg-red-500 after:transition-transform after:duration-300 hover:after:scale-y-100 hover:after:origin-bottom  group-hover:text-white">
                        {btn.label}
                      </WordStaggerFlowTitle>
                    </span>
                    {btn.icon}
                  </Link>
                </span>
              );
            })
          )}
        </motion.div>
      </div>

      <div className="lg:pl-30">
        <div className="lg:pl-30 flex items-center gap-x-5 ">
          <WordStaggerFlowTitle className="text-base text-zinc-800 font-porinoi-sans font-semibold">
            {profileStatus === "completed" ? "Profile" : "Welcome"}
          </WordStaggerFlowTitle>
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.55,
              delay: 0.3,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="rounded-full border-[1.5px]"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:w-[60%] space-y-10">
            <WordStaggerFlowTitle className="text-xl text-zinc-800 font-porinoi-sans font-semibold uppercase last:text-pink-600">
              {profileState.description[0].replace("{UserName}", userName)}
            </WordStaggerFlowTitle>
            <WordStaggerFlowTitle className="text-xl text-zinc-800 font-porinoi-sans font-semibold uppercase">
              {profileState.description[1]}
            </WordStaggerFlowTitle>
          </div>

          <div className="mt-10">
            <WordStaggerFlowTitle className="text-xl text-zinc-800 font-porinoi-sans font-semibold uppercase">
              {profileState.context.title}
            </WordStaggerFlowTitle>

            <ul className="flex flex-col overflow-hidden">
              {profileState.context.bulletPoints.map((point, idx) => {
                return (
                  <motion.li
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.65,
                      ease: "linear",
                    }}
                    key={idx}
                    className="py-5 first:border-t-0 border-t border-zinc-500"
                  >
                    <WordStaggerFlowTitle className="text-sm text-zinc-800 font-porinoi-sans font-medium">
                      {point}
                    </WordStaggerFlowTitle>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-10 w-2/3 lg:w-3/5 space-y-2">
              <WordStaggerFlowTitle className="text-sm text-zinc-400 font-porinoi-sans font-semibold uppercase">
                {profileState.context.subtitle[0]}
              </WordStaggerFlowTitle>
              <WordStaggerFlowTitle className="text-sm text-zinc-400 font-porinoi-sans font-semibold uppercase">
                {profileState.context.subtitle[1]}
              </WordStaggerFlowTitle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
