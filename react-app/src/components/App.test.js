import { render, screen } from "@testing-library/react";
import App from "./App";

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

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Roman Numeral Converter/i);
  expect(linkElement).toBeInTheDocument();
});
