import { landingPage } from "@/data/siteStaticData";
import {
  WordStaggerFlowTitle,
} from "@/components/ui/sectionTitle";
import CustomForm from "@/components/ui/customForm";

export default function GetInTouch() {
  const { title, subtitle, socialLinks, contactDetails, formDetails } =
    landingPage.contactSection;
  return (
    <div className="w-full h-full select-none grid grid-cols-1 lg:grid-cols-[40%_1fr] items-start justify-between gap-10 lg:gap-20">
      <div className="flex flex-col space-y-14">
        <ul className="flex flex-col items-start gap-10">
          {contactDetails.map((details, index) => {
            return (
              <li key={index} className="flex items-start gap-5">
                <span className="p-2 border border-solid border-zinc-200 rounded-sm">
                  {details.icon}
                </span>
                <span className="mt-2.5 text-lg text-zinc-800 font-porinoi-sans font-medium tracking-wide">
                  <WordStaggerFlowTitle className="font-semibold">
                    {details.label}
                  </WordStaggerFlowTitle>
                  <WordStaggerFlowTitle className="text-base text-zinc-500">
                    {details.subLabel}
                  </WordStaggerFlowTitle>
                  <WordStaggerFlowTitle className="mt-2 text-base font-bold tracking-widest">
                    {details.address}
                  </WordStaggerFlowTitle>
                </span>
              </li>
            );
          })}
        </ul>
        <div className="px-5 space-y-3">
          <WordStaggerFlowTitle className="w-auto h-auto text-left text-4xl text-zinc-800 font-porinoi-sans font-bold">
            {title}
          </WordStaggerFlowTitle>
          <WordStaggerFlowTitle
            className="justify-start text-lg text-zinc-900 font-medium
            font-porinoi-sans"
          >
            {subtitle}
          </WordStaggerFlowTitle>
        </div>
      </div>
      <div className="px-5">
        <CustomForm {...formDetails} />
      </div>
    </div>
  );
}
