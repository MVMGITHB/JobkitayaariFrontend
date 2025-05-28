"use client";
import axios from "axios";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import base_url from "../helper/helper";
import Link from "next/link";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get(`${base_url}/api/auth/getAllAdmin`);
      console.log("authors",response.data?.users )
      setAuthors(response.data?.users || []);
    } catch (err) {
      console.error("Error fetching authors:", err);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Authors</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((author) => (
          <div
            key={author._id}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <img
              src={author?.image }
              alt={author?.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 object-cover"
            />
            <h2 className="text-xl font-semibold mt-4 capitalize">
              {author.name}
            </h2>
            <p
              className="text-sm text-gray-600 mt-2"
              dangerouslySetInnerHTML={{ __html: author.shortBio }}
            />
            <div className="flex justify-center gap-3 mt-4">
              {author.socialMedia?.facebook && (
                <a href={author.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook/>
                </a>
              )}
              {author.socialMedia?.linkedin && (
                <a href={author.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
              )}
              {author.socialMedia?.twitter && (
                <a href={author.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                                        <FaTwitter/>

                </a>
              )}
            </div>
            <Link href={`/author/${author.slug}`}>
              <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
