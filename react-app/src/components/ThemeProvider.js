import React, { useState, useEffect } from "react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { Picker, Item } from "@adobe/react-spectrum";

const ThemeProvider = ({ children }) => {
  const [currentSystemTheme, setCurrentSystemTheme] = useState("light");
  const [currentTheme, setCurrentTheme] = useState("system");

  useEffect(() => {
    // Detect browser/system Dark theme preference
    const detectSystemTheme = () => {
      const isDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setCurrentSystemTheme(isDarkMode ? "dark" : "light");
    };

    // Call to initially detect browser/system preference
    detectSystemTheme();

    // Monitor browser/system Dark theme preference
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", detectSystemTheme);

    // Remove listener on unmount
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", detectSystemTheme);
    };
  }, []);

  // Color Scheme is System preference if dropdown selection is "System"
  // Otherwise it is the selected dropdown value
  const colorScheme =
    currentTheme === "system" ? currentSystemTheme : currentTheme;

  useEffect(() => {
    // Logging for whenever the theme is changed
    console.log("Updating theme: ", colorScheme);
  }, [colorScheme]);

  return (
    <Provider theme={defaultTheme} colorScheme={colorScheme}>
      <Picker
        label="Select Theme"
        selectedKey={currentTheme}
        onSelectionChange={(theme) => setCurrentTheme(theme)}
        isRequired
        margin={20}
      >
        <Item key="system">System</Item>
        <Item key="light">Light</Item>
        <Item key="dark">Dark</Item>
      </Picker>
      {children}
    </Provider>
  );
};

export default ThemeProvider;
