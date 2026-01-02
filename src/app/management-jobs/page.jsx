import TechnologyHome4 from "@/components/technology/technologyHome4";


export const metadata = {
    title: 'Management Jobs in India 2026 – MBA, Marketing, HR & Finance Roles',
    description: 'Browse top management job opportunities in India. Apply for MBA, marketing, HR, finance, and leadership roles today!',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}

const para = [
  {
   id:1,
   title:"Get the latest updates on management job opportunities in India. Management roles form the backbone of organizations, supporting functions like Marketing, Sales, Business Development, Analytics, MIS, HR, Product Management, and more."
  },

  {
   id:2,
   title:"We feature jobs in companies like Airtel, Honda, MRF, Reliance, Adani, Jio, Sun Pharma, Patanjali, Abbott India, Cipla, Aditya Birla Group, Hinduja Group, Apple, Samsung, Bajaj, Hero MotoCorp, and L&T."
  },

  {
   id:3,
   title:"Opportunities are available for freshers and experienced candidates alike. Keep visiting this page for regular updates on management job postings tailored to your career goals."
  },
]

const page = () => {
  return (
    <div>
      <TechnologyHome4 title={"Top Management Job Opportunities in India 2026"} para={para} slug={"management-jobs"}/>
    </div>
  );
};

export default page;
