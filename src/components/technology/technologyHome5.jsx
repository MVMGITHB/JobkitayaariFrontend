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
        "Explore the latest Indian Railways job openings in North, South, East, and West zones.",
    },
    {
      id: 2,
      title:
        "Get updates on roles like Ticket Collector, Loco Pilot, Station Master, Clerk, Section Engineer, Signal & Telecommunication Engineer, and Goods Guard. Higher-level positions like Deputy General Manager are also included.",
    },
    {
      id: 3,
      title:
        "We simplify official updates into easy-to-read formats. Check job requirements and eligibility to apply confidently. Stay updated here for the newest railway jobs across India.",
    },
  ];

  const data2 = [
    {
      id: 1,
      title:
        "Discover opportunities in the Indian Defence Services across diverse roles.",
    },

    {
      id: 2,
      title:
        "We cover job updates in sectors like Combat Arms, Engineers, Signals, Ordnance, and Medical Corps within the Indian Army. Additionally, explore Navy roles in Engineering and Electrical branches or Air Force opportunities in Flying and Ground Duty.",
    },
    {
      id: 3,
      title:
        "Find posts like Assistant Commandant, Inspector, and Sipahi in ITBP, Coast Guard, CISF, and BSF. All information is sourced directly from official sites for accuracy and clarity.",
    },
  ];

  const data3 = [
    {
      id: 1,
      title:
        "Stay informed with regular UPSC exam updates, including exam dates, format changes, admit card releases, and results.",
    },
    {
      id: 2,
      title:
        "We also track government job vacancies from various departments, providing updates on application deadlines, preparation resources, and final interviews.",
    },

    {
      id: 3,
      title:
        "Our platform ensures you have all the information needed to focus on your preparation. Check back here for the latest UPSC and government job notifications.",
    },
  ];

  return (
    <div>
    
      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>

      <div className=" w-[90%] mx-auto">
        {(showAll ? para : [para[0]]).map((item, index) => (
          <p key={index} className="text-xl text-black mb-4">
            {item.title}
          </p>
        ))}

        <button onClick={handleToggle} className="text-blue-600 underline mt-2">
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
          data={data1}
        />
      ) : (
        ""
      )}

{upsc ? (
        <JobCarousel
          jobs={upsc}
          title={"UPSC Exam Notifications 2025 – Latest Govt Jobs"}
          color={"blue"}
          data={data1}
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
