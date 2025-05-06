import TechnologyHome5 from "@/components/technology/technologyHome5";



export const metadata = {
    title: 'Latest Government Jobs in India  2025– Apply Now for Sarkari Naukri ',
    description: 'Find the latest government job vacancies in India. Apply for Railway, UPSC, Banking, and Defense jobs. Daily updates on Sarkari Naukri.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}
const page = () => {

    const para = [
       {
        id:1,
        title:"Stay updated on the latest government job opportunities in India for 2025. We provide accurate and timely updates on vacancies across government departments and organizations."
       },

       {
        id:2,
        title:"Explore jobs in defense sectors like the Indian Army, Air Force, Navy, Agniveer Yojna, Coast Guard, ITBP, CISF, and BSF. Additionally, find roles in police departments such as Delhi Police, Uttar Pradesh Police, Bihar Police, Karnataka Police, and others."
       },

       {
        id:3,
        title:"We also bring you updates on ministries like Railways, Finance, and Home, along with state government jobs like teaching, PWD, and nursing. Check our job listings for detailed descriptions and direct application links."
       },
    ]
  


  return (
    <div>


      <TechnologyHome5 title={"Find Latest Government Jobs in India 2025"} para={para}/>
    </div>
  );
};

export default page;
