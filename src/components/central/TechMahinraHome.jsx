import React from 'react'
import Mahindra from './Mahindra'
import AnimatedLink from './AnimatedLink'

 const TechMahinraHome = () => {
  return (
    <div className="mx-auto px-4 py-4 flex flex-col md:flex-row justify-center gap-6">

         <div className="w-full md:pt-[200px] md:w-[20%] order-1 md:order-1 bg-gray-100 flex flex-col gap-8 ">
 <AnimatedLink text={"Get , Free Gift Voucher, Free Lounge Access, Benefits Of 1,21,799 "} link="https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source={3}" apply={"Apply Now"}/>
           
         </div>

         <div className="w-full md:w-[55%] lg:w-[70%] order-2 md:order-2 shadow-md p-4 bg-gray-50 rounded ">
           <Mahindra/>
         </div>

         <div className="w-full md:pt-[200px] md:w-[20%] order-3 flex flex-col bg-gray-100 gap-8" >
            <AnimatedLink text={"Get , Free Gift Voucher, Free Lounge Access, Benefits Of 1,21,799"} link="https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source={3}" apply={"Apply Now"}/>
         </div>
    </div>
  )
}

export default TechMahinraHome