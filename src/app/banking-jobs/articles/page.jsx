import { Blog } from "@/components/blog/Blog";
import base_url from "@/components/helper/helper";
import axios from "axios";

export const metadata = {
  title: "About Us | Job Ki Tyaari - Your Career Guide",
  description:
    "Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./",
  },

  // robots: {
  //   index: false, // Disables indexing
  //   follow: false, // Prevents following links
  // },
};

const page = async () => {
  const response = await axios.get(`${base_url}/api/blog/getAllBlog`);

  return (
    <div>
      <Blog filters={"banking-jobs"} />
    </div>
  );
};

export default page;
