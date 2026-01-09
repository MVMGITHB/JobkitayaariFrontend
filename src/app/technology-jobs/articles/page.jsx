import { Blog } from "@/components/blog/Blog"
import base_url from "@/components/helper/helper";
import axios from "axios";


export const metadata = {
  title: 'Technology Jobs Articles & Career Guides – Job Ki Tyaari',
  description: 'Technology jobs articles covering IT careers, skills, exam updates and recruitment news on Job Ki Tyaari.',
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
          <Blog filters={"technology-jobs"} />
    </div>
  );
};


export default page
