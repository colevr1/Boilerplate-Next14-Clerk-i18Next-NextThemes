"use client";
import { SignIn } from "@clerk/nextjs";
import { useTheme } from 'next-themes';
import { dark } from "@clerk/themes";

export default function SignInComponent() {
  const { resolvedTheme } = useTheme();
  const clerkTheme = resolvedTheme === "dark" ? dark : undefined;

  return <SignIn appearance={{ baseTheme: clerkTheme }} />;
}