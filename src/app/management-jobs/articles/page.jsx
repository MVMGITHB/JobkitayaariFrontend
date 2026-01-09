import { Blog } from "@/components/blog/Blog";
import base_url from "@/components/helper/helper";
import axios from "axios";
export const metadata = {
  title: "Management Jobs Articles & Career Tips – Job Ki Tyaari",
  description:
    "Management jobs articles with career guidance, recruitment updates, eligibility details and preparation tips on Job Ki Tyaari.",
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
      <Blog filters={"management-jobs"} />
    </div>
  );
};

// export default Page;

export default page;
