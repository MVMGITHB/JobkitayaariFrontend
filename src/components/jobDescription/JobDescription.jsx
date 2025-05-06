"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import base_url from "../helper/helper";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { TbReportMoney } from "react-icons/tb";

function JobDescription({ slug }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${base_url}/api/job/getJobBySlug/${slug}`
          );
          console.log("data---", response.data)
          setData(response.data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, []);
  if (loading) return null; // or a spinner if you want
  if (error) return <p>Error: {error}</p>;
  
  return (
    <>


      {data?.Jobtype === "goven" ? (
        <div>
          <div className="max-w-[980px] mx-auto mt-4">
            {data?.postName ? (
              <h1 className="text-[18px] text-red-600 mb-2">
                Post Name: <span className="text-black">{data?.postName}</span>
              </h1>
            ) : (
              ""
            )}

            {data?.postDate ? (
              <p className="text-[14px] text-red-600 mb-2">
                Post Date/Update:{" "}
                <span className="text-black">{data?.postDate}</span>
              </p>
            ) : (
              ""
            )}

            {data?.mdescription ? (
              <p className="text-[16px] text-red-600">
                Information:{" "}
                <span className="text-black">{data?.mdescription}</span>
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="max-w-[980px]  m-4 mx-auto border grid grid-row-5 ">
            <div className="text-black border space-y-4">
              {data?.title1 ? (
                <h2 className="text-center text-2xl text-pink-600 font-bold">
                  {data?.title1}
                </h2>
              ) : (
                ""
              )}
              {data?.title2 ? (
                <h2 className="text-center text-2xl text-green-600 font-bold">
                  {data?.title2}
                </h2>
              ) : (
                ""
              )}
              {data?.title3 ? (
                <h2 className="text-center text-2xl text-pink-600 font-bold">
                  {data?.title3}
                </h2>
              ) : (
                ""
              )}
            </div>
            <div className="text-black grid grid-cols-1 md:grid-cols-2 ">
              <div className="border border-black p-4">
                <h2 className="text-center text-[24px] text-green-600 font-bold mb-4">
                  Important Date
                </h2>
                {data?.postDate ? (
                  <p>Complete Form Last Date: {data?.postDate}</p>
                ) : (
                  ""
                )}
                {data?.lastDate ? (
                  <p>Last Date for Apply Online: {data?.lastDate}</p>
                ) : (
                  ""
                )}
                {data?.postDate ? (
                  <p>Complete Form Last Date: {data?.postDate}</p>
                ) : (
                  ""
                )}{" "}
                {data?.correctionDate ? (
                  <p>Correction Date: {data?.correctionDate}</p>
                ) : (
                  ""
                )}
                {data?.adminCardDate ? (
                  <p>Admit Card Available: {data?.adminCardDate}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
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
            <div className="text-black  border">
              <h2 className="text-center font-bold text-[24px] text-green-600">
                {data?.mtitle}
              </h2>
              <div className="p-4 ">
                <p className="font-bold">For All Other Post</p>

                {data?.ageLimit?.map((age, index) => {
                  return <p key={index}>{age}</p>;
                })}
              </div>
            </div>
            {data?.applylink && (
              <div className="text-black grid grid-cols-2">
                <div className="border">
                  <p className="text-center text-2xl font-semibold text-pink-600">
                    Apply Now
                  </p>
                </div>
                <div className="border">
                  <Link href={data?.applylink} passHref>
                    <p className="text-blue-600 text-center cursor-pointer hover:underline">
                      Click Here
                    </p>
                  </Link>
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
                  <Link href={data?.downloadDetailsNotification} passHref>
                    <p className="text-blue-600 text-center cursor-pointer hover:underline">
                      Click Here
                    </p>
                  </Link>
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
                  <Link href={data?.downloadSllabus} passHref>
                    <p className="text-blue-600 text-center cursor-pointer hover:underline">
                      Click Here
                    </p>
                  </Link>
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
                  <Link href={data?.officialwebsitelink} passHref>
                    <p className="text-blue-600 text-center cursor-pointer hover:underline">
                      Click Here
                    </p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="max-w-[980px] mx-auto py-4    ">
            <div className="bg-violet-700 py-4 shadow-lg">
              <h1 className="text-center text-2xl text-white">Job Deatials</h1>
              <p className="text-center text-4xl text-white mt-8">
                {console.log(data?.postName)}
                {data?.postName}
              </p>
              <p className="text-center text-2xl text-white">
                {data?.location}
              </p>

              <div className="flex flex-row justify-evenly items-center mt-8">
                <div className="flex flex-row items-center ">
                  <p className="text-2xl font-bold text-white">
                    <FaLocationDot />
                  </p>
                  <p className="text-xl  text-white">Noida</p>
                </div>
                <div className="flex flex-row items-center ">
                  <p className="text-2xl font-bold text-white">
                    <IoMdTime />
                  </p>
                  <p className="text-xl  text-white">{data?.experience}
                    {console.log(data?.experience)}
                  </p>
                </div>
                <div className="flex flex-row items-center ">
                  <p className="text-2xl font-bold text-white">
                    <TbReportMoney />
                  </p>
                  <p className="text-xl  text-white">{data?.salary}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[980px] mx-auto">
            <div className="bg-azure-100 shadow-lg px-4 py-6">
              <p className="text-gray-900">Requirment : </p>
              <ul className="space-y-2">
                {data?.requirementdata?.map((req, index) => {
                  return (
                    <li
                      key={index}
                      className=" list-disc list-inside text-gray-800"
                    >
                      {req}
                    </li>
                  );
                })}
              </ul>

              <br />
              <p className="text-gray-500">Job Description : </p>
              <ul className="space-y-2">
                {data?.jobDescription?.map((jobdesc, index) => {
                  return (
                    <li
                      key={index}
                      className=" list-disc list-inside text-gray-800"
                    >
                      {jobdesc}
                    </li>
                  );
                })}
              </ul>

              <p className="text-black font-bold mt-4">Skills Required</p>
              <ul className="space-y-2 list-disc list-inside">
                {data?.skill?.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>
              {data?.applylink && (
  <Link href={data.applylink}>
    <button className="text-center cursor-pointer px-4 py-2 bg-violet-700 text-white rounded-md">
      Apply now
    </button>
  </Link>
)}

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JobDescription;
