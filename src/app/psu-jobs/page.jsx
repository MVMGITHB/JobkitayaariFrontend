import TechnologyHome3 from "@/components/technology/technologyHome3";


export const metadata = {
    title: 'PSU Jobs in India 2025 – Government Sector Recruitment Updates',
    description: 'Find PSU jobs in India. Apply for ONGC, BHEL, SAIL, NTPC, and other public sector unit vacancies.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}


 const para = [
       {
        id:1,
        title:"With steady careers, competitive pay, and great growth opportunities, Public Sector Undertakings (PSUs) are among India's most sought-after employers. This is the place for you if you want to have a fulfilling career while also helping the country thrive."
       },

       {
        id:2,
        title:"Oil and Natural Gas Corporation (ONGC), Bharat Heavy Electricals Limited (BHEL), Steel Authority of India Limited (SAIL), Indian Oil Corporation Limited (IOCL), NTPC, Coal India, GAIL, Hindustan Aeronautics Limited (HAL), and other organizations have the most recent PSU job vacancies for 2025 listed here."
       },

       {
        id:3,
       title:"For positions such as engineers, management trainees, executives, technicians, finance officers, human resources managers, and more, there are opportunities for recent graduates, seasoned professionals, and technical specialists."
       },
       {
        id:4,
        title:"For frequent updates on PSU employment vacancies that fit your qualifications, keep checking this page."
       },
    ]
const page = () => {
  return (
    <div>
      <TechnologyHome3 title={"Latest PSU Jobs 2025 – ONGC, BHEL, SAIL & More"}  para={para}/>
    </div>
  );
};

export default page;
