import { verifyJWT } from "@/lib/auth/JWT";
import ProfileMain from "@/components/layouts/(userProfile)/profileMain";

export default async function Profile() {
  const { valid, user } = await verifyJWT();
  return (<ProfileMain {...user} valid={valid} />);
};

