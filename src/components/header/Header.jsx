"use client";
import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../context/auth";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };

  return (

    // <bg-white></bg-white>
    <header className=" shadow-md  bg-gradient-to-r from-orange-500 via-white to-green-500">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
<Link href="/" aria-label="JobKityaari Home">
  <Image
    src="/images/logo2.png"
    alt="JobKityaari logo"
    width={112}
    height={40}
    priority
  />
</Link>

  
      <nav className="hidden md:flex space-x-6 items-center lg:pr-28">
        <Link href="/" className="text-gray-700 hover:text-blue-600">Jobs</Link>
        <Link href="/career-guide" className="text-gray-700 hover:text-blue-600">Career Guide</Link>
        <Link href="#" className="text-gray-700 hover:text-blue-600">Companies</Link>
  
        {auth?.user ? (
          <>
            <h1 className="text-gray-700 hover:text-blue-600">{auth?.user?.name}</h1>
            <h1 onClick={handleLogout} className="cursor-pointer text-gray-700 hover:text-blue-600">LogOut</h1>
          </>
        ) : (
          <>
            <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link href="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
          </>
        )}
      </nav>
  
      <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  
    {isOpen && (
      <div className="md:hidden bg-gray-50 border-t border-gray-200 shadow-sm">
        <nav className="flex flex-col px-4 py-4 space-y-3">
          {[
            { label: "Jobs", path: "/" },
            { label: "Career Guide", path: "/career-guide" },
            { label: "Companies", path: "#" },
            { label: "Login", path: "/login" },
            { label: "Register", path: "/register" },
            { label: "Government Jobs", path: "/government-jobs" },
            { label: "Technology Jobs", path: "/technology-jobs" },
            { label: "Management Jobs", path: "/management-jobs" },
            { label: "Teaching Jobs", path: "/teaching-jobs" },
            { label: "Banking Jobs", path: "/banking-jobs" },
            { label: "PSU Jobs", path: "/psu-jobs" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-4 py-2 text-base font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    )}
  </header>
  
  );
};

export default Header;
