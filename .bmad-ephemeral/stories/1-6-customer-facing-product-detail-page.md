# Story 1.6: Customer-Facing Product Detail Page

**Date:** 2025-11-20
**Author:** BIP
**Status:** ready-for-dev
**Epic:** [Epic 1: Project Foundation & Product Catalog](tech-spec-epic-1.md)

---

## 1. User Story

> As a Customer,
> I want to view detailed information for a specific product
> So that I can make an informed decision about a purchase.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story focuses on creating a dedicated page for a single product. This involves setting up a dynamic route in `react-router-dom` that can handle product IDs and creating a component that fetches and displays the full details for that specific product. This builds directly on the product list created in Story 1.5.

*[Source: `docs/architecture.md`, `.bmad-ephemeral/stories/tech-spec-epic-1.md`]*

---

## 3. Acceptance Criteria

1. Clicking on a product in the catalog navigates to a dedicated product detail page.
2. The product detail page displays the product's name, full description, price, real-time stock quantity, land of origin, and vitola (FR001, FR002).
3. The product detail page includes simplified, relatable language for taste/flavor descriptions (FR003).
4. The product detail page is responsive across mobile, tablet, and PC devices (NFR001).

*[Source: `docs/epics.md`]*

---

## 4. Technical Implementation Plan

### Task 1: Implement Dynamic Routing
- [ ] In the main router configuration (`src/App.jsx`), add a new dynamic route: `/products/:productId`.
- [ ] This route should render a new `ProductDetailPage.jsx` component.
- [ ] In the `ProductCard.jsx` component from the previous story, wrap the card in a `Link` component from `react-router-dom` that points to `/products/${product.id}`.

### Task 2: Create Product Detail Page Component
- [ ] Create a new page component `src/pages/ProductDetailPage.jsx`.
- [ ] Use the `useParams` hook from `react-router-dom` to get the `productId` from the URL.
- [ ] Use a `useEffect` hook to fetch data for the specific product by calling the `GET /api/products/:productId` endpoint.
- [ ] Display loading and error states appropriately.

### Task 3: Display Full Product Details
- [ ] In `ProductDetailPage.jsx`, once the data is fetched, display all the required fields: name, full description, price, stock quantity, land of origin, and vitola.
- [ ] Add a section for the simplified taste/flavor description (FR003). For now, this can be part of the main `description` field until a separate field is decided upon.
- [ ] Ensure the layout is clean, readable, and responsive.

### Task 4: Testing
- [ ] Write a component test for `ProductDetailPage.jsx` that simulates the dynamic route and verifies that the correct API call is made and that data is rendered correctly.
- [ ] Write an E2E test that clicks on a product from the main catalog page and asserts that the URL changes and the detailed product information is visible on the new page.

---

## 5. Dev Notes

*   **Learnings from Previous Story:** The previous story (1.5) is `ready-for-dev` but has not been implemented yet.
*   The key to this story is handling the dynamic parameter (`:productId`) in the route and using it to fetch the correct data.
*   Pay attention to the user experience for loading and error states on this page.

**Citations:**
-   Architecture & Routing: `docs/architecture.md`
-   Epic & ACs: `docs/epics.md`
-   API Endpoint: `.bmad-ephemeral/stories/tech-spec-epic-1.md`

---

## 6. Dev Agent Record
- **Context Reference:** `1-6-customer-facing-product-detail-page.context.xml`

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
