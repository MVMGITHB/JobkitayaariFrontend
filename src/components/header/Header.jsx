"use client";
import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../context/auth";

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
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
            <img src="/images/logo2.png" alt="jobkitayaari logo" style={{width:"100px"}} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center lg:pr-28">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Jobs
          </Link>


          <Link href="/career-guide" className="text-gray-700 hover:text-blue-600">
          Career Guide
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Companies
          </Link>

          {auth?.user ? (
            <>
              <h1 className="text-gray-700 hover:text-blue-600">
                {auth?.user?.name}
              </h1>
              <h1
                onClick={handleLogout}
                className=" cursor-pointer text-gray-700 hover:text-blue-600"
              >
                LogOut
              </h1>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link
                href="/register"
                className="text-gray-700 hover:text-blue-600"
              >
                Register
              </Link>
            </>
          )}

          {/* Search Box */}
          {/* <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              className="absolute right-2 top-2 text-gray-500"
              size={18}
            />
          </div> */}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>




      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <Link
              href="/"
              className="text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </Link>



            <Link
              href="/career-guide"
              className="text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Career Guide
            </Link>
            <Link
              href="#"
              className="text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Companies
            </Link>
            <Link
              href="/login"
              className="text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
            {/* Search Box in Mobile */}
            {/* <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search
                className="absolute right-2 top-2 text-gray-500"
                size={18}
              />
            </div> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
