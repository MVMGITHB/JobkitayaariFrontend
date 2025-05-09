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
    <div className=" mx-auto p-6 flex flex-col md:flex-row ">
      <div className=" w-full md:w-1/5">
        <LeftSifebar />
      </div>

      <div className=" w-full h-full  md:w-[85%] shadow-md p-4">
  <div className="w-full h-[200px] overflow-hidden rounded-lg ">
    <img
      src="https://images-static.nykaa.com/uploads/899a63be-fbb2-457a-be3e-c55d02a0fcbb.jpg?tr=cm-pad_resize,w-1200"
      alt="Ad Banner"
      className="w-full h-full object-contain sm:object-cover"
    />
</div>


        <div className="p-4 bg-gray-50 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {data.map((card, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="h-[200px] bg-white overflow-hidden flex items-center justify-center rounded-t-xl">
          <img
            src={`${base_url}${card.image}`}
            alt={card.title}
            className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-4 text-center">
          <h4 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
            <Link href={`/${card?.category?.slug}/articles/${card.slug}`}>
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
