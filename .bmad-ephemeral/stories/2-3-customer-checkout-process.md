# Story 2.3: Customer Checkout Process

**Date:** 2025-11-20
**Author:** BIP
**Status:** Draft
**Epic:** Epic 2: Click-and-Collect Ordering

---

## 1. User Story

> As a Customer,
> I want to provide my contact details to place a click-and-collect order
> So that the store can prepare and contact me about my order.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story implements the checkout page, which is the final step for the customer before placing an order. This is primarily a frontend task involving a form for the user to enter their contact details. The key requirement is to capture the necessary information and prepare it for order submission in the next story.

*[Source: `docs/PRD.md`, `docs/epics.md`]*

---

## 3. Acceptance Criteria

1. A "Proceed to Checkout" button is available in the shopping cart.
2. The checkout page prompts for essential details: email (required) and phone number (optional) (FR006).
3. Input fields have appropriate validation (e.g., email format).
4. The checkout process clearly states that payment occurs at pickup (FR018).
5. The Checkout process clearly states the age limitation of 18 years for picking up orders.

---

## 4. Technical Implementation Plan

### Task 1: Create Checkout Page
- [ ] In `CartPage.jsx`, add a "Proceed to Checkout" button that navigates to a new `/checkout` route.
- [ ] Create a new `src/pages/CheckoutPage.jsx` component.
- [ ] On this page, create a form using `shadcn/ui` components for "Email" and "Phone Number".
- [ ] Add text clearly stating "Payment will be handled in-store upon pickup" and "You must be 18 or older to purchase and pick up".

### Task 2: Form Handling and Validation
- [ ] Implement state management for the form fields.
- [ ] Add client-side validation to ensure the email field is not empty and is a valid email format.
- [ ] On form submission, the data should be stored in a state that will be used in the next story to create the order. For now, it can just log the data to the console.

---
## 5. Dev Notes
*   This story is about UI and form handling. No backend changes are required yet. The actual order submission happens in Story 2.4.
---
## 6. Change Log
| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
