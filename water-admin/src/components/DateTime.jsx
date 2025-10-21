import React, { useEffect, useState } from "react";

function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // updates every second
    return () => clearInterval(timer);
  }, []);

  const optionsDate = { month: "long", day: "numeric", year: "numeric" };
  const optionsDay = { weekday: "long" };

  const formattedDate = currentDateTime.toLocaleDateString(
    "en-US",
    optionsDate
  );
  const formattedDay = currentDateTime.toLocaleDateString("en-US", optionsDay);
  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="text-gray-700">
      <p className="text-2xl font-semibold">{formattedDate}</p>
      <p className="text-lg">{`${formattedDay} ${formattedTime}`}</p>
    </div>
  );
}

export default CurrentDateTime;
