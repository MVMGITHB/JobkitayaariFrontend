import TechnologyHome1 from "@/components/technology/TechnologyHome1"; // Capitalized component name

export const metadata = {
    title: 'Latest Technology & IT Jobs in India – Job Ki Tyaari',
    description: 'Browse latest technology and IT jobs in India. Check eligibility, salary details and apply online through Job Ki Tyaari.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
    openGraph: {
    title: "Latest Technology & IT Jobs in India – Job Ki Tyaari",
    description:
      "Browse latest technology and IT jobs in India. Check eligibility, salary details and apply online through Job Ki Tyaari.",
    url: "https://jobkityaari.com/technology-jobs",
    siteName: "Job Ki Tyaari",
    type: "website",
    images: [
      {
        url: "/images/logo3.webp", 
        width: 1200,
        height: 630,
        alt: "Job Ki Tyaari – Latest Jobs in India",
      },
    ],
  },

}
const Page = () => {


  const para = [
    {
     id:1,
     title:"Stay updated on the latest government job opportunities in India for 2026. We provide accurate and timely updates on vacancies across government departments and organizations."
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
      <TechnologyHome1 title={"Latest Technology Jobs in India 2026"}  para={para} slug={"technology-jobs"}/>{" "}
      {/* Capitalized component usage */}
    </div>
  );
};

export default Page;
