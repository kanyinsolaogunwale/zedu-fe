import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign up | Zedu",
};

export default function SignUpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
