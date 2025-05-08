"use client";
import React, { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import axios from "axios";
import base_url from "../helper/helper";

const technologyHome5 = ({ title, para }) => {
  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const [railwayjob, setRailway] = useState([]);
  const [allsector, setAllsector] = useState([]);
  const [defense, setDefense] = useState([]);
  const [upsc, setUpsc]= useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/api/job/getJobbySUbCategory/railway-jobs`);
        setRailway(response?.data);
      } catch (error) {
        console.log(err);  
      }
    };

    fetchData();

    const fetchData1 = async () => {
      try {
        const response = await axios.get(`${base_url}/api/job/getJobbySUbCategory/all-sectors`);
        setAllsector(response?.data);
      } catch (error) {
        console.log(err);
      }
    };

    fetchData1();

    const fetchData2 = async () => {
      try {
        const response = await axios.get(`${base_url}/api/job/getJobbySUbCategory/defence-jobs`);
        setDefense(response?.data);
      } catch (error) {
        console.log(err);
      }
    };

    fetchData2();

    const fetchData3 = async () => {
      try {
        const response = await axios.get(`${base_url}/api/job/getJobbySUbCategory/upsc-jobs`);
        setUpsc(response?.data);
      } catch (error) {
        console.log(err);
      }
    };

    fetchData3();
  }, []);



  const data1 = [
    {
      id: 1,
      title:
        "Looking for railway jobs in India? We post daily updates on Indian Railways vacancies across all zones—North, South, East, and West.",
    },
    {
      id: 2,
      title:
        "Discover roles like Ticket Collector, Loco Pilot, Station Master, Clerk, Goods Guard, Section Engineer, and Signal & Telecommunication Engineer.",
    },
    {
      id: 3,
      title:
        "Higher-level positions like Deputy General Manager are also available. Whether you’ve completed 10th, 12th, ITI, diploma, or graduation, there’s a job that fits your profile.",
    },
    {
      id: 4,
      title:
        "We include key details like eligibility, age limit, pay scale, selection process, and how to apply online. Our job alerts make it easy to track deadlines and apply without hassle.",
    },
    {
      id: 5,
      title:
        "With thousands of positions expected in 2025, staying informed is key. Bookmark this page to explore the latest vacancies in Indian Railways and boost your chances of getting hired.",
    },
  ];

  const data2 = [
    {
      id: 1,
      title:
        "Want to join the Indian defence forces? Check out the latest defence job vacancies in the Indian Army, Navy, Air Force, and paramilitary units.",
    },
    {
      id: 2,
      title:
        "Roles are open in Combat Arms, Engineering, Signals, Medical Corps, and more. The Navy is hiring for technical branches, and the Air Force has openings in Flying and Ground Duty.",
    },

    {
      id: 3,
      title:
        "Paramilitary organizations like BSF, ITBP, CISF, and Coast Guard offer posts such as Assistant Commandant, Sub-Inspector, and Constable. ",
    },
    {
      id: 4,
      title:
        "We gather accurate details from official sources to give you clear information on eligibility, physical requirements, pay structure, and the selection process.  ",
    },
    {
      id: 5,
      title:
        "Whether you’re a fresh or experienced candidate, defence jobs offer stability and pride. Don’t miss out—apply to the latest defence vacancies in India and serve the nation with honor.",
    },
  ];

  const data3 = [
   
    {
      id: 1,
      title:
        "We cover everything: exam notifications, changes in syllabus, admit card releases, results, and interview schedules. ",
    },
    {
      id: 2,
      title:
"Stay ahead with regular UPSC updates and the latest government job vacancies in India."
    },
    {
      id: 3,
      title:
        "In addition to civil services, we also list job openings in central ministries like Finance, Railways, and Home Affairs, as well as state government jobs in teaching, healthcare, and public works.",
    },
    {
      id: 4,
      title:
        "Find essential details like exam patterns, age limits, qualifications, and application links all in one place. ",
    },
    {
      id: 5,
      title:
        "Whether you're preparing for UPSC, SSC, or state-level exams, our updates help you stay organized and focused.",
    },
    {
      id: 6,
      title:
        "Get the right resources at the right time, and never miss a deadline. Visit frequently to apply for top government job opportunities in India.",
    },
  ];

  return (
    <div>
    
      <h1 className=" text-2xl font-bold text-center mb-2 pt-8 px-4 lg:px-6">{title}</h1>

      <div className=" max-w-[90%] mx-auto">
        {(showAll ? para : [para[0]]).map((item, index) => (
          <p key={index} className="text-xl text-black mb-3">
            {item.title}
          </p>
        ))}

        <button onClick={handleToggle} className="text-blue-600 underline cursor-pointer ">
          {showAll ? "Read Less" : "Read More"}
        </button>
      </div>
    {allsector?(  <JobCarousel
        jobs={allsector}
        title={"Latest Govenment Job Opening 2025 - All Sectors"}
        color={"blue"}
      />):("")}
      
      {railwayjob ? (
        <JobCarousel
          jobs={railwayjob}
          title={"Latest Railway Jobs in India 2025"}
          color={"blue"}
          data={data1}
        />
      ) : (
        ""
      )}



{defense ? (
        <JobCarousel
          jobs={defense}
          title={"Explore Latest Defense Jobs in India 2025"}
          color={"blue"}
          data={data2}
        />
      ) : (
        ""
      )}

{upsc ? (
        <JobCarousel
          jobs={upsc}
          title={"UPSC Exam Notifications 2025 – Latest Govt Jobs"}
          color={"blue"}
          data={data3}
        />
      ) : (
        ""
      )}

           
      {/* {defense? (<JobCarousel jobs={defense} title={"Explore Latest Defense Jobs in India 2025"} color={"green"} data={data2} />):("")} */}

      {/* // <JobCarousel
      //   jobs={jobsData?.upsc}
      //   title={"UPSC Exam Notifications 2025 – Latest Govt Jobs"}
      //   color={"orange"}
      //   data={data3}
      // />  */}

      {/* <JobCarousel jobs={jobsData?.AI_ML} title={"Apply for Latest Ministry Jobs in India"} color={"purple"} /> */}
    </div>
  );
};

export default technologyHome5;
