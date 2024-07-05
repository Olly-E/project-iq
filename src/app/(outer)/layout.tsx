"use client";
import React from "react";
import Navbar from "../layouts/navbar";

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  return (
    <div className="xl:h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
