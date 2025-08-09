import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

function redirectWithToast(url, toastCode, request) {
    const response = NextResponse.redirect(new URL(url, request.url));
    response.cookies.set("toastMsg", toastCode);
    return response;
}

export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("auth_token")?.value;

    if (pathname === "/signIn" && token) {
        try {
            const { payload } = await jwtVerify(token, JWT_SECRET);
            const userID = payload?.id;

            if (!userID) { throw new Error("Token payload missing user ID"); }
            return redirectWithToast(`/profile/${userID}`, "302", request);

        } catch (error) {
            const response = redirectWithToast("/signIn", "401", request);
            response.cookies.set("auth_token", "", {
                maxAge: 0,
                path: "/",
                httpOnly: true,
                secure: true,
                sameSite: "Lax",
            });
            return response;
        }
    }

    if (pathname.startsWith("/profile")) {
        if (!token) { return redirectWithToast("/signIn", "403", request); }

        try {
            await jwtVerify(token, JWT_SECRET);
            return NextResponse.next();
        } catch (error) {
            const response = redirectWithToast("/signIn", "401", request);
            response.cookies.set("auth_token", "", {
                maxAge: 0,
                path: "/",
                httpOnly: true,
                secure: true,
                sameSite: "Lax",
            });
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile/:path*", "/signIn"],
};
