"use client";
import { LeftSifebar } from "./LeftSifebar";
import { RightSide } from "./RightSide";
import Link from "next/link";
import base_url from "../helper/helper";

export const BlogHome = ({ data }) => {

  
  return (
    <div className=" mx-auto p-6 flex flex-col md:flex-row ">
      <div className=" w-full md:w-1/5">
        <LeftSifebar />
      </div>

      <div className=" w-full h-full  md:w-[85%] shadow-md p-4">
      <h1 className="text-2xl font-bold text-center mb-2"> Career Guide for Government & Private Jobs</h1>
      <div className="w-full h-[200px] overflow-hidden rounded-lg ">
    <img
      src="https://images-static.nykaa.com/uploads/899a63be-fbb2-457a-be3e-c55d02a0fcbb.jpg?tr=cm-pad_resize,w-1200"
      alt="Ad Banner"
      className="w-full h-full object-contain sm:object-cover"
    />
</div>


        <div className="p-4 bg-gray-50 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

  {data?.length > 0 ? (
  data.map((card, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-[200px] bg-white overflow-hidden flex items-center justify-center rounded-t-xl">
        <img
          src={`${base_url}${card?.image}`}
          alt={card?.title}
          className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
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
<div className="flex items-center  bg-gray-50 px-4">
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
    <p className="text-2xl font-semibold text-violet-700 mb-1">No Blogs Available</p>
    <p className="text-base text-gray-500">Please check back later for new updates.</p>
  </div>
</div>
)}

  </div>
</div>

      </div>

      <div className=" w-full md:w-1/5">
        <RightSide />
      </div>
    </div>
  );
};
