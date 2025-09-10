import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-6">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
