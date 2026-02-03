"use client";

import { useEffect, useState, useMemo } from "react";
import api from "../lib/api";
import JobCards from "./JobCards";

/* ----------------------------------
   Ultra-light Skeleton
----------------------------------- */
function JobSkeleton({ count = 2 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="h-[260px] rounded-lg bg-gray-100 animate-pulse"
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

  /* ----------------------------------
     CRITICAL APIs – ASAP
  ----------------------------------- */
  useEffect(() => {
    const controller = new AbortController();

    async function loadAboveTheFold() {
      try {
        const [bestRes, featuredRes] = await Promise.all([
          api.get("/api/bestJob/getAllBestJob", { signal: controller.signal }),
          api.get("/api/featueJob/getAllFeatureJob", {
            signal: controller.signal,
          }),
        ]);

        setBestJob(bestRes?.data?.[0]?.jobs || []);
        setFeaturedJob(featuredRes?.data?.[0]?.jobs || []);
      } catch (e) {
        if (e.name !== "CanceledError") console.error(e);
      } finally {
        setLoading(false);
      }
    }

    loadAboveTheFold();

    return () => controller.abort();
  }, []);

  /* ----------------------------------
     NON-CRITICAL – When browser is idle
  ----------------------------------- */
  useEffect(() => {
    if (!("requestIdleCallback" in window)) {
      // fallback
      setTimeout(fetchRecentJobs, 1000);
      return;
    }

    const id = requestIdleCallback(fetchRecentJobs, {
      timeout: 2000,
    });

    function fetchRecentJobs() {
      api
        .get("/api/recentJob/getAllRecentJOb")
        .then((res) => {
          setRecentJob(res?.data?.[0]?.jobs || []);
          setShowRecent(true);
        })
        .catch(console.error);
    }

    return () => cancelIdleCallback(id);
  }, []);

  /* ---------- MOBILE LIMITS ---------- */
  const bestMobile = useMemo(() => bestJob.slice(0, 2), [bestJob]);
  const featuredMobile = useMemo(() => featuredJob.slice(0, 2), [featuredJob]);
  const recentMobile = useMemo(() => recentJob.slice(0, 4), [recentJob]);

  return (
    <section className="max-w-[95%] mx-auto px-4 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* BEST JOBS */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-green-500 text-white rounded-xl py-2 text-center">
            Best Job in 2026
          </h2>

          {loading ? (
            <JobSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bestMobile.map((job, i) => (
                <JobCards
                  key={job?._id || job?.slug}
                  job={job}
                  priority={i === 0}
                />
              ))}
            </div>
          )}
        </div>

        {/* FEATURED JOBS */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-orange-400 text-white rounded-xl py-2 text-center">
            Featured Jobs in 2026
          </h2>

          {loading ? (
            <JobSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredMobile.map((job) => (
                <JobCards key={job?._id || job?.slug} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RECENT JOBS */}
      {showRecent && (
        <div className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-purple-500 text-white rounded-xl py-2 text-center">
            Recent Job Vacancy in 2026
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recentMobile.map((job) => (
              <JobCards key={job?._id || job?.slug} job={job} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default JobSection;
