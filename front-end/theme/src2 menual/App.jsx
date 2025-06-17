import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/manual.css";

const App = () => (
  <ThemeProvider>
    <div className="theme-background">
      <div className="theme-card">
        <h1>Manual CSS Theme</h1>
        <ThemeToggle />
      </div>
    </div>
  </ThemeProvider>
);

export default App;
