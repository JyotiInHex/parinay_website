"use server";

import { connectDB } from "@/lib/db";
import { cookies } from "next/headers";
import User from "@/models/users";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import { WordStaggerFlowTitle } from "@/components/ui/sectionTitle";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

const Profile = async ({ params }) => {
  await connectDB();
  const userSlug = (await params).slug;
  const token = (await cookies()).get("auth_token")?.value;

  const { payload } = await jwtVerify(token, JWT_SECRET);
  const user = await User.findById(payload.id).lean();

  if (!user || user._id.toString() !== userSlug) {
    return redirect("/");
  }

  return (
    <div className="p-8">
      Welcome, <WordStaggerFlowTitle>{user.name}</WordStaggerFlowTitle> 👋
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default Profile;
