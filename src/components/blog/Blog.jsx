// "use client";
// import React, { useEffect, useState } from "react";
// import { BlogHome } from "./BlogHome";
// import axios from "axios";
// import base_url from "../helper/helper";

// export const Blog = ({ filters }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true); // NEW

//   const fetchdata = async () => {
//     try {
//       setLoading(true);

//       const response = await axios.get(`${base_url}/api/blog/getAllBlog`);

//       if (filters === "carrier") {
//         setData(response.data);
//       } else {
//         const data1 = response?.data?.filter((item) => {
//           return item.category.slug === filters;
//         });

//         setData(data1 || []);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false); // stop loading
//     }
//   };

//   useEffect(() => {
//     fetchdata();
//   }, [filters]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-20">
//         <div className="text-lg font-semibold">Loading Blogs...</div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <BlogHome data={data} />
//     </div>
//   );
// };


"use client";
import React, { useEffect, useState } from "react";
import { BlogHome } from "./BlogHome";
import axios from "axios";
import base_url from "../helper/helper";

export const Blog = ({ filters }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchBlogs = async (pageNum = 1, isLoadMore = false) => {
    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      // Request 10 items per page from backend
      const response = await axios.get(`${base_url}/api/blog/getFilterdAllBlogs?page=${pageNum}&limit=6`);
      
      const responseData = response.data.data || response.data;
      const serverHasMore = response.data.hasMore !== undefined ? response.data.hasMore : responseData.length === 6;

      // Filter by category slug if filters prop is provided and not "carrier"
      let filteredData = responseData;
      if (filters && filters !== "carrier") {
        filteredData = responseData.filter((item) => item?.category?.slug === filters);
      }

      if (isLoadMore) {
        setData((prev) => [...prev, ...filteredData]);
      } else {
        setData(filteredData);
      }

      setHasMore(serverHasMore);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Reset & fetch when filter changes
  useEffect(() => {
    setPage(1);
    fetchBlogs(1, false);
  }, [filters]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchBlogs(nextPage, true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-lg font-semibold text-gray-600">Loading Blogs...</div>
      </div>
    );
  }

  return (
    <div>
      <BlogHome 
        data={data} 
        onLoadMore={handleLoadMore} 
        hasMore={hasMore} 
        loadingMore={loadingMore} 
      />
    </div>
  );
};