import base_url from "@/components/helper/helper";
import JobDescription from "@/components/jobDescription/JobDescription";
import axios from "axios";
import Popup from "@/components/popup/Popup";
// export const metadata = {
//   title: 'About Us | Job Ki Tyaari - Your Career Guide',
//   description: 'Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us',
//   metadataBase: new URL('https://jobkityaari.com'),
//   alternates: {
//     canonical: './',
//   },

//   robots: {
//     index: false, // Disables indexing
//     follow: false, // Prevents following links
//   },

// }

export async function generateMetadata({ params }) {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/job/getJobBySlug/${slugName}`
    );
    const post = response.data;
    console.log(post);
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
      title: `${post.postName} 2026 - Job Ki Tyaari`,
      description: post.mdescription,
      metadataBase: new URL("https://jobkityaari.com"),
      alternates: {
        canonical: "./",
      },
    };
  } catch (error) {
    return {
      title: "Error loading post",
      description: "An error occurred while fetching post data.",
    };
  }
}

async function page({ params }) {
  const { slugName } = await params;
  return (
    <>
      <JobDescription slug={slugName} />
      <Popup/>
    </>
  );
}

export default page;
