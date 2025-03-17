import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserInput from "./UserInput";

test("renders UserInput component", () => {
  render(<UserInput onSubmit={jest.fn()} />);
  expect(screen.getByLabelText(/Enter a number/i)).toBeInTheDocument();
  expect(screen.getByText(/Convert to Roman Numeral/i)).toBeInTheDocument();
});

test("calls onSubmit with the correct input value", () => {
  const mockOnSubmit = jest.fn();
  render(<UserInput onSubmit={mockOnSubmit} />);

  const input = screen.getByLabelText(/Enter a number/i);
  const button = screen.getByText(/Convert to Roman Numeral/i);

  fireEvent.change(input, { target: { value: "123" } });
  fireEvent.click(button);

  expect(mockOnSubmit).toHaveBeenCalledWith("123");
});
