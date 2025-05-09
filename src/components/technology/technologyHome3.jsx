"use client"

import  { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import axios from "axios";
import base_url from "../helper/helper";

const technologyHome3 = ({ title }) => {
const [ongcJob, setOngcJob]=useState([])
const [ioclJob, setioclJob]=useState([])
const [GAILJob, setGAILJob]=useState([])
const [PwgRec, setPwgJob]=useState([])
const [bhelJob, setbhelJob]=useState([])

 useEffect(()=>{
  const fetchData=async ()=>{
    const [ongcRes, ioclRes, gailRes, pwgRes, bhelRes]= await Promise.all([
      axios.get(`${base_url}/api/job/getJobbySUbCategory/ongc-recruitment`),
      axios.get(`${base_url}/api/job/getJobbySUbCategory/iocl`),
      axios.get(`${base_url}/api/job/getJobbySUbCategory/gail-job`),
      axios.get(`${base_url}/api/job/getJobbySUbCategory/powergrid-recruitment`),
      axios.get(`${base_url}/api/job/getJobbySUbCategory/bhel-jobs`),
    ])
    setOngcJob(ongcRes.data);
    setioclJob(ioclRes.data);
    setGAILJob(gailRes.data)
    setPwgJob(pwgRes.data)
    setbhelJob(bhelRes.data)
  }

  fetchData()
 },[])


  
  return (
    <div>
     
      <h1 className="text-base lg:text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
     {ongcJob?( <JobCarousel
        jobs={ongcJob}
        title={"ONGC Recruitment 2025 – Apply Now"}
        color={"blue"}
      />):("")}

      {ioclJob?(<JobCarousel
        jobs={ioclJob}
        title={"IOCL – Latest Job Openings"}
        color={"green"}
      />):("")}

      {GAILJob?(<JobCarousel
        jobs={GAILJob}
        title={"GAIL Job Vacancies – Apply Today"}
        color={"orange"}
      />):("")}

      {PwgRec?(<JobCarousel
        jobs={PwgRec}
        title={"POWERGRID Recruitment – Freshers & Experienced"}
        color={""}
      />):("purple")}

     

      {bhelJob?(<JobCarousel
        jobs={bhelJob}
        title={"BHEL Jobs 2025 – Best PSU Opportunities"}
        color={"purple"}
      />):("")}
    </div>
  );
};

export default technologyHome3;
