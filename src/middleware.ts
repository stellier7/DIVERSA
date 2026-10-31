import { NextResponse, type NextRequest } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Allow setup page to always pass through
  if (pathname === "/admin/setup" || pathname.startsWith("/admin/setup/")) {
    return NextResponse.next();
  }

  if (pathname === "/admin/login" || pathname.startsWith("/admin/login/")) {
    if (!isSupabaseConfigured()) {
      return NextResponse.next();
    }
    return updateSession(request);
  }

  if (!isSupabaseConfigured()) {
    const setupUrl = request.nextUrl.clone();
    setupUrl.pathname = "/admin/setup";
    return NextResponse.redirect(setupUrl);
  }

  const response = await updateSession(request);

  // Auth gate is enforced in admin layout via server client;
  // middleware only refreshes the session cookie.
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
