import { Noto_Sans } from "next/font/google";
import React from "react";
import Footer from "../commons/Footer";
import Navbar from "../commons/Navbar";

const notosans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notosans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`${notosans.variable}`}>
      <Navbar />
      <main className="min-h-[1000px]">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
