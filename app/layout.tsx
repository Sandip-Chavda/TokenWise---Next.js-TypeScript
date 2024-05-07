import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Navigation/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const font = Lora({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TokenWise || NextJS TypeScript TailwindCSS",
  description: "Created using NextJS, TypeScript and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav />

        {children}

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
