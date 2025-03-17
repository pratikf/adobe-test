import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

const MIN_INPUT = 1;
const MAX_INPUT = 3999;
const ROMAN_NUMERALS = [
  { num: 1000, letter: "M" },
  { num: 900, letter: "CM" },
  { num: 500, letter: "D" },
  { num: 400, letter: "CD" },
  { num: 100, letter: "C" },
  { num: 90, letter: "XC" },
  { num: 50, letter: "L" },
  { num: 40, letter: "XL" },
  { num: 10, letter: "X" },
  { num: 9, letter: "IX" },
  { num: 5, letter: "V" },
  { num: 4, letter: "IV" },
  { num: 1, letter: "I" },
];

const convertToRomanNumerals = (query) => {
  logger.info("convertToRomanNumerals function called");
  const startTime = Date.now();

  // Missing input
  if (!query) throw "Invalid Query";

  const input = parseInt(query);
  // Non-numeric input or not in range
  if (input < MIN_INPUT || input > MAX_INPUT || Number.isNaN(input))
    throw "Number out of range";

  let num = input;
  let output = "";
  // Loop through all the numeral pairs
  for (let i = 0; i < ROMAN_NUMERALS.length; ) {
    const pair = ROMAN_NUMERALS[i];
    // Is number greater than current number
    if (num >= pair.num) {
      // Subtract, and add letter for this one
      num -= pair.num;
      output += pair.letter;
    } else {
      // Number no longer greater than current pair, move on to next pair
      // This is required since main number can have multiples of current number
      i++;
    }
  }

  // Log amount of time in milliseconds
  const endTime = Date.now();
  logger.info(
    `convertToRomanNumerals function completed in ${endTime - startTime}ms`
  );

  return { input, output };
};

export default convertToRomanNumerals;
