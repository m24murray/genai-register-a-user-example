# Implementation Plan

## Iteration 1: Project Setup
### Tasks
- Initialised a new Node.js project.
- Installed dependencies: `express`, `typescript`, `govuk-frontend`, `nunjucks`, `jest`, `lodash`.
- Created project structure with `src`, `views`, and `tests` folders.
- Configured TypeScript with a `tsconfig.json` file.
- Set up ESLint for linting and added a linting script to `package.json`.

### Status
- Current status: Completed
- Lines of code added: 0
- Number of unit tests added: 0
- Cost to implement:
  - In/out tokens consumed: TBD
  - Approx. cost in dollars: $0 (no external API usage).
  - API time: TBD
  - Wall time: ~30 minutes.

### Checklist
- [x] Development complete
- [x] Files linted
- [ ] Unit tests passing
- [x] Implementation plan updated
- [ ] Readme updated

## Iteration 2: Basic Routing and Views
### Tasks
- Create a basic Express server.
- Set up Nunjucks as the templating engine.
- Implement the Start Page route and view.
- Add a basic layout template using the GOV.UK Design System.

### Status
- Current status: Completed
- Lines of code added: ~100
- Number of unit tests added: 1
- Cost to implement:
  - In/out tokens consumed: TBD
  - Approx. cost in dollars: $0 (no external API usage).
  - API time: N/A
  - Wall time: ~1 hour.

### Checklist
- [x] Development complete
- [x] Files linted
- [x] Unit tests passing
- [x] Implementation plan updated
- [x] Readme updated

## Iteration 3: Form Pages
### Tasks
- Implemented the "Enter Your Contact Details" page with validation.
- Implemented the "Enter Your Address Details" page with validation.
- Added routes and views for these pages.

### Status
- Current status: Completed
- Lines of code added: ~150
- Number of unit tests added: 4
- Cost to implement:
  - In/out tokens consumed: N/A
  - Approx. cost in dollars: $0 (no external API usage).
  - API time: N/A
  - Wall time: ~2 hours.

### Checklist
- [x] Development complete
- [x] Files linted
- [x] Unit tests passing
- [x] Implementation plan updated
- [x] Readme updated

## Iteration 4: Summary and Submission
### Tasks
- Implement the Summary Page to display entered details.
- Implement the Submitted Page to confirm submission.
- Add routes and views for these pages.
- Log form submission data to the console.

### Status
- Current status: Not started
- Lines of code added: 0
- Number of unit tests added: 0
- Cost to implement:
  - In/out tokens consumed: TBD
  - Approx. cost in dollars: TBD
  - API time: TBD
  - Wall time: TBD

### Checklist
- [ ] Development complete
- [ ] Files linted
- [ ] Unit tests passing
- [ ] Implementation plan updated
- [ ] Readme updated

## Iteration 5: Security and Validation
### Tasks
- Add CSRF protection middleware.
- Implement basic validation for all form fields.
- Add error messages for validation failures.

### Status
- Current status: Not started
- Lines of code added: 0
- Number of unit tests added: 0
- Cost to implement:
  - In/out tokens consumed: TBD
  - Approx. cost in dollars: TBD
  - API time: TBD
  - Wall time: TBD

### Checklist
- [ ] Development complete
- [ ] Files linted
- [ ] Unit tests passing
- [ ] Implementation plan updated
- [ ] Readme updated