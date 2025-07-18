import Link from "next/link";
import { landingPage } from "@/data/siteStaticData";
import Paragraph from "@/components/ui/paragraph";
import SectionTitle from "@/components/ui/sectionTitle";
import CustomForm from "@/components/ui/customForm";
import { TooltipText } from "@/components/ui/tooltipText";

export default function GetInTouch() {
  const { title, subtitle, socialLinks, contactDetails, formDetails } =
    landingPage.contactSection;
  return (
    <div className="w-full h-full select-none grid grid-cols-[40%_1fr] items-start justify-between gap-20">
      <div className="flex flex-col space-y-14">
        <ul className="flex flex-col items-start gap-10">
          {contactDetails.map((details, index) => {
            return (
              <li key={index} className="flex items-start gap-5">
                <span className="p-2 border border-solid border-zinc-200 rounded-sm">
                  {details.icon}
                </span>
                <span className="mt-2.5 text-lg text-zinc-800 font-trap font-medium tracking-wide">
                  <h6 className="font-semibold">{details.label}</h6>
                  <p className="text-base text-zinc-500">{details.subLabel}</p>
                  <h5 className="w-2/3 mt-2 text-base font-bold tracking-widest">
                    {details.address}
                  </h5>
                </span>
              </li>
            );
          })}
        </ul>
        <div className="px-5 space-y-3">
          <SectionTitle className="w-auto h-auto text-left text-4xl text-zinc-800 font-trap font-bold">
            {title}
          </SectionTitle>
          <Paragraph
            value={subtitle}
            className="justify-start text-lg text-zinc-900 font-medium font-trap"
          />
        </div>
        <ul className="flex items-center justify-start gap-3 px-5">
          {socialLinks.map((link, idx) => {
            return (
              <li key={idx}>
                <TooltipText
                  tooltip={link.handleName}
                  customStyle={{ backgroundImage: link.backgroundColor, fontSize: "18px"}}
                >
                  <Link href={link.url} target="_blank">
                    {link.icon}
                  </Link>
                </TooltipText>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <CustomForm {...formDetails} />
      </div>
    </div>
  );
}
