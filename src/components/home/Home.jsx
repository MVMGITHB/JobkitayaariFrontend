"use client"
import JobSection from "./JobSection";
import Cookies from "js-cookie";
import HomeBlog from "./HomeBlog";
import { useEffect, useState } from "react";


const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const userToken = Cookies.get("jwt"); 
    if (userToken) {
      setToken(userToken);
    }
  }, []);


  return (
    <div>

    
      <h1
  className="text-xl lg:text-2xl text-center font-bold py-5 px-4 lg:px-6"
  style={{ fontDisplay: "swap" }}
>
  Find Your Dream Job – Government, IT, Bank & Private Jobs in India
</h1>

      <JobSection />
      <HomeBlog />
    </div>
  );
};

export default Home;
