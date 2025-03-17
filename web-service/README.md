# web-service

This is a service to provide APIs for the react-app. It's hosted on port 8080.

## API to convert a Number to Roman Numeral

The API is provided as:

`[GET] /romannumeral?query=<input>`

If input is a number between 1 and 3999, it will return the corresponding Roman Numeral in the following format:

```JavaScript
{
    input: Number, // input number
    output: String // output Roman Numeral
}
```

For example:

```JavaScript
{
    input: 58,
    output: 'LVIII'
}
```

## How to run

This service can be run by either of these commands:

`npm run start`

OR:

`node index.js`

## Unit Tests

Unit tests can be run by the following command:

`npm run test`
