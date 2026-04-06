import React from "react";
import JobCards from "../home/JobCards";
import JobCarousel2 from "../technology/JobCarousel2";
import Link from "next/link";
import Image from "next/image";
import base_url from "../helper/helper";

const RecommendedJob = ({ recommedned, category, releatedBlogs }) => {
  return (
    <>
      {recommedned && recommedned.length > 0 && (
        <>
          <div className="w-full mx-auto min-h-[420px]">
            {recommedned && (
              <JobCarousel2
                jobs={recommedned} 
                title="Releated Jobs"
                color="blue"
              />
            )}
          </div>
        </>
      )}

      {releatedBlogs && releatedBlogs.length > 0 && (
        <>
          <div className="py-4 lg:py-10 px-4 lg:px-6">
            <h3 className="text-center text-2xl font-bold mb-8 text-white max-w-[98%] bg-violet-500 mx-auto rounded-full">
              Releated Blogs on {category}
            </h3>

            <div className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {releatedBlogs?.map((item, index) => (
                <Link
                  key={item?._id || item?.slug}
                  href={`/${item?.category?.slug}/articles/${item?.slug}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] overflow-hidden flex flex-col"
                >
                  <div className="relative w-full h-[180px]">
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

                    <p className="text-md font-semibold text-gray-800 line-clamp-2">
                      {item?.title}
                    </p>

                    <button className="mt-auto text-sm px-4 py-2 bg-[#162d5e] text-white rounded-full cursor-pointer">
                      Read More
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
      {/* {recommedned && recommedned.length > 0 && (
        <>
          <div className="max-w-5xl pl-10 mx-auto p-4">
            <h2 className="text-2xl font-bold mb-3">Releated  {category} </h2>
            <ul className="list-disc  space-y-2">
              {recommedned?.map((job) => (
                <li key={job._id}>
                  <a
                    href={`/${job.category?.slug}/${job.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {job.postName}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </>
      )} */}

      {/* {releatedBlogs && releatedBlogs.length > 0 && (
        <>
          <div className="max-w-5xl pl-10 mx-auto p-4">
            <h2 className="text-2xl font-bold mb-3">Releated Blogs on {category} </h2>
            <ul className="list-disc  space-y-2">
              {releatedBlogs?.map((blog) => (
                <li key={blog._id}>
                  <a
                    href={`/${blog.category?.slug}/articles/${blog.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {blog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )} */}
    </>
  );
};

export default RecommendedJob;
