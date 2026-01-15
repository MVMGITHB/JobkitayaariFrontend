// app/author/[slug]/page.jsx

import AuthorPage from "@/components/authorSection/authorProfile";
import base_url from "@/components/helper/helper";

 

 
export async function generateMetadata({ params }) {
  const slug = await params.slug;
  const baseUrl = "https://jobkityaari.com";
 
  try {
    const res = await fetch(`${base_url}/singleUserbyslug/${slug}`, {
      next: { revalidate: 60 },
    });
 
    if (!res.ok) {
      return {
        title: "Author Not Found | Top5Shots",
        description: "No author information available at the moment.",
        alternates: {
          canonical: `${baseUrl}/author/${slug}`,
        },
      };
    }
 
    const data = await res.json();
    const author = data[0];
 
    if (!author) {
      return {
        title: "Author Not Found | Jobkityaari",
        description: "No author information available at the moment.",
        alternates: {
          canonical: `${baseUrl}/author/${slug}`,
        },
      };
    }
 
    const fullName = `${author?.firstName} ${author?.lastName}`;
    const bio =
      author?.shortBio ||
      `Explore articles and insights by ${fullName} on Jobkityaari.`;
    const imageUrl = author?.image
      ? author?.image.startsWith("http")
        ? author?.image
        : `${baseUrl}${author?.image}`
      : `${baseUrl}/images/default-user.png`;
 
    return {
      title: `${fullName} | Author at jobkityaari`,
      description: bio,
      keywords: [
        fullName,
        "Jobkityaari authors",
        "tech blog authors",
        "curated content writer",
        "Jobkityaari 5 articles",
        "insights by " + fullName,
      ],
      alternates: {
        canonical: `${baseUrl}/author/${slug}`,
      },
    };
  } catch (error) {
    return {
      title: "Author Profile | Top5Shots",
      description:
        "Author information could not be loaded due to a network issue.",
      alternates: {
        canonical: `${baseUrl}/author/${slug}`,
      },
    };
  }
}
 
export default function Page({ params }) {
  return <AuthorPage slug={params?.slug} />;
}
 
 