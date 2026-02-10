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

// export async function generateMetadata({ params }) {
//   const { slugName } = await params;

//   // Fetch dynamic data (Example data)
//   const post = {
//     title: "Dynamic Schema in Next.js",
//     description: "Learn how to dynamically generate schema.org JSON-LD in Next.js",
//     slugName,
//     date: new Date().toISOString(),
//   };

//   return {
//     title: post.title,
//     description: post.description,
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       url: `https://yourwebsite.com/blog/${slugName}`,
//       type: "article",
//     },
//     other: {
//       "application/ld+json": JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "BlogPosting",
//         headline: post.title,
//         description: post.description,
//         author: {
//           "@type": "Person",
//           name: "John Doe",
//         },
//         datePublished: post.date,
//         dateModified: post.date,
//         mainEntityOfPage: {
//           "@type": "WebPage",
//           "@id": `https://yourwebsite.com/blog/${slugName}`,
//         },
//       }),
//     },
//   };
// }

// export async function generateStaticParams() {
//     return [{ slugName: "Heading-3" }];
//   }

export async function generateMetadata({ params }) {
  const { slugName } = params;

  try {
    const res = await fetch(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`,
      {
        next: { revalidate: 60 }, // cache allowed
      },
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
        canonical: `/government-jobs/articles/${slugName}`,
      },

      robots: {
        index: true,
        follow: true,
      },

      openGraph: {
        title: post?.mtitle,
        description: post?.mdesc,
        url: `https://jobkityaari.com/government-jobs/articles/${slugName}`,
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




import { notFound } from "next/navigation";
// import Article from "@/components/Article/Article";
// import base_url from "@/components/helper/helper";

const page = async ({ params }) => {
  const { slugName } = params;

  const res = await fetch(
    `${base_url}/api/blog/getOneBlogByslug/${slugName}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound(); // ⭐ THIS FIXES CANONICALISED ISSUE
  }

  const data = await res.json();

  if (!data) {
    notFound(); // also important
  }

  return <Article data={data} />;
};

export default page;

// export default page;
