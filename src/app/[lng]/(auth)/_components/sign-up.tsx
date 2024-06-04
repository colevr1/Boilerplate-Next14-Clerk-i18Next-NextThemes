"use client";
import { SignUp } from "@clerk/nextjs";
import { useTheme } from 'next-themes';
import { dark } from "@clerk/themes";

export default function SignUpComponent() {
  const { resolvedTheme } = useTheme();
  const clerkTheme = resolvedTheme === "dark" ? dark : undefined;

  return <SignUp appearance={{ baseTheme: clerkTheme }} />;
}