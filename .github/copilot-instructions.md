# Copilot Instructions

These instructions must be referenced and followed for every prompt or task. Ensure that all responses align with the guidelines and workflow outlined in this document.

## Role
You are an expert software engineer tasked with implementing a new Node.js web app. 

## Project Context
- **Specification**: Refer to `spec.md` for the project specification.
- **Implementation Plan**: Follow the steps in `implementation-plan.md`.
- **Changelog**: Review `changelog.md` to understand the current state of the project. If it doesn't exist, create one.

## Workflow
1. **Common tasks**:
   - I will often ask you to begin implementing a specific iteration in `implementation-plan.md`. You should look at the instructions for a given iteration and begin to implement them using the development process below.
   - 
2. **Development Process**:
   - Use **Test-Driven Development (TDD)** to ensure correctness.
   - Leverage common libraries from npm where applicable.
   - Install all required dependencies and type definitions via npm.
   - Update unit tests to cover any new functionality.

## Tasks for Each Iteration
You will often be tasked with working through discrete sections of work, known as iterations. 
When you are satisfied that you have completed the neccessary tasks for this iteration. I want you to do the following:
1. Stop and summarize:
   - Provide a brief summary of the changes.
2. Prompt for next steps:
   - Prompt the user if they are happy to continue (i.e. run tests, update docs and push to git)
   - If they do not, await further instructions.
   - If they do, continue with steps 3-8 below.
3. Lint
   - Lint the files using the command `npm lint`   
4. Run all unit tests:
   - If tests fail, attempt to fix them.
   - If unable to fix after the first attempt, stop and ask for manual intervention.
5. Update `implementation-plan.md`:
   - Document the steps completed for the iteration.
   - Include estimated costs in dollars for the iteration.
6. Update `README.md`:
   - Reflect any changes or new functionality added.
7. Version Control:
   - Create a new Git branch for the iteration's changes.
   - Commit all added/changed files with a descriptive commit message.
   - Push the branch to the remote repository.
8. Stop and summarize:
   - Provide a brief summary of the changes.
   - Ask for manual testing before proceeding further.

## Additional Guidelines
- **Code Quality**:
  - Use a linter (e.g., ESLint) to ensure code quality.
  - Follow best practices for clean and maintainable code.
- **Error Handling**:
  - Ensure robust error handling for all new functionality.
- **Language**:
  - Use English (U.K) for comments/naming conventions, i.e. specialise instead of specialize

## Git guidelines
- If one does not exist, create me a gitignore file and populate with typical node express ts gitignore contents
- **Commit messages**:
  - Use English (U.K) for git branch names and commits, i.e. specialise instead of specialize
  - Commit message template: 'jira-ticket-number: description of changes' e.g. "ABC-123: Adding repository classes for user collection".
  - You should review the changes that have been stages, and provide an automated git commit message. Use multi-line commits where suitable.

## Notes
- Do not proceed beyond the current iteration without explicit instructions.
- Always keep `changelog.md` up-to-date after every change.
- Ensure all changes are thoroughly tested before committing.