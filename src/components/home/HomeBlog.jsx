"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import base_url from "../helper/helper";
import Link from "next/link";
import JobCarousel from "../technology/JobCarousel";

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
<div className="w-full lg:w-[90%] mx-auto" >
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
      <div className="py-4 lg:py-10 px-4 lg:px-6 ">
        <h3 className="text-center text-2xl font-bold mb-8 text-white max-w-[1280px] bg-black mx-auto rounded-full">
          Career Guide
        </h3>
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
          {blog.map((blog, indx) => (
            <div
              key={indx}
              className="group relative w-full max-w-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 ease-in hover:scale-105"
            >
              <img
                src={`${base_url}${blog.image}`}
                alt={`${base_url}${blog.title}`}
                className="w-full h-100 lg:h-120 object-cover  transition-all duration-300"
              />
              <div className="absolute inset-0 z-10 p-4 flex items-end justify-center transition-all duration-300">
                <Link href={`/${blog?.category?.slug}/articles/${blog.slug}`}>
                  <button className="text-sm py-2 px-4 cursor-pointer bg-violet-700 hover:bg-violet-800 rounded-xl text-white transition duration-300 mb-4">
                    Explore now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeBlog;
