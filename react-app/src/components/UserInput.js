import React from "react";
import { TextField, Button } from "@adobe/react-spectrum";
import { useState } from "react";

const UserInput = ({ onSubmit }) => {
  const [currentInput, setCurrentInput] = useState("");

  const handleSubmit = (e) => {
    // Prevent bubbling
    e.preventDefault();
    // Log input value
    console.info("Form submitted with input:", currentInput);
    // Call function provided as a prop
    onSubmit(currentInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: "600px", margin: "auto" }}>
        <TextField
          label="Enter a number"
          description="Enter a number between 1 and 3999"
          value={currentInput}
          onChange={setCurrentInput}
        />
      </div>
      <div style={{ margin: "20px" }}>
        <Button type="submit">Convert to Roman Numeral</Button>
      </div>
    </form>
  );
};

export default UserInput;
