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
- **Real-time Tracking** – Monitor order and delivery status
- **Payment Options** – Cash on Delivery (COD), GCash, and more
- **Order History** – View past orders and receipts

### Admin Dashboard

- **Order Management** – Accept, reject, or mark orders as delivered
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
