# Story 1.5: Customer-Facing Product Catalog Display

**Date:** 2025-11-20
**Author:** BIP
**Status:** ready-for-dev
**Epic:** [Epic 1: Project Foundation & Product Catalog](tech-spec-epic-1.md)

---

## 1. User Story

> As a Customer,
> I want to view a list of available products within the "Cigars and Accessories" category on a dedicated products page
> So that I can browse the product offerings.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story implements the core customer-facing feature of the product catalog. It involves creating the main `ProductsPage` component that will fetch the list of products from the backend API and render them for the user. This builds upon the API created in Story 1.2 and the routing established in Story 1.4. Each product in the list should be displayed clearly, showing essential information.

*[Source: `docs/architecture.md`, `.bmad-ephemeral/stories/tech-spec-epic-1.md`]*

---

## 3. Acceptance Criteria

1. A dedicated "Products" page displays a list of products within the "Cigars and Accessories" category (FR001).
2. Each product in the catalog displays its name, a brief description, price, and current stock quantity.
3. The catalog is up-to-date with product information from the database.
4. The "Products" page is responsive across mobile, tablet, and PC devices (NFR001).

*[Source: `docs/epics.md`]*

---

## 4. Technical Implementation Plan

### Task 1: Develop Product Catalog Page
- [ ] Create/update the `src/pages/ProductsPage.jsx` component.
- [ ] Use a `useEffect` hook to fetch data from the `GET /api/products` endpoint when the component mounts. Store the products in the component's state.
- [ ] While data is loading, display a loading indicator (e.g., a spinner from `shadcn/ui`).
- [ ] If the fetch fails, display an appropriate error message.

### Task 2: Create Product Card Component
- [ ] Create a new reusable component `src/components/common/ProductCard.jsx`.
- [ ] This component should accept a single `product` object as a prop.
- [ ] Inside the card, display the product's name, a truncated description, price, and stock quantity. Use `shadcn/ui` `Card` component for styling.

### Task 3: Render Product List
- [ ] In `ProductsPage.jsx`, map over the array of products from the state.
- [ ] For each product object, render a `ProductCard.jsx` component, passing the product data as a prop.
- [ ] Arrange the cards in a responsive grid layout (e.g., using Tailwind CSS grid utilities).

### Task 4: Testing
- [ ] Create a mock API handler that returns a sample array of products for testing purposes.
- [ ] Write a component test for `ProductsPage.jsx` that verifies the loading state and that the correct number of `ProductCard` components are rendered after a successful fetch.
- [ ] Write an E2E test with Playwright that navigates to the `/products` page and asserts that product information is visible on the screen.

---

## 5. Dev Notes

*   **Learnings from Previous Story:** The previous story (1.4) is `ready-for-dev` but has not been implemented yet.
*   Focus on creating a clean, readable display of products. The `ProductCard` should be designed to be reusable and easily styled.
*   Error handling is important. The user should be informed if the product catalog cannot be loaded.

**Citations:**
-   Architecture: `docs/architecture.md`
-   Epic & ACs: `docs/epics.md`
-   API Endpoint: `.bmad-ephemeral/stories/tech-spec-epic-1.md`

---

## 6. Dev Agent Record
- **Context Reference:** `1-5-customer-facing-product-catalog-display.context.xml`

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
