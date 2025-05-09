"use client"

import  { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import axios from "axios";
import base_url from "../helper/helper";

const technologyHome6 = ({ title }) => {

  const [bankingJob, setBankingJob]= useState([])
  const [insuranceJob, setInsuranceJob] = useState([]);

  useEffect(()=>{
   const fetchData = async ()=>{
    const [bankingRes, insuranceRes]= await Promise.all([
      axios.get(`${base_url}/api/job/getJobbySUbCategory/banking-job`),
      axios.get(`${base_url}/api/job/getJobbySUbCategory/insurance-job`)
    ])
    setBankingJob(bankingRes.data)
    setInsuranceJob(insuranceRes.data);
   }

   fetchData()
  },[])
  

  return (
    <div>
      

      <h1 className="text-base lg:text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
      {bankingJob && (
  <JobCarousel
    jobs={bankingJob}
    title={"Latest Banking Job Openings in India 2025"}
    color={"blue"}
  />
)}

    {insuranceJob?( <JobCarousel
         jobs={insuranceJob}
         title={"Best Insurance Job Opportunities in India 2025"}
      color={"green"}
       />):("")}
    </div>
  );
};

export default technologyHome6;
