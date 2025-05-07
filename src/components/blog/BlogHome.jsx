"use client";
import { useEffect, useState } from "react";
import { LeftSifebar } from "./LeftSifebar";
import { RightSide } from "./RightSide";
import Link from "next/link";
import axios from "axios";
import base_url from "../helper/helper";

export const BlogHome = ({ cards }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.jobkityaari.com/api/blog/getAllBlog"
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
      <div className=" w-full md:w-1/5">
        <LeftSifebar />
      </div>

      <div className=" w-full md:w-3/5 shadow-md p-4">
        <div className=" w-full shadow-md  ">
         <div>
          <h3>          Ads
          </h3>
         <img
            src="https://images-static.nykaa.com/uploads/899a63be-fbb2-457a-be3e-c55d02a0fcbb.jpg?tr=cm-pad_resize,w-1200 "
            alt=""
            className="w-full"
          />
         </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {data.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className=" h-[200px]">
                <img
                  src={`${base_url}${card.image}`}
                  alt={`${base_url}${card.title}`}
                  className="w-full h-full object-contain"
                />
                </div>
                
                <div className="p-4 text-center">
                  <h4 className="text-xl font-semibold">
                    <Link
                      href={`/${card?.category?.slug}/articles/${card.slug}`}
                    >
                      {card.title}
                    </Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" w-full md:w-1/5">
        <RightSide />
      </div>
    </div>
  );
};
