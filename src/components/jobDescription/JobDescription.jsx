
// import { useState, useEffect } from "react";
import axios from "axios";
import base_url from "../helper/helper";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { TbReportMoney } from "react-icons/tb";
import RecommendedJob from "./RecommendedJob";

function JobDescription({ slug, data , recommednedJobs  , recommendedBlogs}) {


  // console.log("Recommended blogs  in description",recommendedBlogs);

  // console.log("Recommended jobs in description", recommednedJobs);

  

  



 


  return (
    <>
    

      <div className="px-4 lg:px-6">
        {data?.Jobtype === "goven" ? (
          <div>
            <div className="max-w-[980px] mx-auto mt-4">
              {data?.postName && (
                <p className="text-[18px] text-red-600 mb-2">
                  Post Name:{" "}
                  <span className="text-black">
                    {" "}
                    <h2 className="inline">{data?.postName}</h2>
                  </span>
                </p>
              )}
              {data?.postDate && (
                <p className="text-[14px] text-red-600 mb-2">
                  Post Date/Update:{" "}
                  <span className="text-black">{data?.postDate}</span>
                </p>
              )}
              {data?.mdescription && (
                <p className="text-[16px] text-red-600">
                  Information:{" "}
                  <span className="text-black">{data?.mdescription}</span>
                </p>
              )}
            </div>

            <div className="max-w-[980px] m-4 mx-auto border grid grid-row-5">
              {(data?.title1 || data?.title2 || data?.title3) && (
                <div className="text-black border space-y-4">
                  {data?.title1 && (
                    <h2 className="text-center text-2xl text-pink-600 font-bold">
                      {data?.title1}
                    </h2>
                  )}
                  {data?.title2 && (
                    <h2 className="text-center text-2xl text-green-600 font-bold">
                      {data?.title2}
                    </h2>
                  )}
                  {data?.title3 && (
                    <h2 className="text-center text-2xl text-pink-600 font-bold">
                      {data?.title3}
                    </h2>
                  )}
                </div>
              )}

              {(data?.postDate ||
                data?.lastDate ||
                data?.correctionDate ||
                data?.adminCardDate) && (
                <div className="text-black grid grid-cols-1 md:grid-cols-2">
                  <div className="border border-black p-4">
                    <h2 className="text-center text-[24px] text-green-600 font-bold mb-4">
                      Important Date
                    </h2>
                    {data?.postDate && (
                      <p>Complete Form Last Date: {data.postDate}</p>
                    )}
                    {data?.lastDate && (
                      <p>Last Date for Apply Online: {data.lastDate}</p>
                    )}
                    {data?.correctionDate && (
                      <p>Correction Date: {data.correctionDate}</p>
                    )}
                    {data?.adminCardDate && (
                      <p>Admit Card Available: {data.adminCardDate}</p>
                    )}
                  </div>
                </div>
              )}

              {(data?.applicationfeesG_O_EWs ||
                data?.applicationfees_SC_ST) && (
                <div className="text-black grid grid-cols-1 md:grid-cols-2">
                  <div className="border p-4">
                    <h2 className="text-center text-[24px] text-green-600 font-bold mb-4">
                      Application Fee
                    </h2>
                    {data?.applicationfeesG_O_EWs && (
                      <p>General/OBC/EWS: {data.applicationfeesG_O_EWs}</p>
                    )}
                    {data?.applicationfees_SC_ST && (
                      <p>SC/ST: {data.applicationfees_SC_ST}</p>
                    )}
                  </div>
                </div>
              )}

              {((data?.mtitle && data?.ageLimit[0]?.length >= 1) ||
                (data?.ageLimit &&
                  data?.ageLimit?.length > 0 &&
                  data?.ageLimit[0]?.length >= 1)) && (
                <div className="text-black border">
                  {data?.mtitle && (
                    <h1 className="text-center font-bold text-[24px] text-green-600">
                      {data.mtitle}
                    </h1>
                  )}
                  <div className="p-4">
                    <p className="font-bold">For All Other Post</p>
                    {data?.ageLimit?.map((age, index) => (
                      <p key={index}>{age}</p>
                    ))}
                  </div>
                </div>
              )}

              {data?.requirementdata &&
                data?.requirementdata[0]?.length > 1 && (
                  <div className="text-black border">
                    {data?.requirementdata && (
                      <h2 className="text-center font-bold text-[24px] text-green-600">
                        Job Requirement
                      </h2>
                    )}
                    <div className="p-4">
                      {/* <p className="font-bold">For All Other Post</p> */}
                      {data?.requirementdata?.map((age, index) => (
                        <p key={index}>{age}</p>
                      ))}
                    </div>
                  </div>
                )}

              {data?.jobDescription && data?.jobDescription[0]?.length > 1 && (
                <div className="text-black border">
                  {data?.jobDescription && (
                    <h2 className="text-center font-bold text-[24px] text-green-600">
                      Job Description
                    </h2>
                  )}
                  <div className="p-4">
                    {/* <p className="font-bold">For All Other Post</p> */}
                    {data?.jobDescription?.map((age, index) => (
                      <p key={index}>{age}</p>
                    ))}
                  </div>
                </div>
              )}

              {data?.skill && data?.skill[0]?.length > 1 && (
                <div className="text-black border">
                  {data?.skill && (
                    <h2 className="text-center font-bold text-[24px] text-green-600">
                      Required Skill
                    </h2>
                  )}
                  <div className="p-4">
                    {/* <p className="font-bold">For All Other Post</p> */}
                    {data?.skill?.map((age, index) => (
                      <p key={index}>{age}</p>
                    ))}
                  </div>
                </div>
              )}

              {data?.status !== "Active" ? (
                <p className="text-red-600 text-lg font-semibold text-center">
                 We are sorry to inform you that this job has been expired.
                </p>
              ) : (
                <div>
                  {data?.applylink && (
                    <div className="text-black grid grid-cols-2">
                      <div className="border">
                        <p className="text-center text-2xl font-semibold text-pink-600">
                          Apply Now
                        </p>
                      </div>
                      <div className="border">
                        <a
                          href={data?.applylink}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="text-blue-600 text-center cursor-pointer hover:underline block"
                        >
                          Click Here
                        </a>
                      </div>
                    </div>
                  )}

                  {data?.downloadDetailsNotification && (
                    <div className="text-black grid grid-cols-2">
                      <div className="border">
                        <p className="text-center text-2xl font-semibold text-pink-600">
                          Download Detailed Notification
                        </p>
                      </div>
                      <div className="border">
                        <a
                          href={data?.downloadDetailsNotification}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="text-blue-600 text-center cursor-pointer hover:underline block"
                        >
                          Click Here
                        </a>
                      </div>
                    </div>
                  )}

                  {data?.downloadSllabus && (
                    <div className="text-black grid grid-cols-2">
                      <div className="border">
                        <p className="text-center text-2xl font-semibold text-pink-600">
                          Download Syllabus
                        </p>
                      </div>
                      <div className="border">
                        <a
                          href={data?.downloadSllabus}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="text-blue-600 text-center cursor-pointer hover:underline block"
                        >
                          Click Here
                        </a>
                      </div>
                    </div>
                  )}

                  {data?.officialwebsitelink && (
                    <div className="text-black grid grid-cols-2">
                      <div className="border">
                        <p className="text-center text-2xl font-semibold text-pink-600">
                          Official Website
                        </p>
                      </div>
                      <div className="border">
                        <a
                          href={data?.officialwebsitelink}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="text-blue-600 text-center cursor-pointer hover:underline block"
                        >
                          Click Here
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="px-4">
            <div className="max-w-[980px] mx-auto mt-4 lg:mt-6">
              <div className="bg-violet-700 py-6 px-4 rounded-lg shadow-lg">
                <p className="text-center text-2xl lg:text-3xl text-white font-semibold">
                  Job Details
                </p>
                <h1 className="text-center text-3xl lg:text-4xl text-white mt-4 font-bold">
                  {data?.postName}
                </h1>
                {data?.location && (
                  <p className="text-center text-xl text-white mt-2">
                    {data?.location}
                  </p>
                )}

                <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
                  {data?.experience && (
                    <div className="flex items-center gap-2 text-white">
                      <IoMdTime className="text-2xl" />
                      <span className="text-lg">{data.experience} {data?.experienceDuration}</span>
                    </div>
                  )}
                  {data?.salary && (
                    <div className="flex items-center gap-2 text-white">
                      <TbReportMoney className="text-2xl" />
                      <span className="text-lg">{data.salary}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="max-w-[980px] mx-auto bg-gray-100 rounded-lg shadow-lg px-6 py-8">
              {data?.requirementdata?.length > 0 && (
                <>
                  <h2 className="text-xl font-semibold mb-2 text-violet-700">
                    Requirements:
                  </h2>
                  <ul className="space-y-2 list-disc list-inside text-gray-800 mb-6">
                    {data?.requirementdata.map((req, index) =>
                      req?.length > 1 ? <li key={index}>{req}</li> : null,
                    )}
                  </ul>
                </>
              )}

              {data?.jobDescription?.length > 0 && (
                <>
                  <h2 className="text-xl font-semibold mb-2 text-violet-700">
                    Job Description:
                  </h2>
                  <ul className="space-y-2 list-disc list-inside text-gray-800 mb-6">
                    {data?.jobDescription.map((desc, index) =>
                      desc?.length > 1 ? <li key={index}>{desc}</li> : null,
                    )}
                  </ul>
                </>
              )}

              {data?.skill?.length > 0 && (
                <>
                  <h2 className="text-xl font-semibold mb-2 text-violet-700">
                    Skills Required:
                  </h2>
                  <ul className="space-y-2 list-disc list-inside text-gray-800 mb-6">
                    {data?.skill.map((skill, index) =>
                      skill?.length > 1 ? <li key={index}>{skill}</li> : null,
                    )}
                  </ul>
                </>
              )}

              {data?.applylink && (
                <div className="text-center mt-6">
                  {data?.status !== "Active" ? (
                    <p className="text-red-600 text-lg font-semibold">
                       We are sorry to inform you that this job has been expired.
                    </p>
                  ) : (
                    <a
                      href={data?.applylink}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="px-6 py-2 cursor-pointer bg-violet-700 text-white rounded-md hover:bg-violet-800 transition-all duration-200">
                        Apply Now
                      </button>
                    </a>
                  )}
                </div>
              )}

              
            </div>
          </div>
        )}

        
      </div>
      <RecommendedJob recommedned={recommednedJobs} category={ data?.category?.name} releatedBlogs={recommendedBlogs} />
    </>
  );
}

export default JobDescription;
