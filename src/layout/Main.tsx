import React, { ReactNode } from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen h-screen overflow-x-hidden md:flex md:flex-col md:items-center">
      <div className="sticky top-0 ">
        <Header />
      </div>
      <main className="flex-1">{children}</main>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
