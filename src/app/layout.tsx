import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";
import "./layout.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const tektur = Tektur({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={`${tektur.className}`}>
        {/* First loaded viewport Background */}
        <div className="hero" />

        {/* Main content */}
        <main className="min-h-lvh bg-black justify-center items-center flex flex-col pt-24">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
