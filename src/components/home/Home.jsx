"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

import JobSection from "./JobSection";
import Cookies from "js-cookie";
import HomeBlog from "./HomeBlog";
import axios from "axios";
import base_url from "../helper/helper";


const Home = () => {
  const [token, setToken] = useState("");
  const router = useRouter();

  const [jobdata,setJobData] = useState([])
  const [blogsdata,setblogsData] = useState([])
  const[loading,setLoading] = useState(false)

  // Construct dynamic URL

  const fetchJobs = async()=>{

    setLoading(true)
          try {
             const response = await axios.get(`${base_url}/api/job/getAllJob`)
             setJobData(response.data)

             
             if(response.data){
              setLoading(false)
             }

          } catch (error) {
            console.log(error)
          }
  }


   const fetchblogs = async()=>{

    setLoading(true)
          try {
             const response =await axios.get(`${base_url}/api/blog/getAllBlog`)
             setblogsData(response.data)
             if(response.data){
              setLoading(false)
             }

          } catch (error) {
            console.log(error)
          }
  }


  useEffect(()=>{
    fetchJobs()
    fetchblogs()
  },[loading])
  

  const staticBreadcrumbItems = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jobkityaari.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Government Jobs",
        "item": "https://jobkityaari.com/government-jobs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Technology Jobs",
        "item": "https://jobkityaari.com/technology-jobs"
      },
  
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Management Jobs",
        "item": "https://jobkityaari.com/management-jobs/"
      },
  
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Teaching Jobs",
        "item": "https://jobkityaari.com/teaching-jobs"
      },
  
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Banking Jobs",
        "item": "https://jobkityaari.com/banking-jobs"
      },
  
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Psu Jobs",
        "item": "https://jobkityaari.com/psu-jobs"
      },

  
    ]
  };



const dynamicBreadcrumbItems = jobdata?.map((item, index) => ({
  "@type": "ListItem",
  "position": staticBreadcrumbItems.length + index + 1,
  "name": item?.postName,
  "item": `https://jobkityaari.com/${item?.category?.slug}/${item?.slug}`
})) || [];


const dynamicBreadcrumbItems1 = blogsdata?.map((item, index) => ({
  "@type": "ListItem",
  "position": dynamicBreadcrumbItems?.length + index + 1,
  "name": item?.postName,
  "item": `https://jobkityaari.com/${item?.category?.slug}/articles/${item?.slug}`
})) || [];


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    ...staticBreadcrumbItems.itemListElement,
    ...dynamicBreadcrumbItems,
    ...dynamicBreadcrumbItems1
  ]
};

  useEffect(() => {
    // Get token from cookie
    const userToken = Cookies.get("jwt"); // Replace "token" with your cookie name
    if (userToken) {
      setToken(userToken);
    }
  }, []);


  return (
    <div>

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      <h1 className="text-xl lg:text-2xl text-center font-bold py-[20px] px-4 lg:px-6">
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
