# Test Design: Epic 2 - Click-and-Collect Ordering

**Date:** 2025-11-14
**Author:** BIP
**Status:** Draft / Approved

---

## Executive Summary

**Scope:** full test design for Epic 2

**Risk Summary:**

- Total risks identified: 32
- High-priority risks (≥6): 9
- Critical categories: BUS, SEC, OPS, DATA

**Coverage Summary:**

- P0 scenarios: 38 (76 hours)
- P1 scenarios: 3 (3 hours)
- P2/P3 scenarios: 0 (0 hours)
- **Total effort**: 79 hours (~10 days)

---

## Risk Assessment

### High-Priority Risks (Score ≥6)

| Risk ID | Category | Description | Probability | Impact | Score | Mitigation | Owner | Timeline |
|---|---|---|---|---|---|---|---|---|
| R-E2-01 | BUS | "Add to Cart" button not visible or functional (Story 2.1). | 2 | 3 | 6 | Thorough UI/UX testing, E2E tests for add-to-cart flow. | QA/UX | Epic 2 |
| R-E2-02 | BUS | Product not added to cart correctly (Story 2.1). | 2 | 3 | 6 | Unit and integration tests for add-to-cart logic, E2E tests for cart content verification. | DEV/QA | Epic 2 |
| R-E2-08 | BUS | Incorrect items, quantities, or prices displayed in cart (Story 2.2). | 2 | 3 | 6 | E2E tests for cart display accuracy, unit tests for data retrieval. | QA/DEV | Epic 2 |
| R-E2-12 | BUS | Cart total calculation errors (Story 2.2). | 2 | 3 | 6 | Comprehensive unit and integration tests for cart calculation logic. | DEV/QA | Epic 2 |
| R-E2-14 | BUS | "Proceed to Checkout" button not visible or functional (Story 2.3). | 2 | 3 | 6 | Thorough UI/UX testing, E2E tests for checkout flow initiation. | QA/UX | Epic 2 |
| R-E2-15 | BUS | Checkout page not loading or displaying fields correctly (Story 2.3). | 2 | 3 | 6 | E2E tests for checkout page rendering, component tests for form fields. | QA/DEV | Epic 2 |
| R-E2-17 | SEC | Inadequate input validation, leading to injection or data issues (Story 2.3). | 2 | 3 | 6 | Implement strict client-side and server-side input validation and sanitization. Security audits. | DEV/SEC | Epic 2 |
| R-E2-22 | OPS | Email delivery failures to store (Story 2.4). | 2 | 3 | 6 | Use a reliable transactional email service with delivery monitoring and retry mechanisms. | OPS/DEV | Epic 2 |
| R-E2-24 | DATA | Order not recorded in admin dashboard (Story 2.4). | 2 | 3 | 6 | Implement robust transaction management and error logging for order creation. E2E tests for order persistence. | DEV/QA | Epic 2 |

### Medium-Priority Risks (Score 3-4)

| Risk ID | Category | Description | Probability | Impact | Score | Mitigation | Owner |
|---|---|---|---|---|---|---|---|
| R-E2-03 | DATA | Incorrect quantity added to cart (Story 2.1). | 2 | 2 | 4 | Implement input validation and thorough testing of add-to-cart logic. | DEV/QA |
| R-E2-04 | BUS | Shopping cart not persistent across sessions/pages (Story 2.1). | 2 | 2 | 4 | Implement robust session management for shopping cart. | DEV |
| R-E2-05 | BUS | Cart indicator not updating, leading to user confusion (Story 2.1). | 2 | 2 | 4 | Implement real-time updates for cart indicator, thorough UI testing. | DEV/QA |
| R-E2-06 | BUS | Out-of-stock products can be added to cart, leading to frustration (Story 2.1). | 2 | 2 | 4 | Implement real-time stock checks and disable add-to-cart for out-of-stock items. | DEV/QA |
| R-E2-07 | DATA | Incorrect out-of-stock status (Story 2.1). | 2 | 2 | 4 | Implement robust stock synchronization and thorough testing. | DEV/QA |
| R-E2-09 | BUS | Quantity adjustment not working correctly (Story 2.2). | 2 | 2 | 4 | Thorough UI/UX testing and unit tests for quantity logic. | QA/DEV |
| R-E2-10 | DATA | Incorrect quantity updated in cart (Story 2.2). | 2 | 2 | 4 | Implement input validation and thorough testing of quantity update logic. | DEV/QA |
| R-E2-11 | BUS | Item removal not working correctly (Story 2.2). | 2 | 2 | 4 | Thorough UI/UX testing and unit tests for item removal logic. | QA/DEV |
| R-E2-13 | DATA | Cart not reflecting real-time product changes (price, stock) (Story 2.2). | 2 | 2 | 4 | Implement real-time product data synchronization with cart. | DEV/QA |
| R-E2-16 | SEC | Insecure handling of customer contact details (Story 2.3). | 1 | 3 | 3 | Follow security best practices for data handling (encryption, access control). | SEC/DEV |
| R-E2-18 | BUS | Overly strict or incorrect validation preventing legitimate orders (Story 2.3). | 2 | 2 | 4 | Thorough testing of validation rules with various valid and invalid inputs. | QA |
| R-E2-19 | BUS | Unclear communication about payment method, leading to customer confusion (Story 2.3). | 2 | 2 | 4 | Clear UI messaging on checkout page. | UX |
| R-E2-20 | BUS | Unclear communication about age limitation, leading to customer confusion/legal issues (Story 2.3). | 2 | 2 | 4 | Clear UI messaging on checkout page. | UX |
| R-E2-21 | BUS | Confirmation page not displaying correctly or missing reference number (Story 2.4). | 2 | 2 | 4 | E2E tests for order confirmation page rendering and data display. | QA |
| R-E2-23 | DATA | Incorrect order details in store email (Story 2.4). | 2 | 2 | 4 | Unit tests for email content generation, manual verification of emails. | DEV/QA |
| R-E2-25 | BUS | Admin dashboard not displaying new orders correctly (Story 2.5). | 2 | 2 | 4 | E2E tests for admin dashboard rendering and data display. | QA |
| R-E2-26 | BUS | Incorrect or missing order details in admin list (Story 2.5). | 2 | 2 | 4 | E2E tests for admin order list accuracy. | QA |
| R-E2-27 | BUS | Admin unable to view full order details (Story 2.5). | 2 | 2 | 4 | E2E tests for admin order detail page functionality. | QA |
| R-E2-28 | PERF | Slow loading of order details in admin (Story 2.5). | 2 | 2 | 4 | Optimize database queries and UI rendering for admin. | DEV |
| R-E2-29 | BUS | "Mark as Processed" button not visible or functional (Story 2.6). | 2 | 2 | 4 | Thorough UI/UX testing, E2E tests for order status update flow. | QA/UX |
| R-E2-30 | DATA | Order status not updating correctly (Story 2.6). | 2 | 2 | 4 | Unit and integration tests for order status update logic, E2E tests for UI reflection. | DEV/QA |
| R-E2-31 | OPS | Email notification failures to customer (Story 2.6). | 2 | 2 | 4 | Use a reliable transactional email service with delivery monitoring and retry mechanisms. | OPS/DEV |
| R-E2-32 | DATA | Incorrect email content to customer (Story 2.6). | 2 | 2 | 4 | Unit tests for email content generation, manual verification of emails. | DEV/QA |

### Low-Priority Risks (Score 1-2)

| Risk ID | Category | Description | Probability | Impact | Score | Action |
|---|---|---|---|---|---|---|
| (No Low-Priority Risks identified for this epic) | | | | | | |

### Risk Category Legend

- **TECH**: Technical/Architecture (flaws, integration, scalability)
- **SEC**: Security (access controls, auth, data exposure)
- **PERF**: Performance (SLA violations, degradation, resource limits)
- **DATA**: Data Integrity (loss, corruption, inconsistency)
- **BUS**: Business Impact (UX harm, logic errors, revenue)
- **OPS**: Operations (deployment, config, monitoring)

---

## Test Coverage Plan

### P0 (Critical) - Run on every commit

**Criteria**: Blocks core journey + High risk (≥6) + No workaround

| Requirement | Test Level | Risk Link | Test Count | Owner |
|---|---|---|---|---|
| **Story 2.1: Add Products to Shopping Cart** | | | | |
| Verify "Add to Cart" button is present on product card. | Component/E2E | R-E2-01 | 1 | QA |
| Verify "Add to Cart" button is present on product detail page. | Component/E2E | R-E2-01 | 1 | QA |
| Verify clicking "Add to Cart" adds product to cart. | E2E/API | R-E2-02 | 1 | QA |
| **Story 2.2: Manage Shopping Cart Contents** | | | | |
| Verify shopping cart page displays all added items. | E2E | R-E2-08 | 1 | QA |
| Verify each item displays name, quantity, price. | E2E | R-E2-08 | 1 | QA |
| Verify customer can increase item quantity. | E2E/API | R-E2-09 | 1 | QA |
| Verify customer can decrease item quantity. | E2E/API | R-E2-09 | 1 | QA |
| Verify customer can remove an item from cart. | E2E/API | R-E2-11 | 1 | QA |
| Verify cart total updates after quantity change. | E2E | R-E2-12 | 1 | QA |
| Verify cart total updates after item removal. | E2E | R-E2-12 | 1 | QA |
| **Story 2.3: Customer Checkout Process** | | | | |
| Verify "Proceed to Checkout" button is present in cart. | E2E | R-E2-14 | 1 | QA |
| Verify checkout page loads. | E2E | R-E2-15 | 1 | QA |
| Verify email input field is present and required. | E2E | R-E2-17 | 1 | QA |
| Verify email input validates for correct format. | E2E/Unit | R-E2-17 | 1 | QA |
| Verify error message for invalid email format. | E2E | R-E2-17 | 1 | QA |
| Verify clear statement about payment at pickup on checkout page. | E2E | R-E2-19 | 1 | QA |
| Verify clear statement about 18+ age limitation on checkout page. | E2E | R-E2-20 | 1 | QA |
| **Story 2.4: Order Confirmation and Store Notification** | | | | |
| Verify order confirmation page loads after successful order. | E2E | R-E2-21 | 1 | QA |
| Verify unique reference number is displayed. | E2E | R-E2-21 | 1 | QA |
| Verify store receives order details email. | API/Manual | R-E2-22 | 1 | QA |
| Verify email content includes correct order details. | API/Manual | R-E2-23 | 1 | QA |
| Verify new order appears in admin dashboard. | E2E/API | R-E2-24 | 1 | QA |
| **Story 2.5: Admin View New Orders** | | | | |
| Verify admin dashboard displays "New Orders" section. | E2E | R-E2-25 | 1 | QA |
| Verify new orders are listed in the section. | E2E/API | R-E2-25 | 1 | QA |
| Verify order list displays reference number. | E2E | R-E2-26 | 1 | QA |
| Verify order list displays customer email. | E2E | R-E2-26 | 1 | QA |
| Verify order list displays order date. | E2E | R-E2-26 | 1 | QA |
| Verify order list displays order status. | E2E | R-E2-26 | 1 | QA |
| Verify admin can click an order to view details. | E2E | R-E2-27 | 1 | QA |
| Verify order detail page displays ordered items and quantities. | E2E/API | R-E2-27 | 1 | QA |
| **Story 2.6: Admin Mark Order as Processed** | | | | |
| Verify "Mark as Processed" button is present on order detail page. | E2E | R-E2-29 | 1 | QA |
| Verify clicking "Mark as Processed" changes status to "Processed". | E2E/API | R-E2-30 | 1 | QA |
| Verify customer receives "Ready for Pickup" email. | API/Manual | R-E2-31 | 1 | QA |
| Verify email content is correct. | API/Manual | R-E2-32 | 1 | QA |

**Total P0**: 38 tests, 76 hours

### P1 (High) - Run on PR to main

**Criteria**: Important features + Medium risk (3-4) + Common workflows

| Requirement | Test Level | Risk Link | Test Count | Owner |
|---|---|---|---|---|
| **Story 2.1: Add Products to Shopping Cart** | | | | |
| Verify cart content persists across page navigations. | E2E | R-E2-04 | 1 | QA |
| Verify cart icon updates with item count after adding product. | E2E | R-E2-05 | 1 | QA |
| Verify "Add to Cart" is disabled for out-of-stock products. | E2E/API | R-E2-06 | 1 | QA |
| Verify appropriate message displayed for out-of-stock products. | E2E | R-E2-06 | 1 | QA |
| **Story 2.2: Manage Shopping Cart Contents** | | | | |
| Verify cart updates if product price changes in backend. | E2E/API | R-E2-13 | 1 | QA |
| Verify cart updates if product becomes out-of-stock in backend. | E2E/API | R-E2-13 | 1 | QA |
| **Story 2.3: Customer Checkout Process** | | | | |
| Verify phone number input field is present and optional. | E2E | - | 1 | QA |

**Total P1**: 7 tests, 7 hours

### P2 (Medium) - Run nightly/weekly

**Criteria**: Secondary features + Low risk (1-2) + Edge cases

| Requirement | Test Level | Risk Link | Test Count | Owner |
|---|---|---|---|---|
| (No P2 scenarios identified for this epic) | | | | |

**Total P2**: 0 tests, 0 hours

### P3 (Low) - Run on-demand

**Criteria**: Nice-to-have + Exploratory + Performance benchmarks

| Requirement | Test Level | Test Count | Owner |
|---|---|---|---|
| (No P3 scenarios identified for this epic) | | | |

**Total P3**: 0 tests, 0 hours

---

## Execution Order

### Smoke Tests (<5 min)

**Purpose**: Fast feedback, catch build-breaking issues

- [ ] **Story 2.1:** Verify "Add to Cart" button is present on product card.
- [ ] **Story 2.1:** Verify clicking "Add to Cart" adds product to cart.
- [ ] **Story 2.2:** Verify shopping cart page displays all added items.
- [ ] **Story 2.3:** Verify "Proceed to Checkout" button is present in cart.
- [ ] **Story 2.3:** Verify checkout page loads.
- [ ] **Story 2.3:** Verify email input field is present and required.
- [ ] **Story 2.4:** Verify order confirmation page loads after successful order.
- [ ] **Story 2.4:** Verify unique reference number is displayed.
- [ ] **Story 2.5:** Verify admin dashboard displays "New Orders" section.
- [ ] **Story 2.5:** Verify new orders are listed in the section.
- [ ] **Story 2.6:** Verify "Mark as Processed" button is present on order detail page.
- [ ] **Story 2.6:** Verify clicking "Mark as Processed" changes status to "Processed".

**Total**: 12 scenarios

### P0 Tests (<10 min)

**Purpose**: Critical path validation

- [ ] **Story 2.1:** Verify "Add to Cart" button is present on product detail page.
- [ ] **Story 2.1:** Verify cart content persists across page navigations.
- [ ] **Story 2.1:** Verify cart icon updates with item count after adding product.
- [ ] **Story 2.1:** Verify "Add to Cart" is disabled for out-of-stock products.
- [ ] **Story 2.1:** Verify appropriate message displayed for out-of-stock products.
- [ ] **Story 2.2:** Verify each item displays name, quantity, price.
- [ ] **Story 2.2:** Verify customer can increase item quantity.
- [ ] **Story 2.2:** Verify customer can decrease item quantity.
- [ ] **Story 2.2:** Verify customer can remove an item from cart.
- [ ] **Story 2.2:** Verify cart total updates after quantity change.
- [ ] **Story 2.2:** Verify cart total updates after item removal.
- [ ] **Story 2.3:** Verify email input validates for correct format.
- [ ] **Story 2.3:** Verify error message for invalid email format.
- [ ] **Story 2.3:** Verify clear statement about payment at pickup on checkout page.
- [ ] **Story 2.3:** Verify clear statement about 18+ age limitation on checkout page.
- [ ] **Story 2.4:** Verify store receives order details email.
- [ ] **Story 2.4:** Verify email content includes correct order details.
- [ ] **Story 2.4:** Verify new order appears in admin dashboard.
- [ ] **Story 2.5:** Verify order list displays reference number.
- [ ] **Story 2.5:** Verify order list displays customer email.
- [ ] **Story 2.5:** Verify order list displays order date.
- [ ] **Story 2.5:** Verify order list displays order status.
- [ ] **Story 2.5:** Verify admin can click an order to view details.
- [ ] **Story 2.5:** Verify order detail page displays ordered items and quantities.
- [ ] **Story 2.6:** Verify customer receives "Ready for Pickup" email.
- [ ] **Story 2.6:** Verify email content is correct.

**Total**: 26 scenarios

### P1 Tests (<30 min)

**Purpose**: Important feature coverage

- [ ] **Story 2.2:** Verify cart updates if product price changes in backend.
- [ ] **Story 2.2:** Verify cart updates if product becomes out-of-stock in backend.
- [ ] **Story 2.3:** Verify phone number input field is present and optional.

**Total**: 3 scenarios

### P2/P3 Tests (<60 min)

**Purpose**: Full regression coverage

- (No P2/P3 scenarios identified for this epic)

**Total**: 0 scenarios

---

## Resource Estimates

### Test Development Effort

| Priority | Count | Hours/Test | Total Hours | Notes |
|---|---|---|---|---|
| P0 | 38 | 2.0 | 76 | Complex setup, security |
| P1 | 3 | 1.0 | 3 | Standard coverage |
| P2 | 0 | 0.5 | 0 | Simple scenarios |
| P3 | 0 | 0.25 | 0 | Exploratory |
| **Total** | **41** | **-** | **79** | **~10 days** |

### Prerequisites

**Test Data:**

- Products with various stock levels (in-stock, out-of-stock)
- Products with different prices
- Empty cart, cart with single item, cart with multiple items
- Cart with items that become out-of-stock or change price dynamically
- Valid customer email and optional phone number
- Invalid email formats
- Pending orders, orders with various items and quantities
- Dynamically generated using factories (`@faker-js/faker`)
- Seeded via API or direct database access

**Tooling:**

- Playwright (Test Framework, Test Runner, Assertion Library)
- `@faker-js/faker` (Data Generation)
- Playwright `request` fixture or dedicated API client (API Testing)
- Database client/ORM (Database Access)
- Test email service (for verifying email notifications)
- GitHub Actions (CI/CD)
- ESLint, Prettier (Code Quality)

**Environment:**

- Node.js (LTS), npm, Git (Local Development)
- Dedicated test database instance
- Staging environment for E2E testing
- Environment variables for secrets (`.env`, GitHub Secrets)

---

## Quality Gate Criteria

### Pass/Fail Thresholds

- **P0 pass rate**: 100% (no exceptions)
- **P1 pass rate**: ≥95% (waivers required for failures)
- **P2/P3 pass rate**: ≥90% (informational)
- **High-risk mitigations**: 100% complete or approved waivers

### Coverage Targets

- **Critical paths**: ≥80%
- **Security scenarios**: 100%
- **Business logic**: ≥70%
- **Edge cases**: ≥50%

### Non-Negotiable Requirements

- [ ] All P0 tests pass
- [ ] No high-risk (≥6) items unmitigated
- [ ] Security tests (SEC category) pass 100%
- [ ] Performance targets met (PERF category)

---

## Mitigation Plans

### R-E2-01: "Add to Cart" button not visible or functional (Story 2.1). (Score: 6)

**Mitigation Strategy:** Thorough UI/UX testing, E2E tests for add-to-cart flow.
**Owner:** QA/UX
**Timeline:** Epic 2
**Status:** Planned
**Verification:** E2E test pass, UI review

### R-E2-02: Product not added to cart correctly (Story 2.1). (Score: 6)

**Mitigation Strategy:** Unit and integration tests for add-to-cart logic, E2E tests for cart content verification.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned
**Verification:** Unit/Integration/E2E test pass

### R-E2-08: Incorrect items, quantities, or prices displayed in cart (Story 2.2). (Score: 6)

**Mitigation Strategy:** E2E tests for cart display accuracy, unit tests for data retrieval.
**Owner:** QA/DEV
**Timeline:** Epic 2
**Status:** Planned
**Verification:** E2E test pass, UI review

### R-E2-12: Cart total calculation errors (Story 2.2). (Score: 6)

**Mitigation Strategy:** Comprehensive unit and integration tests for cart calculation logic.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned
**Verification:** Unit/Integration test pass

### R-E2-14: "Proceed to Checkout" button not visible or functional (Story 2.3). (Score: 6)

**Mitigation Strategy:** Thorough UI/UX testing, E2E tests for checkout flow initiation.
**Owner:** QA/UX
**Timeline:** Epic 2
**Status:** Planned
**Verification:** E2E test pass, UI review

### R-E2-15: Checkout page not loading or displaying fields correctly (Story 2.3). (Score: 6)

**Mitigation Strategy:** E2E tests for checkout page rendering, component tests for form fields.
**Owner:** QA/DEV
**Timeline:** Epic 2
**Status:** Planned
**Verification:** E2E test pass, Component test pass

### R-E2-17: Inadequate input validation, leading to injection or data issues (Story 2.3). (Score: 6)

**Mitigation Strategy:** Implement strict client-side and server-side input validation and sanitization. Security audits.
**Owner:** DEV/SEC
**Timeline:** Epic 2
**Status:** Planned
**Verification:** Security audit report, Unit/Integration test pass

### R-E2-22: Email delivery failures to store (Story 2.4). (Score: 6)

**Mitigation Strategy:** Use a reliable transactional email service with delivery monitoring and retry mechanisms.
**Owner:** OPS/DEV
**Timeline:** Epic 2
**Status:** Planned
**Verification:** Monitoring alerts, Integration test pass

### R-E2-24: Order not recorded in admin dashboard (Story 2.4). (Score: 6)

**Mitigation Strategy:** Implement robust transaction management and error logging for order creation. E2E tests for order persistence.
**Owner:** DEV/QA
**Timeline:** Epic 2
**Status:** Planned
**Verification:** E2E test pass, Admin dashboard review

---

## Assumptions and Dependencies

### Assumptions

1.  The product catalog and pricing data are stable and accurate.
2.  The backend services for cart management and order processing are available and performant.
3.  Email service provider is reliable for sending notifications.
4.  Admin dashboard is accessible and functional for order management.

### Dependencies

1.  Product Catalog Service - Required by Epic 2 Start
2.  Order Processing Service - Required by Epic 2 Start
3.  Email Notification Service - Required by Epic 2 Start

### Risks to Plan

-   **Risk**: Delays in backend service development
    -   **Impact**: Delays in test development and execution
    -   **Contingency**: Prioritize API mocking for early test development
-   **Risk**: Unstable test environment
    -   **Impact**: Flaky tests, delayed feedback
    -   **Contingency**: Invest in robust environment provisioning and monitoring

---

## Approval

**Test Design Approved By:**

- [ ] Product Manager: **\*\***\_\_\_**\*\*** Date: **\*\***\_\_\_**\*\***
- [ ] Tech Lead: **\*\***\_\_\_**\*\*** Date: **\*\***\_\_\_**\*\***
- [ ] QA Lead: **\*\***\_\_\_**\*\*** Date: **\*\***\_\_\_**\*\***

**Comments:**

---

---

---

## Appendix

### Knowledge Base References

- `risk-governance.md` - Risk classification framework
- `probability-impact.md` - Risk scoring methodology
- `test-levels-framework.md` - Test level selection
- `test-priorities-matrix.md` - P0-P3 prioritization

### Related Documents

- PRD: PRD.md
- Epic: epics.md
- Architecture: (Not available)
- Tech Spec: (Not available)

---

**Generated by**: BMad TEA Agent - Test Architect Module
**Workflow**: `.bmad/bmm/testarch/test-design`
**Version**: 4.0 (BMad v6)
