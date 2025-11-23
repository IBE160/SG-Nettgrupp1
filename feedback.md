I have completed the development for story `2-6-admin-mark-order-as-prepared`.

Here is a summary of the changes:
-   **Backend:**
    -   Implemented the `updateOrderStatus` controller to handle order status updates.
    -   Integrated the Resend service to send email notifications when an order is marked as "Prepared".
-   **Frontend:**
    -   Created the `AdminOrderDetailPage.jsx` to display order details.
    -   Added a "Mark as Prepared" button that updates the order status.
-   **Database:**
    -   Created a migration file `003_create_orders_table.sql` to create the `orders` and `order_items` tables.
-   **Routing:**
    -   Added a new route `/admin/order/:id` for the `AdminOrderDetailPage`.
-   **Linting:**
    -   Fixed all linting errors.

The story is now ready for review.