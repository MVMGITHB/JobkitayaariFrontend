"use client";

import { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import axios from "axios";
import base_url from "../helper/helper";

const technologyHome2 = ({ title, para }) => {
  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const [primaryJob, setPrimaryJob] = useState([]);
  const [srTeacherJob, setSrTeacjerJob] = useState([]);
  const [clProfessorJob, setClProfessorJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [primaryRes, srTeacherRes, clProfessorRes] = await Promise.all([
        axios.get(
          `${base_url}/api/job/getJobbySUbCategory/primary-teacher-job`
        ),
        axios.get(`${base_url}/api/job/getJobbySUbCategory/senior-teacher-job`),
        axios.get(
          `${base_url}/api/job/getJobbySUbCategory/college-professor-job`
        ),
      ]);
      setPrimaryJob(primaryRes.data);
      setSrTeacjerJob(srTeacherRes.data);
      setClProfessorJob(clProfessorRes.data);
    };

    fetchData();
  }, []);

  const data1 = [
    {
      id: 1,
      title:
        "We provide primary teaching positions in some of the most prestigious educational establishments in India, such as Delhi Public Schools, Ryan International, Podar International, Amity International, Kendriya Vidyalayas, and other reputable international, CBSE, and ICSE schools.",
    },
    {
      id: 2,
      title:
        "There are opportunities for recent graduates, seasoned teachers, and teaching enthusiasts who want to mentor young students in areas including science, math, English, social studies, art, and physical education.",
    },
    {
      id: 3,
      title:
        "For frequent updates on primary teaching job vacancies that fit your passion for influencing the future, keep checking this page.",
    },
  ];
  const data2 = [
    {
      id: 1,
      title:
        "We provide senior teaching positions for 9th-12th classes in prominent schools, such as Delhi Public Schools, Ryan International, Podar International, Amity International, Kendriya Vidyalayas, and other reputable international, CBSE, and ICSE schools.",
    },
    {
      id: 2,
      title:
        "These positions frequently call for a dedication to academic quality, a wealth of teaching experience, and research contributions. For frequent updates on senior teaching positions that fit your leadership background and enthusiasm for teaching, keep checking this website.",
    },
  ];
  const data3 = [
    {
      id: 1,
      title:
        "We provide senior teaching positions  in prominent colleges, universities, and schools, such as Jawaharlal Nehru University (JNU), Delhi University, Central Universities, IIMs, IITs, and NITs, as well as top private universities like Amity University, Christ University, and Symbiosis.",
    },
    {
      id: 2,
      title:
        "Head of Department (HOD), Senior Lecturer, Associate Professor, Professor, Dean, Academic Coordinator, and Principal are among the roles. These positions frequently call for a dedication to academic quality, a wealth of teaching experience, and research contributions.",
    },
    {
      id: 3,
      title:
        "For frequent updates on teaching positions that fit your academic interests, keep checking this website.",
    },
  ];

  return (
    <div>
      <h1 className="text-base lg:text-2xl font-bold text-center mb-2 ">
        {title}
      </h1>

      <div className=" max-w-[90%] mx-auto">
        {(showAll ? para : [para[0]]).map((item, index) => (
          <p key={index} className="text-base lg:text-xl text-black mb-3">
            {item.title}
          </p>
        ))}

        <button
          onClick={handleToggle}
          className="text-blue-600 underline cursor-pointer "
        >
          {showAll ? "Read Less" : "Read More"}
        </button>
      </div>
      {primaryJob ? (
        <JobCarousel
          jobs={primaryJob}
          title={"Best Primary Teacher Job Opportunities in India 2025"}
          color={"blue"}
          data={data1}
        />
      ) : (
        ""
      )}
      {srTeacherJob ? (
        <JobCarousel
          jobs={srTeacherJob}
          title={"Latest Senior Teacher Job Openings in India 2025 "}
          color={"green"}
          data={data2}
        />
      ) : (
        ""
      )}

      {clProfessorJob ? (
        <JobCarousel
          jobs={clProfessorJob}
          title={"Best College Professor Job Vacancies in India 2025"}
          color={"orange"}
          data={data3}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default technologyHome2;
