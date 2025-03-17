import express from "express";
import cors from "cors";
import convertToRomanNumerals from "./roman-numerals.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/romannumeral", (req, res) => {
  try {
    const input = req.query?.query;
    res.setHeader("Content-Type", "application/json");
    const output = convertToRomanNumerals(input);
    res.status(200).send(JSON.stringify(output));
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log("Service started, press Ctrl+C to stop.");
});
