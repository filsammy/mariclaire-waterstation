import React from "react";
import DeliveryStatusDropdown from "@/components/dashboard/DeliveryStatusDropdown";
// import OrderList from "@/components/dashboard/OrderList";
import SalesSummary from "@/components/dashboard/SalesSummary";
// import InventoryMonitor from "@/components/dashboard/InventoryMonitor";
// import ScheduleList from "@/components/dashboard/ScheduleList";
// import RiderActivity from "@/components/dashboard/RiderActivity";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Analytics Summary */}
      <SalesSummary />

      <div className="rounded-xl shadow-md p-6 border border-gray-200 space-y-6">
        <DeliveryStatusDropdown />
      </div>

      {/* Active Orders */}
      {/* <OrderList /> */}

      {/* Inventory Section */}
      {/* <InventoryMonitor /> */}

      {/* Other Info */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeedbackList />
        <ScheduleList />
      </div> */}

      {/* Riders (if applicable) */}
      {/* <RiderActivity /> */}
    </div>
  );
}
