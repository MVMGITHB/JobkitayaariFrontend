import { Blog } from "@/components/blog/Blog";
import base_url from "@/components/helper/helper";
import axios from "axios";

export async function generateMetadata({ params }) {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const post = response?.data;
    if (!post) {
      return {
        title: "Post not found",
        description: "This blog post could not be found.",
        // robots: {
        //   index: false,
        //   follow: false,
        // },
      };
    }

    return {
      title: "Teaching Jobs Articles & Exam Updates – Job Ki Tyaari",
      description: "Teaching jobs articles with exam updates, eligibility details, preparation tips and recruitment news on Job Ki Tyaari.",
      metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
    };
  } catch (error) {
    return {
      title: "Error loading post",
      description: "An error occurred while fetching post data.",
    };
  }
}
const page = async () => {
  return (
    <div>
      <Blog filters={"teaching-jobs"} />
    </div>
  );
};

export default page;
