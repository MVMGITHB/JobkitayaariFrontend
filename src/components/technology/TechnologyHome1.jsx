'use client'
import { useEffect, useState } from "react";
import JobCarousel from "./JobCarousel";
import Head from "next/head";
import axios from "axios";
import base_url from "../helper/helper";

const TechnologyHome1 = ({ title ,para}) => {
  const [showAll, setShowAll] = useState(false);
    const handleToggle = () => {
      setShowAll((prev) => !prev);
    };

    const [softwareJobs , setSoftwareJobs]=useState([])
    const [testingJobs , setTestingJobs]=useState([])
    const [projectManJobs , setProjectManJobs]=useState([])
    const [aimlJobs , setAiMlJobs]=useState([])

   useEffect(()=>{
    const fetchJobs = async () => {
      try {
        const [softwareRes, testingRes, projectManRes, aimlRes] = await Promise.all([
          axios.get(`${base_url}/api/job/getJobbySUbCategory/software-developer-jobs`),
          axios.get(`${base_url}/api/job/getJobbySUbCategory/software-testing-jobs`),
          axios.get(`${base_url}/api/job/getJobbySUbCategory/project-management-jobs`),
          axios.get(`${base_url}/api/job/getJobbySUbCategory/ai-and-ml-jobs`),
        ]);

        setSoftwareJobs(softwareRes.data);
        setTestingJobs(testingRes.data);
        setProjectManJobs(projectManRes.data);
        setAiMlJobs(aimlRes.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
   },[])

  const jobsData = {
    software: [
      {
        title: "Software Development Engineer",
        company: "Adobe",
        logo: "/images/h1.png",
        salary: "Not Disclosed",
        profile: "Full-time",
        // link: "https://www.foundit.in/job/professional-software-development-engineering-fiserv-india-private-limited-noida-34121010?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://www.adobe.com/"
      },
      {
        title: "Senior Software Engineer",
        company: "Insta Safe",
        logo: "/images/h2.png",
        salary: "5-7.5 Lacs P.A",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-software-developer-capline-services-noida-1-to-3-years-210225016648?src=seo_srp&sid=17417682183862455_1&xp=1&px=2",
         link:"https://www.instahyre.com/job-337579-senior-software-engineer-at-instasafe-meerut/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Senior Data Analyst",
        company: "Hitachi",
        logo: "/images/h3.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
      link:"https://careers.hitachi.com/jobs/15816699-senior-data-analyst-irc260044?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Software Developement Engineer",
        company: "Wex",
        logo: "/images/ss1.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-senior-software-developer-vbeyond-corporation-noida-gurugram-delhi-ncr-5-to-9-years-200225008623?src=cluster&sid=17417724579876687_1&xp=6&px=1",
     link:"https://careers.wexinc.com/us/en/job/R17708/Software-Development-Engineering-3?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Software Engineer",
        company: "Siemens",
        logo: "/images/ss2.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-software-developer-fmw-oracle-india-pvt-ltd-noida-0-to-5-years-110325500511?src=seo_srp&sid=17417731225361355&xp=1&px=1",
      link:"https://jobs.sw.siemens.com/noida-ind/software-engineer-c/7E1B6136A39D484DA12E4219D2D209B6/job/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Senior Software Developer",
        company: "Oracle",
        logo: "/images/ss3.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://careers.oracle.com/jobs/#en/sites/jobsearch/jobs/preview/279352/?keyword=Software+Engineer&latitude=28.6040046&location=Noida%2C+UP%2C+India&longitude=77.3597082&mode=geolocation&radius=25&radiusUnit=MI"
      },


      {
        title: "Associate Support Engineer",
        company: "Greenway Health",
        logo: "/images/Ns3.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://recruit.hirebridge.com/v3/careercenter/v2/details.aspx?jid=600975&cid=6709&locvalue=1174&src=linkedin"
      },


      {
        title: "Web Developer Trainee",
        company: "AERIS ",
        logo: "/images/Ns4.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://aeriestechnology.talentrecruit.com/Search/Jobs/?1997"
      },


      {
        title: "Software Engineer",
        company: "Microsoft",
        logo: "/images/Ns5.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://jobs.careers.microsoft.com/global/en/job/1816158"
      },


      {
        title: "API Engineer ",
        company: "Synchrony",
        logo: "/images/Ns6.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://www.synchronycareers.com/job-not-found/?jobid=21420537"
      },


      {
        title: "Firmware Engineer Intern",
        company: "Park+",
        logo: "/images/Ns7.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://docs.google.com/forms/d/e/1FAIpQLSeTxe_vRe7Teo_CIf_KB5cmwewViZkAc6CN0H2E9i9_ni7WVg/viewform"
      },


      {
        title: "Research Intern",
        company: "Ericsson+",
        logo: "/images/Ns8.png",
        salary: "Not Disclosed",
        profile: "Internship",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://jobs.ericsson.com/careers/job/563121763876748?domain=ericsson.com&jobPipeline=LinkedIn"
      },


      {
        title: "IBM Internship",
        company: "IBM",
        logo: "/images/Ns9.png",
        salary: "Not Disclosed",
        profile: "Internship",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://ibmglobal.avature.net/en_US/careers/JobDetail?jobId=25851&source=WEB_Search_INDIA"
      },


      
    {
      title: "Associate Support Engineer",
      company: "Edifecs",
      logo: "/images/Ns1.png",
      salary: "Not Disclosed",
      profile: "Full Time",
      link:"https://jobs.jobvite.com/edifecs/job/oJdEvfwP?jvst=Job%2520Board"
      // link: "https://www.naukri.com/job-listings-finance-manager-gunnebo-entrance-control-gurugram-7-to-12-years-110325014453?src=seo_srp&sid=17418524573953137_1&xp=12&px=2",
    },


    {
      title: "Software Engineer",
      company: "Confluent ",
      logo: "/images/Ns2.png",
      salary: "Not Disclosed",
      profile: "Full Time",
      link:"https://www.amazonconservation.org/take-action/donate/?did=10665&cid=a7f973a0-bdc5-4add-5589-3e85019be1c7&ezoic=ezoic"
      // link: "https://www.naukri.com/job-listings-finance-manager-gunnebo-entrance-control-gurugram-7-to-12-years-110325014453?src=seo_srp&sid=17418524573953137_1&xp=12&px=2",
    },

    ],
    Software_testing: [

      {
        title: "Junior QA & Tech Support Engineer",
        company: "Milliman",
        logo: "/images/Ns10.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://recruiting2.ultipro.com/MIL1017/JobBoard/f54234e9-dfde-b183-fd20-4fbdb19cba7a/OpportunityDetail?opportunityId=c48e0173-0818-4a9f-809b-cb300228d644&source=LinkedIn"
      },
      {
        title: "Software Test Analysis Senior",
        company: "FIS",
        logo: "/images/tt1.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-software-tester-vega6-webware-technologies-noida-1-to-4-years-030325015647?src=seo_srp&sid=1741779746742235_1&xp=4&px=2",
      link:"https://careers.fisglobal.com/us/en/job/FIGLUSJR0291148EXTERNAL/Software-Test-Analyst-Senior-Banking-Payments-domain?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "Python Automation Test Engineer",
        company: "EPAM",
        logo: "/images/tt2.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-software-tester-api-testing-morpheme-webnexus-greater-noida-1-to-6-years-210225920555?src=seo_srp&sid=1741779746742235_1&xp=7&px=2",
      link:"https://www.epam.com/careers/job-listings/job.epamgdo_blt9ac29c51d721080b_en-us_Gurgaon_India.python-automation-test-engineer_gurgaon_india?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Senior Test Analyst",
        company: "Citi",
        logo: "/images/tt4.png",
        salary: "6-8 Lacs P.A",
        profile: "Full time",
        // link: "https://www.glassdoor.co.in/job-listing/software-quality-engineer-2-adobe-JV_IC4477468_KO0,27_KE28,33.htm?jl=1009596913142&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://jobs.citi.com/job/gurgaon/senior-test-analyst-c11/287/72791637584?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Software Testing Engineer",
        company: "Digilantern",
        logo: "/images/tt5.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.glassdoor.co.in/job-listing/software-test-engineer-easemytrip-JV_IC4477468_KO0,22_KE23,33.htm?jl=1009323620412&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://www.digilantern.com/career/software-testing-engineer/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "QA Automation Engineer",
        company: "Iris",
        logo: "/images/tt6.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "/apply/meta",
        link:"https://careers.adobe.com/us/en/job/R153037/Machine-Learning-Engineer-3?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
    ],
    Project_Management: [
      {
        title: "Project Manager Specialist",
        company: "Ge Vernova",
        logo: "/images/h5.png",
        salary: "Not Disclosed",
        profile: "Remote",
        // link: "https://www.naukri.com/job-listings-software-developer-java-python-c-etl-r-systems-international-noida-3-to-8-years-170225014052?src=cluster&sid=17417682183862455_6&xp=2&px=1",
        link:"https://careers.gevernova.com/global/en/job/GVXGVWGLOBALR3787836EXTERNALENGLOBAL/Project-Management-Specialist-PCA?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "Project Manager, IT",
        company: "Gartner",
        logo: "/images/tp1.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-project-manager-cloudsheer-consulting-noida-1-to-3-years-040325012513?src=seo_srp&sid=17417765374131176&xp=1&px=1",
      link:"https://jobs.gartner.com/jobs/job/98315-project-manager-it/"
      },
      {
        title: "Project Manager",
        company: "Amazon",
        logo: "/images/tp2.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-project-manager-toppersedge-com-india-noida-3-to-5-years-270225009962?src=seo_srp&sid=17417765374131176&xp=7&px=1",
      link:"https://www.amazon.jobs/en/jobs/2893905/product-manager-project-tez-amazon-now"
      },
      {
        title: "Project Manager, VP",
        company: "NatWest Group",
        logo: "/images/tp3.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-s-op-project-manager-teamware-solutions-gurugram-10-to-18-years-120325022743?src=seo_srp&sid=17418457896337070&xp=1&px=1",
      link:"https://jobs.natwestgroup.com/jobs/15796882-project-manager-vp?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "S&OP Project Manager",
        company: "McCain",
        logo: "/images/tp4.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-project-manager-gurgaon-bharti-airtel-airtel-gurugram-4-to-9-years-070325023990?src=seo_srp&sid=17418457896337070&xp=8&px=1",
     link:"https://careers.mccain.com/us/en/job/35059/Project-Manager-Business-Transformation"
      },
    ],

    AI_ML: [
      {
        title: "ML Intern",
        company: "Tower Research Capital",
        logo: "/images/Ns11.png",
        salary: "Not Disclosed",
        profile: "Internship",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://boards.greenhouse.io/embed/job_app?token=6114125"
      },


      {
        title: "Head AI/ ML",
        company: "RGF Professional Recruitment",
        logo: "/images/h6.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-project-manager-cloudsheer-consulting-noida-1-to-3-years-040325012513?src=seo_srp&sid=17417765374131176&xp=1&px=1",
      link:"https://www.india.rgf-professional.com/jobs/14624-head-ai-ml-gurgaon-gurugram?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "Senior Machine Learning Engineer",
        company: "Adobe",
        logo: "/images/h1.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-artificial-intelligence-engineer-premo-denim-noida-2-to-5-years-170225014898?src=seo_srp&sid=17417772944678170&xp=4&px=1",
      link:"https://careers.adobe.com/us/en/job/R154624/Senior-Machine-Learning-Engineer-5-5-Firefly?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "AI / ML Engineer",
        company: "Accenture",
        logo: "/images/ta1.png",
        salary: "7.5-12 Lacs P.A",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-project-manager-gurgaon-bharti-airtel-airtel-gurugram-4-to-9-years-070325023990?src=seo_srp&sid=17418457896337070&xp=8&px=1",
     link:"https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-4306245-S1819312_en&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "Artificial Intelligence Engineer",
        company: "BlackRock",
        logo: "/images/ta2.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-4417131-S1719368_en&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://careers.blackrock.com/job/gurgaon/artificial-intelligence-ai-engineer-associate/45831/78989707552?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Senior Machine Learning Engineer",
        company: "Adobe",
        logo: "/images/h1.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-artificial-intelligence-engineer-premo-denim-noida-2-to-5-years-170225014898?src=seo_srp&sid=17417772944678170&xp=4&px=1",
      link:"https://careers.adobe.com/us/en/job/R153037/Machine-Learning-Engineer-3?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
    ],
  };

  const data1 = [
    {
      id:1,
      title:"This page lists all software development jobs in India and abroad. We feature opportunities in companies like Infosys, TCS, Accenture, HCL, Tech Mahindra, Wipro, Microsoft, Amazon, Flipkart, and Google."
    },
    {
      id:2,
      title:"Jobs are available for both freshers and experienced candidates with specializations in AI/ML, SAP, Salesforce, Data Science, DevOps, Cybersecurity, and Cloud Computing."
    },
    {
      id:3,
      title:"Roles for developers with skills like PHP, Node.js, React.js, Express.js, Java, CSS, Ruby, Django, Angular, and HTML are also covered."
    },
    {
      id:4,
      title:"We ensure all the latest software developer jobs are posted here. Visit this page for up-to-date information and take the next step in your tech career."
    }
  ]


  const data2 = [
    {
      id:1,
      title:"This page shares software testing jobs in India and abroad. Software testing is a critical function in the development process, and these roles are highly valued."
    },
    {
      id:2,
      title:"We cover jobs in companies like Infosys, TCS, Accenture, HCL, Tech Mahindra, Wipro, Microsoft, Amazon, Flipkart, and Google."
    },
    {
      id:3,
      title:"Opportunities for freshers and experienced candidates include Manual Testing and Automation Testing roles such as Test Analyst, Test Engineer, Test Manager, and Automation Tester."
    },
    {
      id:4,
      title:"Regular updates on the latest tools and trends in software testing are shared here. Keep visiting to find your ideal testing job."
    }
  ]


  const data3 = [
    {
      id:1,
      title:"This page features project management job openings in India and abroad. These roles are crucial in overseeing software development projects and ensuring timely delivery."
    },
    {
      id:2,
      title:"We list opportunities in companies like Amazon, Google, CISCO, Ericsson, Cognizant, Capgemini, IBM, Oracle, and Salesforce."
    },
    {
      id:3,
      title:"Both freshers and experienced candidates can find jobs like Project Manager, Project Sponsor, Business Analyst, Resource Manager, and Project Coordinator."
    },
    {
      id:4,
      title:"Check this page regularly for updates on project management trends, tools, and the latest job openings to advance your career."
    }
  ]


  const data4 = [
    {
      id:1,
      title:"Explore job openings for Artificial Intelligence (AI) and Machine Learning (ML) roles in India. AI and ML are in high demand, transforming industries through automation."
    },
    {
      id:2,
      title:"We post jobs in top companies like IBM, Amazon, Microsoft, Bosch, Facebook, and Myntra. Popular roles include Data Scientist, Machine Learning Engineer, AI Engineer, AI Product Manager, and AI/ML Consultant."
    },
    {
      id:3,
      title:"Stay updated on the latest trends, tools, and AI & ML job openings by visiting this page regularly. Your next career opportunity is just a click away."
    },
    
  ]

  return (
    <div>
     
      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
      <div className=" w-[90%] mx-auto">
       {(showAll ? para : [para[0]]).map((item, index) => (
        <p key={index} className="text-xl text-black mb-4">
          {item.title}
        </p>
      ))}

      <button
        onClick={handleToggle}
        className="text-blue-600 underline mt-2"
      >
        {showAll ? "Read Less" : "Read More"}
      </button>
    </div>
      {softwareJobs?(<JobCarousel
        jobs={softwareJobs}
        title={"Software Developer Jobs 2025 – Freshers & Experienced"}
        color={"blue"}
        data={data1}
      />):("")
}
       {testingJobs?(<JobCarousel
        jobs={testingJobs}
        title={"Software Testing Jobs (Manual & Automation) 2025"}
        color={"green"}
        data={data2}
      />):("")}

    { projectManJobs? (<JobCarousel
        jobs={projectManJobs}
        title={"Project Management Jobs 2025 – IT & Tech Sector"}
        color={"orange"}
        data={data3}
      />):("")}
{aimlJobs?(<JobCarousel jobs={aimlJobs} title={"AI & ML Jobs in India 2025 – High-Paying Roles"} color={"purple"} data={data4}/>):("")}
    </div>
  );
};

export default TechnologyHome1;