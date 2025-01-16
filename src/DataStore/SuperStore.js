import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { ConfigProvider } from "./ConfigContext";

const SuperStore = ({ children }) => {
  return (
    <ConfigProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ConfigProvider>
  );
};

export default SuperStore;
