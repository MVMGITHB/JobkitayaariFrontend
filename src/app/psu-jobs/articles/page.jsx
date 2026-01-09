import { Blog } from "@/components/blog/Blog"


export const metadata = {
  title: 'PSU Jobs Articles & Recruitment Updates – Job Ki Tyaari',
  description: 'PSU jobs articles with recruitment updates, eligibility details, exam news and preparation guidance on Job Ki Tyaari.',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },
   
  // robots: {
  //   index: false, // Disables indexing
  //   follow: false, // Prevents following links
  // },

}
const page = async () => {

  return (
    <div>

         <Blog  filters={"psu-jobs"} />

    </div>
  );
};


export default page
