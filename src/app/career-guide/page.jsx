
import { Blog } from "@/components/blog/Blog"
import axios from "axios";

export const metadata = {
  title: 'Career Guide for Govt & Private Jobs | Tips & Resources',
  description: 'Get expert career tips, job preparation guides, and resources to crack government and private jobs. Start your career journey with confidence!',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },

  robots: {
    index: false, // Disables indexing
    follow: false, // Prevents following links
  },
}


const page = async () => {
  const response = await axios.get(
    "https://api.jobkityaari.com/api/blog/getAllBlog"
  );


  return (
    <div>
      <Blog data={response?.data} />
    </div>
  );
};

// export default Page;

export default page
