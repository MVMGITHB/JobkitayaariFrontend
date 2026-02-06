"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import base_url from "../helper/helper";

const JobCarousel = dynamic(() => import("./JobCrousel1"), {
  ssr: false,
});

export default function HomeBlogClient({ blog = [], latest = [] }) {
  const hasLatestJobs = latest?.length > 0;

  return (
    <>
      {/* JOB CAROUSEL */}
      <div className="w-full mx-auto min-h-[420px]">
        {hasLatestJobs && (
          <JobCarousel
            jobs={latest}
            title="Latest Government Job Opening 2026 - All Sectors"
            color="blue"
          />
        )}
      </div>

      {/* BLOG */}
      <div className="py-4 lg:py-10 px-4 lg:px-6">
        <h3 className="text-center text-2xl font-bold mb-8 text-white max-w-[98%] bg-violet-500 mx-auto rounded-full">
          Career Guide
        </h3>

        <div className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blog?.map((item, index) => (
            <Link
              key={item?._id || item?.slug}
              href={`/${item?.category?.slug}/articles/${item?.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src={`${base_url}${item?.image}`}
                  alt={item?.title || "Blog Image"}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1024px) 50vw,
                         25vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <span className="inline-block text-xs text-white bg-[#3D365C] px-2 py-1 rounded-md mb-2 w-fit">
                  {item?.category?.name}
                </span>

                <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                  {item?.title}
                </h3>

                <button className="mt-auto text-sm px-4 py-2 bg-[#162d5e] text-white rounded-full">
                  Read More
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}