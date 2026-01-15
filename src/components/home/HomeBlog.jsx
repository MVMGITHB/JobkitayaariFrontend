"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import base_url from "../helper/helper";


const JobCarousel = dynamic(() => import("./JobCrousel1"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[420px] flex items-center justify-center">
      <p className="text-gray-400">Loading jobs…</p>
    </div>
  ),
});

/* ----------------------------------------
   Axios instance
----------------------------------------- */
const api = axios.create({
  baseURL: base_url,
  timeout: 10000,
});

/* ----------------------------------------
   Blog Skeleton (CLS-safe)
----------------------------------------- */
function BlogSkeleton() {
  return (
    <div className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
        >
          <div className="h-[220px] bg-gray-200" />
          <div className="p-4 space-y-3">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
            <div className="h-8 w-28 bg-gray-200 rounded-full mt-3" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------
   HomeBlog Component
----------------------------------------- */
function HomeBlog() {
  const [blog, setBlog] = useState([]);
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const [blogRes, latestRes] = await Promise.all([
          api.get("/api/blog/getHomeBlog", { signal: controller.signal }),
          api.get("/api/job/homePageLatestJob", {
            signal: controller.signal,
          }),
        ]);

        setBlog(blogRes?.data?.slice(0, 4) || []);
        setLatest(latestRes?.data || []);
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error("HomeBlog error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  const hasLatestJobs = useMemo(
    () => Array.isArray(latest) && latest?.length > 0,
    [latest]
  );

  return (
    <>
      {/* ================= JOB CAROUSEL ================= */}
      <div className="w-full mx-auto min-h-[420px]">
        {hasLatestJobs && (
          <JobCarousel
            jobs={latest}
            title="Latest Government Job Opening 2026 - All Sectors"
            color="blue"
          />
        )}
      </div>

      {/* ================= BLOG SECTION ================= */}
      <div className="py-4 lg:py-10 px-4 lg:px-6">
        <h3 className="text-center text-2xl font-bold mb-8 text-white max-w-[98%] bg-violet-500 mx-auto rounded-full">
          Career Guide
        </h3>

        {loading ? (
          <BlogSkeleton />
        ) : (
          <div className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {blog?.map((item, index) => (
              <Link
                key={item?._id || item?.slug}
                href={`/${item?.category?.slug}/articles/${item?.slug}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] overflow-hidden flex flex-col"
              >
                {/* IMAGE (LCP optimized) */}
                <div className="relative w-full h-[220px]">
                  <Image
                    src={`${base_url}${item?.image}`}
                    alt={item?.title || "Blog Image"}
                    fill
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1024px) 50vw,
                           25vw"
                    className="object-cover"
                    priority={index === 0}   // 🔥 LCP FIX
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-grow">
                  <span className="inline-block text-xs text-white bg-[#3D365C] px-2 py-1 rounded-md mb-2 w-fit">
                    {item?.category?.name}
                  </span>

                  <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                    {item?.title}
                  </h3>

                  <button className="mt-auto text-sm px-4 py-2 bg-[#162d5e] hover:bg-[#162d5ef8] text-white rounded-full transition">
                    Read More
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HomeBlog;
