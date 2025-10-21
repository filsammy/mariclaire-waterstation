# Water Station Admin Dashboard

## Quick Start

```bash
cd water-admin
npm install
npm run dev
```

## Overview

This is the web-first development environment for the Water Station Admin Dashboard. It provides a comprehensive interface for managing orders, deliveries, and analytics.

---

## Key Features

### Customer Portal

- **Account Management** – Create account/login via phone or email
- **Order Placement** – Choose container type, quantity, and delivery time
- **File a Complaint** - Create a ticket, add images, status of complaint
- **Real-time Tracking** – Monitor order and delivery status
- **Payment Options** – Cash on Delivery (COD), GCash, and more
- **Order History** – View past orders and receipts

### Admin Dashboard

- **Order Management** – Accept, reject, or mark orders as delivered
- **Manage Complaints** - Acknowledge, Reply, or Call
- **Delivery Monitoring** – Track all active deliveries in real-time
- **Driver Management** – Assign and manage delivery staff
- **Analytics** – View total orders, revenue, and performance metrics
- **Notifications** – Receive alerts for new orders

### Delivery Staff Portal _(Optional Mobile View)_

- **Order Assignment** – View assigned delivery tasks
- **Status Updates** – Mark orders as picked up, in transit, or delivered

---

## Deployment

| Platform       | Deployment Target                    |
| -------------- | ------------------------------------ |
| **Mobile App** | Google Play Store / Apple App Store  |
| **Web App**    | Firebase Hosting, Vercel, or Netlify |

---

## Development Roadmap

1. **Design Phase** – Create UI mockups for customer views and admin dashboard
2. **Backend Setup** – Configure Firebase or Node.js backend
3. **Mobile Development** – Build customer app with React Native
4. **Web Development** – Build admin dashboard with React.js (shared backend)
5. **Integration Testing** – Test cross-platform functionality
6. **Deployment** – Set up hosting and publish to app stores

---

## Tech Stack

- **Frontend**: React.js (Admin), React Native (Mobile)
- **Backend**: Firebase / Node.js
- **Database**: Firestore / MongoDB
- **Authentication**: Firebase Auth / JWT

---

## License

MIT

---

🧾 1. Dashboard

Purpose:
Quick overview of daily operations.

Contains:

Delivery availability dropdown (your existing feature).

Mini-cards summarizing:

“Today’s Sales”

“Active Orders”

“Riders Online”

Optional: Quick buttons (e.g., “View Orders”, “View Riders”).

Data Source:

/orders → count active/pending

/riders → count online

/sales → today’s total

📋 2. OrderList

Purpose:
Admin can manage and edit orders.

Contains:

Table of all orders (customer, gallons, rider, total, status).

Editable price field per order (for resellers vs regular).

Buttons to mark as Pending, Out for Delivery, or Delivered.

Each “Delivered” update automatically:

Adds to /sales

Deducts from /inventory

Data Source: /orders/{orderId}
Key Actions:

updateDoc(orderRef, { price: newPrice })

updateDoc(orderRef, { status: "Delivered" })

🛵 3. RiderActivity

Purpose:
Monitor rider status and assignments.

Contains:

List of riders with:

Name

Status (Online, On Delivery, Offline)

Active deliveries count

Rider updates status from their app → updates /riders/{riderId}/status.

Data Source: /riders/{riderId}
Realtime: onSnapshot() to reflect live changes.

💰 4. Sales Summary

Purpose:
Track daily/weekly/monthly sales automatically.

Contains:

Card summaries (like your current mockup).

Auto-updates when an order is marked Delivered.

Optional chart (daily sales trend).

Data Source: /sales/{date} (store total per day).
Update Rule:
Whenever order status → “Delivered”, update sales:
