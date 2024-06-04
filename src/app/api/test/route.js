import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(request) {
    // Initialize Clerk auth for the current session
    const { userId, sessionId, getToken } = auth(request);

    // Check if the user is authenticated (i.e., has a valid session)
    if (!sessionId) {
        return new Response("Unauthorized - No valid session", {
            status: 401,
        });
    }

    // Example of role checking, uncomment if role-based access is required
    // if (!hasRole("admin")) {
    //     return new Response("Unauthorized - Insufficient permissions", {
    //         status: 403,
    //     });
    // }

    // Proceed with the API logic after authentication is confirmed
    return NextResponse.json({ test: "Hello World" });
}
    