import React from "react";
import ThemeSelector from "./ThemeSelector";

export default function Layout({ children }) {
  return (
    <>
      <div className="sidebar">
        <h2>My App</h2>
        <nav>
          <a href="#dashboard">Dashboard</a><br/>
          <a href="#settings">Settings</a>
        </nav>
      </div>
      <div className="topbar">
        <h3>Page Title</h3>
        <ThemeSelector />
      </div>
      <div className="content">
        {children}
      </div>
    </>
  );
}
