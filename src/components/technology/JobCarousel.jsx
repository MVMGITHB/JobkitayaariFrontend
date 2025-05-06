"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import JobCard from "./JobCard";
import { useRef, useState } from "react";

const JobCarousel = ({ jobs, title, color, data }) => {
  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const sliderRef = useRef(null);

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
    <div className="relative flex justify-center py-4">
      <div className="w-[83%] lg:w-[95%] relative">
        <h2 className={`text-2xl font-bold text-center mb-2 rounded-2xl bg-blue-400 text-white`}>
          {title}
        </h2>

        {data && (
          <div className="w-[60%] mx-auto flex flex-col">
            {(showAll ? data : [data[0]]).map((item, index) => (
              <p key={index} className="text-xl text-black mb-4 text-justify">
                {item.title}
              </p>
            ))}
            <button onClick={handleToggle} className="text-blue-600 underline mt-2">
              {showAll ? "Read Less" : "Read More"}
            </button>
          </div>
        )}

        {/* Carousel or Static Job Card */}
        {jobs.length <= 1 ? (
          <div className="flex justify-center mt-6">
            {jobs.map((job, index) => (
              <div key={index} className="px-2 w-full max-w-md">
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
          <>
            {/* Carousel Controls */}
            <button
              className="cursor-pointer absolute -left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              className="cursor-pointer absolute -right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <FaChevronRight size={20} />
            </button>

            <Slider ref={sliderRef} {...settings}>
              {jobs.map((job, index) => (
                <div key={index} className="px-2">
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
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default JobCarousel;
