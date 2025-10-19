import React, { useState } from "react";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { useToast } from "@/context/ToastContext";

export default function Dashboard() {
  const addToast = useToast();

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        // PLACEHOLDER FOR TESTING
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      addToast("Action successful!", "success");

      console.log("Fetched data:", data);
    } catch (error) {
      addToast(error.message || "Something went wrong!", "error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
      <p className="text-gray-700">This is your admin dashboard.</p>

      <Button onClick={fetchData}>Button + Loading Components Test</Button>
      <Loading isLoading={loading} />
      <div></div>
    </div>
  );
}
