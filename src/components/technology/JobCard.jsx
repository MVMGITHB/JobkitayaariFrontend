import React from "react";
import Link from "next/link";
import base_url from "../helper/helper";
import Image from "next/image";
const JobCard = ({
  title,
  company,
  logo,
  salary,
  profile,
  link,
  category,
  slug,
}) => {
   
  
  return (
    <div className="bg-white hover:bg-amber-50 shadow-lg rounded-lg p-5 w-full min-h-[380px] flex flex-col">
      <div className="flex flex-col items-center text-center flex-grow">

<div className="relative w-full h-14">
  {logo ? (
    <Image
      src={`${base_url}${logo}`}
      alt={company}
      fill
      className="object-contain"
    />
  ) : (
    ""
  )}
</div>


        <h3 className="text-xl h-[90px] pt-2 text-black font-semibold mt-3 break-words">
          {title}
        </h3>
        <p className="text-gray-600 h-[40px]">{company}</p>
        <p className="text-green-600 font-bold mt-2">{salary}</p>
        <p className="text-blue-500">{profile}</p>
      </div>
      <div className="mt-auto flex justify-center">
        <Link href={`/${category}/${slug}`} scroll={true}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer">
            {" "}
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
