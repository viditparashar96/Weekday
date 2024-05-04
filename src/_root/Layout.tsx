import React from "react";
import "./Layout.css";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
