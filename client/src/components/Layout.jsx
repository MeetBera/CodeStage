import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* Add padding to ensure content starts below the fixed Navbar */}
      <main className="mt-16">{children}</main>
    </div>
  );
};

export default Layout;