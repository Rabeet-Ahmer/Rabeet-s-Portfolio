import type { Metadata } from "next";
import { Epilogue, Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/animations/custom-cursor";
import { Preloader } from "@/components/animations/preloader";
import { ScrollProgress } from "@/components/animations/scroll-progress";


const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-headline-sans",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-label-sans",
});

export const metadata: Metadata = {
  title: "Rabeet Ahmer — Digital Curator",
  description:
    "Building immersive digital experiences that balance industrial strength with academic grace. Creative strategy, curation, and editorial design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        epilogue.variable,
        notoSerif.variable,
        manrope.variable
      )}
    >
      <body className="min-h-full flex flex-col font-body">
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />
          <ScrollProgress />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
