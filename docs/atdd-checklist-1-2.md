# ATDD Checklist - Epic 1, Story 2: Product Data Model and Database Initialization

**Date:** 2025-11-20
**Author:** BIP
**Primary Test Level:** API

---

## Story Summary

This story establishes the data persistence layer for products using Supabase (PostgreSQL). It involves creating the `products` table and the initial API endpoints required for basic CRUD operations, which is a prerequisite for both the admin interface and the customer-facing catalog.

**As a** developer,
**I want** to define the product data model and initialize the database,
**So that** product information can be stored and retrieved.

---

## Acceptance Criteria

1. A database schema is defined for products, including fields for name, description, price, stock quantity, land of origin, and vitola.
2. The database is initialized and accessible by the Express application.
3. Basic CRUD operations for products can be performed (e.g., via a temporary API endpoint or direct database access for testing).

---

## Failing Tests Created (RED Phase)

### API Tests (3 tests)

**File:** `tests/api/products.api.spec.ts`

- ✅ **Test:** `POST /api/products should create a new product`
  - **Status:** RED - Expected to fail with 404 Not Found until the endpoint is created.
  - **Verifies:** That a new product can be created via the API.

- ✅ **Test:** `GET /api/products should return a list of products`
  - **Status:** RED - Expected to fail with 404 Not Found until the endpoint is created.
  - **Verifies:** That a list of products can be retrieved from the API.

- ✅ **Test:** `GET /api/products/:id should return a single product`
  - **Status:** RED - Expected to fail with 404 Not Found until the endpoint is created.
  - **Verifies:** That a single product can be retrieved by its ID.

---

## Data Factories Created

### Product Factory

**File:** `tests/support/factories/product.factory.ts`

**Exports:**
- `createProduct(overrides?)`: Creates a single product object with fake data.

**Example Usage:**
```typescript
import { createProduct } from '../support/factories/product.factory';
const newProduct = createProduct({ name: 'Special Edition Cigar' });
```

---

## Fixtures Created

No new fixtures were required for this story. The built-in Playwright `request` fixture is sufficient for these API tests.

---

## Mock Requirements

No mock requirements were identified. These tests are intended to hit the actual development API and database.

---

## Required data-testid Attributes

No `data-testid` attributes are required as this is a backend-focused story with no UI changes.

---

## Implementation Checklist

### Test: `POST /api/products`, `GET /api/products`, `GET /api/products/:id`

**File:** `tests/api/products.api.spec.ts`

**Tasks to make these tests pass:**
- [ ] **Task 1: Define Schema:** Connect to the Supabase project and execute the `CREATE TABLE` SQL statement for the `products` table as defined in the Epic 1 Tech Spec.
- [ ] **Task 2: Connect Backend:** Install `@supabase/supabase-js`, create a configuration file for the client, and ensure the Express server connects to Supabase on startup.
- [ ] **Task 3: Implement API:** Create the `products.js` route and controller.
- [ ] **Task 3.1:** Implement the `createProduct` controller function to handle `POST /api/products` requests.
- [ ] **Task 3.2:** Implement the `getAllProducts` controller function to handle `GET /api/products` requests.
- [ ] **Task 3.3:** Implement the `getProductById` controller function to handle `GET /api/products/:id` requests.
- [ ] Run tests and verify they all pass.
- [ ] ✅ All tests pass (green phase).

**Estimated Effort:** 3 hours

---

## Running Tests

```bash
# Run all Playwright tests
npm run test:e2e

# Run only the API tests for this story
npm run test:e2e -- tests/api/products.api.spec.ts

# Debug the API tests
npx playwright test tests/api/products.api.spec.ts --debug
```

---

## Red-Green-Refactor Workflow

### RED Phase (Complete) ✅

**TEA Agent Responsibilities:**

- ✅ All tests written and failing
- ✅ Fixtures and factories created with auto-cleanup
- ✅ Mock requirements documented
- ✅ data-testid requirements listed
- ✅ Implementation checklist created

**Verification:**

- All tests run and fail as expected
- Failure messages are clear and actionable
- Tests fail due to missing implementation, not test bugs

---

### GREEN Phase (DEV Team - Next Steps)

**DEV Agent Responsibilities:**

1. **Pick one failing test** from implementation checklist (start with highest priority)
2. **Read the test** to understand expected behavior
3. **Implement minimal code** to make that specific test pass
4. **Run the test** to verify it now passes (green)
5. **Check off the task** in implementation checklist
6. **Move to next test** and repeat

**Key Principles:**

- One test at a time (don't try to fix all at once)
- Minimal implementation (don't over-engineer)
- Run tests frequently (immediate feedback)
- Use implementation checklist as roadmap

**Progress Tracking:**

- Check off tasks as you complete them
- Share progress in daily standup
- Mark story as IN PROGRESS in `bmm-workflow-status.md`

---

### REFACTOR Phase (DEV Team - After All Tests Pass)

**DEV Agent Responsibilities:**

1. **Verify all tests pass** (green phase complete)
2. **Review code for quality** (readability, maintainability, performance)
3. **Extract duplications** (DRY principle)
4. **Optimize performance** (if needed)
5. **Ensure tests still pass** after each refactor
6. **Update documentation** (if API contracts change)

**Key Principles:**

- Tests provide safety net (refactor with confidence)
- Make small refactors (easier to debug if tests fail)
- Run tests after each change
- Don't change test behavior (only implementation)

**Completion:**

- All tests pass
- Code quality meets team standards
- No duplications or code smells
- Ready for code review and story approval

---

## Next Steps

1. **Review this checklist** with team in standup or planning
2. **Run failing tests** to confirm RED phase: `{test_command_all}`
3. **Begin implementation** using implementation checklist as guide
4. **Work one test at a time** (red → green for each)
5. **Share progress** in daily standup
6. **When all tests pass**, run `bmad sm story-done` to move story to DONE

---

## Knowledge Base References Applied

This ATDD workflow consulted the following knowledge fragments:

- **fixture-architecture.md** - Test fixture patterns with setup/teardown and auto-cleanup using Playwright's `test.extend()`
- **data-factories.md** - Factory patterns using `@faker-js/faker` for random test data generation with overrides support
- **component-tdd.md** - Component test strategies using Playwright Component Testing
- **network-first.md** - Route interception patterns (intercept BEFORE navigation to prevent race conditions)
- **test-quality.md** - Test design principles (Given-When-Then, one assertion per test, determinism, isolation)
- **test-levels-framework.md** - Test level selection framework (E2E vs API vs Component vs Unit)

See `tea-index.csv` for complete knowledge fragment mapping.

---

## Test Execution Evidence

### Initial Test Run (RED Phase Verification)

**Command:** `npm run test:e2e -- tests/api/products.api.spec.ts`

**Results:**
```
Running 9 tests using 2 workers

  ✘  1 …› API Endpoint Verification › AC3: POST /api/products should create a new product (503ms)
  ✘  2 …I Endpoint Verification › AC3: GET /api/products should return a list of products (469ms)
  ✘  3 … Endpoint Verification › AC3: GET /api/products/:id should return a single product (90ms)
  ✘  4 …› API Endpoint Verification › AC3: POST /api/products should create a new product (455ms)
  ✘  5 …I Endpoint Verification › AC3: GET /api/products should return a list of products (484ms)
  ✘  6 … Endpoint Verification › AC3: GET /api/products/:id should return a single product (97ms)
  ✘  7 …› API Endpoint Verification › AC3: POST /api/products should create a new product (429ms)
  ✘  8 …I Endpoint Verification › AC3: GET /api/products should return a list of products (463ms)
  ✘  9 …Endpoint Verification › AC3: GET /api/products/:id should return a single product (104ms)

  9 failed
```

**Summary:**
- **Total tests:** 9 (3 tests x 3 browsers)
- **Passing:** 0 (expected)
- **Failing:** 9 (expected)
- **Status:** ✅ RED phase verified

**Expected Failure Messages:**
- `connect ECONNREFUSED ::1:5173`: This is the expected error for the `POST` and `GET` tests, as the API server and routes have not been created yet.
- `expect(createdProductId, ...).toBeDefined()`: This is the expected error for the `GET /:id` test, as the failing `POST` test prevents the `createdProductId` from being defined.

---

## Notes

- The test suite is correctly in a RED state. The developer can now proceed with implementation, using the failing tests as a guide.

---

## Contact

**Questions or Issues?**

- Ask in team standup
- Tag @{tea_agent_username} in Slack/Discord
- Refer to `./bmm/docs/tea-README.md` for workflow documentation
- Consult `./bmm/testarch/knowledge` for testing best practices

---

**Generated by BMad TEA Agent** - {date}
