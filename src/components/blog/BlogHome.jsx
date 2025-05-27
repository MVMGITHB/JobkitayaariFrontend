"use client";
import { LeftSifebar } from "./LeftSifebar";
import { RightSide } from "./RightSide";
import Link from "next/link";
import base_url from "../helper/helper";
import { useState } from "react";
import Image from "next/image";

export const BlogHome = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleCards = data?.slice(0, visibleCount);

  return (
    <div className="mx-auto p-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/5 order-2 md:order-1">
        <LeftSifebar />
      </div>

      <div className="w-full md:w-[85%] shadow-md p-2 order-1 md:order-2">
        <h1 className="text-3xl font-bold text-center mb-2">
          Career Guide for Government & Private Jobs
        </h1>

    <div className="hidden sm:block w-full relative overflow-hidden rounded-lg aspect-[4/1]">
  <img
    src="https://images-static.nykaa.com/uploads/899a63be-fbb2-457a-be3e-c55d02a0fcbb.jpg?tr=cm-pad_resize,w-1200"
    alt="Ad Banner"
    fill
    className="object-cover rounded-lg"
    sizes="(max-width: 768px) 100vw, 1200px"
    priority
  />
</div>



        <div className="p-4 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {visibleCards?.length > 0 ? (
              visibleCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-[3/2] rounded-t-xl overflow-hidden">
                    <Image
                      src={`${base_url}${card?.image}`}
                      alt={card?.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <p className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                      <Link href={`/${card?.category?.slug}/articles/${card?.slug}`}>
                        {card?.title}
                      </Link>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center bg-gray-50 px-4 col-span-full">
                <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-xl border border-dashed border-gray-300 shadow-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mb-4 text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-2xl font-semibold text-violet-700 mb-1">
                    No Blogs Available
                  </p>
                  <p className="text-base text-gray-500">
                    Please check back later for new updates.
                  </p>
                </div>
              </div>
            )}
          </div>

          {visibleCount < data?.length && (
            <div className="text-center mt-6">
              <button
                onClick={loadMore}
                className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full md:w-1/5 order-3">
        <RightSide />
      </div>
    </div>
  );
};
