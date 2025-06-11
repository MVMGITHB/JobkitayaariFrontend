import React from 'react'

import WalkinTable from './WalkinTable'
import WakinHome from './WakinHome'
import Link from 'next/link'
import AnimatedLink from './AnimatedLink'
import BlogTech from './BlogTech'

import HomeBlog from '../home/HomeBlog'

 const Mahindra = () => {


const walkinData = [
{ company: " UPSSSC", date: "14th May 2025", link: "https://jobkityaari.com/government-jobs/upssc-preliminary-examination-test(pet)-2025" },
{ company: "UPSC Recruitment", date: "31st May 2025", link: "https://jobkityaari.com/government-jobs/upsc-recruitment-2025" },
{ company: " UPSC", date: "29th April 2025", link: "https://jobkityaari.com/government-jobs/system-analystsssistant-engineer" },
{ company: " UPSC", date: "31 May 2025", link: "https://jobkityaari.com/government-jobs/upsc-recruitment-2025" },
{ company: " Indian Navy", date: "26th May 2025", link: "https://jobkityaari.com/government-jobs/indian-navy-recruitment" },
{ company: "NMDC", date: "25th May 2025", link: "https://jobkityaari.com/government-jobs/nmdc-feild-assistant-job" },
{ company: "ISRO", date: "27th May 2025", link: "https://jobkityaari.com/government-jobs/scientist-vacancy-atisro" },
{ company: "niacl", date: "23rd May 2025", link: "https://jobkityaari.com/government-jobs/apprentice-vacancy-at-niacl" },
{ company: " AFCAT", date: "2nd June 2025", link: "https://jobkityaari.com/government-jobs/afcat-recruitment-2025" },
{ company: "SSC ", date: "3rd June 2025", link: "https://jobkityaari.com/government-jobs/ssc-selection-posts" },
{ company: "IOCL ", date: "6th June 2025", link: "https://jobkityaari.com/psu-jobs/iocl-apprentice-recruitment-2025" },
{ company: "Survey Sparrow", date: "16th June 2025", link: "https://jobkityaari.com/technology-jobs/surveysparrow-front-end-developer-recruitment-2025" },
{ company: "Atlas systems ", date: "17th June 2025", link: "https://jobkityaari.com/technology-jobs/atlas-systems-software-project-managers-recruitment" },
{ company: "Emerson ", date: "6th June 2025", link: "https://jobkityaari.com/technology-jobs/emerson-trainee-engineer-recruitment-2025" },
 
{ company: "sushima pharmaceuticals", date: "20th June 2025", link: "https://jobkityaari.com/management-jobs/sushima-pharmaceuticals-assistant-product-manager-recruitment" },
{ company: "tradologie.com ", date: "1st June 2025", link: "https://jobkityaari.com/management-jobs/tradologie.com-assistant-manager-recruitment" },
{ company: "kalpana traders", date: "2nd June 2025", link: "https://jobkityaari.com/management-jobs/kalpana-traders-business-development-manager-recruitment" },
{ company: "Archizi ", date: "3rd June 2025", link: "https://jobkityaari.com/management-jobs/archizi-sales-manager-recruitment" },
];
 

const walkinData1 = [
  { company: "Cognizant)", date: "15th June 2025", link: "https://jobkityaari.com/technology-jobs/cognizant-analyst-trainee-recruitment" },
  { company: "HIndian Navy", date: "26th may 2025", link: "https://jobkityaari.com/government-jobs/indian-navy-recruitment" },
  { company: "UPSC", date: "31th May 2025", link: "https://jobkityaari.com/government-jobs/upsc-recruitment-2025" },
  { company: "NIACL", date: "23rd May 2025", link: "https://jobkityaari.com/government-jobs/apprentice-vacancy-at-niacl" },
  { company: "NMDC", date: "15th May 2025", link: "https://jobkityaari.com/government-jobs/nmdc-feild-assistant-job" },
  { company: "Bharuwa Solutions Pvt Ltd", date: "11th June 2025", link: "https://jobkityaari.com/banking-jobs/bharuwa-solutions-cbs-recruitment" },
  { company: "IOCL", date: "10th June 2025", link: "https://jobkityaari.com/psu-jobs/iocl-apprentice-recruitment-2025" },
  { company: "BEL", date: "8th June 2025", link: "https://jobkityaari.com/psu-jobs/junior-assistant-job" },
  
];

  return (
    <div className=' px-4 max-w-[1000px] mx-auto flex flex-col gap-[40px]'>
        
        <h1 className='text-[25px] md:text-[35px] lg:text-[48px] text-black font-bold text-left'>Tech Mahindra Walk-in Drive for Customer Support Associate Positions</h1>
        <div class="space-y-2 text-gray-800 text-sm sm:text-base">
  <p><span class="text-[18px] font-semibold">Job Role:</span> Customer Support Associate</p>
  <p><span class="text-[18px] font-semibold">Experience:</span> 0 – 5 Years</p>
  <p><span class="text-[18px] font-semibold">Qualification:</span> 12th, Any Graduate</p>
  <p><span class="text-[18px] font-semibold">Job Type:</span> Full Time</p>
    <AnimatedLink text={"Get Assured Rs.20 Lakh Per Annum Package In AI, Apply For This Now"} link="http://www.intellectmedia.net/trk/click.asp?cid=3109&pid=661&did=23428&code=552"/>
  <p><span class="text-[18px] font-semibold">Job Location:</span> Noida, Ghaziabad, Delhi / NCR</p>
  <p><span class="text-[18px] font-semibold">Salary:</span> Rs.2,00,000/- to Rs.3,50,000/-</p>
</div>

    <div>
      <WalkinTable walkinData={walkinData1} />
    </div>


<div class=" text-gray-800 space-y-6 text-sm sm:text-base">

  <div>
    <h2 class="font-semibold text-lg mb-2">Job Description:</h2>
    <ul class="list-disc pl-5 space-y-1">
      <li>Handle inbound and outbound customer calls professionally.</li>
      <li>Address and resolve customer queries, issues, and concerns with empathy and accuracy.</li>
      <li>Provide product/service information and support.</li>
      <li>Maintain detailed records of customer interactions.</li>
      <li>Work effectively in a fast-paced, rotational shift environment.</li>
      <li>Should be able to communicate well in English language.</li>
    </ul>
  </div>


  <div>
    <h2 class="font-semibold text-lg mb-2">Preferred Candidate Profile:</h2>
    <ul class="list-disc pl-5 space-y-1">
      <li>Excellent verbal communication skills in English (additional languages are a plus).</li>
      <li>Strong problem-solving and active listening skills.</li>
      <li>Ability to work flexible shifts.</li>
      <li>A customer-centric attitude and willingness to go the extra mile.</li>
    </ul>
  </div>


  <div>
    <h2 class="font-semibold text-lg mb-2">Perks and Benefits:</h2>
    <ul class="list-disc pl-5 space-y-1">
      <li>Opportunity to work in a dynamic, technology-driven environment.</li>
      <li>One side cab facility in odd hour shifts.</li>
      <li>Professional growth and learning opportunities.</li>
      <li>A supportive team culture that values innovation and customer excellence.</li>
    </ul>
  </div>
</div>


<div class=" text-gray-800 space-y-4 text-sm sm:text-base">

  <h2 class="font-semibold text-lg">How to Apply?</h2>


  <p>
    Interested candidates can drop their updated <span class="font-semibold">Resume</span> on the below-mentioned email ID or can directly walk in at the address given below:
  </p>


  <div>
    <h3 class="font-semibold mb-2">Contact Persons:</h3>
    <ul class="list-disc pl-5 space-y-1">
      <li><span class="font-semibold">Anupam Pandey</span> @ 7011087542</li>
      <li><span class="font-semibold">Daksh Malik</span> – 9958210124</li>
      <li><span class="font-semibold">Diya Rawat</span> – 8448603147</li>
      <li><span class="font-semibold">Ankit Saxena</span> – 9718316448 <span class="italic">(Available on WhatsApp also)</span></li>
    </ul>
  </div>
</div>


<div class=" text-gray-800 space-y-4 text-sm sm:text-base">

  <h2 class="font-semibold text-lg">Walk-in Details:</h2>


  <ul class="list-none space-y-1 pl-1">
    <li><span class="font-semibold">Walk-in Date:</span> 28th May to 5th June 2025</li>
    <li><span class="font-semibold">Time:</span> 10.00 AM – 4.00 PM</li>
  </ul>

  <h3 class="font-semibold text-lg">Venue Details:</h3>


  <div class="pl-1 space-y-1">
    <p>A6 Sector 64 Noida,</p>
    <p>Tech Mahindra, Walk-in drives for customer support</p>
    <p>Opposite Sahara Chowk</p>
    <p>(Nearest Metro Sec – 62)</p>
  </div>
</div>

    <div>
      <WalkinTable walkinData={walkinData} />
    </div>

         <AnimatedLink text={"Get Assured Rs.20 Lakh Per Annum Package In AI, Apply For This Now"} link="http://www.intellectmedia.net/trk/click.asp?cid=3109&pid=661&did=23428&code=552"/>

 <div>
      <WakinHome />
    </div>


<div>
    <BlogTech/>
</div>




        </div>
  )
}

export default Mahindra
