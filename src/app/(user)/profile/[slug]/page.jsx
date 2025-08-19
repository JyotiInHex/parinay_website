import { verifyJWT } from "@/lib/auth/JWT";
import Main from "@/components/layouts/(userProfile)/main";

export default async function Profile() {
  const { valid, user } = await verifyJWT();
  return <Main {...user} valid={valid} />;
}
