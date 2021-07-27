# Getting Started with Interview Exercise

This project has a `client` folder and a `server` folder. The client is a `Create React App` and the server is an `Express` js app running an api.

## Getting Started

To get both the client and the server running, run the following commands.

Client

```
cd client
yarn
yarn start
```

Server

```
cd server
yarn
yarn start
```

# Instructions:

The client comes with an input field and a button. The input field is meant to take a number (2,11,42,etc). When the button is clicked, that number should be sent to an api that returns the roman numeral for that number. That Roman Numeral is then displayed on the page.

The api has a function (`arabicToRoman`) that returns hardcoded roman numerals (up to 10) but there is no endpoint connected to that function.

The client is running on port 3000. Ther server is running on port 3001.

1. Create an endpoint that makes the `arabicToRoman` function accessible on the API.
2. Create a handler on the client that calls the API when the button is clicked. This function should take the number from the input field and include it in the call to the API.
3. Display the roman numeral on the page once it is returned from the API.
4. Using TDD (Test Driven Development), now change the `arabicToRoman` function on the API to dynamically convert without hardcoding values.
