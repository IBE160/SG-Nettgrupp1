# Story 1.1: Basic Project Infrastructure Setup

**Date:** 2025-11-20
**Author:** BIP
**Status:** ready-for-dev
**Epic:** [Epic 1: Project Foundation & Product Catalog](tech-spec-epic-1.md)

---

## 1. User Story

> As a developer,
> I want to set up the basic project infrastructure (repository, CI/CD, deployment pipeline),
> So that we have a deployable application and a foundation for future development.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story is the foundational technical enabler for the entire project. Its purpose is to validate and configure the initial codebase and establish the automated processes required for continuous integration and deployment. According to the architecture document, the project is already initialized with a React/Vite frontend and a Node/Express backend. This story will focus on creating the CI/CD pipeline and ensuring the project can be built, tested, and deployed to a staging environment on Vercel.

*[Source: `docs/architecture.md`, `.bmad-ephemeral/stories/tech-spec-epic-1.md`]*

---

## 3. Acceptance Criteria

1. A Git repository is initialized and configured.
2. A basic CI/CD pipeline is set up for automated builds and deployments to a staging environment.
3. The application can be successfully deployed and accessed (e.g., a simple "Hello World" page).
4. Basic project dependencies are installed and configured.

*[Source: `docs/epics.md`]*

---

## 4. Technical Implementation Plan

### Task 1: Verify and Configure Git Repository
- [x] Confirm that the current project directory is a Git repository.
- [x] Create a `.gitignore` file and ensure it excludes `node_modules`, `.env` files, and other sensitive or generated files.
- [x] Perform an initial commit of the existing project structure.

### Task 2: Configure CI/CD Pipeline
- [x] Create a new GitHub Actions workflow file at `.github/workflows/test.yaml`.
- [x] **Workflow Configuration:**
    - **Trigger:** on `push` to the `main` branch and on `pull_request`.
    - **Jobs:**
        1.  **`lint` job:**
            -   Runs on `ubuntu-latest`.
            -   Checks out code.
            -   Sets up Node.js.
            -   Installs dependencies with `npm install`.
            -   Runs the linter with `npm run lint`.
        2.  **`test` job:**
            -   Runs on `ubuntu-latest`.
            -   Checks out code.
            -   Sets up Node.js.
            -   Installs dependencies with `npm install`.
            -   Installs Playwright browsers with `npx playwright install --with-deps`.
            -   Runs E2E tests with `npm run test:e2e`.
        3.  **`build` job:**
            -   Runs on `ubuntu-latest`.
            -   Checks out code.
            -   Sets up Node.js.
            -   Installs dependencies with `npm install`.
            -   Runs the build process with `npm run build`.

### Task 3: Deploy to Staging Environment
- [x] Configure the project with Vercel for deployment.
- [x] Ensure the GitHub repository is connected to the Vercel project.
- [ ] Trigger a deployment to Vercel.
- [ ] Verify that the deployed application is accessible at the Vercel-provided URL.
- [ ] Ensure the default Vite "Hello World" or `App.jsx` content is displayed correctly.

### Task 4: Verify Dependencies
- [ ] Run `npm install` locally to confirm all dependencies listed in `package.json` are installed without errors.
- [ ] Start the local development server with `npm run dev` to ensure the application runs correctly.

---

## 5. Dev Notes

*   This is the first story in the epic. There is no predecessor context.
*   The primary goal is to establish the infrastructure. No new features will be built.
*   The `architecture.md` document confirms that the project is already initialized with Vite, React, and Express. This story formalizes the setup and adds the CI/CD component.
*   The CI/CD pipeline should enforce code quality and prevent merges if linting or tests fail.

**Citations:**
-   Architecture: `docs/architecture.md`
-   Epic & ACs: `docs/epics.md`
-   Tech Spec: `.bmad-ephemeral/stories/tech-spec-epic-1.md`

---

## 6. Dev Agent Record
- **Context Reference:** `1-1-basic-project-infrastructure-setup.context.xml`

### Debug Log
- **2025-11-20:** Started implementation. Confirmed project is a Git repository using `git status`. Proceeding to `.gitignore` configuration.
- **2025-11-20:** Verified `.gitignore` exists and contains the required rules for `node_modules` and `.env` files.
- **2025-11-20:** Staged and committed initial project structure and ATDD artifacts. Task 1 is complete.
- **2025-11-20:** Created `.github/workflows/test.yaml` with lint, test, and build jobs. Task 2 is complete.
- **2025-11-20:** User has confirmed manual Vercel configuration is complete.
- **2025-11-20:** User has confirmed the GitHub repository is connected to Vercel.

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
