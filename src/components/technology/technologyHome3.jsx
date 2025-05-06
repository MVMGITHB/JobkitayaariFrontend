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


  const jobsData = {
    ONGC: [
      {
        title: "Junior Consultant",
        company: "Ongc",
        logo: "/images/psu5.png",
        salary: "27000",
        profile: "Full-time",
        link: "https://linkingsky.com/Docs/POWERGRID-CORPORATION-OF-INDIA-LIMITED-(PGCIL)-Job-18.pdf",
        // link: "https://linkingsky.com/Docs/POWERGRID-CORPORATION-OF-INDIA-LIMITED-(PGCIL)-Job-18.pdf",
      },
      {
        title: "Project Associate",
        company: "Ongc",
        logo: "/images/psu5.png",
        salary: "27000",
        profile: "Full-time",
        link: "https://linkingsky.com/Docs/OIL-AND-NATURAL-GAS-CORPORATION-LIMITED-(ONGC)-Job-6.pdf",

        // Link : "https://linkingsky.com/Docs/OIL-AND-NATURAL-GAS-CORPORATION-LIMITED-(ONGC)-Job-6.pdf"
      },
      {
        title: "PSU personnel from Production,",
        company: "Ongc",
        logo: "/images/psu5.png",
        salary: "66000",
        profile: "Full-time",
        link: "https://drive.google.com/file/d/17xqmyvW8qHrjI2I9v3o7dcNimr2svrXt/view",

        // Link : "https://drive.google.com/file/d/17xqmyvW8qHrjI2I9v3o7dcNimr2svrXt/view"
      },

      {
        title: "Project Associate",
        company: "Ongc",
        logo: "/images/psu5.png",
        salary: "27000",
        profile: "Full-time",
        link: "https://linkingsky.com/Docs/OIL-AND-NATURAL-GAS-CORPORATION-LIMITED-(ONGC)-Job-6.pdf",

        // Link : "https://linkingsky.com/Docs/OIL-AND-NATURAL-GAS-CORPORATION-LIMITED-(ONGC)-Job-6.pdf"
      },

      {
        title: "PSU personnel from Production,",
        company: "Ongc",
        logo: "/images/psu5.png",
        salary: "66000",
        profile: "Full-time",
        link: "https://drive.google.com/file/d/17xqmyvW8qHrjI2I9v3o7dcNimr2svrXt/view",

        // Link : "https://drive.google.com/file/d/17xqmyvW8qHrjI2I9v3o7dcNimr2svrXt/view"
      },
    ],

    IOCL: [
      {
        title: "Trade, Technician / Graduate Apprentice",
        company: "IOCL",
        logo: "/images/psu1.png",
        salary: "27000",
        profile: "Full-time",
        // link: "#",
        link: "https://www.sarkariexam.com/iocl-trade-technician-graduate-apprentices-recruitment-2025-last-date-today/",
      },
      {
        title: "Graduate Apprentice",
        company: "IOCL",
        logo: "/images/psu1.png",
        salary: "Not Disclosed",
        profile: "Full-time",
        // link: "#",

        link : "https://linkingsky.com/Docs/OIL-AND-NATURAL-GAS-CORPORATION-LIMITED-(ONGC)-Job-6.pdf"
      },
      {
        title: "Retired Government Employees (Revenue)",
        company: "IOCL",
        logo: "/images/psu1.png",
        salary: "36400",
        profile: "Full-time",
        // link: "#",

        link : "https://iocl.com/admin/img/UploadedFiles/LatestJobOpening/Files/3df87349b9ec4b2380b40e0fae767e7b.pdf"
      },
      {
        title: "Assistant Quality Control Officers",
        company: "IOCL",
        logo: "/images/psu1.png",
        salary: "40,000-1,40,000",
        profile: "Full-time",
        // link: "#",

        link : "  https://iocl.com/admin/img/UploadedFiles/LatestJobOpening/Files/f825dc56541e4bcc8a7c3d5fdcd7ac81.pdf"
      },

      {
        title: "Assistant Officers(Finance)",
        company: "IOCL",
        logo: "/images/psu1.png",
        salary: "40,000-1,40,000",
        profile: "Full-time",
        // link: "#",

        link : "https://iocl.com/admin/img/UploadedFiles/LatestJobOpening/Files/a4bdca5009ab4975a3246b8b5f8d8f0c.pdf"
      },

      {
        title: "JuniorEngineering",
        company: "IOCL",
        logo: "/images/psu1.png",
        salary: "25,000-1,05,000",
        profile: "Full-time",
        // link: "#",

        link : "https://iocl.com/admin/img/UploadedFiles/LatestJobOpening/Files/bcb8ed612fc14a05a15045920f747a9d.pdf"
      },
    ],

    POWERGRID: [
      {
        title: "Engineer Trainee",
        company: "Powergrid",
        logo: "/images/psu4.png",
        salary: "210000-400000",
        profile: "Full-time",
        // link: "#",
        link: "https://blog.madeeasy.in/pgcil-recruitment",
      },
      {
        title: "REMC Consultancy",
        company: "Powergrid",
        logo: "/images/psu4.png",
        salary: "300000-1200000",
        profile: "Full-time",
        // link: "#",
        link: "https://linkingsky.com/Docs/POWERGRID-CORPORATION-OF-INDIA-LIMITED-(PGCIL)-Job-18.pdf",
      },

      {
        title: "Field Supervisor",
        company: "Powergrid",
        logo: "/images/psu4.png",
        salary: "23,0003-105000",
        profile: "Full-time",
        // link: "#",
        link: "https://www.powergrid.in/sites/default/files/job_opportunities_document/Detailed_advertisement.pdf",
      },
     
      {
        title: "Assistant Manager (Electrical)",
        company: "Powergrid",
        logo: "/images/psu4.png",
        salary: "80,000 - 220000/",
        profile: "Full-time",
        // link: "#",
        link: "https://www.powergrid.in/sites/default/files/job_opportunities_document/Detailed_Advertisement_Lateral_E3_E4_E5.pdf",
      },

    ],
    NTPC: [
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link: "#",
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link: "#",
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link: "#",
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link: "#",
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link: "#",
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
    ],
    GAIL: [
      {
        title: "Executive Trainee",
        company: "Gail",
        logo: "/images/psu2.png",
        salary: "100000",
        profile: "Remote",
        // link: "#",
        link : "https://www.sarkariexam.com/gail-executive-trainee-recruitment-2025-last-date-today/"
      },
      {
        title: "Medical consultant",
        company: "Gail",
        logo: "/images/psu2.png",
        salary: "67000",
        profile: "Remote",
        // link: "#",
        link: "https://gailonline.com/careers/currentOpnning/GAIL_Website_Advertisement_English_Bengaluru_10_03_2025.pdf",
      },

      {
        title: "Executive Trainee",
        company: "Gail",
        logo: "/images/psu2.png",
        salary: "60,000‐180,000",
        profile: "Full-time",
        // link: "#",
        link: "https://gailonline.com/careers/currentOpnning/GATE_2025_17_02_2025_Detailed_Advt.pdf",
      },
      {
        title: "Full time factory Medical Officer",
        company: "Gail",
        logo: "/images/psu2.png",
        salary: "93,000",
        profile: "Full-time",
        // link: "#",
        link: "https://gailonline.com/careers/currentOpnning/Detailed_Advertisement_FMO_14022025.pdf",
      },
      {
        title: "Senior Officer",
        company: "Gail",
        logo: "/images/psu2.png",
        salary: "60,000 –1,80,000",
        profile: "Full-time",
        // link: "#",
        link: "https://gailonline.com/careers/currentOpnning/Detailed_Advertisement_E1_E2_Grade_12112024.pdf",
      },
    ],

    BHEL: [
      {
        title: "Engineer and Supervisor Trainee",
        company: "BHEL",
        logo: "/images/psu3.png",
        salary: "120000",
        profile: "Remote",
        // link: "#",
        link: "https://www.careerpower.in/blog/bhel-recruitment-2025",
      },
      {
        title: "Engineering Trainee Junior Assistant",
        company: "Bhel",
        logo: "/images/psu3.png",
        salary: "Not Disclosed",
        profile: "Remote",
        link: "#",
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
      {
        title: "Engineer Trainee",
        company: "Bhel",
        logo: "/images/psu3.png",
        salary: "60,000-1,80,000",
        profile: "Remote",
        // link: "#",
        link: "https://linkingsky.com/Docs/BHARAT-HEAVY-ELECTRICALS-LIMITED-(BHEL)-Job-13.pdf",
      },
      {
        title: "Senior Officer",
        company: "Bhel",
        logo: "/images/psu3.png",
        salary: "60,000-1,80,000",
        profile: "Full-time",
        // link: "#",
        link: "https://gailonline.com/careers/currentOpnning/Detailed_Advertisement_E1_E2_Grade_12112024.pdf",
      },

      {
        title: "Engineer Trainee",
        company: "Bhel",
        logo: "/images/psu3.png",
        salary: "60,000-1,80,000",
        profile: "Remote",
        // link: "#",
        link: "https://linkingsky.com/Docs/BHARAT-HEAVY-ELECTRICALS-LIMITED-(BHEL)-Job-13.pdf",
      },
    ],
  };

  return (
    <div>
     
      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
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
