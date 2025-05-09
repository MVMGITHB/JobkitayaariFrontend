"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function Popup() {
  const [visible, setVisible] = useState(false);
  const [showClose, setShowClose] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 10000);
    const closeTimer = setTimeout(() => setShowClose(true), 12000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4 animate-fadeIn">
        {showClose && (
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <X size={24} />
          </button>
        )}
        <div className="text-center space-y-4">
        <div className="flex justify-center items-center h-20">
  <img src="/images/logo2.png" alt="Logo" className="h-full object-contain" />
</div>
          <h2 className="text-3xl font-bold text-gray-800">
            Stay Updated With
          </h2>
          <h3 className="text-xl font-semibold text-violet-700">
            Latest Job Openings & Career Updates
          </h3>
          <p className="text-sm text-gray-600">
            Join thousands of users getting real-time job alerts!
          </p>
          <Link href="/register">
            <button className="mt-4 px-6 py-3 cursor-pointer bg-violet-700 hover:bg-violet-800 text-white  font-medium rounded-full transition duration-300 shadow-md">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
