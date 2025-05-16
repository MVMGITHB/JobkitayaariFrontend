"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import base_url from "../helper/helper";
import Link from "next/link";
import JobCarousel from "./JobCrousel1";

function HomeBlog() {
  const [blog, setBlog] = useState([]);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogRes, latestRes] = await Promise.all([
          axios.get(`${base_url}/api/blog/getAllBlog`),
          axios.get(`${base_url}/api/job/getJobbySUbCategory/all-sectors`),
        ]);

        setBlog(blogRes?.data?.slice(0, 3));
        setLatest(latestRes?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
<div className="w-full  mx-auto" >
{latest ? (
        <JobCarousel
          jobs={latest}
          title={"Latest Govenment Job Opening 2025 - All Sectors"}
          color={"blue"}
        />
      ) : (
        ""
      )}
</div>
<div className="py-4 lg:py-10 px-4 lg:px-6">
  <h3 className="text-center text-2xl font-bold mb-8 text-white max-w-[98%] bg-violet-500 mx-auto rounded-full">
    Career Guide
  </h3>

  <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
    {blog.map((blog, indx) => (
      <Link
        key={indx}
        href={`/${blog?.category?.slug}/articles/${blog.slug}`}
        className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl group transition-all duration-300 ease-in hover:scale-105 bg-white"
      >
        <img
          src={`${base_url}${blog.image}`}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Gradient overlay for visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>

        {/* Title */}
        <p className="absolute bottom-16 left-0 w-full px-4 text-center text-[18px] lg:text-[22px] font-semibold text-white z-20">
          {blog.title}
        </p>

        {/* Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <Link href={`/${blog?.category?.slug}/articles/${blog.slug}`}>
            <button className="text-sm py-2 px-4 cursor-pointer bg-violet-700 hover:bg-violet-800 rounded-xl text-white transition duration-300">
              Explore now
            </button>
          </Link>
        </div>
      </Link>
    ))}
  </div>
</div>

    </>
  );
}

export default HomeBlog;
