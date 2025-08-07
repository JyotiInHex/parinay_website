import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import User from "@/models/usersSchema";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export const createJWT = async (payload, keepLogin) => {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(keepLogin ? "30d" : "1d")
    .sign(JWT_SECRET);

  return token;
};


export const verifyJWT = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) return { valid: false, user: null };

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    await connectDB();
    const user = await User.findById(payload.id).select("-password");
    if (!user) return { valid: false, user: null};

    return {
      valid: true,
      user: {
        id: user._id.toString(),
        userName: user.userName,
        name: user.name,
        phone: user.phone,
        profileStatus: user.profileStatus,
        token: payload.id,
      },
    };
  } catch (error) {
    console.error("JWT verification failed:", error);
    return { valid: false, user: null, redirect: "/signIn" };
  }
};
