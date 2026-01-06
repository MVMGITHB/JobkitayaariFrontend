"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import base_url from "../helper/helper";
import JobCards from "./JobCards";

/* ----------------------------------
   Axios instance (reused)
----------------------------------- */
const api = axios.create({
  baseURL: base_url,
  timeout: 10000,
});

/* ----------------------------------
   Skeleton Loader (CLS safe)
----------------------------------- */
function JobSkeleton({ count = 4 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-5 min-h-[360px] animate-pulse"
        >
          <div className="h-16 w-32 bg-gray-200 mx-auto mb-4 rounded" />
          <div className="h-4 bg-gray-200 mb-2 rounded" />
          <div className="h-4 bg-gray-200 w-3/4 mx-auto rounded" />
          <div className="h-8 w-24 bg-gray-200 mx-auto mt-6 rounded-full" />
        </div>
      ))}
    </div>
  );
}

const JobSection = () => {
  const [bestJob, setBestJob] = useState([]);
  const [featuredJob, setFeaturedJob] = useState([]);
  const [recentJob, setRecentJob] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.error("Job fetch error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
    return () => controller.abort();
  }, []);

  const hasBest = useMemo(() => bestJob.length > 0, [bestJob]);
  const hasFeatured = useMemo(() => featuredJob.length > 0, [featuredJob]);
  const hasRecent = useMemo(() => recentJob.length > 0, [recentJob]);

  return (
    <div className="max-w-[95%] mx-auto px-4 pt-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ================= BEST JOBS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-green-500 rounded-2xl text-white text-center">
            Best Job in 2026
          </h2>

          {loading ? (
            <JobSkeleton count={4} />
          ) : (
            hasBest && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bestJob.map((job) => (
                  <JobCards key={job?._id || job?.slug} job={job} />
                ))}
              </div>
            )
          )}
        </div>

        {/* ================= FEATURED JOBS ================= */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-orange-400 text-white rounded-2xl text-center">
            Featured Jobs in 2026
          </h2>

          {loading ? (
            <JobSkeleton count={4} />
          ) : (
            hasFeatured && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredJob.map((job) => (
                  <JobCards key={job?._id || job?.slug} job={job} />
                ))}
              </div>
            )
          )}
        </div>
      </div>

      {/* ================= RECENT JOBS ================= */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 bg-purple-500 text-white rounded-2xl text-center">
          Recent Job Vacancy in 2026
        </h2>

        {loading ? (
          <JobSkeleton count={8} />
        ) : (
          hasRecent && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recentJob.map((job) => (
                <JobCards key={job?._id || job?.slug} job={job} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default JobSection;
