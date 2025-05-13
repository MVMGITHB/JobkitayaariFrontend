import TechnologyHome2 from "@/components/technology/technologyHome2";

export const metadata = {
    title: 'Teaching Jobs in India 2025 – Apply for Govt & Private School Jobs',
    description: 'Looking for teaching jobs in India? Find vacancies in government & private schools, universities & coaching institutes.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}


const para = [
  {
   id:1,
   title:"Teaching is a great profession that helps society develop and molds the brains of future generations. This is the place for you if you have a strong desire to inspire students and share your knowledge. We post the latest teaching jobs at specialized educational institutions as well as in schools, colleges, and universities. There are opportunities in a variety of subjects, including computer science, mathematics, science, English, social studies, physical education, and more."
  },

  {
   id:2,
   title:"Explore jobs in prestigious organizations such as Christ University, Amity University, Delhi Public Schools, DAV Schools, Kendriya Vidyalayas, IITs, NITs, and top schools. There are openings for recent graduates, seasoned teachers, and even ambitious educators hoping to have a significant influence."
  },

  {
   id:3,
   title:"For frequent updates on teaching positions that fit your academic interests, keep checking this website."
  },
]


const page = () => {
  return (
    <div>
      <TechnologyHome2 title="Find Your Next Govt & Private Teaching Job in India 2025" para={para} />
    </div>
  );
};

export default page;
