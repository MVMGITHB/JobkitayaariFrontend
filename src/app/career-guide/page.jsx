
import { Blog } from "@/components/blog/Blog"
import base_url from "@/components/helper/helper";
import axios from "axios";

export const metadata = {
  title: 'Career Guide for Govt & Private Jobs | Tips & Resources',
  description: 'Get expert career tips, job preparation guides, and resources to crack government and private jobs. Start your career journey with confidence!',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },
   openGraph: {
    title: "Career Guide for Govt & Private Jobs | Tips & Resources",
    description:
      "Get expert career tips, job preparation guides, and resources to crack government and private jobs. Start your career journey with confidence!",
    url: "https://jobkityaari.com",
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

  // robots: {
  //   index: false, // Disables indexing
  //   follow: false, // Prevents following links
  // },
}


const page = async () => {
  const response = await axios.get(
    `${base_url}/api/blog/getAllBlog`
  );


  return (
    <div>
      <Blog  filters={"carrier"} />
    </div>
  );
};



export default page
