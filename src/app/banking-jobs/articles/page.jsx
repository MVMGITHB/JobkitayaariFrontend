import { Blog } from "@/components/blog/Blog";
import base_url from "@/components/helper/helper";
import axios from "axios";

export const metadata = {
  title: "Banking Jobs Articles, Exams & Updates – Job Ki Tyaari",
  description:
    "Banking jobs articles covering exams, recruitment updates, eligibility details and preparation tips on Job Ki Tyaari.",
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
