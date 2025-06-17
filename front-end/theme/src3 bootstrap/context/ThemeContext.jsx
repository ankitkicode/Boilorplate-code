import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const t = localStorage.getItem("theme") || "light";
    setTheme(t);
    document.body.classList.toggle("bg-dark", t==="dark");
    document.body.classList.toggle("text-light", t==="dark");
  }, []);
  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    setTheme(t);
    localStorage.setItem("theme", t);
    document.body.classList.toggle("bg-dark", t==="dark");
    document.body.classList.toggle("text-light", t==="dark");
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
