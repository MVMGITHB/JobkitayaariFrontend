import base_url from "@/components/helper/helper";
import JobDescription from "@/components/jobDescription/JobDescription";

import axios from "axios";

export async function generateMetadata({ params }) {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/job/getJobBySlug/${slugName}`
    );
    const post = response.data;
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
      title: `${post.mtitle} `,
      description: post.mdescription,
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

async function page({ params }) {
  const { slugName } = await params;
  return (
    <>
      <JobDescription slug={slugName} />
    </>
  );
}

export default page;
