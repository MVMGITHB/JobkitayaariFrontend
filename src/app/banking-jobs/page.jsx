import TechnologyHome6 from "@/components/technology/technologyHome6";

export const metadata = {
    title: 'Latest Banking Jobs & Bank Vacancies – Job Ki Tyaari',
    description: 'Get latest banking jobs and bank vacancies in India. Check eligibility, salary, selection process and apply online at Job Ki Tyaari.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}


    const para = [
       {
        id:1,
        title:"Get the latest updates on banking job opportunities in India. Roles within the Banking Industry are crucial for the economy, offering financial stability and avenues for career growth. They are essential for economic progress and innovation."
       },

       {
        id:2,
        title:"We feature jobs in companies like HDFC Bank, Deutsche Bank, Union Bank, Bharuwa Solutions Private Limited and Calyx Interio."
       },

       {
        id:3,
        title:"Opportunities are available for freshers and experienced candidates alike. Keep visiting this page for regular updates on management job postings tailored to your career goals."
       },
     
    ]

const page = () => {
  return (
    <div>
      <TechnologyHome6 title={"Latest Banking Job Openings in India"}  para={para} slug={"banking-jobs"}/>
    </div>
  );
};

export default page;
