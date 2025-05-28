"use client"

import  { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import axios from "axios";
import base_url from "../helper/helper";
import CategoryBlog from "./CategoryBlog";

const technologyHome6 = ({ title, para, slug }) => {

  const [showAll, setShowAll] = useState(false);
    const handleToggle = () => {
      setShowAll((prev) => !prev);
    };

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
  

   const data1 = [
    {
      id: 1,
      title:
        "Keep up with India's most recent banking job vacancies for 2025. Regardless of your level of experience, consider a variety of positions like Deputy Manager-Sales, Assistant Manager, and Private Banking Advisor.",
    },
    {
      id: 2,
      title:
        "Leading banks are hiring across a variety of divisions, including operations, sales, and finance, including HDFC, Union Bank, and Deutsche Bank. Each listing provides important information about the duties, pay scale, and credentials needed for the position.",
    },
    {
      id: 3,
      title:
        "Save this page to stay up to date on safe, lucrative banking jobs that fit your skill set. To help you locate the ideal fit, new opportunities are posted on a regular basis.",
    },
  ];

   const data2 = [
    {
      id: 1,
      title:
        "Explore the top-rated insurance roles available in India in 2025. The insurance industry is growing quickly and now offers positions like risk analyst, underwriting executive, claims manager, and insurance advisor.",
    },
    {
      id: 2,
      title:
        "Prominent companies like SBI Life, LIC, and ICICI Lombard are actively seeking both new hires and experienced workers. Long-term growth opportunities, excellent rewards, and stability are all advantages of these positions. Skills such as analytical, interpersonal, and communication abilities are highly sought after in candidates.",
    },
    {
      id: 3,
      title:
        "Follow the most recent job postings to stay informed about eligibility requirements, application deadlines, and job descriptions. You can find chances here whether you want to start or grow your insurance career.",
    },
  ];

  return (
    <div>
      

      <h1 className="text-base lg:text-2xl font-bold text-center mb-2">{title}</h1>
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
      {bankingJob && (
  <JobCarousel
    jobs={bankingJob}
    title={"Latest Banking Job Openings in India 2025"}
    color={"blue"}
    data={data1}
  />
)}

    {insuranceJob?( <JobCarousel
         jobs={insuranceJob}
         title={"Best Insurance Job Opportunities in India 2025"}
      color={"green"}
      data={data2}
       />):("")}
           <CategoryBlog slug={slug}/>

    </div>

  );
};

export default technologyHome6;
