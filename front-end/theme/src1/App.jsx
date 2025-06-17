import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import themeColors from "./styles/themeColors";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  const { background, text, card } = themeColors[theme];
  return (
    <div className={`${background} ${text} min-h-screen flex items-center justify-center`}>
      <div className={`${card} p-8 rounded-lg shadow-lg`}>
        <h1 className="text-2xl mb-4">Tailwind Theme</h1>
        <ThemeToggle/>
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <Content />
  </ThemeProvider>
);
export default App;
