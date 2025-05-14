"use client"

import  { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import axios from "axios";
import base_url from "../helper/helper";

const technologyHome3 = ({ title , para }) => {

const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

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


   const data1 = [
    {
      id: 1,
      title:
        "One of India's biggest public sector companies, Oil and Natural Gas Corporation (ONGC), is essential to the nation's energy industry. This is the place for you if you want to work in a stimulating, fulfilling environment with room for professional advancement.",
    },
    {
      id: 2,
      title:
        "We include ONGC's 2025 job vacancies, which include specialized roles such as Finance Officer, HR Executive, Assistant Executive Engineer, Geologist, Geophysicist, Chemist, Graduate Trainee, and more.",
    },
    {
      id: 3,
      title:
        "Opportunities are available for young graduates, seasoned professionals, and technical experts across many disciplines like Engineering, Geology, Geophysics, Chemistry, Finance, HR, and more.",
    },
    {
      id: 4,
      title:
        "For frequent updates on ONGC job vacancies that fit your qualifications and career goals, keep checking this page.",
    },
   
  ];
   const data2 = [
    {
      id: 1,
      title:
        "We feature the latest IOCL job openings for 2025, including positions like Engineers, Graduate Apprentices, Assistant Officers, Technicians, Management Trainees, Finance Officers, HR Executives, and more. ",
    },
    {
      id: 2,
      title:
        "Opportunities are available for fresh graduates, experienced professionals, and technical experts across disciplines like Mechanical, Electrical, Chemical, Civil, Instrumentation, Computer Science, Finance, and HR.",
    },
    {
      id: 3,
      title:
        "Keep visiting this page for regular updates on IOCL job openings tailored to your skills and career aspirations.",
    },
  ];

   const data3 = [
    {
      id: 1,
      title:
        "One of the leading Maharatna PSUs in the energy industry, GAIL (India) Limited, is a great place to start your career. In 2025, GAIL will be employing for a number of roles, such as engineers, officers, and technicians. ",
    },
    {
      id: 2,
      title:
        "Applications are welcome from both freshers as well as seasoned applicants in fields like mechanical, electrical, and chemical engineering. Competitive pay, employment security, and chances for professional advancement are all features of these positions.",
    },
    {
      id: 3,
      title:
        "Watch for updates on the selection process, application deadlines, and eligibility requirements. Don't pass up this opportunity to work for a renowned public sector organisation; submit your application now to guarantee a place in India's expanding energy infrastructure.",
    },
  ];
   const data4 = [
    {
      id: 1,
      title:
        "Power Grid Corporation of India Limited (POWERGRID), a top PSU in power transmission, offers exciting employment prospects. Their hiring drive for 2025 covers positions for managers, engineers, junior officers, and diploma trainees. ",
    },
    {
      id: 2,
      title:
        "Depending on their qualifications, both recent graduates and seasoned experts are eligible to apply. Excellent compensation packages, job stability, and skill-development initiatives are all provided by POWERGRID. Candidates with credentials in electronics, civil engineering, and electrical engineering are highly coveted. ",
    },
    {
      id: 3,
      title:
        "Receive alerts about upcoming online application deadlines, test trends, and interview stages. Join one of the leading PSUs in India to have a steady and fulfilling career while helping to build the country's electrical infrastructure.",
    },
  ];
   const data5 = [
    {
      id: 1,
      title:
        "For 2025, Bharat Heavy Electricals Limited (BHEL) is hiring for a number of exciting positions at its offices and plants around the country. BHEL offers safe and prestigious PSU opportunities, ranging from management positions to graduate apprentices and trainee engineers. ",
    },
    {
      id: 2,
      title:
        "Opportunities are available here for ITI professionals, engineering grads, and diploma holders. BHEL continues to be one of the most sought-after PSUs in India thanks to its alluring compensation packages, opportunities for professional advancement, and perks like housing and health insurance.",
    },
    {
      id: 3,
      title:
        "For information on eligibility, the selection process, and deadlines, be sure to keep up with the most recent recruitment alerts. Apply now for one of the top PSU jobs in India to avoid missing out!",
    },
  ];

  
  return (
    <div>
     
      <h1 className="text-base lg:text-2xl font-bold text-center mb-2 ">{title}</h1>
      
       <div className=" max-w-[90%] mx-auto">
        {(showAll ? para : [para[0]]).map((item, index) => (
          <p key={index} className="text-base lg:text-xl text-black mb-3">
            {item.title}
          </p>
        ))}

        <button onClick={handleToggle} className="text-blue-600 underline cursor-pointer ">
          {showAll ? "Read Less" : "Read More"}
        </button>
      </div>

     {ongcJob?( <JobCarousel
        jobs={ongcJob}
        title={"ONGC Recruitment 2025 – Apply Now"}
        color={"blue"}
        data={data1}
      />):("")}

      {ioclJob?(<JobCarousel
        jobs={ioclJob}
        title={"IOCL – Latest Job Openings"}
        color={"green"}
        data={data2}
      />):("")}

      {GAILJob?(<JobCarousel
        jobs={GAILJob}
        title={"GAIL Job Vacancies – Apply Today"}
        color={"orange"}
        data={data3}
      />):("")}

      {PwgRec?(<JobCarousel
        jobs={PwgRec}
        title={"POWERGRID Recruitment – Freshers & Experienced"}
        color={""}
        data={data4}
      />):("purple")}

     

      {bhelJob?(<JobCarousel
        jobs={bhelJob}
        title={"BHEL Jobs 2025 – Best PSU Opportunities"}
        color={"purple"}
        data={data5}
      />):("")}
    </div>
  );
};

export default technologyHome3;
