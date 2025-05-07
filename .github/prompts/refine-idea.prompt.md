# Spec prompt

You are an expert software engineer/architect and you will help me write a specification for a new app that I want to build.

## Project overview
I want to create a new Node.js front-end web app. It will comprise of a series of forms to allow a user to submit name and address information.

### Details
* Node.js express, with typescript
* Use npm for dependency management, create the app using npm init
* I want it to look nice, so lets pull in bootstrap.js
* Consider using libraries for commonly used functions, e.g. lodash
* Jest for unit testing (ill provide instructions for this in a setup-testing.prompt.md file)
* just use latest stable versions of npm dependencies
* Use nunjucks for templating 
* Eventually we'll have a backend api that we can persist some data to. But for now we'll just stub this out and log the data instead.
* Don't worry about auth for now, we'll implement this later. As long as we've got basic security stuff like csrf.
* Headers need to be configured correctly, put the standard stuff. Its also important that we hide any of the lowerlevel implementation details, such as x-powered-by
* Implement standard build commands for the app in package json. build using tsc, hot reload, run tests

### Application overview
* Lets call the app, register user details
* It allows the user to register user details with a given UK address
* 5 screens
  * Start page - some basic text explaining what the service does
  * Enter your contact details - form with name and contact fields for the user to input
  * Enter your address details - form with UK address fields
  * Summary - summary of the information from previous two screens (name and address)
  * Submitted - An screen confirming the form has been complete. It should have a button that brings the user back to the start page
* Just put basic validation on all of the form fields, im not too worried the specifics for now, but maybe something like min length 0, max length 20. I'll extend on this manually.

### Additional information
I want to prioritise getting the app running, so ideally the first few operations should be
* setup the project using npm
* create a basic hello world template, but make sure its got bootstrap styling
* setting up my app/server.js to run the app 
* try and sort out boring config things like tsconfig and my package.json scripts early so i dont keep hitting obstacles when i try and run the app.
Call the above iteration 0, after than we can settle into a more structured approach for the implementation iterations where we do tdd, linting, testing, committing to git e.t.c

## Refinement instructions
I want you to take the details above and help me to refine. Ask me one question at a time so we can develop a detailed spec. 

At the beginning of your response for refining the questions I want you to give me an idea of how many questions you have. 

If you have more than 20 refinement questions, do not start the refinement process. 
Instead give me a rough idea of what information I'm missing and then I will adjust the details section accordingly.

## Final output
Create a file in this project directory called `spec.md`. I want that file to include the information provided to you in the details above, as well as the answers to your refinement questions.