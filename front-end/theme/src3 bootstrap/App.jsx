import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const App = () => (
  <ThemeProvider>
    <div className="container py-5">
      <div className="card p-5 text-center">
        <h1>Bootstrap Theme</h1>
        <ThemeToggle />
      </div>
    </div>
  </ThemeProvider>
);

export default App;
