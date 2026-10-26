import React from "react";
import { Info } from "lucide-react";

const TopSection = () => {
  return (
    <div className="w-full bg-blue-50 border-b border-blue-100/80 py-2.5 px-4 text-center text-xs sm:text-sm font-medium text-blue-900 flex items-center justify-center gap-2 shadow-2xs">
      <Info className="w-4 h-4 text-blue-600 shrink-0" />
      <span>We Provide Job Information, Not Direct Employment</span>
    </div>
  );
};

export default TopSection;