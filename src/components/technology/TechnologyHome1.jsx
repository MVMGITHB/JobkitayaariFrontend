'use client'
import { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import Head from "next/head";
import axios from "axios";
import base_url from "../helper/helper";

const TechnologyHome1 = ({ title ,para}) => {
  const [showAll, setShowAll] = useState(false);
    const handleToggle = () => {
      setShowAll((prev) => !prev);
    };

    const [softwareJobs , setSoftwareJobs]=useState([])
    const [testingJobs , setTestingJobs]=useState([])
    const [projectManJobs , setProjectManJobs]=useState([])
    const [aimlJobs , setAiMlJobs]=useState([])

   useEffect(()=>{
    const fetchJobs = async () => {
      try {
        const [softwareRes, testingRes, projectManRes, aimlRes] = await Promise.all([
          axios.get(`${base_url}/api/job/getJobbySUbCategory/software-developer-jobs`),
          axios.get(`${base_url}/api/job/getJobbySUbCategory/software-testing-jobs`),
          axios.get(`${base_url}/api/job/getJobbySUbCategory/project-management-jobs`),
          axios.get(`${base_url}/api/job/getJobbySUbCategory/ai-and-ml-jobs`),
        ]);

        setSoftwareJobs(softwareRes.data);
        setTestingJobs(testingRes.data);
        setProjectManJobs(projectManRes.data);
        setAiMlJobs(aimlRes.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
   },[])

  
  const data1 = [
    {
      id:1,
      title:"This page lists all software development jobs in India and abroad. We feature opportunities in companies like Infosys, TCS, Accenture, HCL, Tech Mahindra, Wipro, Microsoft, Amazon, Flipkart, and Google."
    },
    {
      id:2,
      title:"Jobs are available for both freshers and experienced candidates with specializations in AI/ML, SAP, Salesforce, Data Science, DevOps, Cybersecurity, and Cloud Computing."
    },
    {
      id:3,
      title:"Roles for developers with skills like PHP, Node.js, React.js, Express.js, Java, CSS, Ruby, Django, Angular, and HTML are also covered."
    },
    {
      id:4,
      title:"We ensure all the latest software developer jobs are posted here. Visit this page for up-to-date information and take the next step in your tech career."
    }
  ]


  const data2 = [
    {
      id:1,
      title:"This page shares software testing jobs in India and abroad. Software testing is a critical function in the development process, and these roles are highly valued."
    },
    {
      id:2,
      title:"We cover jobs in companies like Infosys, TCS, Accenture, HCL, Tech Mahindra, Wipro, Microsoft, Amazon, Flipkart, and Google."
    },
    {
      id:3,
      title:"Opportunities for freshers and experienced candidates include Manual Testing and Automation Testing roles such as Test Analyst, Test Engineer, Test Manager, and Automation Tester."
    },
    {
      id:4,
      title:"Regular updates on the latest tools and trends in software testing are shared here. Keep visiting to find your ideal testing job."
    }
  ]


  const data3 = [
    {
      id:1,
      title:"This page features project management job openings in India and abroad. These roles are crucial in overseeing software development projects and ensuring timely delivery."
    },
    {
      id:2,
      title:"We list opportunities in companies like Amazon, Google, CISCO, Ericsson, Cognizant, Capgemini, IBM, Oracle, and Salesforce."
    },
    {
      id:3,
      title:"Both freshers and experienced candidates can find jobs like Project Manager, Project Sponsor, Business Analyst, Resource Manager, and Project Coordinator."
    },
    {
      id:4,
      title:"Check this page regularly for updates on project management trends, tools, and the latest job openings to advance your career."
    }
  ]


  const data4 = [
    {
      id:1,
      title:"Explore job openings for Artificial Intelligence (AI) and Machine Learning (ML) roles in India. AI and ML are in high demand, transforming industries through automation."
    },
    {
      id:2,
      title:"We post jobs in top companies like IBM, Amazon, Microsoft, Bosch, Facebook, and Myntra. Popular roles include Data Scientist, Machine Learning Engineer, AI Engineer, AI Product Manager, and AI/ML Consultant."
    },
    {
      id:3,
      title:"Stay updated on the latest trends, tools, and AI & ML job openings by visiting this page regularly. Your next career opportunity is just a click away."
    },
    
  ]

  return (
    <div>
     
      <h1 className="text-base lg:text-2xl font-bold text-center mb-2 ">{title}</h1>
      <div className=" w-[90%] mx-auto">
       {(showAll ? para : [para[0]]).map((item, index) => (
        <p key={index} className="text-base lg:text-xl text-black mb-4">
          {item.title}
        </p>
      ))}

      <button
        onClick={handleToggle}
        className="text-blue-600 underline mt-2 cursor-pointer"
      >
        {showAll ? "Read Less" : "Read More"}
      </button>
    </div>
      {softwareJobs?(<JobCarousel
        jobs={softwareJobs}
        title={"Software Developer Jobs 2025 – Freshers & Experienced"}
        color={"blue"}
        data={data1}
      />):("")
}
       {testingJobs?(<JobCarousel
        jobs={testingJobs}
        title={"Software Testing Jobs (Manual & Automation) 2025"}
        color={"green"}
        data={data2}
      />):("")}

    { projectManJobs? (<JobCarousel
        jobs={projectManJobs}
        title={"Project Management Jobs 2025 – IT & Tech Sector"}
        color={"orange"}
        data={data3}
      />):("")}
{aimlJobs?(<JobCarousel jobs={aimlJobs} title={"AI & ML Jobs in India 2025 – High-Paying Roles"} color={"purple"} data={data4}/>):("")}
    </div>
  );
};

export default TechnologyHome1;