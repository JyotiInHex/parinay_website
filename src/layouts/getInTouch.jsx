import Paragraph from "@/components/ui/paragraph";
import SectionTitle from "@/components/ui/sectionTitle";
import { landingPage } from "@/data/siteStaticData";

export default function GetInTouch() {
  const { title, description, contactDetails } = landingPage.contactSection;
  return (
    <div className="w-full h-full select-none grid grid-cols-[40%_1fr] items-start justify-between gap-20">
      <ul className="flex flex-col items-start gap-10">
        {contactDetails.map((details, index) => {
          return (
            <li className="flex items-start gap-5">
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
        <Paragraph
          value={description}
          className="mt-2 text-xl text-zinc-900 font-semibold font-trap "
        />
      </ul>

      <div className="py-10 px-6 rounded-2xl">
        <SectionTitle className="w-full h-auto text-left text-3xl text-zinc-800 font-trap font-bold">
          {title}
        </SectionTitle>

        
      </div>
    </div>
  );
}
