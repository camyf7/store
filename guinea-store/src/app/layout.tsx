import type { Metadata } from "next";
import { DM_Sans, Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import MiddleNav from "@/components/NavBar/MiddleNav";

const dmSans = DM_Sans({
  weight: "400",
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const golosText = Golos_Text({
  weight: "400",
  variable: "--font-golos-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guinea Store",
  description: "e-commerce moderno e profissional para produtos de porquinhos-da-índia.",
};

const waffleMango = localFont({
  src: [
    {
      path: "../../public/waffle-mango/Waffle-Mango.ttf",
      weight: "400",
      style: "normal",
    },
    
  ],
  variable: "--font-waffle-mango",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${dmSans.variable} ${golosText.variable} ${waffleMango.variable}`}
      >
        <NavBar />

        {children}
      </body>
    </html>
  );
}
