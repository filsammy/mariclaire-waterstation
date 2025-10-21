import React from "react";

export default function SalesSummary() {
  const summaryData = [
    { label: "Today", amount: "₱3,250", change: "+8%", trend: "up" },
    { label: "This Week", amount: "₱18,750", change: "+15%", trend: "up" },
    { label: "This Month", amount: "₱72,400", change: "-3%", trend: "down" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Sales Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-200 flex flex-col items-center text-center"
          >
            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
            <p className="text-2xl font-bold text-gray-900">{item.amount}</p>
            <span
              className={`mt-2 text-sm font-medium ${
                item.trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// APPLY AFTER INTEGRATING FIREBASE BACKEND + DB

// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/firebase"; // your Firestore config

// export default function SalesSummary() {
//   const [summaryData, setSummaryData] = useState([]);

//   useEffect(() => {
//     const fetchSales = async () => {
//       const querySnapshot = await getDocs(collection(db, "sales"));
//       const sales = querySnapshot.docs.map(doc => doc.data());

//       // Sort sales by date (make sure you store date as a timestamp or string)
//       sales.sort((a, b) => new Date(a.date) - new Date(b.date));

//       // Compute daily change
//       const today = sales[sales.length - 1]?.totalSales || 0;
//       const yesterday = sales[sales.length - 2]?.totalSales || 0;
//       const change = yesterday ? ((today - yesterday) / yesterday) * 100 : 0;
//       const trend = change >= 0 ? "up" : "down";

//       setSummaryData([
//         { label: "Today", amount: `₱${today.toLocaleString()}`, change: `${change.toFixed(1)}%`, trend },
//       ]);
//     };

//     fetchSales();
//   }, []);

//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
//       <h2 className="text-xl font-semibold mb-4 text-gray-800">Sales Summary</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {summaryData.map((item, index) => (
//           <div key={index} className="p-4 rounded-lg border border-gray-200 flex flex-col items-center text-center">
//             <p className="text-sm text-gray-500 mb-1">{item.label}</p>
//             <p className="text-2xl font-bold text-gray-900">{item.amount}</p>
//             <span className={`mt-2 text-sm font-medium ${item.trend === "up" ? "text-green-500" : "text-red-500"}`}>
//               {item.change}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
