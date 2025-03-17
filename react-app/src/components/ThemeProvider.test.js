import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeProvider from "./ThemeProvider";

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe("ThemeProvider", () => {
  test("renders children correctly", () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Child Component</div>
      </ThemeProvider>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  test("default theme is system", () => {
    render(<ThemeProvider />);
    expect(screen.getByLabelText("Select Theme")).toHaveValue("system");
  });

  test("changes theme on selection", () => {
    render(<ThemeProvider />);
    fireEvent.change(screen.getByLabelText("Select Theme"), {
      target: { value: "dark" },
    });
    expect(screen.getByLabelText("Select Theme")).toHaveValue("dark");
  });
});
