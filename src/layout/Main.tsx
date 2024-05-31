import React, { ReactNode } from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full w-full overflow-x-hidden bg-primary ">
      <Header />

      <main className="p-6">{children}</main>

      <Footer />
    </div>
  );
}
