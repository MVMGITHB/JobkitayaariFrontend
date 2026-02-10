import Article from "@/components/Article/Article";
import base_url from "@/components/helper/helper";
import axios from "axios";



export async function generateMetadata({ params }) {
  const { slugName } = params;

  try {
    const res = await fetch(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      return {
        title: "Post not found",
        description: "This blog post could not be found.",
      };
    }

    const post = await res.json();

    return {
      title: post?.mtitle,
      description: post?.mdesc,

      metadataBase: new URL("https://jobkityaari.com"),

      alternates: {
        canonical: `/teaching-jobs/articles/${slugName}`,
      },

      robots: {
        index: true,
        follow: true,
      },

      openGraph: {
        title: post?.mtitle,
        description: post?.mdesc,
        url: `https://jobkityaari.com/teaching-jobs/articles/${slugName}`,
        siteName: "Job Ki Tyaari",
        type: "article",
        images: [
          {
            url: `${base_url}${post?.image}`,
            width: 1200,
            height: 630,
            alt: post?.mtitle,
          },
        ],
      },
    };
  } catch {
    return {
      title: "Error loading post",
      description: "An error occurred while fetching post data.",
    };
  }
}
const page = async ({ params }) => {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const data1 = response?.data;

    return (
      <div>
        <Article data={data1} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Failed to load article.</div>;
  }
};

export default page;
