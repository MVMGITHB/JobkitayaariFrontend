"use client";
import { useState, useEffect } from "react";

import JobSection from "./JobSection";
import Cookies from "js-cookie";
import HomeBlog from "./HomeBlog";

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Get token from cookie
    const userToken = Cookies.get("jwt"); // Replace "token" with your cookie name
    if (userToken) {
      setToken(userToken);
    }
  }, []);


  return (
    <div>
      <h1 className=" text-2xl text-center font-bold py-[20px]">
        Find Your Dream Job – Government, IT, Bank & Private Jobs in India
      </h1>
      {/* <div className="relative flex justify-center ">
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
      <JobSection />
      <HomeBlog />
    </div>
  );
};

export default Home;
