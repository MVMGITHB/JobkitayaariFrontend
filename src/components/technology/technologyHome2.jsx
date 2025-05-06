"use client";

import { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import axios from "axios";
import base_url from "../helper/helper";

const technologyHome2 = ({ title }) => {
  const [primaryJob, setPrimaryJob] = useState([]);
  const [srTeacherJob, setSrTeacjerJob] = useState([]);
  const [clProfessorJob, setClProfessorJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [primaryRes, srTeacherRes, clProfessorRes] = await Promise.all([
        axios.get(`${base_url}/api/job/getJobbySUbCategory/primary-teacher-job`),
        axios.get(`${base_url}/api/job/getJobbySUbCategory/senior-teacher-job`),
        axios.get(`${base_url}/api/job/getJobbySUbCategory/college-professor-job`),
      ]);
      setPrimaryJob(primaryRes.data);
      setSrTeacjerJob(srTeacherRes.data)
      setClProfessorJob(clProfessorRes.data)
    };

    fetchData();
  },[]);

  

  return (
    <div>
      
      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
      {primaryJob ? (
        <JobCarousel
          jobs={primaryJob}
          title={"Best Primary Teacher Job Opportunities in India 2025"}
          color={"blue"}
        />
      ) : (
        ""
      )}
      { srTeacherJob?(<JobCarousel
        jobs={srTeacherJob}
        title={"Latest Senior Teacher Job Openings in India 2025 "}
        color={"green"}
      />):("")}

      {clProfessorJob?(<JobCarousel
        jobs={clProfessorJob}
        title={"Best College Professor Job Vacancies in India 2025"}
        color={"orange"}
      /> ):("")}
    </div>
  );
};

export default technologyHome2;
