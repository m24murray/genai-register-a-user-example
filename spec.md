# Specification for Register User Details App

## Overview
The "Register User Details" app is a Node.js front-end web application designed to allow users to submit their name and address information. The app is built using modern web development practices and adheres to the GOV.UK Design System for compliance and accessibility.

## Tech Stack
- **Node.js** with **Express**
- **TypeScript** for type safety
- **npm** for dependency management
- **GOV.UK Design System** for styles, components, and patterns (installed via `npm install govuk-frontend --save`)
- **Nunjucks** for templating
- **Jest** for unit testing
- **Lodash** for commonly used utility functions

## Application Features
### Screens
1. **Start Page**
   - Displays basic text explaining the purpose of the service.
2. **Enter Your Contact Details**
   - A form with fields for the user's name and contact information.
3. **Enter Your Address Details**
   - A form with fields for the user's UK address.
4. **Summary Page**
   - Displays a summary of the information entered in the previous two screens (name and address).
5. **Submitted Page**
   - Confirms the form submission and includes a button to return to the start page.

### Validation
- Basic validation rules:
  - **Name and Address Fields**: Minimum length 0, maximum length 20.
  - **Regex Validation**: Basic regex validation for fields where applicable.
- Generic error messages will be displayed for validation failures.

### Security
- CSRF protection will be implemented using Express middleware.
- Standard headers will be configured to enhance security and hide implementation details (e.g., `x-powered-by` will be disabled).

### Logging
- Form submission data will be logged to the console for now.
- Detailed input logging will be implemented, but without excessive depth.

### API
- A stubbed backend API will be used to simulate data persistence. Actual backend integration will be implemented later.

### Accessibility
- The app will use the default accessibility features provided by the GOV.UK Design System.

### Build Commands
- Standard build commands will be included in `package.json`:
  - Build using `tsc`
  - Hot reload
  - Run tests

### Iteration 2 Updates
- Added a basic Express server.
- Configured Nunjucks as the templating engine.
- Implemented the Start Page route and view.
- Created a layout template using the GOV.UK Design System.

## Future Considerations
- Authentication will be implemented in a future iteration.
- Deployment configurations will be added later.
- Integration tests and form navigation features may be added in subsequent updates.