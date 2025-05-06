
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import base_url from "../helper/helper";
import axios from "axios";
import { JobCards } from "./JobCards";



const JobSection = () => {
  const [bestJob, setBestJob] = useState([]);
  const [featuredJob, setFeauredJob] = useState([]);
  const [recentJob, setRecentJob] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const [bestRes, featuredRes, recentRes] = await Promise.all([
        axios.get(`${base_url}/api/bestJob/getAllBestJob`),
        axios.get(`${base_url}/api/featueJob/getAllFeatureJob`),
        axios.get(`${base_url}/api/recentJob/getAllRecentJOb`)
      ]);
      setBestJob(bestRes?.data[0]?.jobs);
      setFeauredJob(featuredRes?.data[0]?.jobs)
      setRecentJob(recentRes?.data[0]?.jobs)
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);


  return (
    <>
      <div className="container mx-auto px-4 pt-[20px]">
        {/* Job Sections Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Jobs Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4  bg-green-500 rounded-2xl text-white text-center">
            Best Job in 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestJob.map((job, index) => (
                <JobCards key={index} job={job} />
              ))}
            </div>
          </div>

          {/* Featured Jobs Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4 bg-orange-400 text-white rounded-2xl text-center">
            Featured Jobs in 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredJob.map((job, index) => (
                <JobCards key={index} job={job} />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Jobs Section (4 Cards in Row) */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 bg-purple-500 text-white rounded-2xl text-center">
          Recent Job Vacancy in 2025
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recentJob.map((job, index) => (
              <JobCards key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};





// const JobCard = ({ job }) => (

  
//   return(
//   <div className="bg-white hover:bg-amber-50 shadow-lg rounded-lg p-5 w-full min-h-[360px] flex flex-col">
//     <div className="flex flex-col items-center text-center flex-grow">
      

//       <div className="h-[40px]">
//       <img src={`${base_url}${job?.image}`} alt={"comoany"} className="w-45  h-14 object-contain" />
//       </div>
      
//       {/* <h3 className="text-xl h-[80px] text-black font-semibold mt-3 break-words pt-2">{title}</h3>
//       <p className="text-gray-600">{company}</p>
//       <p className="text-green-600 font-bold mt-2">{salary}</p>
//       <p className="text-blue-500">{profile}</p> */}
//     </div>
//     <div className="mt-auto flex justify-center">
//     {/* <Link href={link} passHref legacyBehavior>
//   <a
//     target="_blank"
//     rel="nofollow noopener noreferrer"
//     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//   >
//     Apply Now
//   </a>
// </Link> */}
//     </div>
//   </div>)
  
// );

export default JobSection;

