import type { Metadata } from "next";
import {DM_Sans} from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

const dm_sans=DM_Sans ({subsets:['latin']})

export const metadata: Metadata = {
  title: "Form Ai -Form builder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white ${dm_sans.className}  antialiased`}
      >
        {children}
        <Toaster></Toaster>
      </body>
    </html>
  );
}
