"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const POPUP_DELAY = 4000;

const popupData = {
  desktopImage: "/clubm/dekhtop.webp",
  mobileImage: "/clubm/mobile.webp",
  link: "https://offer.mvmtracking.com/api/clicks?campaign_id=831&pub_id=59&originalClick={}&sub1={your_sub}",
};

export default function ClubmPopUp() {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(false);

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleClick = () => {
    window.open(popupData.link, "_blank", "noopener,noreferrer");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none bg-black/50 p-4">
      <div className="relative pointer-events-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close Popup"
          className="absolute -top-3 -right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold text-red-600 shadow-lg hover:bg-red-600 hover:text-white"
        >
          ✕
        </button>

        {/* Mobile Image (Visible on mobile/small screens, hidden on md and up) */}
        <div className="block md:hidden">
          <Image
            src={popupData.mobileImage}
            alt="Credit Card Offer Mobile"
            width={800}
            height={800}
            priority
            onClick={handleClick}
            className="
              cursor-pointer
              w-auto
              h-[500px]
              max-w-[95vw]
              object-contain
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        </div>

        {/* Desktop Image (Hidden on mobile, visible on md and up) */}
        <div className="hidden md:block">
          <Image
            src={popupData.desktopImage}
            alt="Credit Card Offer Desktop"
            width={800}
            height={800}
            priority
            onClick={handleClick}
            className="
              cursor-pointer
              w-auto
              md:h-[320px]
              lg:h-[400px]
              xl:h-[400px]
              max-w-[95vw]
              object-contain
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        </div>
      </div>
    </div>
  );
}