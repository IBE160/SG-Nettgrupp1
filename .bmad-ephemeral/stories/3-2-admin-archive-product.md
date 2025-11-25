# Story 3.2: Admin Archive Product

**Date:** 2025-11-20
**Author:** BIP
**Status:** done
**Epic:** Epic 3: Admin Product & Inventory Management

---

## 1. User Story

> As a Business Owner,
> I want to archive a product
> So that it is no longer visible to customers but its data is retained for historical purposes.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story introduces a "soft delete" feature for products. Instead of permanently deleting a product, it will be marked as archived and hidden from public view. This requires a small schema change, an update to the backend API, and a new button on the admin frontend.

*[Source: `docs/PRD.md` (FR015), `docs/epics.md`]*

---

## 3. Acceptance Criteria

1. From the product list in the admin interface, I can select a product and choose to "Archive".
2. Archived products are removed from the customer-facing catalog (FR015).
3. Archived products are still accessible in the admin interface (e.g., via a filter or separate view).
4. I can unarchive a product, making it visible again to customers.

---

## 4. Technical Implementation Plan

### Task 1: Verify Database Schema
- [x] Confirm the `products` table has the `is_archived` boolean column with a default of `false` (this was included in the schema from the Epic 1 Tech Spec).

### Task 2: Update Backend API
- [x] Modify the `GET /api/products` controller to filter results where `is_archived` is `false`. This will hide archived products from the public catalog.
- [x] The `PUT /api/products/:id` endpoint should be updated to allow changing the `is_archived` status.

### Task 3: Frontend UI
- [x] In `AdminDashboard.jsx`, add an "Archive" button to each product row in the table.
- [x] Add a "Show Archived" toggle or checkbox. When checked, the product list should fetch and display all products, including archived ones.
- [x] The "Archive" button should change to "Unarchive" for products where `is_archived` is `true`.
- [x] Clicking the "Archive"/"Unarchive" button should call the `PUT /api/products/:id` endpoint to toggle the `is_archiv.ed` flag.

---
## 5. Dev Notes
* The most important part of this story is ensuring the public-facing API (`GET /api/products`) *never* returns archived products.
---

## 6. Dev Agent Record
- **Context Reference:** `3-2-admin-archive-product.context.xml`

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
| 1.2 | 2025-11-25 | BIP | Senior Developer Review notes appended. |
| 1.3 | 2025-11-25 | BIP | Marked story as done after successful review. |

---

### Senior Developer Review (AI)

**Reviewer**: BIP
**Date**: 2025-11-25
**Outcome**: Approve

**Summary**:
The implementation of the "Admin Archive Product" story is now fully complete and meets all requirements. The previously identified issue with the missing confirmation dialog has been resolved. The code is clean, well-structured, and adheres to all project standards and technical specifications.

**Key Findings**:
None.

**Acceptance Criteria Coverage**:
All acceptance criteria are fully implemented and verified.

**Task Completion Validation**:
All tasks are verified as complete.

**Test Coverage and Gaps**:
As noted in the previous review, no new automated tests were added. The recommendation to add an E2E test for the archive/unarchive functionality still stands as a low-priority advisory note.

**Architectural Alignment**:
The implementation is now fully aligned with the project's architecture and the Epic 3 Technical Specification.

**Security Notes**:
No security issues were found.

**Best-Practices and References**:
The implementation follows the best practices defined in the project's `architecture.md` and the Epic 3 Tech Spec.

**Action Items**:
**Advisory Notes:**
*   [ ] [Low] Add an E2E test to cover the archive/unarchive functionality.