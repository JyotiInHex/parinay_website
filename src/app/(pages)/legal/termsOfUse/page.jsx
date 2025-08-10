import TermOfUseContent from "@/components/layouts/(termOfUse)/contentSection";
import TermOfUseHero from "@/components/layouts/(termOfUse)/heroSection";

const TermOfUse = () => {
  return (
    <div className="w-full">
      <TermOfUseHero />
      <TermOfUseContent/>
    </div>
  );
};

export default TermOfUse;
