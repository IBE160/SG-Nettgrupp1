# Story 1.7: Landing Page with Store Location Map

**Date:** 2025-11-20
**Author:** BIP
**Status:** ready-for-dev
**Epic:** [Epic 1: Project Foundation & Product Catalog](tech-spec-epic-1.md)

---

## 1. User Story

> As a Customer,
> I want to see the store's location on a map on the landing page,
> So that I can easily find the physical store.

*[Source: `docs/epics.md`]*

---

## 2. Requirements Context

This story adds a key piece of informational content to the landing page: an embedded map showing the physical store location. This directly addresses FR017. The implementation should be straightforward, using an iframe embed from Google Maps, and does not require complex API integration.

*[Source: `docs/PRD.md`, `.bmad-ephemeral/stories/tech-spec-epic-1.md`]*

---

## 3. Acceptance Criteria

1. The landing page includes an embedded Google Maps view (FR017).
2. The map is centered on the Alta Sigar & Grill store location.
3. A pin or marker clearly indicates the store's address.
4. The map is interactive (zoom, pan).

*[Source: `docs/epics.md`]*

---

## 4. Technical Implementation Plan

### Task 1: Obtain Google Maps Embed Code
- [ ] Go to Google Maps.
- [ ] Search for the "Alta Sigar & Grill" store location.
- [ ] Click "Share", then "Embed a map".
- [ ] Copy the generated `<iframe>` HTML code.
- [ ] **Note:** The exact address needs to be confirmed with the business owner, as noted as an open question in the Tech Spec. Use a placeholder address if necessary.

### Task 2: Embed Map in Landing Page
- [ ] Open the `src/pages/LandingPage.jsx` component created in Story 1.4.
- [ ] Add a new section to the page for the map.
- [ ] Paste the `<iframe>` code into the JSX for the component.
- [ ] Adjust the `width` and `height` attributes of the iframe to be responsive (e.g., `width="100%"`).

### Task 3: Testing
- [ ] Run the application locally and navigate to the landing page.
- [ ] Verify that the map is displayed correctly.
- [ ] Confirm that the map is interactive (can be zoomed and panned).
- [ ] Check the responsiveness of the map container on different screen sizes.
- [ ] Write an E2E test to assert that the `iframe` element exists on the landing page.

---

## 5. Dev Notes

*   **Learnings from Previous Story:** The previous story (1.6) is `ready-for-dev` but has not been implemented yet.
*   This is a content-focused story. The main challenge is ensuring the embedded map is responsive and doesn't break the layout of the page.
*   The open question from the Tech Spec regarding the exact address must be resolved to complete this story. For now, a developer can proceed with a known placeholder address for "Alta Sigar & Grill".

**Citations:**
-   Functional Requirement: `docs/PRD.md` (FR017)
-   Epic & ACs: `docs/epics.md`
-   Open Question: `.bmad-ephemeral/stories/tech-spec-epic-1.md` (Risks, Assumptions, Open Questions section)

---

## 6. Dev Agent Record
- **Context Reference:** `1-7-landing-page-with-store-location-map.context.xml`

---

## 7. Change Log

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-11-20 | BIP | Initial draft |
| 1.1 | 2025-11-20 | BIP | Marked ready-for-dev and added context reference. |
