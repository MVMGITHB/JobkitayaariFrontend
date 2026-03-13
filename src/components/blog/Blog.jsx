"use client";
import React, { useEffect, useState } from "react";
import { BlogHome } from "./BlogHome";
import axios from "axios";
import base_url from "../helper/helper";

export const Blog = ({ filters }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // NEW

  const fetchdata = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${base_url}/api/blog/getAllBlog`);

      if (filters === "carrier") {
        setData(response.data);
      } else {
        const data1 = response?.data?.filter((item) => {
          return item.category.slug === filters;
        });

        setData(data1 || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // stop loading
    }
  };

  useEffect(() => {
    fetchdata();
  }, [filters]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-lg font-semibold">Loading Blogs...</div>
      </div>
    );
  }

  return (
    <div>
      <BlogHome data={data} />
    </div>
  );
};