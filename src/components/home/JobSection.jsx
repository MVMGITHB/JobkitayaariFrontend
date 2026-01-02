
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
      <div className="max-w-[95%] mx-auto px-4 pt-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4  bg-green-500 rounded-2xl text-white text-center">
            Best Job in 2026
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestJob?.map((job, index) => (
                <JobCards key={index} job={job} />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4 bg-orange-400 text-white rounded-2xl text-center">
            Featured Jobs in 2026
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredJob?.map((job, index) => (
                <JobCards key={index} job={job} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 bg-purple-500 text-white rounded-2xl text-center">
          Recent Job Vacancy in 2026
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recentJob?.map((job, index) => (
              <JobCards key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};



export default JobSection;

