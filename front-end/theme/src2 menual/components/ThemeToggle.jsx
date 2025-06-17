import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <button className="toggle-btn" onClick={toggleTheme}>{theme === "dark" ? "Light" : "Dark"} Mode</button>;
};
export default ThemeToggle;
