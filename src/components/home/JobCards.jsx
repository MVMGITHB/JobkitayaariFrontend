import React from "react";
import base_url from "../helper/helper";
import Link from "next/link";

export const JobCards = ({ job }) => {
  // category={job?.category?.slug}
  // slug={job?.slug}
  // title={job?.postName}
  // company={job?.companyName}
  // logo={job?.image}
  // salary={job?.salary}
  // profile={job?.Jobrole}
  // link={job?.applylink}

  return (
    <>
    <div className="bg-white hover:bg-amber-50 shadow-lg rounded-lg p-5 w-full min-h-[360px] flex flex-col">
      <div className="flex flex-col items-center text-center flex-grow">
        <div className="h-[40px]">
          <img
            src={`${base_url}${job?.image}`}
            alt={"comoany"}
            className="w-45  h-14 object-contain"
          />
        </div>

        <h3 className="text-xl h-[80px] text-black font-semibold mt-3 break-words pt-2">
          {job?.postName}
        </h3>
        <p className="text-gray-600">{job?.companyName}</p>
        <p className="text-green-600 font-bold mt-2">{job?.salary}</p>
        <p className="text-blue-500">{job?.Jobrole}</p>
      </div>
      <div className="mt-auto flex justify-center">
        <Link
          href={`${job?.category?.slug}/${job?.slug}`}
          passHref
          legacyBehavior
        >
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer">
            {" "}
            Explore
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};
