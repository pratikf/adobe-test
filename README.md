# Adobe Test Project

This project consists of two applications: `web-service` and `react-app`.

## web-service

The `web-service` application provides the APIs for the project.
The API to convert a number to a roman numeral is located in the `web-service/roman-numerals.js` file.

Please refer to README.md in the web-service folder for more info.

### How to run

To start the `web-service`, use the following command:

```sh
node index.js
```

### API

The `web-service` exposes endpoints for converting numbers to Roman numerals.

## react-app

The `react-app` application is the user interface for the project. It interacts with the `web-service` to provide a user-friendly interface for converting numbers to Roman numerals.

Please refer to README.md in the react-app folder for more info.

### How to run

To start the `react-app`, use the following command:

```sh
npm run start
```

### Features

- User-friendly interface for converting numbers to Roman numerals.
- Interacts with the `web-service` API to perform conversions.

## Docker Integration

You can run `docker-compose.yml` with Docker to run both applications at once.
