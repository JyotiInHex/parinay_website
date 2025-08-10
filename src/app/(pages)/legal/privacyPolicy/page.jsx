import PrivacyPolicyContent from "@/components/layouts/(privacyPolicyPage)/contentSection";
import PrivacyPolicyHero from "@/components/layouts/(privacyPolicyPage)/heroSection";

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
    </div>
  );
};

export default PrivacyPolicy;
