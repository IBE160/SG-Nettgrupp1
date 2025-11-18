# Test Automation Framework

This directory contains the test automation framework for the project, built using [Playwright](https://playwright.dev/).

## 1. Setup Instructions

### Prerequisites
- Node.js (version specified in `.nvmrc`)
- An `.env` file created from the `.env.example` template.

### Installation
1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Install Playwright Browsers**:
    ```bash
    npx playwright install
    ```
3.  **Configure Environment**:
    Copy the `.env.example` file to a new file named `.env` and update the variables for your local environment.
    ```bash
    cp .env.example .env
    ```

## 2. Running Tests

### Local Execution
- **Run all tests (headless)**:
  ```bash
  npm run test:e2e
  ```
- **Run tests in headed mode**:
  ```bash
  npx playwright test --headed
  ```
- **Run tests with UI mode**:
  ```bash
  npx playwright test --ui
  ```
- **Run a specific test file**:
  ```bash
  npx playwright test tests/e2e/example.spec.ts
  ```
- **Debug a test**:
  ```bash
  npx playwright test --debug
  ```

### Viewing Reports
After a test run, an HTML report is generated in the `test-results/html` directory. You can view it with the following command:
```bash
npx playwright show-report
```

## 3. Architecture Overview

The framework follows a standard structure to promote scalability and maintainability.

### Directory Structure
- `tests/e2e/`: Contains the end-to-end test files (`.spec.ts`).
- `tests/support/`: Contains the core infrastructure of the test framework.
  - `fixtures/`: Provides test fixtures, including data factories for creating test data.
  - `helpers/`: Contains reusable utility functions.
  - `page-objects/`: (Optional) For implementing the Page Object Model pattern.

### Fixture Architecture
The framework uses Playwright's `test.extend` feature to create custom fixtures. This allows for setting up preconditions and injecting dependencies (like data factories) directly into tests, ensuring tests are isolated and easy to write. See `tests/support/fixtures/index.ts`.

### Data Factories
Data factories are used to generate realistic test data (e.g., users, products) on the fly. They are responsible for both creating the data (e.g., via API calls) and cleaning it up after the test is complete. See `tests/support/fixtures/factories/user-factory.ts`.

## 4. Best Practices

- **Selector Strategy**: Use `data-testid` attributes on elements for robust and resilient selectors that are decoupled from styling and structure.
- **Test Isolation**: Each test should be able to run independently and not rely on the state of previous tests. Use the `beforeEach` hook or fixtures for setup and `afterEach` for cleanup.
- **Assertions**: Use explicit and clear assertions with `expect`. Avoid implicit waits.

## 5. CI/CD Integration

The `test:e2e` script is designed to be run in a CI/CD pipeline. The configuration is set to run tests in parallel with retries on failure. JUnit XML reports are generated at `test-results/junit.xml` for integration with CI dashboards.
