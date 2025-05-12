import Article from "@/components/Article/Article"
import axios from "axios";

export const metadata = {
  title: 'About Us | Job Ki Tyaari - Your Career Guide',
  description: 'Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },
   
  robots: {
    index: false, // Disables indexing
    follow: false, // Prevents following links
  },

}

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



const page = async ({ params }) => {
  const { slugName } =await params;

  try {
    const response = await axios.get(
      `https://api.jobkityaari.com/api/blog/getOneBlogByslug/${slugName}`
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
