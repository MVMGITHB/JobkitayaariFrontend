"use client"

import { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import base_url from "../helper/helper";
import axios from "axios";

const technologyHome4 = ({ title }) => {
 const [marketingJobs, setMarketingJobs]= useState([]);
 const [salesJobs, setSalesJobs]= useState([]);
 const [financeJobs, setfinanceJobs]= useState([]);
 const [bdeJobs, setBdeJobs]= useState([]);

 useEffect(()=>{
     const fetchJobs = async () => {
       try {
         const [marketingRes, salesRes, financeRes, bdeRes] = await Promise.all([
           axios.get(`${base_url}/api/job/getJobbySUbCategory/marketing-jobs`),
           axios.get(`${base_url}/api/job/getJobbySUbCategory/sales-job`),
           axios.get(`${base_url}/api/job/getJobbySUbCategory/best-finance`),
           axios.get(`${base_url}/api/job/getJobbySUbCategory/business-development-job`),
         ]);

       setMarketingJobs(marketingRes.data)
       setSalesJobs(salesRes.data)
       setfinanceJobs(financeRes.data)
       setBdeJobs(bdeRes.data)
       } catch (error) {
         console.error("Error fetching jobs:", error);
       }
     };
 
     fetchJobs();
    },[]) 

  return (
    <div>
     

      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
      {marketingJobs?( <JobCarousel
        jobs={marketingJobs}
        title={"Find the Best Marketing Jobs in India 2025"}
        color={"blue"}
      />):("")}

     {salesJobs?(<JobCarousel jobs={salesJobs} title={"Best Sales Job Opportunities in India 2025"} color={"green"}/>):("")} 
     
     
      {financeJobs? (<JobCarousel
        jobs={financeJobs}
        title={"Find the Best Finance Jobs in India 2025 "}
        color={"orange"}
      />):("")}

     {bdeJobs?(<JobCarousel
        jobs={bdeJobs}
        title={"Top Business Development Job Openings in India 2025"}
        color={"purple"}
      />  ):("") }
    </div>
  );
};

export default technologyHome4;
