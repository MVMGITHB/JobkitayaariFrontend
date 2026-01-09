import { Blog } from "@/components/blog/Blog";
import base_url from "@/components/helper/helper";
import axios from "axios";
export const metadata = {
  title: "Government Jobs Articles & Updates – Job Ki Tyaari",
  description:
    "Read government jobs articles, exam updates, preparation tips and recruitment news to stay informed with Job Ki Tyaari.",
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
  return (
    <div>
      <Blog filters={"government-jobs"} />
    </div>
  );
};

export default page;
