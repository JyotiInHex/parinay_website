import { CustomLink } from "@/components/ui/customLink";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";
import { profilePage } from "@/data/siteStaticData";
import React from "react";

const ProfileFooter = () => {
  const { links, credit } = profilePage.footer;
  return (
    <div className="px-5 pb-6 lg:px-24 lg:py-10 w-full h-auto flex flex-col lg:flex-row justify-between items-center gap-6 select-none">
      <ul className="flex flex-row gap-3 items-center lg:items-end">
        {links.map((link, idx) => {
          return (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="text-zinc-700 text-lg">|</span>}
              <li>
                <CustomLink
                  index={idx}
                  label={link.label}
                  path={link.path}
                  className={
                    "z-[1] text-sm text-zinc-800 font-porinoi-sans font-semibold cursor-pointer"
                  }
                />
              </li>
            </React.Fragment>
          );
        })}
      </ul>
      <div>
        <WordStaggerFlowTitle className="justify-center lg:justify-end text-sm text-zinc-800 font-porinoi-sans font-semibold">
          {credit.copyright}
        </WordStaggerFlowTitle>
        <WordStaggerFlowTitle className="justify-center lg:justify-end text-xs text-zinc-500 font-porinoi-sans font-medium">
          {credit.note}
        </WordStaggerFlowTitle>
      </div>
    </div>
  );
};

export default ProfileFooter;
