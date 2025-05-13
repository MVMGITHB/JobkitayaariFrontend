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
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    return {
      title: `${post.mtitle} https://jobkityaari.com`,
      description: post.mdescription,
       metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
      // openGraph: {
      //   title: post.title,
      //   description: post.excerpt,
      //   robots: {
      //     index: false,
      //     follow: false,
      //   },
      //   images: [
      //     {
      //       url: post.coverImage,
      //       width: 800,
      //       height: 600,
      //     },
      //   ],
      // },
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
