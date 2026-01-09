

// this is header
"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="invisible  md:visible  shadow-md p-4 px-4 md:px-16  bg-white">
    <div className="container w-[95%] mx-auto">
      <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-between md:items-center md:space-y-0">
        {[
          {
            label: "Government Jobs",
            items: ["Railway", "Defense", "UPSC", "Ministry"],
            paths: ["railway", "defense", "upsc", "ministry"],
          },
          {
            label: "Technology Jobs",
            items: ["Software Development", "Software Testing", "Project Management", "AI/Ml"],
            paths: ["software-development", "software-testing", "project-managemet", "ai-ml"],
          },
          {
            label: "Management Jobs",
            items: ["Marketing", "Sales", "Finance", "Business Development"],
            paths: ["marketing", "sales", "finance", "busincess-development"],
          },
          {
            label: "Teaching Jobs",
            items: ["Primary", "Senior", "Collage"],
            paths: ["primary", "senior", "collage"],
          },
          {
            label: "Banking Jobs",
            items: ["Banking", "Insurance"],
            paths: ["banking", "insurance"],
          },
          {
            label: "PSU Jobs",
            items: ["ONGC", "NTPC", "GAIL", "POWERGRID", "BHEL"],
            paths: ["ongc", "ntpc", "gail", "power-grid", "bhel"],
          },
        ].map((menu, index) => (
          <div key={index} className="w-full md:w-auto">
            <Link
              href={`/${menu.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-center bg-black text-white px-4 py-2 rounded-md w-full"
            >
              {menu.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </header>
  
  
  );
};

export default Header;
