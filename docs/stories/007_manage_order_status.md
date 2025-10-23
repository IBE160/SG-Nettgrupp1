---
story: As the Business Owner, I want to be able to update the status of an order so that I can track its progress.
epic: Admin
story_points: 5
priority: Must-Have
acceptance_criteria:
  - The admin can mark an order as "Processed" when it is ready for pickup.
  - The admin can mark an order as "Completed" when it has been picked up by the customer.
  - When an order is marked as "Completed", the system must automatically update the stock quantity for the products in that order.
  - The order status changes must be reflected in the order list and the order detail view.
---