import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import {
  fallbackLng,
  languages,
  cookieName,
} from "./app/i18n/settings";

// Initialize the language preferences
acceptLanguage.languages(languages);

// Create a matcher for public routes
const isPublicRoute = createRouteMatcher([
  "/:language/sign-in(.*)",
  "/:language/sign-up(.*)",
]);

type MiddleProps = {
  response: NextResponse;
  cookieName: string;
  cookieValue: string;
};

// Function to set a language cookie
function setLanguageCookie({ response, cookieName, cookieValue }: MiddleProps) {
  const maxAge = 60 * 60 * 24 * 7; // one week
  // Set the cookie using response headers because NextResponse does not have a 'cookies' property
  const cookieHeader = `${cookieName}=${cookieValue}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax`;
  response.headers.set("Set-Cookie", cookieHeader);
}

// The clerkMiddleware wrapper that includes all the logic for path checking and language handling
export default clerkMiddleware(
  (auth, req: NextRequest) => {
    const path = req.nextUrl.pathname;
    console.log("Request path:", path);

    // Handle requests to API and Next.js system paths
    if (path.startsWith("/api") || path.startsWith("/_next")) {
      if (!isPublicRoute(req)) {
        auth().protect(); // Protect these paths if they are not public
      }
      return NextResponse.next();
    }

    // Language handling logic
    let cookieValue = req.cookies.get(cookieName)?.value;
    let headerValue = req.headers.get("Accept-Language");
    let lng = cookieValue || acceptLanguage.get(headerValue) || fallbackLng;

    //Solve the issue if you delete the cookie manually before to logout with clerk
    if (!languages.includes(lng)) {
      lng = acceptLanguage.get(headerValue) || fallbackLng;
    }

    console.log("Cookie value:", cookieValue);
    console.log("Accept-Language header value:", headerValue);
    console.log("Selected language:", lng);

    const pathSegments = req.nextUrl.pathname.split("/");
    const pathLanguage = pathSegments[1];
    let response = NextResponse.next();

    if (!languages.includes(pathLanguage) && !path.startsWith("/_next")) {
      const newPath = `/${lng}${req.nextUrl.pathname}`;
      response = NextResponse.redirect(new URL(newPath, req.url));
      if (cookieValue !== lng) {
        setLanguageCookie({ response, cookieName, cookieValue: lng });
      }
      return response;
    }

    if (!isPublicRoute(req)) {
      auth().protect(); // Protect other non-public paths
    }

    if (cookieValue !== lng) {
      setLanguageCookie({ response, cookieName, cookieValue: lng });
    }

    return response;
  },
  {
    // Configuration options for Clerk, if necessary
  }
);

export const config = {
  matcher: ["/((?!_next|static).*)"], // Ensure this matches all intended paths
};
