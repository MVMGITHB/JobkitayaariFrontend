import TechnologyHome1 from "@/components/technology/TechnologyHome1"; // Capitalized component name

export const metadata = {
    title: 'Technology Jobs in India 2025 – IT, Software & Developer Vacancies',
    description: 'Explore the latest IT & software jobs in India. Find openings for software developers, AI engineers, data scientists & more.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}
const Page = () => {


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
      <TechnologyHome1 title={"Latest Technology Jobs in India 2025"}  para={para}/>{" "}
      {/* Capitalized component usage */}
    </div>
  );
};

export default Page;
