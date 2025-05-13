import { SideBar } from "./SideBar";
import { RightSideBar } from "./RightSideBar";
import base_url from "../helper/helper";

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
    mainEntity: [
      {
        "@type": "Question",
        name: data?.faqs[0]?.ques,
        acceptedAnswer: {
          "@type": "Answer",
          text: data?.faqs[0]?.ans,
        },
      },
      {
        "@type": "Question",
        name: data?.faqs[1]?.ques,
        acceptedAnswer: {
          "@type": "Answer",
          text: data?.faqs[1]?.ans,
        },
      },
      {
        "@type": "Question",
        name: data?.faqs[2]?.ques,
        acceptedAnswer: {
          "@type": "Answer",
          text: data?.faqs[2]?.ans,
        },
      },
      {
        "@type": "Question",
        name: data?.faqs[3]?.ques,
        acceptedAnswer: {
          "@type": "Answer",
          text: data?.faqs[3]?.ans,
        },
      },
      {
        "@type": "Question",
        name: data?.faqs[4]?.ques,
        acceptedAnswer: {
          "@type": "Answer",
          text: data?.faqs[4]?.ans,
        },
      },
    ],
  };



  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

<div className="mx-auto p-6 flex flex-col md:flex-row">
  <div className="w-full md:w-[20%] order-2 md:order-1">
    <SideBar />
  </div>

  <div className="w-full md:w-[85%] shadow-md p-4 order-1 md:order-2">
  <p className="text-xl lg:text-3xl font-bold text-center">{data?.title}</p>
  
  <div className="w-full max-h-[500px] flex items-center justify-center overflow-hidden bg-gray-100">
    <img
      src={`${base_url}${data?.image}`}
      alt="Blog Image"
      className="w-full h-auto object-cover"
    />
  </div>

  {data && (
    <>
      <div
        id="artice-main"
        dangerouslySetInnerHTML={{ __html: data?.content }}
        className="mb-0"
      />

      {data.faqs && data.faqs.length > 0 && (
        <div className="mx-auto p-4 mt-[-20px]">
          <h2 className="text-center text-2xl font-bold mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <div>
            {data.faqs.map((faq, index) => (
              <div key={faq._id || index} className="mb-4">
                <h3 className="text-[18px] font-semibold mb-2">
                  Q{index + 1}: {faq.ques}
                </h3>
                <p className="text-[16px]">
                  <strong>Ans:</strong> {faq.ans}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )}
</div>

 

  <div className="w-full md:w-[20%] order-3">
    <RightSideBar />
  </div>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
  />
</div>

    </>
  );
};
