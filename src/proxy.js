import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";
// This function can be marked `async` if using `await` inside

//getting session from backend to get user
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // if no session means if no logged-in redirect to login page
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
// apply to my-bookings page
export const config = {
  matcher: ["/my-bookings", "/add-destination", "/destinations/:path"],
};
