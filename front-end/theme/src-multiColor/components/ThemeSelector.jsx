import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const themes = ["default","dark","forest","sunset","ocean"];

export default function ThemeSelector() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="theme-selector">
      {themes.map(t => (
        <button
          key={t}
          className={`theme-button ${t}`}
          style={{ opacity: theme === t ? 1 : 0.5 }}
          onClick={() => changeTheme(t)}
          title={t}
        />
      ))}
    </div>
  );
}
