// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
// let verify = request.cookies.get("loggedin");
// console.log(verify);

// 	return NextResponse.redirect(new URL("/login", request.url));
// }

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/", "/users/:path+", "/deeds/:path*"],
};
