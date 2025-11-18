# ibe160 UX Design Specification

_Created on onsdag 12. november 2025 by BIP_
_Generated using BMad Method - Create UX Design Workflow v1.0_

---

## Executive Summary

The project aims to modernize Alta Sigar & Grill's operations and enhance customer experience by streamlining inventory and order management, offering convenient click-and-collect services. The goal is to boost efficiency, satisfaction, market reach, and sales.

---

## 1. Design System Foundation

### 1.1 Design System Choice

**Chosen System:** shadcn/ui
**Version:** Components last updated or verified on 2025-11-13. It is recommended to document the specific versions of the installed components.
**Rationale:** Selected by the user. It aligns well with the project's use of Tailwind CSS, offering highly customizable and accessible components. This choice provides a strong foundation for building a visually appealing and effective website while maintaining control over the design.

---

## 2. Core User Experience

### 2.1 Defining Experience

"A premium click-and-collect cigar experience."

### 2.2 Novel UX Patterns

**Core Experience Principles:**

*   **Speed:** Key actions like browsing, adding to cart, and checkout should feel instant and fluid, with quick loading times and smooth transitions.
*   **Guidance:** Product information should be presented clearly and simply to aid understanding.
*   **Flexibility:** The system should offer clear, efficient paths for primary tasks while also allowing users the freedom to explore and browse the product catalog at their own pace.
*   **Feedback:** Users should receive clear, immediate, and positive feedback for their actions, such as cart updates and order confirmations, contributing to a sense of delight and efficiency.

---

## 3. Visual Foundation

### 3.1 Color System

**Chosen Theme:** Premium & Sophisticated (inspired by logo)
**Color Palette:**
*   **Primary (Actions, Key Elements):** `#DAA520` (Goldenrod)
*   **Secondary (Supporting Actions, Backgrounds):** `#1A1A1A` (Deep Black)
*   **Accent (Highlights):** `#008080` (Teal)
*   **Neutral Light:** `#F8F9FA`
*   **Neutral Medium:** `#6C757D`
*   **Neutral Dark:** `#343A40`
*   **Success:** `#28A745`
*   **Warning:** `#FFC107`
*   **Error:** `#DC3545`
**Rationale:** Directly extracted from the brand logo, aiming to convey a luxurious, trustworthy, and sophisticated brand personality.

### 3.2 Typography

**Font Families:**
*   **Headings:** A clean, elegant sans-serif (e.g., Inter, Lato) for a modern yet sophisticated feel.
*   **Body Text:** A highly readable sans-serif (e.g., Inter, Roboto) for optimal legibility across devices.
*   **Monospace:** A standard monospace font (e.g., Fira Code) for code snippets or data display if needed.
**Type Scale:** Standard hierarchical scale (h1-h6 for headings, body, small, caption for text sizes).
**Font Weights:** Regular, Medium, Semi-bold, Bold for clear visual hierarchy and emphasis.
**Line Heights:** Optimized for readability, typically 1.5 for body text.
**Rationale:** Aligns with the modern aesthetic of shadcn/ui and the premium brand personality, ensuring clarity and elegance.

### 3.3 Spacing & Layout

**Base Unit:** 8px (for consistent and scalable spacing).
**Spacing Scale:** Multiples of the base unit (e.g., 8px, 16px, 24px, 32px, 48px, etc.) for a harmonious visual rhythm.
**Layout Grid:** A flexible 12-column grid system for desktop, adapting to single-column layouts on mobile for optimal responsiveness.
**Container Widths:** Standard responsive container widths, with a maximum width for large screens to maintain readability and visual balance.
**Rationale:** Provides a robust and flexible foundation for responsive design, ensuring a consistent and visually appealing layout across all devices.

**Interactive Visualizations:**

- Color Theme Explorer: [ux-color-themes.html](./ux-color-themes.html)

---

## 4. Design Direction

### 4.1 Chosen Design Approach

**Product Catalog:** Direction 1: Grid Focus (Visual Browsing)
*   **Layout:** Prominent grid of product cards with large images.
*   **Visual Hierarchy:** Images are primary; product name and price are secondary.
*   **Interaction:** Hover effects on cards, with a quick-add-to-cart button appearing on hover.
*   **Visual Weight:** Balanced and clean, with a strong focus on product imagery.
*   **Content:** Minimal text on cards; detailed information available on click.
*   **Rationale:** User prefers a visually engaging and modern browsing experience.

**Product Detail Page:** Direction 5: Concise Overview (Efficient Purchase)
*   **Layout:** Key information (image, price, stock, add to cart) is prominently displayed above the fold, with additional details below.
*   **Visual Hierarchy:** Purchase-related actions are the most prominent elements.
*   **Interaction:** Quick quantity adjustment and a clear "Add to Cart" button.
*   **Visual Weight:** Clean, functional, and direct.
*   **Content:** Key features presented in bullet points, with concise descriptions.
*   **Rationale:** User prioritizes efficiency and a direct path to purchase once a product is selected.

**Interactive Mockups:**

- Design Direction Showcase: [ux-design-directions.html](./ux-design-directions.html)

---

## 5. User Journey Flows

### 5.1 Critical User Paths

#### User Journey: Customer (General) - Placing a Click-and-Collect Order

**User Goal:** To place a click-and-collect order for cigars.
**Approach:** Single-page Checkout (combining cart review and essential details for efficiency).

**Flow Steps:**

1.  **Landing Page:**
    *   **User sees:** Brand identity, main navigation, and a clear call-to-action button to the product catalog.
    *   **User does:** Clicks the button to navigate to the product catalog.
    *   **System responds:** Displays the product catalog page.

2.  **Product Catalog:**
    *   **User sees:** A visually appealing grid of product listings (image, name, price), options to adjust quantity, and "Add to Cart" buttons (potentially on hover for a cleaner look).
    *   **User does:** Browses products, adjusts quantities as desired, and clicks "Add to Cart" for selected items.
    *   **System responds:** The shopping cart icon (e.g., in the header) updates dynamically to reflect the added items.

3.  **Shopping Cart / Checkout Page (Single Page):**
    *   **User sees:** A comprehensive list of items in their cart, including quantities, individual prices, and the total cost. A "trashcan" icon is available next to each item to allow deletion. Fields for entering Name, Email, and Phone Number (optional) are clearly presented. A prominent "Proceed to Order" or similar button is visible.
    *   **User does:** Reviews the order, optionally revises quantities or deletes items, fills in their contact information (Name, Email, Phone), and clicks "Proceed to Order."
    *   **System responds:** Validates the entered information and processes the order.

4.  **Order Confirmation Page:**
    *   **User sees:** A "Thank you for your order" message, a unique order reference number, and a clear statement that a new email confirmation will be sent when the order is ready for pickup.
    *   **User does:** Acknowledges the confirmation.
    *   **System responds:** The order is officially placed, and an email with order details is automatically sent to the store.

**Decision Points:**

*   **On Product Catalog:** Users can continue browsing or add items to their cart.
*   **On Shopping Cart/Checkout:** Users can revise quantities, delete items, or proceed with placing the order.

**Error States:**

*   **Invalid Input:** If contact information is incomplete or invalid, the system highlights the problematic fields and provides clear, actionable error messages.
*   **Product Out of Stock:** If a product becomes unavailable during the checkout process, the system notifies the user immediately and guides them to adjust their order.
*   **General Errors:** While the user suggested "refresh page," the system should ideally provide specific error messages and guidance for recovery, rather than relying solely on a page refresh.

**Success State:**

*   **Completion Feedback:** A clear "Thank you for your order" message with a unique reference number.
*   **Next Action:** Users can return to the product catalog to continue browsing or close the page.

#### User Journey: Business Owner - Processing a New Order

**User Goal:** To process a new click-and-collect order.
**Approach:** Streamlined Admin Workflow.

**Flow Steps:**

1.  **Login to Admin Dashboard:**
    *   **User sees:** Login screen.
    *   **User does:** Enters credentials, logs in.
    *   **System responds:** Redirects to Admin Dashboard.
2.  **View New Orders & Inventory:**
    *   **User sees:** A dashboard with a prominent section for "New Orders" (e.g., a list or card view) and an accessible "Inventory Management" section (e.g., a link or tab).
    *   **User does:** Reviews new orders.
    *   **System responds:** Displays order details (customer name, items, quantity).
3.  **Process Order (Mark as Prepared):**
    *   **User sees:** Details of a selected new order.
    *   **User does:** Gathers products, then clicks a "Mark as Prepared" button.
    *   **System responds:** Order status changes to "Prepared," and an automated pickup confirmation email is sent to the customer. Visual feedback confirms the action (e.g., a toast notification, status update on the order list).
4.  **Complete Order (After Pickup):**
    *   **User sees:** The order marked as "Prepared."
    *   **User does:** After customer picks up and pays, clicks a "Mark as Completed" button.
    *   **System responds:** Order status changes to "Completed." Inventory for the items in the order is automatically decremented. Visual feedback confirms the action.
5.  **Manage Inventory (Optional/As Needed):**
    *   **User sees:** A list of products with current stock levels in the "Inventory Management" section.
    *   **User does:** Selects a product, edits its stock level, and saves.
    *   **System responds:** Inventory is updated.
6.  **Delete Order (Decision Point):**
    *   **User sees:** An order in the list.
    *   **User does:** Clicks a "Delete Order" button (e.g., for cancellations or no-shows).
    *   **System responds:** Prompts for confirmation, then removes the order.

**Decision Points:**

*   Owner can choose to manage inventory at any time.
*   Owner can delete an order instead of processing it.

**Error States:**

*   If stock discrepancy, owner can manually adjust inventory.
*   System should provide clear error messages for failed actions (e.g., "Failed to update stock").

**Success State:**

*   **Completion Feedback:** Order status updated to "Completed," inventory automatically adjusted.
*   **Next Action:** Owner can continue managing other orders or inventory.

---

## 6. Component Library

### 6.1 Component Strategy

**Design System Components (shadcn/ui as a starting point):**
*   Buttons (Primary, Secondary, Success, Warning, Error)
*   Form Inputs (Text fields for Name, Email, Phone)
*   Cards (as a base for custom product cards)
*   Modals/Dialogs (for order confirmation, error messages)
*   Navigation elements (Header, Footer)
*   Tables (for admin order list, inventory list)
*   Alerts/Toasts (for feedback messages)
*   Icons (for trashcan, cart, etc.)

**Custom Components Needed:**

#### Product Card (Catalog)

*   **Purpose:** To visually represent a single product in the catalog, enabling users to quickly browse, view essential information, and add items to their cart.
*   **Anatomy:**
    *   **Product Image:** Prominent display of the cigar.
    *   **Product Name:** Clear and readable title.
    *   **Price:** Current price of the product.
    *   **Stock Quantity:** Real-time indication of available stock.
    *   **Quantity Adjuster:** Controls for increasing or decreasing the quantity to be added to the cart.
    *   **Add to Cart Button:** A clear call-to-action.
*   **States:**
    *   **Default:** Standard display of all elements.
    *   **Hover:** Quick-add-to-cart button appears or becomes more prominent (as per "Grid Focus" design direction).
    *   **Out of Stock:** Visual indication (e.g., greyed out card, "Out of Stock" label, "Add to Cart" button disabled).
    *   **Adding to Cart:** Visual feedback (e.g., spinner on button, temporary checkmark).
*   **Variants:**
    *   **Standard:** For general product catalog display.
*   **Behavior:**
    *   Clicking on the card (image/name) navigates to the Product Detail Page.
    *   Adjusting quantity updates the local selection before adding to cart.
    *   Clicking "Add to Cart" adds the selected quantity to the shopping cart and updates the cart icon.
*   **Accessibility:** Ensure keyboard navigation, clear focus states, and appropriate ARIA labels for interactive elements.

#### Order Item Display (Cart/Checkout)

*   **Purpose:** To display a single product within the shopping cart, allowing the user to review its details, adjust its quantity, or remove it from the cart.
*   **Anatomy:**
    *   **Product Image:** A small thumbnail for visual identification.
    *   **Product Name:** Clear and readable title of the product.
    *   **Quantity:** Current quantity of the product in the cart, with controls for adjustment.
    *   **Price:** Unit price of the product.
    *   **Subtotal:** Calculated price for the current quantity of the product.
    *   **Remove Button:** An icon (e.g., trashcan) or button to remove the item from the cart.
*   **States:**
    *   **Default:** Standard display of all elements.
    *   **Quantity Adjusted:** Visual feedback (e.g., updated subtotal, subtle animation) when quantity is changed.
    *   **Removed:** The item visually disappears from the cart list.
    *   **Out of Stock:** If the product goes out of stock while in the cart, a clear visual indication and message are displayed, potentially disabling quantity adjustment or prompting removal.
*   **Variants:**
    *   **Editable:** For the main shopping cart page, allowing quantity adjustments and removal.
    *   **Read-only:** For the checkout summary, displaying items and quantities without modification options.
*   **Behavior:**
    *   Clicking quantity adjusters updates the quantity and recalculates the subtotal and overall cart total.
    *   Clicking the remove button deletes the item from the cart and updates the cart total.
*   **Accessibility:** Ensure clear labeling for quantity adjusters and remove buttons, and proper focus management.

#### Admin Order Card/Row

*   **Purpose:** To provide a concise summary of an order within the admin dashboard, enabling the business owner to quickly assess its status and perform necessary actions.
*   **Anatomy:**
    *   **Order Reference Number:** Unique identifier for the order.
    *   **Customer Email:** Email address of the customer who placed the order.
    *   **Order Date:** Date and time the order was placed.
    *   **Current Status:** Clearly displayed status (e.g., "New," "Prepared," "Completed," "Cancelled").
    *   **Action Buttons:** Buttons for "Mark as Prepared", "Mark as Completed", "Mark as Cancelled", and a "Delete Order" button/icon.
*   **States:**
    *   **New:** Visually distinct (e.g., highlighted background, bold text) to draw attention.
    *   **Prepared:** Standard display, indicating the order is being processed.
    *   **Completed:** Standard display, indicating the order is fulfilled.
    *   **Cancelled:** De-emphasized display (e.g., greyed out text) to indicate it is no longer an active order.
    *   **Hover:** Visual feedback on hover to indicate interactivity.
*   **Variants:**
    *   **List Item:** A compact row for display within a list of orders.
    *   **Card View:** A more expansive card format for individual order details or a dashboard summary.
*   **Behavior:**
    *   Clicking on the card/row navigates to a detailed order view (if implemented).
    *   Clicking "Mark as Prepared" updates the order status and triggers customer notification.
    *   Clicking "Mark as Completed" updates the order status and triggers inventory decrement.
    *   Clicking "Mark as Cancelled" updates the order status and returns the ordered items to inventory.
    *   Clicking "Delete Order" prompts for confirmation before removal.
*   **Accessibility:** Ensure clear labels for status and action buttons, and proper keyboard navigation for admin users.

#### Inventory Item Editor

*   **Purpose:** To enable the business owner to view, edit, and manage all details of an existing product, including its stock levels, ensuring the online catalog remains accurate and up-to-date.
*   **Anatomy:**
    *   **Product Name:** Editable text field.
    *   **Product Description:** Editable text area for detailed product information.
    *   **Price:** Editable number field.
    *   **Stock Quantity:** Editable number field with clear validation to prevent negative values.
    *   **Land of Origin:** Editable text field or dropdown for selection.
    *   **Vitola:** Editable text field or dropdown for selection.
    *   **Product Image:** Display of the current product image, with an option to upload a new image.
    *   **Save Changes Button:** To commit modifications.
    *   **Cancel/Discard Changes Button:** To revert any unsaved modifications.
    *   **Archive Product Button:** To remove the product from the customer-facing catalog (as per Story 3.2).
*   **States:**
    *   **Default:** Form fields pre-populated with the product's existing data.
    *   **Editing:** Input fields are active and ready for modification.
    *   **Saving:** A loading indicator is displayed while changes are being submitted.
    *   **Error:** Validation errors are clearly highlighted next to the respective fields.
    *   **Saved:** A confirmation message is displayed upon successful update.
*   **Variants:**
    *   **Full Edit Form:** A comprehensive form for editing all product details.
    *   **Quick Stock Update:** A more streamlined interface, potentially integrated inline within a product list, specifically for rapidly adjusting stock levels.
*   **Behavior:**
    *   Clicking "Save Changes" updates the product in the database and refreshes the display.
    *   Clicking "Cancel" or "Discard Changes" reverts the form to its last saved state.
    *   Clicking "Archive Product" changes the product's status, making it invisible to customers.
*   **Accessibility:** Ensure all form fields have proper labels, clear error messages, and are navigable via keyboard.

---

## 7. UX Pattern Decisions

### 7.1 Consistency Rules

**Button Hierarchy:**
*   **Primary Action:** High visual emphasis (e.g., solid background using our primary gold color, `#DAA520`). Used for the single most important action on a screen (e.g., "Add to Cart", "Proceed to Order", "Save Changes").
*   **Secondary Action:** Medium visual emphasis (e.g., an outlined button with a dark border, or a solid button using a neutral gray like `#6C757D`). Used for important but not primary actions (e.g., "Cancel", "Back", "View Details").
*   **Tertiary Action:** Low visual emphasis (e.g., a text-only button). Used for less critical actions (e.g., "Learn More", "Clear Filters").
*   **Destructive Action:** Clear visual warning (e.g., a solid background using our error red color, `#DC3545`). Used for actions that delete or have irreversible consequences (e.g., "Delete Order", "Remove Item").
**Rationale:** Approved by user. Provides clear visual cues for action importance and type.

**Feedback Patterns:**
*   **Success:** A brief, non-intrusive "toast" message (a small, temporary notification that appears and disappears) at the top or bottom of the screen. It should use our success green color (`#28A745`). Examples: "Item added to cart", "Order placed successfully".
*   **Error:** Clear, actionable messages. For form validation, these should appear inline next to the problematic field. For critical errors, a more prominent alert or modal dialog should be used. It should use our error red color (`#DC3545`). Examples: "Product out of stock", "Invalid email address".
*   **Warning:** An informative message for non-critical issues or potential problems, often displayed as a banner or a less intrusive alert. It should use our warning orange/yellow color (`#FFC107`). Examples: "Low stock remaining", "Unsaved changes".
*   **Info:** General information or helpful tips, often displayed as a small banner or tooltip. It could use our accent teal color (`#008080`). Example: "Payment occurs physically at pickup."
*   **Loading:** A visual indicator (e.g., a spinner, skeleton screen, or progress bar) for any operation that takes more than a few hundred milliseconds, to reassure the user that the system is working.
**Rationale:** Approved by user. Ensures clear and timely communication of system status.

**Form Patterns:**
*   **Label Position:** Labels should be placed **above** the input fields. This ensures clarity and good scannability, especially important for responsive design across various devices.
*   **Required Field Indicator:** Use a clear **asterisk (`*`)** next to the label to denote required fields.
*   **Validation Timing:** Input should be validated **on blur** (when the user leaves the field) to provide immediate feedback, and again **on submit** to catch any missed errors.
*   **Error Display:** Error messages should be displayed **inline**, directly below the problematic input field, using our error red color (`#DC3545`).
*   **Help Text:** Provide concise help text **below** the input field for complex inputs, or use tooltips for less common explanations.
**Rationale:** Approved by user. Promotes usability and reduces user errors in data entry.

**Modal Patterns:**
*   **Size Variants:**
    *   **Small:** For simple confirmations or very short forms.
    *   **Medium:** For most standard forms or information displays.
    *   **Large:** For complex forms or detailed information that still needs to be contained.
    *   **Full-screen on mobile:** Modals should automatically adapt to full-screen on smaller devices for optimal usability and readability.
*   **Dismiss Behavior:**
    *   Allow dismissal by **clicking outside the modal** (backdrop click).
    *   Allow dismissal by pressing the **Escape key**.
    *   Always include a clear **"Close" button** (e.g., an "X" icon) within the modal itself.
*   **Focus Management:**
    *   When a modal opens, focus should **automatically shift to the first interactive element** within the modal.
    *   Focus should be **"trapped" within the modal**, meaning users cannot tab outside of it until it's closed.
    *   When the modal closes, focus should **return to the element that triggered its opening**.
*   **Stacking:** **Avoid stacking multiple modals.** If a new action requires a modal, the current one should be closed first to prevent confusion and maintain a clear user flow.
**Rationale:** Approved by user. Ensures consistent and accessible handling of temporary overlays.

**Navigation Patterns:**
*   **Active State Indication:** Clearly highlight the currently active navigation item (e.g., with a different background color, bold text, or an underline). This helps users understand their current location within the application.
*   **Breadcrumb Usage:** Implement breadcrumbs for multi-level navigation paths, particularly in the product catalog and admin sections. This provides a clear trail of where the user is and allows easy navigation back to previous levels.
*   **Back Button Behavior:** The browser's native back button should function as expected, navigating to the previous view within the application. Additionally, provide an in-app "Back" button where it enhances usability (e.g., on a product detail page to return to the catalog).
*   **Deep Linking:** Support deep linking to allow users to access specific pages directly via URL. This improves shareability and bookmarking capabilities.
**Rationale:** Approved by user. Provides clear orientation and efficient movement within the application.

**Empty State Patterns:**
*   **First Use:** For areas that are empty on first use (e.g., an empty shopping cart, an empty "New Orders" list in the admin dashboard), provide **guidance and a clear call-to-action**.
    *   *Example (Customer):* "Your cart is empty. Start browsing our premium cigars!" with a button to the product catalog.
    *   *Example (Admin):* "No new orders yet. Check back later or manage your inventory."
*   **No Results:** When a search or filter yields no results, provide a **helpful message and suggestions**.
    *   *Example:* "No cigars found matching your criteria. Try adjusting your filters or browse our full catalog."
*   **Cleared Content:** If content is cleared (e.g., all items removed from the cart), offer an **undo option** if applicable, or a clear path forward.
**Rationale:** Approved by user. Improves user experience by providing context and direction in the absence of content.

**Confirmation Patterns:**
*   **Delete:** For any destructive action, such as deleting an order in the admin panel or removing an item from the cart, **always require a confirmation step**. This could be a small modal or popover asking, "Are you sure you want to delete this item? This action cannot be undone."
*   **Leave Unsaved:** If a user attempts to navigate away from a form with unsaved changes (e.g., editing product details in the admin), **prompt them with a warning**. For example, "You have unsaved changes. Do you want to leave without saving?"
*   **Irreversible Actions:** For any truly irreversible action, the confirmation message should be **explicit about the consequences** to ensure the user fully understands what they are doing.
**Rationale:** Approved by user. Prevents accidental data loss and ensures user intent for critical actions.

**Notification Patterns:**
*   **Placement:** Notifications (like our success/error "toast" messages) should appear consistently at a **fixed, non-obtrusive position** on the screen, such as the top-right or bottom-right corner.
*   **Duration:**
    *   **Success/Info:** These should **auto-dismiss** after a short, readable period (e.g., 3-5 seconds).
    *   **Error/Warning:** These should **remain visible until manually dismissed** by the user, or until the underlying issue is resolved, to ensure they are seen and addressed.
*   **Stacking:** If multiple notifications appear, they should **stack neatly** without overlapping, with the newest appearing at the top or bottom of the stack.
*   **Priority Levels:** Notifications should be **differentiated by visual style** (color, icon) based on their priority (e.g., green for success, red for error, yellow for warning).
**Rationale:** Approved by user. Ensures effective and clear communication of system events.

**Search Patterns:**
*   **Trigger:** Search should be initiated by the user typing into a prominent search bar, followed by either pressing **Enter** or clicking a **search icon**.
*   **Results Display:**
    *   **Instant Suggestions:** As the user types, a dropdown of relevant product suggestions or quick results should appear to aid discovery.
    *   **Dedicated Results Page:** Upon pressing Enter or clicking the search icon, the user should be navigated to a dedicated search results page for a comprehensive list of matches.
*   **Filters:** Provide clear and accessible filters on the search results page (or directly on the product catalog) to allow users to refine their results (e.g., by price, origin, strength).
*   **No Results:** When a search yields no results, the **Empty State Pattern** we discussed earlier should be applied, providing a helpful message and suggestions.
**Rationale:** Approved by user. Facilitates efficient product discovery and navigation.

**Date/Time Patterns:**
*   **Format:** Display dates and times in a **user-friendly, localized format** (e.g., "November 12, 2025" or "12/11/2025"). For very recent events (like a new order in the admin dashboard), consider using **relative time** (e.g., "2 hours ago", "yesterday") for quick comprehension.
*   **Timezone Handling:** All internal date/time data should be stored in **UTC**, but always displayed to the user in their **local timezone** to avoid confusion.
*   **Pickers:** For any future date/time input (e.g., if we were to add a scheduled pickup time feature), use **intuitive graphical pickers** (calendars, time wheels) rather than relying on manual text input, to minimize errors.
**Rationale:** Approved by user. Ensures clarity and accuracy of temporal information.

---

## 8. Responsive Design & Accessibility

### 8.1 Responsive Strategy

**Responsive Strategy Recommendation:**

*   **Breakpoints:** We'll use standard breakpoints to define how the layout adapts:
    *   **Mobile (max-width: 767px):** Single-column layouts, optimized for touch.
    *   **Tablet (768px - 1023px):** Two-column layouts where appropriate (e.g., for the product catalog), with touch-optimized interactions.
    *   **Desktop (min-width: 1024px):** Multi-column layouts, utilizing the extra space effectively.

*   **Adaptation Patterns:**
    *   **Navigation:**
        *   **Desktop/Tablet:** A clear top navigation bar with primary links.
        *   **Mobile:** A "hamburger" menu for primary navigation, potentially complemented by a bottom navigation bar for quick access to key actions like Home, Cart, and Search.
    *   **Product Catalog (Grid Focus)::** The multi-column grid will adapt from 3-4 columns on desktop, to 2 columns on tablet, and a single-column grid or list view on mobile for easy scrolling.
    *   **Product Detail Page (Concise Overview):** The layout will reflow to ensure key information and the "Add to Cart" button remain easily accessible on smaller screens.
    *   **Forms (Admin/Checkout):** Forms will always be single-column on mobile for ease of input, expanding to multi-column on larger screens where space allows.
    *   **Modals:** Will automatically become full-screen on mobile devices to ensure all content is visible and interactive.
    *   **Touch Targets:** All interactive elements (buttons, links) will have adequate touch target sizes on mobile to prevent accidental taps.

### 8.2 Accessibility Strategy

**Accessibility Requirements:**

*   **Compliance Target:** WCAG 2.1 Level AA
*   **Key Requirements:**
    *   **Color Contrast:** Ensure sufficient contrast for text and essential images to be distinguishable by users with low vision or color blindness (minimum 4.5:1 for normal text, 3:1 for large text).
    *   **Keyboard Navigation:** All interactive elements (buttons, links, form fields) must be fully accessible and operable using only a keyboard, with a logical tab order.
    *   **Focus Indicators:** Visible focus states must be provided for all interactive elements, clearly indicating the user's current position for keyboard users.
    *   **ARIA Labels:** Meaningful ARIA labels should be used for screen readers where standard HTML semantics are insufficient to convey purpose or state.
    *   **Alt Text:** Descriptive alternative text must be provided for all meaningful images, allowing screen reader users to understand visual content.
    *   **Form Labels:** All form inputs must have properly associated labels to ensure screen readers can identify their purpose.
    *   **Error Identification:** Error messages must be clear, descriptive, and programmatically associated with the fields they relate to, making them accessible to screen readers.
    *   **Touch Target Size:** Interactive elements on mobile devices must have adequate touch target sizes to prevent accidental taps and improve usability for users with motor difficulties (minimum 44x44 CSS pixels).
    *   **Headings:** Use proper heading hierarchy (h1, h2, etc.) for document structure to aid navigation for screen reader users.
    *   **Language:** Specify the primary language of the page (e.g., using the `lang` attribute in HTML).
*   **Testing Strategy:**
    *   **Automated:** Utilize tools like Lighthouse and axe DevTools for initial and continuous automated accessibility checks.
    *   **Manual:** Conduct comprehensive manual testing, particularly for keyboard-only navigation, focus order, and interactive element testing.
    *   **Screen Reader:** Perform thorough testing with multiple common screen readers (e.g., NVDA, VoiceOver) to ensure content is understandable and navigable.
**Rationale:** User selected WCAG 2.1 Level AA as the compliance target. This ensures a foundational level of accessibility for the widest possible audience.


---

## 9. Implementation Guidance

### 9.1 Completion Summary

This UX Design Specification establishes the complete visual and interactive foundation for the project. Key decisions regarding the design system (shadcn/ui), color palette, typography, and overall design direction have been made in collaboration with the user. Critical user journeys for both customers and the business owner have been mapped out, and a comprehensive component library strategy has been defined. The document also specifies detailed UX patterns for consistency and outlines a robust strategy for responsive design and accessibility (WCAG 2.1 AA). With these elements in place, the project is ready to move into the development phase.

---

## Appendix

### Related Documents

- Product Requirements: `PRD.md`
- Product Brief: `product-brief-ibe160-2025-11-03.md`
- Brainstorming: `brainstorming-session-results-2025-10-24.md`

### Core Interactive Deliverables

This UX Design Specification was created through visual collaboration:

- **Color Theme Visualizer**: [ux-color-themes.html](./ux-color-themes.html)
  - Interactive HTML showing all color theme options explored
  - Live UI component examples in each theme
  - Side-by-side comparison and semantic color usage

- **Design Direction Mockups**: [ux-design-directions.html](./ux-design-directions.html)
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
| onsdag 12. november 2025 | 1.0     | Initial UX Design Specification | BIP |

---

_This UX Design Specification was created through collaborative design facilitation, not template generation. All decisions were made with user input and are documented with rationale._