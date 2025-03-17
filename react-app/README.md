# react-app

This application provides a User Interface to allow converting a number to the corresponding Roman Numeral.

## Components

The components are structured in the following way:

### App

This is the main App component. It provides a function to handle input query submit from `UserInput` component, calls the API, and displays the output value.

### ThemeProvider

This component wraps the `@adobe/react-spectrum` Provider component for providing a user input to select theme. Options are:

- **System:** select current browser/system theme preference
- **Light:** light theme
- **Dark:** dark theme

System theme is monitored using `window.matchMedia` function.

### UserInput

This component captures user input via a text box, and provides a button to submit the value. The submit event sends the value to the `onSubmit` function passed in via props.

## How to run

This service can be run by the following command:

`npm run start`

## Unit Tests

Unit tests can be run by the following command:

`npm run test`
