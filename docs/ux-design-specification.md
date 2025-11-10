# ibe160 UX Design Specification

_Created on 2025-11-10 by BIP_
_Generated using BMad Method - Create UX Design Workflow v1.0_

---

## Executive Summary

The project is to create a web application for Alta Sigar & Grill. The main goals are to streamline inventory and order management for the owner and to offer a "click-and-collect" service for customers. A special focus is on making the experience welcoming and easy for people new to cigars.

The primary target users are:
*   **The Owner:** A busy entrepreneur who needs a simple, efficient way to manage products and orders.
*   **Existing Customers:** Local fans who want to check product availability and order online for easy pickup.
*   **Newcomers:** Curious individuals who need guidance and a non-intimidating way to make their first purchase.

---

## 1. Design System Foundation

### 1.1 Design System Choice

The selected design system is **shadcn/ui**.

*   **Rationale:** This system was chosen as it provides a modern, accessible, and highly customizable set of components built on Tailwind CSS and Radix UI. It offers the perfect balance between the speed of using pre-built components and the creative control required to achieve the project's desired "classic, sophisticated" aesthetic. This approach allows us to build a unique, high-quality interface without being locked into a generic look.

---

## 2. Core User Experience

### 2.1 Defining Experience

The defining experience for this application is **a well-structured cigar shopping experience.**

This means the primary focus is on executing a flawless e-commerce flow that is intuitive for seasoned shoppers and welcoming to newcomers. The entire user journey, from browsing the catalog to placing a click-and-collect order, should feel seamless, efficient, and empowering. The "Order" process itself is the most critical action and must be frictionless.

*   **Platform:** The application will be a responsive website, providing a consistent and optimal experience on both PC and mobile devices.

### 2.2 Desired Emotional Response

The primary emotional goal for the user experience is to make users feel **"Empowered and in control."** This principle will guide design decisions, prioritizing clarity, predictability, and a sense of mastery for the user.

### 2.3 Inspiration Analysis

The primary inspiration provided is **cigars.com**, noted for its aesthetic appeal.

*   **Aesthetic Profile:** Blends a classic, sophisticated feel with clean, modern e-commerce design principles.
*   **Key Characteristics:**
    *   **Product-Focused:** The design prioritizes high-quality product imagery and clear, accessible information.
    *   **Trustworthy:** The layout and presentation aim to feel established, reliable, and informative.
    *   **Visual Mood:** A sense of traditional luxury combined with the efficiency of a modern online store.

This analysis will inform the visual mood and overall design direction.

### 2.4 Core Experience Principles

To ensure a consistent and high-quality experience, the following principles will guide our design decisions:

*   **Speed:** The interface will be optimized for performance. Key actions, especially adding to cart and checking out, will feel fast and responsive.
*   **Guidance:** For the "Newcomer" persona, the design will provide clear, simple language and visual cues to reduce intimidation and guide them toward a confident purchase.
*   **Flexibility:** For experienced users and the owner, the interface will provide efficient shortcuts and clear information, allowing them to achieve their goals without unnecessary steps.
*   **Feedback:** The system will provide clear and immediate feedback for user actions, such as adding an item to the cart or submitting an order, to reinforce their sense of control.

---

## 3. Visual Foundation

### 3.1 Color System

The chosen color theme is **Theme 1: Logo Inspired**, which is directly derived from the brand's logo to ensure authenticity.

*   **Primary (Actions):** `#8d5b29` (A rich, warm brown for primary buttons and key interactive elements.)
*   **Secondary (Text & UI Elements):** `#2a1d13` (A dark, near-black for body text and core UI elements, providing excellent contrast and readability.)
*   **Accent (Hover & Highlights):** `#c59048` (A lighter tan for hover states, highlights, and subtle accents.)
*   **Background:** `#fdfaf6` (A soft, warm off-white for the main background to create a welcoming and clean canvas.)

This palette feels traditional, rustic, and trustworthy, aligning perfectly with the brand's desired personality.

### 3.2 Typography

To balance the classic brand feel with modern readability, a dual-font system will be used.

*   **Headings:** `Lora` (A classic serif font that adds a touch of elegance and aligns with the traditional, sophisticated aesthetic.)
*   **Body & UI:** `Inter` (A clean, highly readable sans-serif font for all body copy, labels, and UI elements, ensuring clarity and accessibility.)
*   **Type Scale:** A standard typographic scale (e.g., 12px, 14px, 16px, 20px, 24px, 36px) will be used to create clear hierarchy and visual rhythm.

### 3.3 Spacing & Layout

A consistent and rhythmic layout will be achieved through a structured spacing and grid system.

*   **Base Unit:** An **8px base unit** will be used for all spacing and sizing. This means margins, paddings, and component sizes will be multiples of 8 (e.g., 8px, 16px, 24px, 32px), creating a visually harmonious and predictable layout.
*   **Layout Grid:** A standard **12-column grid** will be used for all page layouts. This provides flexibility for creating responsive designs that adapt gracefully across mobile, tablet, and desktop screens.

**Interactive Visualizations:**

- Color Theme Explorer: [ux-color-themes.html](./ux-color-themes.html)

---

## 4. Design Direction

### 4.1 Chosen Design Approach

The chosen design direction is **Direction 1: Classic & Centered**.

*   **Rationale:** This approach was selected because its traditional, trustworthy, and straightforward nature aligns perfectly with the brand's identity. It provides a conventional and predictable experience, which is ideal for making all users, especially newcomers, feel confident and in control. The centered layout feels balanced and established, reinforcing the quality of the brand.

**Interactive Mockups:**

- Design Direction Showcase: [ux-design-directions.html](./ux-design-directions.html)

---

## 5. User Journey Flows

### 5.1 Critical User Paths

This section documents the step-by-step flows for the most critical user journeys identified in the PRD.

#### Journey 1: Placing a Click-and-Collect Order (Customer)

This is the primary customer journey. The chosen approach is a **Single-Page Checkout** for maximum efficiency and clarity.

*   **Goal:** A customer browses products and places an order for pickup.
*   **Flow Steps:**
    1.  **Entry:** User lands on the Homepage and sees information about the company. They click a primary call-to-action, like "Browse Products."
    2.  **Browse:** User is taken to the Product Catalog page. They can view all available cigars and accessories.
    3.  **Select:** User clicks on a product to go to the Product Detail page for more information.
    4.  **Add to Cart:** User clicks the "Add to Cart" button. They receive immediate visual feedback (e.g., the cart icon in the header updates with the item count).
    5.  **Navigate to Checkout:** User clicks the cart icon to navigate to the Checkout page.
    6.  **Checkout:** On a single page, the user sees their order summary, enters their contact details (email, optional phone), and clicks "Place Order."
    7.  **Success:** User is taken to an Order Confirmation page that displays a unique reference number and confirms that the order has been sent to the store.

*   **Flow Diagram:**
    ```mermaid
    graph TD
        A[Homepage] -->|Clicks 'Browse Products'| B(Product Catalog);
        B -->|Selects a product| C(Product Detail Page);
        C -->|Clicks 'Add to Cart'| D{Cart Updated};
        D -->|Clicks Cart Icon| E(Checkout Page);
        E -->|Fills form & Clicks 'Place Order'| F(Order Confirmation Page);
    ```

#### Journey 2: Processing a New Order (Owner)

*   **Goal:** The business owner efficiently processes an incoming order.
*   **High-Level Flow:** Login -> View new order on Admin Dashboard -> Mark order as "Processed" (triggers customer email) -> Mark order as "Completed" after pickup.

#### Journey 3: Discovering a Beginner-Friendly Cigar (Newcomer)

*   **Goal:** A new customer finds a suitable product without feeling overwhelmed.
*   **High-Level Flow:** Lands on Homepage -> Clicks on a "New to Cigars?" guide or filter -> Views a curated list of beginner-friendly products with simple descriptions -> Adds a product to the cart.

---

## 6. Component Library

### 6.1 Component Strategy

The component strategy for this project is to leverage the chosen design system, **shadcn/ui**, exclusively.

*   **Rationale:** The user confirmed that no unique or custom components are required for the MVP. Therefore, relying entirely on the comprehensive and accessible library provided by `shadcn/ui` is the most efficient approach. This ensures all UI elements are consistent with the established design direction and adhere to accessibility best practices out of the box. The styles of these components will be customized to align with the brand's visual identity.

---

## 7. UX Pattern Decisions

### 7.1 Consistency Rules

The following patterns will be used across the application to ensure a consistent, predictable, and high-quality user experience.

*   **Button Hierarchy:**
    *   **Primary Action:** Solid, filled button using the primary brand color (`#8d5b29`). Used for the most important action on a page (e.g., "Place Order," "Add to Cart").
    *   **Secondary Action:** A more subtle button style (e.g., outline or ghost button). Used for less critical actions (e.g., "Continue Shopping," "Cancel").
    *   **Destructive Action:** Styled distinctly with a warning color (e.g., red text or border) to prevent accidental clicks. Used for actions like "Remove from Cart" or "Delete Order."

*   **Feedback Patterns:**
    *   **Success/Info:** A temporary, non-intrusive "toast" notification at the top or bottom of the screen (e.g., "Item added to cart").
    *   **Error/Validation:** Inline error messages appearing directly below the form field with the issue. The field border will also be highlighted in red. This provides direct context for the error.
    *   **Loading:** Skeletons or spinners will be used to indicate when content is loading to manage user expectation and reduce perceived wait time.

*   **Form Patterns:**
    *   **Labels:** All form field labels will be placed above the input field for maximum clarity and accessibility.
    *   **Validation:** Forms will be validated "on blur" (when a user clicks out of a field) to provide immediate feedback without being disruptive.
    *   **Required Fields:** Required fields will be clearly marked with an asterisk (*).

*   **Confirmation Patterns:**
    *   **Destructive Actions:** Any action that results in data loss (e.g., deleting an order) will require an explicit confirmation from the user via a modal dialog (e.g., "Are you sure you want to delete this order?").

---

## 8. Responsive Design & Accessibility

### 8.1 Responsive Strategy

The application will be fully responsive, adapting gracefully to provide an optimal experience on mobile, tablet, and desktop devices.

*   **Breakpoints:** Standard breakpoints will be used (e.g., sm, md, lg, xl) to control layout changes.
*   **Navigation:** The "Classic & Centered" top navigation bar on desktop will collapse into a standard, accessible "hamburger" menu on mobile and tablet views.
*   **Layouts:** Multi-column layouts, such as product grids, will stack into a single, scrollable column on smaller screens to ensure readability and ease of use.
*   **Touch Targets:** All interactive elements will have a minimum touch target size of 44x44 pixels on mobile devices to ensure they are easy to tap.

### 8.2 Accessibility Strategy

The project is committed to providing an inclusive and accessible experience for all users.

*   **Compliance Target:** **WCAG 2.1 Level AA**.
*   **Key Requirements:**
    *   **Color Contrast:** All text will meet the minimum contrast ratio of 4.5:1 against its background.
    *   **Keyboard Navigation:** Every interactive element (links, buttons, form fields) will be fully accessible and operable using only a keyboard.
    *   **Focus Indicators:** A clear and visible focus state will be present on all interactive elements to help keyboard users understand where they are on the page.
    *   **Semantic HTML & ARIA:** The application will use correct semantic HTML5 tags. ARIA (Accessible Rich Internet Applications) attributes will be used where necessary to provide additional context to screen readers.
    *   **Alt Text:** All meaningful images will have descriptive alternative text. Decorative images will be hidden from screen readers.

---

## 9. Implementation Guidance

### 9.1 Completion Summary

This UX Design Specification is the result of a collaborative workshop to define the user experience for the ibe160 project. Through this process, we have made key decisions to guide the design and development process.

**Key Achievements:**
*   **Design System:** We selected **shadcn/ui** for a flexible and modern component base.
*   **Visual Foundation:** We established the **"Logo Inspired"** color theme, along with typography and spacing rules.
*   **Design Direction:** We chose the **"Classic & Centered"** layout for a trustworthy and straightforward user experience.
*   **User Journeys:** We defined critical user flows, including the **Single-Page Checkout** process.
*   **UX Patterns & Accessibility:** We established rules for UI consistency and committed to the **WCAG 2.1 Level AA** accessibility standard.

This document provides a comprehensive blueprint for the front-end development team to begin implementation with clarity and confidence.

---

## Appendix

### Related Documents

- Product Requirements: `{{prd_file}}`
- Product Brief: `{{brief_file}}`
- Brainstorming: `{{brainstorm_file}}`

### Core Interactive Deliverables

This UX Design Specification was created through visual collaboration:

- **Color Theme Visualizer**: {{color_themes_html}}
  - Interactive HTML showing all color theme options explored
  - Live UI component examples in each theme
  - Side-by-side comparison and semantic color usage

- **Design Direction Mockups**: {{design_directions_html}}
  - Interactive HTML with 6-8 complete design approaches
  - Full-screen mockups of key screens
  - Design philosophy and rationale for each direction

### Optional Enhancement Deliverables

_This section will be populated if additional UX artifacts are generated through follow-up workflows._

<!-- Additional deliverables added here by other workflows -->

### Next Steps & Follow-Up Workflows

This UX Design Specification can serve as input to:

- **Wireframe Generation Workflow** - Create detailed wireframes from user flows
- **Figma Design Workflow** - Generate Figma files via MCP integration
- **Interactive Prototype Workflow** - Build clickable HTML prototypes
- **Component Showcase Workflow** - Create interactive component library
- **AI Frontend Prompt Workflow** - Generate prompts for v0, Lovable, Bolt, etc.
- **Solution Architecture Workflow** - Define technical architecture with UX context

### Version History

| Date     | Version | Changes                         | Author        |
| -------- | ------- | ------------------------------- | ------------- |
| 2025-11-10 | 1.0     | Initial UX Design Specification | BIP |

---

_This UX Design Specification was created through collaborative design facilitation, not template generation. All decisions were made with user input and are documented with rationale._
