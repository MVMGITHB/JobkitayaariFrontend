"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import JobCard from "./JobCard";
import { useRef, useState } from "react";

const JobCarousel = ({ jobs, title, color, data }) => {
  const [showAll, setShowAll] = useState(false);
  const sliderRef = useRef(null);

  const handleToggle = () => setShowAll((prev) => !prev);

  const settings = {
    dots: false,
    infinite: jobs.length > 1,
    speed: 500,
    slidesToShow: Math.min(jobs.length, 5),
    slidesToScroll: 1,
    autoplay: jobs.length > 1,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(jobs.length, 3),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(jobs.length, 2),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative flex justify-center py-4 overflow-hidden">
      <div className="w-full max-w-[90%]">

        {/* Title */}
        <h2 className={`text-2xl font-bold text-center px-4 lg:px-6 mb-2 rounded-2xl bg-blue-400 text-white`}>
          {title}
        </h2>

        {/* Optional Read More Content */}
        {data && (
          <div className="w-full mx-auto mb-4">
            {(showAll ? data : [data[0]]).map((item, index) => (
              <p key={index} className="text-xl text-black mb-3 text-left">
                {item.title}
              </p>
            ))}
            <button onClick={handleToggle} className="text-blue-600 underline cursor-pointer">
              {showAll ? "Read Less" : "Read More"}
            </button>
          </div>
        )}

        <div className="relative mt-6">
          {jobs.length > 1 && (
            <>
              <button
                className="cursor-pointer absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 z-10"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                className="cursor-pointer absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 z-10"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <FaChevronRight size={20} />
              </button>
            </>
          )}

          {jobs.length <= 1 ? (
            <div className="flex justify-center">
              {jobs.map((job, index) => (
                <div key={index} className="px-2 w-full max-w-xs mx-auto">
                  <JobCard
                    category={job?.category?.slug}
                    slug={job?.slug}
                    title={job?.postName}
                    company={job?.companyName}
                    logo={job?.image}
                    salary={job?.salary}
                    profile={job?.Jobrole}
                    link={job?.applylink}
                  />
                </div>
              ))}
            </div>
          ) : (
            <Slider ref={sliderRef} {...settings}>
              {jobs.map((job, index) => (
                <div key={index} className="px-2">
                  <div className="w-full max-w-xs mx-auto">
                    <JobCard
                      category={job?.category?.slug}
                      slug={job?.slug}
                      title={job?.postName}
                      company={job?.companyName}
                      logo={job?.image}
                      salary={job?.salary}
                      profile={job?.Jobrole}
                      link={job?.applylink}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCarousel;
