import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const t = localStorage.getItem("theme") || "default";
    setTheme(t);
    document.body.setAttribute("data-theme", t);
  }, []);

  const changeTheme = (t) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    document.body.setAttribute("data-theme", t);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
