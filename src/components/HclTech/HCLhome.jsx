import React from "react";
import Mahindra from "./Mahindra";
import AnimatedLink from "./AnimatedLink";
import BlogTech from "./BlogTech";
import HclPopup from "./HclPopup";

const HCLlhome = () => {
  return (
    <div className="mx-auto px-4 py-4 flex flex-col md:flex-row justify-center ">
      <div className="w-full md:pt-[200px] md:w-[20%] order-1 md:order-1 bg-gray-100 flex flex-col gap-8 ">
       <AnimatedLink text={"Calling Class 12th students for full time jobs at HCL Tech "} link="https://zazzle83.gotrackier.com/click?campaign_id=759&pub_id=93&url_id=1" apply={"Apply Now"}/>
      
      </div>

      <div className="w-full md:w-[55%] lg:w-[70%] order-2 md:order-2 p-4 bg-gray-100">
        <HclPopup/>
        <Mahindra />
      </div>
  
      <div className="w-full md:pt-[200px] md:w-[20%] order-3 flex flex-col bg-gray-100 gap-8">
        <AnimatedLink text={"Calling Class 12th students for full time jobs at HCL Tech"} link="https://zazzle83.gotrackier.com/click?campaign_id=759&pub_id=93&url_id=1" apply={"Apply Now"}/> 
      </div>


    </div> 
  );
};

export default HCLlhome;
