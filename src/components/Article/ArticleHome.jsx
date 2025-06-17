"use client";
import Link from "next/link";
import { RightSideBar } from "./RightSideBar";
import base_url from "../helper/helper";
import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "../home/Popup";
import Image from "next/image";

export const ArticleHome = ({ data }) => {
  const date = new Date(data?.createdAt);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  const formattedDate = `${day}/${month}/${year}`;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Article",
    headline: data?.title,
    image: {
      "@type": "ImageObject",
      url: `${base_url}${data?.image}`,
      width: 800,
      height: 450,
    },
    author: {
      "@type": "Person",
      name: data?.author?.name,
    },
    publisher: {
      "@type": "Organization",
      name: data?.author?.name,
      logo: {
        "@type": "ImageObject",
        url: "publisherLogo",
        width: "publisherLogoWidth",
        height: "publisherLogoHeight",
      },
    },
    datePublished: formattedDate,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data?.faqs?.map((faq) => ({
      "@type": "Question",
      name: faq.ques,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.ans,
      },
    })),
  };

  const authorSchema = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: `${data?.author?.name}`,

    url: "https://example.com/about",

    image: `${base_url}${data?.author?.image}`,

    sameAs: ["https://twitter.com/johndoe", "https://linkedin.com/in/johndoe"],

    jobTitle: "Content Writer",

    worksFor: {
      "@type": "Organization",

      name: "MVM Business Service",
    },
  };

  const [allCards, setAllCards] = useState([]);
  const [randomCards, setRandomCards] = useState([]);
  useEffect(() => {
    axios
      .get(`${base_url}/api/blog/getAllBlog`)
      .then((res) => {
        const data = res.data;
        setAllCards(data);
        // console.log("conclusion---", data)
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 8);
        setRandomCards(selected);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
        />
      <Popup />
      <div className="mx-auto px-4 py-4 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[15%] order-3 md:order-1 bg-gray-100">
          <RightSideBar />
        </div>

        <div className="w-full md:w-[60%] lg:w-[70%] order-1 md:order-2 shadow-md p-4 bg-gray-50 rounded">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6">
            {data?.title}
          </h1>
          <div className="w-full flex justify-center  overflow-hidden mb-2">
            <Image
              src={`${base_url}${data?.image}`}
              alt="Blog Image"
              width={800}
              height={500}
              className="w-full md:w-[800] h-auto md:h-[400] rounded-md object-cover shadow-2xl"
            />
          </div>

          <div className="text-lm text-gray-600  px-1">
            <p>
              <strong>Author:</strong>
              <Link
                href={`/author/${data?.author?.slug}`}
                className="text-blue-600"
              >
                {data?.author?.name}
              </Link>
            </p>
            <p>
              <strong>Published:</strong>{" "}
              {new Date(data?.author?.createdAt).toLocaleDateString() || "N/A"}
            </p>
            <p>
              <strong>Last Updated:</strong>{" "}
              {new Date(data?.author?.updatedAt).toLocaleDateString() || "N/A"}
            </p>
          </div>

          {data && (
            <>
              <div
                id="article-main"
                dangerouslySetInnerHTML={{ __html: data?.content }}
                className="prose max-w-full mb-8  blog-content"
              />

              {data.faqs && data.faqs.length > 0 && (
                <div className="bg-gray-50 p-6 rounded">
                  <h2 className="text-[27px] font-bold mb-4 text-center">
                    Frequently Asked Questions (FAQs)
                  </h2>
                  {data.faqs.map((faq, index) => (
                    <div key={faq._id || index} className="mb-4">
                      <h3 className="text-[21px] font-semibold mb-2">
                        Q{index + 1}: {faq.ques}
                      </h3>
                      <p className="text-[21px]">
                        <strong>Ans:</strong> {faq.ans}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
            {
          data?.blogContent&&data.blogContent.length>0&&(
           <>
            <h2 className="text-[27px] font-bold mb-4 text-center">Conclusion</h2>
            <p className="text-[21px]">{data?.blogContent}</p>
           </>
          )
        }
        </div>

      

        <div className="w-full md:w-[25%] order-2">
          <div className="sticky top-20">
            <div className="p-2 rounded shadow bg-white">
              <h2 className="text-xl font-bold mb-4">Similar Blogs</h2>
              <div className="flex flex-col">
                {randomCards.map((card, index) => (
                  <Link
                    key={index}
                    href={`/${card?.category?.slug}/articles/${card?.slug}`}
                    className="flex items-center gap-3 p-2 border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition duration-200"
                  >
                    <div className="flex-shrink-0 w-[120px] h-auto relative">
                      <Image
                        src={`${base_url}${card?.image}`}
                        alt={card?.title}
                        className="object-cover rounded"
                        height={50}
                        width={120}
                      />
                    </div>

                    <p className="text-sm font-medium text-gray-800 hover:text-blue-600 line-clamp-2">
                      {card?.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </>
  );
};
