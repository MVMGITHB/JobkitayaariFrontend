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
        
        <h1 className='text-[25px] md:text-[35px] lg:text-[48px] text-black font-bold text-left'>HCL Tech's Early Career Program - Apply Online</h1>
        <div class="space-y-2 text-gray-800 text-sm sm:text-base">
  <p><span class="text-[18px] font-semibold">Job Role:</span> IT Jobs </p>
  {/* <p><span class="text-[18px] font-semibold">Experience:</span> 0 – 5 Years</p> */}
  <p><span class="text-[18px] font-semibold">Qualification:</span>Class XII / Knowledege of Mathematics..</p>
  <p><span class="text-[18px] font-semibold">Job Type:</span> Full Time</p>
        <AnimatedLink text={"Calling Class 12th students for full time jobs at HCL Tech"} link="https://zazzle83.gotrackier.com/click?campaign_id=759&pub_id=93&url_id=1" apply={"Apply Now"} />
  {/* <p><span class="text-[18px] font-semibold">Job Location:</span> Noida, Ghaziabad, Delhi / NCR</p> */}
  <p><span class="text-[18px] font-semibold">Salary:</span> Not Disclosed</p>
</div>

    {/* <div>
      <WalkinTable walkinData={walkinData1} />
    </div> */}


<div class=" text-gray-800 space-y-6 text-sm sm:text-base">


  <div>
    <h2 className='font-bold text-black'>HCL Tech's Early Career Program 2025</h2>
    <p>HCLTech’s TechBee Early Career Program is a unique work-integrated learning opportunity for students who have completed Class 12. Through this program, candidates get the chance to start a full-time IT job right after school with a globally recognized tech company — HCLTech — while pursuing a sponsored graduation degree from reputed partner institutions.
</p>
  </div>

  {/* <div>
    <h2 className='font-bold text-black'>Federal Bank Recruitment 2025 Notification PDF Download</h2>
    <p>The Federal Bank Associate Officer Recruitment 2025 Notification PDF has been released on 11-06-2025 at federalbank.co.in. Check the complete job details, vacancy, age limit, application fee, selection process and how to apply from the article.</p>
  </div> */}

   <div>
    <h2 className='font-bold text-black'>Brief Information</h2>
    <p>Selected students undergo paid training and upon successful completion, they are employed with HCLTech in IT roles. This program is ideal for students looking to become financially independent early and build a stable tech career without waiting for college to finish.</p>
  </div>

  <div>
    <h2 class="font-semibold text-lg mb-2">Qualification</h2>
    <ul class="list-disc pl-5 space-y-1">
      {/* <li>Graduates from a University incorporated by an Act of the Central or State legislature in India or other educational institutions established by an Act of Parliament or declared to be Deemed as a University under Section 3 of UGC Act, 1956, or possess an equivalent qualification recognized by the Ministry of HRD, Government of India or approved by AICTE.</li>
      <li>Candidates should have a minimum aggregate of 50% or above throughout Class X, Class XII / Diploma and Graduation.</li> */}
      {/* <li>Provide product/service information and support.</li>
      <li>Maintain detailed records of customer interactions.</li>
      <li>Work effectively in a fast-paced, rotational shift environment.</li>
      <li>Should be able to communicate well in English language.</li> */}

      <li>Basic understanding of computers and IT fundamentals</li>
      <li>Good communication and interpersonal skills</li>
      
      <li>Willingness to learn and adapt to new technologies</li>
      <li>Discipline and commitment to work and study simultaneously
</li>
    </ul>
  </div>


  <div>
    <h2 class="font-semibold text-lg mb-2">Important Instructions for Applicants</h2>
    <ul class="list-disc pl-5 space-y-1">
      <li>Mathematics/Business Mathematics is mandatory with min 60% marks for IT roles only
</li>
      <li>Applicants must be Indian residents who have successfully passed the Class XII board exams in 2024 and 2025</li>
      <li>In case of 2 mark sheets (original and Improvement) being produced by the applicant for the same class i.e. class 12th, all subjects with the latest marks will be considered for calculating percentage or above irrespective of any board recommendations</li>
      <li>TechBee is offered by HCL Training & Staffing Services (HCL TSS) which is a subsidiary of HCLTech and an approved training partner of National Skill Development Corporation and pursuant to that our services are exempted from GST vide notification No.12/2017 -Central Tax (Rate) dt 28-06-2017</li>
      <li>Applicants with 80 percentile & above in IIT/Jee mains (2024 & 2025) will be exempt from HCL CAT. They can directly appear for Versant and interviews. The cut-off marks criteria for class 12th will be applicable for all
</li>
<li>Candidates registering for the TechBee program must provide the correct details at the time of registration. If you can’t complete your registration, please reach out to our team for support. We strongly discourage duplicate registrations using different email IDs and phone numbers. If duplicate registration details are found during any stage of the application process, your candidature is likely to be cancelled</li>
      {/* <li>A customer-centric attitude and willingness to go the extra mile.</li> */}
    </ul>
  </div>


  {/* <div>
    <h2 class="font-semibold text-lg mb-2">Federal Bank Recruitment 2025 Age Limit</h2>
    <ul class="list-disc pl-5 space-y-1">
      <li>Maximum Age Limit: 27 Years</li>
      <li>Should be born on or after 01.06.1998</li>
      <li>Age relaxation is admissible as per rules</li>
      <li>A supportive team culture that values innovation and customer excellence.</li>
    </ul>
  </div> */}


  <div>
    <h2 class="font-semibold text-lg mb-2">Selection Procedure</h2>
    <ul class="list-disc pl-5 space-y-1">
      <li>Registration</li>
      <li>HCL CAT TEST</li>
      <li>HR Interview & Essay Grading</li>
      <li>Versant</li>
      {/* <li>A supportive team culture that values innovation and customer excellence.</li> */}
    </ul>
  </div>

<div className='flex justify-center'>
      <a
        href="https://zazzle83.gotrackier.com/click?campaign_id=759&pub_id=93&url_id=1"
        target="_blank"
        class=" w-[200px] text-center mx-auto inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Apply Now
      </a>
</div>
</div>


{/* <div class=" text-gray-800 space-y-4 text-sm sm:text-base">

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
</div> */}


{/* <div class=" text-gray-800 space-y-4 text-sm sm:text-base">

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
</div> */}

    <div>
      <WalkinTable walkinData={walkinData} />
    </div>

         <AnimatedLink text={"Calling Class 12th students for full time jobs at HCL Tech"} link="https://zazzle83.gotrackier.com/click?campaign_id=759&pub_id=93&url_id=1" apply={"Apply Now"}/>

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
