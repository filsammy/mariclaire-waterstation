import React, { useState } from "react";
import Loading from "@/components/Loading";
import { useToast } from "@/context/ToastContext";
import DateTime from "@/components/DateTime";

export default function Dashboard() {
  const addToast = useToast();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Available");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const statusOptions = [
    "Available",
    "Unavailable",
    "On Break",
    "Pick Up Only",
  ];

  const getStatusColor = () => {
    switch (status) {
      case "Available":
        return "bg-green-500 hover:bg-green-600 text-white";
      case "Unavailable":
        return "bg-red-500 hover:bg-red-600 text-white";
      default:
        return "bg-gray-400 hover:bg-gray-500 text-white";
    }
  };

  const handleSelectStatus = async (newStatus) => {
    setStatus(newStatus);
    setIsDropdownOpen(false);
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      addToast(`Delivery status updated to "${newStatus}"`, "success");

      // Example: Real backend update
      // await fetch("/api/delivery-status", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ status: newStatus }),
      // });
    } catch (error) {
      addToast("Failed to update delivery status.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 bg-white">
      <div className="flex flex-wrap justify-between">
        <div>
          <h2 className="text-2xl font-bold">Delivery Status</h2>
          <p className="text-gray-700">
            Set your delivery operation status below.
          </p>
        </div>
        <div className="text-right pr-4">
          <DateTime />
        </div>
      </div>

      {/* Dropdown Button */}
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`${getStatusColor()} px-4 py-2 rounded-md shadow flex items-center justify-between gap-2 w-56 h-15 transition-all text-2xl font-bold text-center`}
        >
          <span>{status}</span>
          <svg
            className={`w-4 h-4 transform transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {statusOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleSelectStatus(option)}
                className={`block w-full text-center px-4 py-2 hover:bg-gray-100 ${
                  status === option ? "bg-gray-100 font-bold text-xl" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Loading Overlay */}
      <Loading isLoading={loading} />
    </div>
  );
}
