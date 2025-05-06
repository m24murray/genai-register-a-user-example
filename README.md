# Register User Details App

## Overview
The "Register User Details" app is a Node.js front-end web application designed to allow users to submit their name and address information. The app adheres to the GOV.UK Design System for compliance and accessibility.

## How to Run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use `npm run lint` to check code quality.
4. Use `npm start` to start the application.

## Endpoints
- **GET /**: Start page with an introduction to the service.
- **GET /contact-details**: Form to enter name and contact details.
- **POST /contact-details**: Validates and processes contact details.
- **GET /address-details**: Form to enter address details.
- **POST /address-details**: Validates and processes address details.
- **GET /summary**: Displays a summary of the entered details.
- **POST /submit**: Confirms submission and logs data.
- **GET /submitted**: Displays a submission confirmation page.
- **GET /vulnerable**: Demonstrates deliberate security vulnerabilities (for educational purposes).

## Validation
- **Name**: Required, max length 20.
- **Email**: Required, must be a valid email format.
- **Address**: Required, max length 20.
- **Postcode**: Required, max length 20.

## Security
- `/vulnerable` intentionally bypasses security for demonstration purposes.
