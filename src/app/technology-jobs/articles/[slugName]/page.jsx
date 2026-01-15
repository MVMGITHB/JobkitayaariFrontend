import Article from "@/components/Article/Article";
import base_url from "@/components/helper/helper";
import axios from "axios";
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
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
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
      title: `${post.mtitle}`,
      description: `${post.mdesc}`,
      metadataBase: new URL("https://jobkityaari.com"),
      alternates: {
        canonical: "./",
      },
      openGraph: {
        title: `${post.mtitle} `,
        description: post.mdesc,
        url: `https://jobkityaari.com/articles/${slugName}`,
        siteName: "Job Ki Tyaari",
        type: "article",
        images: [
          {
            url: `${base_url}${post?.image}`, // ✅ dynamic image
            width: 1200,
            height: 630,
            alt: "Job Ki Tyaari – Latest Jobs in India",
          },
        ],
      },
      // openGraph: {
      //   title: post.title,
      //   description: post.mdescription,
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

const page = async ({ params }) => {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const data1 = response.data;

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
