"use client";

import { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import base_url from "../helper/helper";
import axios from "axios";
import CategoryBlog from "./CategoryBlog";

const technologyHome4 = ({ title, para, slug }) => {
  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const [marketingJobs, setMarketingJobs] = useState([]);
  const [salesJobs, setSalesJobs] = useState([]);
  const [financeJobs, setfinanceJobs] = useState([]);
  const [bdeJobs, setBdeJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const [marketingRes, salesRes, financeRes, bdeRes] = await Promise.all([
          axios.get(`${base_url}/api/job/getJobbySUbCategory/marketing-jobs`),
          axios.get(`${base_url}/api/job/getJobbySUbCategory/sales-job`),
          axios.get(`${base_url}/api/job/getJobbySUbCategory/business-development-job`),
          axios.get(
            `${base_url}/api/job/getJobbySUbCategory/business-development-job`
          ),
        ]);

        setMarketingJobs(marketingRes.data);
        setSalesJobs(salesRes.data);
        setfinanceJobs(financeRes.data);
        setBdeJobs(bdeRes.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const data1 = [
    {
      id: 1,
      title:
        "Explore the latest marketing job opportunities in India for 2025. Marketing is key to building brand value and connecting with customers.",
    },
    {
      id: 2,
      title:
        "We list roles in areas like Media Buying, Marketing Strategy, Creative Marketing, Advertising, Sales Promotion, Analytics, Public Relations, and Digital Media.",
    },
    {
      id: 3,
      title:
        "Companies such as Amazon, Airtel, Patanjali, and Flipkart feature jobs for Digital Media Buyers, Creative Designers, SEO Specialists, SEM Experts, Social Media Managers, Copywriters, and Brand Managers.",
    },
    {
      id: 4,
      title:
        "Stay tuned to this page for updates on top marketing positions across industries.",
    },
  ];

  const data2 = [
    {
      id: 1,
      title:
        "Find the latest sales job opportunities in India for 2025. Sales is a vital function responsible for revenue generation and driving business growth.",
    },
    {
      id: 2,
      title:
        "We feature jobs in areas like Channel Sales, Product Sales, Pre-Sales, Business Development, Client Servicing, Inside Sales, and Enterprise Sales.",
    },
    {
      id: 3,
      title:
        "Roles like Sales Engineer, Account Manager, Business Development Manager, Customer Success Manager, and Sales Consultant are posted in companies like Reliance, Adani, and Cipla.",
    },
    {
      id: 4,
      title:
        "Visit this page regularly to stay updated on sales opportunities that match your skills and aspirations.",
    },
  ];

  const data3 = [
    {
      id: 1,
      title:
        "Discover the latest finance job openings in India for 2025. Finance roles involve auditing, budgeting, taxation, payments, balance sheets, and investment management.",
    },
    {
      id: 2,
      title:
        "We list opportunities in companies like Sun Pharma, Patanjali, Jio, Larsen & Toubro, and Aditya Birla Group. Common positions include Financial Analyst, Risk Manager, Accountant, Portfolio Manager, and Investment Banker.",
    },
    {
      id: 3,
      title:
        "Browse this page to find finance jobs tailored to your experience and expertise. Take the next step towards advancing your career.",
    },
   
  ];

  const data4 = [
    {
      id: 1,
      title:
        "Stay updated on business development job opportunities in India for 2025. Business Development teams drive organizational growth by acquiring new clients and scaling operations.",
    },
    {
      id: 2,
      title:
        "Roles like Business Development Associate, Partnership Manager, Sales Development Representative, and Account Manager are posted in companies like Amazon, Jio, Reliance, and Cipla.",
    },
    {
      id: 3,
      title:
        "Check this page regularly for fresh job openings and updates to find a role that aligns with your expertise and eligibility.",
    },
  ];

  return (
    <div>
      <h1 className="text-base lg:text-2xl font-bold text-center mb-2 ">{title}</h1>
      <div className=" w-[90%] mx-auto">
        {(showAll ? para : [para[0]]).map((item, index) => (
          <p key={index} className="text-xl text-black mb-3">
            {item.title}
          </p>
        ))}

        <button onClick={handleToggle} className="text-blue-600 underline cursor-pointer">
          {showAll ? "Read Less" : "Read More"}
        </button>
      </div>

      {marketingJobs ? (
        <JobCarousel
          jobs={marketingJobs}
          title={"Find the Best Marketing Jobs in India 2025"}
          color={"blue"}
          data={data1}
        />
      ) : (
        ""
      )}

      {salesJobs ? (
        <JobCarousel
          jobs={salesJobs}
          title={"Best Sales Job Opportunities in India 2025"}
          color={"green"}
          data={data2}
        />
      ) : (
        ""
      )}

      {financeJobs ? (
        <JobCarousel
          jobs={financeJobs}
          title={"Find the Best Finance Jobs in India 2025 "}
          color={"orange"}
          data={data3}
        />
      ) : (
        ""
      )}

      {bdeJobs ? (
        <JobCarousel
          jobs={bdeJobs}
          title={"Top Business Development Job Openings in India 2025"}
          color={"purple"}
          data={data4}
        />
      ) : (
        ""
      )}
      <CategoryBlog slug={slug}/>
    </div>
  );
};

export default technologyHome4;
