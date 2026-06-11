import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy runs on every matched request before it reaches a route handler
 * or page. Add authentication checks, locale redirects, request logging, etc.
 *
 * Next.js 16 renamed "middleware" → "proxy". This file replaces src/middleware.ts.
 * Docs: https://nextjs.org/docs/messages/middleware-to-proxy
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── Example: request ID header ──────────────────────────────────────────
  const requestId = crypto.randomUUID();
  const response = NextResponse.next();
  response.headers.set("X-Request-Id", requestId);

  // ── Example: simple auth guard (uncomment and adapt) ────────────────────
  // const token = request.cookies.get("session")?.value;
  // const isProtected = pathname.startsWith("/dashboard");
  // if (isProtected && !token) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // ── Example: locale redirect (uncomment and adapt) ──────────────────────
  // const locale = request.cookies.get("locale")?.value ?? "en";
  // if (!pathname.startsWith(`/${locale}`)) {
  //   return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  // }

  void pathname; // remove this line when using pathname above

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image  (image optimisation)
     * - favicon.ico, sitemap.xml, robots.txt
     * - Public files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
