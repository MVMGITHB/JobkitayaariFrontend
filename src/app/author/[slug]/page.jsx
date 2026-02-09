// app/author/[slug]/page.jsx

import AuthorPage from "@/components/authorSection/authorProfile";
import base_url from "@/components/helper/helper";

export async function generateMetadata({ params }) {
  const slug = await params.slug;
  const baseUrl = "https://jobkityaari.com";

  try {
    const res = await fetch(`${base_url}/api/auth/singleUserbyslug/${slug}`, {
      next: { revalidate: 60 },
    });

    // if (!res.ok) {
    //   return {
    //     title: "Author Not Found | Jobkityaari",
    //     description: "No author information available at the moment.",
    //     alternates: {
    //       canonical: `${baseUrl}/author/${slug}`,
    //     },
    //   };
    // }

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

    const fullName = `${author?.name}`;
    const bio = `Explore articles and insights by ${fullName} on Jobkityaari.`;

    // const imageUrl = author?.image
    //   ? author?.image.startsWith("http")
    //     ? author?.image
    //     : `${baseUrl}${author?.image}`
    //   : `${baseUrl}/images/default-user.png`;
    // console.log("Author is " , author);

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
      openGraph: {
        title: `${fullName} | Author at jobkityaari`,
        description: bio,
        url: `${baseUrl}/author/${slug}`,
        siteName: "Job Ki Tyaari",
        type: "article",
        images: [
          {
            url: `${base_url}${author?.image}`,
            width: 1200,
            height: 630,
            alt: "Job Ki Tyaari – Latest Jobs in India",
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Author Profile | JobKiTyaari",
      description:
        "Author information could not be loaded due to a network issue.",
      alternates: {
        canonical: `${baseUrl}/author/${slug}`,
      },
    };
  }
}

export default async function Page({ params }) {

   const slug = await params.slug;
   let author  = null;
  try {
    const res = await fetch(`${base_url}/api/auth/singleUserbyslug/${slug}`, {
      next: { revalidate: 60 },
    });

    // if (!res.ok) {
    //   return {
    //     title: "Author Not Found | Jobkityaari",
    //     description: "No author information available at the moment.",
    //     alternates: {
    //       canonical: `${baseUrl}/author/${slug}`,
    //     },
    //   };
    // }

    const data = await res.json();

    // console.log("Author data fetched:", data);
    author = data[0];
  } catch (error) {
    console.error("Error fetching author data:", error);
  }

  return <AuthorPage slug={params?.slug} author={author} />;
}
