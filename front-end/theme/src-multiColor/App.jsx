import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import ContentPage from "./components/ContentPage";
import "./styles/themes.css";

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ContentPage />
      </Layout>
    </ThemeProvider>
  );
}
