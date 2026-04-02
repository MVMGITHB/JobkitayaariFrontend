import React from "react";

const RecommendedJob = ({ recommedned , category , releatedBlogs }) => {

  return (
    <>
      {recommedned && recommedned.length > 0 && (
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
      )}

      {releatedBlogs && releatedBlogs.length > 0 && (
        <>
          <div className="max-w-5xl pl-10 mx-auto p-4">
            <h2 className="text-2xl font-bold mb-3">Releated Blogs on {category} </h2>
            <ul className="list-disc  space-y-2">
              {releatedBlogs?.map((blog) => (
                <li key={blog._id}>
                  <a
                    href={`/${blog.category?.slug}/${blog.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {blog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default RecommendedJob;
