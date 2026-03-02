"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePagePopUp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds on every page load
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 bg-black/70 text-white rounded-full px-2 py-1 text-sm hover:bg-black z-10"
        >
          ✕
        </button>

        {/* Popup Image with Link */}
        <Link
          href="https://www.rupay.co.in/rupay-cashbackcampaign?utm_source=perfpartner&utm_medium=cpbankclicks&utm_campaign=rupay-linkage&utm_id=adam-creditcard-rupay2025-INR250cashback-Vedang-INR250cashback-english-static-IA-{13}"   // 🔗 CHANGE YOUR LINK HERE
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/rupay-popup.jpeg" // 🖼️ STATIC IMAGE
            alt="Popup Banner"
            width={900}
            height={900}
            className="w-full h-auto cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
