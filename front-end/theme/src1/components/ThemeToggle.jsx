import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className="px-4 py-2 bg-primary text-white rounded"
      onClick={toggleTheme}
    >
      {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
};
export default ThemeToggle;
