"use client"

import axios from "axios";
import base_url from "../helper/helper";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryBlog = ({slug}) => {

     const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogRes] = await Promise.all([
          axios.get(`${base_url}/api/blog/getOneBlogCategoryslug/${slug}`),
        ]);
        setBlog(blogRes?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-4 lg:py-10 px-4 lg:px-6">
  <h3 className="text-center text-2xl font-bold mb-8 text-white max-w-[98%] bg-violet-500 mx-auto rounded-full">
    Career Guide
  </h3>


<div className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {blog?.map((item, index) => (
    <Link
      key={index}
      href={`/${item?.category?.slug}/articles/${item?.slug}`}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-62">
        <Image
          src={`${base_url}${item?.image}`}
          alt={item?.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={index < 1} 
          className="object-cover"
        />
      </div>

        <div className="p-4">
        <span className="inline-block text-xs text-white bg-[#3D365C] px-2 py-1 rounded-md mb-2">
          {item?.category?.name}
        </span>
        <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
          {item?.title}
        </h3>
        <button className="mt-3 text-sm px-4 py-2 cursor-pointer bg-[#162d5e] hover:bg-[#162d5ef8] text-white rounded-full transition">
          Read More
        </button>
      </div>
    </Link>
  ))}
</div>


</div>
  )
}

export default CategoryBlog