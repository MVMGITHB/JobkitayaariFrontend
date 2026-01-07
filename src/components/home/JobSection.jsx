"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import base_url from "../helper/helper";
import JobCards from "./JobCards";

/* ----------------------------------
   Axios instance
----------------------------------- */
const api = axios.create({
  baseURL: base_url,
  timeout: 10000,
});

/* ----------------------------------
   Skeleton Loader
----------------------------------- */
function JobSkeleton({ count = 4 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-5 min-h-[360px] animate-pulse"
        />
      ))}
    </div>
  );
}

const JobSection = () => {
  const [bestJob, setBestJob] = useState([]);
  const [featuredJob, setFeaturedJob] = useState([]);
  const [recentJob, setRecentJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showRecent, setShowRecent] = useState(false); 

  useEffect(() => {
    const controller = new AbortController();

    const fetchJobs = async () => {
      try {
        const [bestRes, featuredRes, recentRes] = await Promise.all([
          api.get("/api/bestJob/getAllBestJob", { signal: controller.signal }),
          api.get("/api/featueJob/getAllFeatureJob", {
            signal: controller.signal,
          }),
          api.get("/api/recentJob/getAllRecentJOb", {
            signal: controller.signal,
          }),
        ]);

        setBestJob(bestRes?.data?.[0]?.jobs || []);
        setFeaturedJob(featuredRes?.data?.[0]?.jobs || []);
        setRecentJob(recentRes?.data?.[0]?.jobs || []);
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error("Job fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();

    // ⏳ Defer recent jobs on mobile
    const timer = setTimeout(() => setShowRecent(true), 1500);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, []);

  /* ---------- MOBILE LIMITS ---------- */
  const bestMobile = useMemo(() => bestJob.slice(0, 2), [bestJob]);
  const featuredMobile = useMemo(
    () => featuredJob.slice(0, 2),
    [featuredJob]
  );
  const recentMobile = useMemo(() => recentJob.slice(0, 4), [recentJob]);

  return (
    <div className="max-w-[95%] mx-auto px-4 pt-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ================= BEST JOBS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-green-500 rounded-2xl text-white text-center">
            Best Job in 2026
          </h2>

          {loading ? (
            <JobSkeleton count={2} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(bestMobile).map((job, i) => (
                <JobCards
                  key={job?._id || job?.slug}
                  job={job}
                  priority={i === 0}
                />
              ))}
            </div>
          )}
        </div>

       
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-orange-400 text-white rounded-2xl text-center">
            Featured Jobs in 2026
          </h2>

          {loading ? (
            <JobSkeleton count={2} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(featuredMobile).map((job) => (
                <JobCards
                  key={job?._id || job?.slug}
                  job={job}
                />
              ))}
            </div>
          )}
        </div>
      </div>

     
      {showRecent && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 bg-purple-500 text-white rounded-2xl text-center">
            Recent Job Vacancy in 2026
          </h2>

          {loading ? (
            <JobSkeleton count={4} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recentMobile.map((job) => (
                <JobCards key={job?._id || job?.slug} job={job} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobSection;
