import { getRomanNumeral } from "../apiCaller";
import "./App.css";
import ThemeProvider from "./ThemeProvider";
import UserInput from "./UserInput";
import React, { useState } from "react";

function App() {
  const [currentOutput, setCurrentOutput] = useState("");
  const onSubmit = async (input) => {
    // Log input
    console.info("User input:", input);
    setCurrentOutput("");
    try {
      // Call API
      const response = await getRomanNumeral(input);

      // Check if response has output value
      if (response && response.output) {
        // Log output
        console.info("API response:", response.output);
        // Update state
        setCurrentOutput(response.output);
      }
    } catch (err) {
      // Log error
      console.error("Error:", err);
      alert("Invalid input: " + err);
    }
  };

  return (
    <div className="App">
      <ThemeProvider>
        <h2>Roman Numeral Converter</h2>
        <UserInput onSubmit={onSubmit} />
        {currentOutput && (
          <div style={{ margin: "20px" }}>
            Roman Numeral:{" "}
            <span style={{ fontWeight: "bold" }}>{currentOutput}</span>
          </div>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
