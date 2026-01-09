import TechnologyHome5 from "@/components/technology/technologyHome5";



export const metadata = {
    title: 'Latest Government Jobs in India – Job Ki Tyaari',
    description: 'Explore latest government jobs in India. Check eligibility, age limit, salary, selection process and apply online at Job Ki Tyaari.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}
const page = () => {



    const para = [
       {
        id:1,
        title:"Searching for government jobs in India for 2026? We bring you accurate updates on the latest vacancies in central and state government departments."
       },

       {
        id:2,
        title:"Explore job listings in the Indian Army, Navy, Air Force, Agniveer Yojna, BSF, CISF, ITBP, and Coast Guard."
       },

       {
        id:3,
        title:"Interested in police jobs? Find openings in Delhi Police, UP Police, Bihar Police, Karnataka Police, and other state forces."
       },
       {
        id:4,
        title:"You’ll also discover vacancies in sectors like education, public works, and healthcare, including teaching, nursing, and engineering roles. Each listing includes eligibility, salary details, selection process, and direct application links."
       },
       {
        id:5,
        title:"We simplify official announcements to save you time. Whether you're a 10th pass, graduate, or post-graduate, there's something here for you. Start exploring today and apply to the latest government job opportunities across India."
       },
    ]
  


  return (
    <div>


      <TechnologyHome5 title={"Find Latest Government Jobs in India 2026"} para={para} slug={"government-jobs"} />
    </div>
  );
};

export default page;
