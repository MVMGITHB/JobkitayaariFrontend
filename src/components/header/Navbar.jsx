

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
    <header className="bg-white shadow-md  p-4 px-16">
      <div className="container w-[95%] mx-auto flex flex-wrap md:flex-nowrap justify-between items-center space-y-3 md:space-y-0">
        {/* Dropdowns */}
        {[
          {
            label: "Government Jobs",
            items: ["Railway", "Defense", "UPSC", "Ministry"],
            paths: ["railway", "defense", "upsc", "ministry"],
          },

          {
            label: "Technology Jobs",
            items: [
              "Software Development",
              "Software Testing",
              "Project Management",
              "AI/Ml",
            ],
            paths: [
              "software-development",
              "software-testing",
              "project-managemet",
              "ai-ml",
            ],
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
          <div key={index} className="relative w-full md:w-auto ">
            <button
              className="cursor-pointer bg-black text-white  px-4 py-2 rounded-md w-full md:w-auto"
            // onClick={() => toggleDropdown(menu.label)}
            >

              <Link
                key={index}
                href={`/${menu.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="cursor-pointer bg-black text-white  px-2 py-2 rounded-md w-full md:w-auto"
              >
                {menu.label}
              </Link>

            </button>

            {/* Dropdown Menu */}
            {/* {openDropdown === menu.label && (
              <div className="p-2 absolute left-0 mt-2 w-48 bg-white  border rounded-lg shadow-lg z-50">
                {menu.items.map((item, i) => (
                  <Link
                    key={i}
                    href={`/${menu.label.toLowerCase().replace(/\s+/g, '-')}/${menu.paths[i]}`}
                    className="block text-black px-4 py-2 hover:bg-gray-200 rounded-2xl"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )} */}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
