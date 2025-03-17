import convertToRomanNumerals from "./roman-numerals.js";

test("convertToRomanNumerals should convert 1 to I", () => {
  expect(convertToRomanNumerals("1")).toEqual({ input: 1, output: "I" });
});

test("convertToRomanNumerals should convert 4 to IV", () => {
  expect(convertToRomanNumerals("4")).toEqual({ input: 4, output: "IV" });
});

test("convertToRomanNumerals should convert 9 to IX", () => {
  expect(convertToRomanNumerals("9")).toEqual({ input: 9, output: "IX" });
});

test("convertToRomanNumerals should convert 58 to LVIII", () => {
  expect(convertToRomanNumerals("58")).toEqual({ input: 58, output: "LVIII" });
});

test("convertToRomanNumerals should convert 1994 to MCMXCIV", () => {
  expect(convertToRomanNumerals("1994")).toEqual({
    input: 1994,
    output: "MCMXCIV",
  });
});

test("convertToRomanNumerals should throw error for invalid query", () => {
  expect(() => convertToRomanNumerals("")).toThrow("Invalid Query");
});

test("convertToRomanNumerals should throw error for number out of range", () => {
  expect(() => convertToRomanNumerals("4000")).toThrow("Number out of range");
  expect(() => convertToRomanNumerals("0")).toThrow("Number out of range");
  expect(() => convertToRomanNumerals("abc")).toThrow("Number out of range");
});
