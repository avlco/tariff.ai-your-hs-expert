import React from "react";
import Footer from "./components/home/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen font-sans antialiased">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
