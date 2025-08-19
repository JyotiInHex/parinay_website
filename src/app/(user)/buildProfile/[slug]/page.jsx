import { verifyJWT } from "@/lib/auth/JWT";
import Build from "@/components/layouts/(userProfile)/build";
import ProfileFooter from "@/app/(user)/footer";

const CompleteProfile = async () => {
  const { valid, user } = await verifyJWT();
  return (
    <>
      <div className="w-full h-auto lg:min-h-max select-none">
        <Build {...user} valid={valid} />
        <ProfileFooter />
      </div>
    </>
  );
};

export default CompleteProfile;
