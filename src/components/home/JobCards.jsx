import React, { memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import base_url from "../helper/helper";

const JobCards = ({ job }) => {
  // Memoized values (avoid recalculation)
  const imageSrc = useMemo(() => {
    return job?.image
      ? `${base_url}${job.image}`
      : "/images/company-placeholder.png";
  }, [job?.image]);




  const jobLink = useMemo(() => {
    if (!job?.category?.slug || !job?.slug) return "#";
    return `/${job?.category.slug}/${job.slug}`;
  }, [job?.category?.slug, job?.slug]);

  return (
    <div className="bg-white hover:bg-amber-50 shadow-md hover:shadow-lg transition rounded-lg p-5 w-full min-h-[360px] flex flex-col">
      
      {/* CONTENT */}
      <div className="flex flex-col items-center text-center flex-grow">
        
      
        <div className="relative h-16 w-44">
          <Image
            src={imageSrc}
            alt={job?.companyName || "Company Logo"}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 176px"
            
           
          />
        </div>

        {/* JOB TITLE */}
        <h3 className="text-lg font-semibold text-black mt-4 h-[72px] overflow-hidden">
          {job?.postName}
        </h3>

        {/* COMPANY */}
        <p className="text-gray-600 text-sm mt-1">
          {job?.companyName}
        </p>

        {/* SALARY */}
        {job?.salary && (
          <p className="text-green-600 font-semibold mt-2">
            {job?.salary}
          </p>
        )}

        {/* ROLE */}
        {job?.Jobrole && (
          <p className="text-blue-500 text-sm mt-1">
            {job?.Jobrole}
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="mt-auto flex justify-center pt-4">
        <Link href={jobLink}>
          <button
            aria-label="Explore Job"
            className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default memo(JobCards);
