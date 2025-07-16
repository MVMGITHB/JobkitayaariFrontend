
"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
 
export default function HclPopup() {
  const [visible, setVisible] = useState(false);
  const [showClose, setShowClose] = useState(false);
 
  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 8000);
    const closeTimer = setTimeout(() => setShowClose(true), 11000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
  }, []);
 
  if (!visible) return null;
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2">
      <div className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-3xl lg:max-w-5xl rounded-2xl overflow-hidden">
        {showClose && (
          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 lg:right-25 z-10 rounded-full p-1 transition"
          >
            <X size={22} className="text-red-300 cursor-pointer" />
          </button>
        )}
      <Link
  href="https://zazzle83.gotrackier.com/click?campaign_id=759&pub_id=93&url_id=1"
  target="_blank"
>
  {/* Desktop Image: Hidden on small screens, visible on md and above */}
  <img
    src="/images/hcl desktop.png"
    alt="Popup Desktop"
    className="hidden md:block w-full h-auto max-h-[60vh] object-contain rounded-2xl"
  />

  {/* Mobile Image: Visible only on small screens */}
  <img
    src="/images/HCL mobile.png"
    alt="Popup Mobile"
    className="block md:hidden w-full h-auto max-h-[60vh] object-contain rounded-2xl"
  />
</Link>

      </div>
    </div>
  );
}