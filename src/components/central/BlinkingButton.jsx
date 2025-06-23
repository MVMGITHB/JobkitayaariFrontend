'use client'
import { useEffect, useState } from "react";

export default function BlinkingButton({apply}) {
  const colors = ["bg-red-500", "bg-yellow-400", "bg-green-500"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500); // Change color every 0.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <button className={`text-white px-2 py-1 rounded cursor-pointer ${colors[colorIndex]}`}>
      {apply}
    </button>
  );
}
