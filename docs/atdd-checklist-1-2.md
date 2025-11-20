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

- [x] **Test:** `POST /api/products should create a new product`
  - **Status:** GREEN - Tests now pass after implementation.
  - **Verifies:** That a new product can be created via the API.

- [x] **Test:** `GET /api/products should return a list of products`
  - **Status:** GREEN - Tests now pass after implementation.
  - **Verifies:** That a list of products can be retrieved from the API.

- [x] **Test:** `GET /api/products/:id should return a single product`
  - **Status:** GREEN - Tests now pass after implementation.
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
- [x] **Task 1: Define Schema:** Connect to the Supabase project and execute the `CREATE TABLE` SQL statement for the `products` table as defined in the Epic 1 Tech Spec.
- [x] **Task 2: Connect Backend:** Install `@supabase/supabase-js`, create a configuration file for the client, and ensure the Express server connects to Supabase on startup.
- [x] **Task 3: Implement API:** Create the `products.js` route and controller.
- [x] **Task 3.1:** Implement the `createProduct` controller function to handle `POST /api/products` requests.
- [x] **Task 3.2:** Implement the `getAllProducts` controller function to handle `GET /api/products` requests.
- [x] **Task 3.3:** Implement the `getProductById` controller function to handle `GET /api/products/:id` requests.
- [x] Run tests and verify they all pass.
- [x] ✅ All tests pass (green phase).

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

- [x] All tests written and failing
- [x] Fixtures and factories created with auto-cleanup
- [x] Mock requirements documented
- [x] data-testid requirements listed
- [x] Implementation checklist created

**Verification:**

- [x] All tests run and fail as expected
- [x] Failure messages are clear and actionable
- [x] Tests fail due to missing implementation, not test bugs

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

  ✓  1 …› AC3: GET /api/products should return a list of products (801ms)  ✓  2 …ion › AC3: POST /api/products should create a new product (591ms)  ✓  3 …AC3: GET /api/products/:id should return a single product (304ms)  ✓  4 …ion › AC3: POST /api/products should create a new product (291ms)  ✓  5 …› AC3: GET /api/products should return a list of products (414ms)  ✓  6 …AC3: GET /api/products/:id should return a single product (232ms)  ✓  7 …ion › AC3: POST /api/products should create a new product (275ms)  ✓  8 …› AC3: GET /api/products should return a list of products (397ms)  ✓  9 …AC3: GET /api/products/:id should return a single product (262ms)
  9 passed (11.1s)
```

**Summary:**
- **Total tests:** 9 (3 tests x 3 browsers)
- **Passing:** 9
- **Failing:** 0
- **Status:** ✅ GREEN phase verified

## Notes

- The ATDD checklist is now complete. The developer has successfully implemented the API endpoints and all associated tests are passing.


---

## Contact

**Questions or Issues?**

- Ask in team standup
- Tag @{tea_agent_username} in Slack/Discord
- Refer to `./bmm/docs/tea-README.md` for workflow documentation
- Consult `./bmm/testarch/knowledge` for testing best practices

---

**Generated by BMad TEA Agent** - {date}
