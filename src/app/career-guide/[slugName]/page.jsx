import Article from "@/components/Article/Article";

export const metadata = {
  title: "About Us | Job Ki Tyaari - Your Career Guide",
  description:
    "Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "About Us | Job Ki Tyaari - Your Career Guide",
    description:
      "Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us",
    url: "https://jobkityaari.com/career-guide",
    siteName: "Job Ki Tyaari",
    type: "article",
    images: [
      {
        url: "/images/logo3.webp", // ✅ dynamic image
        width: 1200,
        height: 630,
        alt: "Job Ki Tyaari – Latest Jobs in India",
      },
    ],
  },

  // robots: {
  //   index: false, // Disables indexing
  //   follow: false, // Prevents following links
  // },
};

const page = async ({ params }) => {
  let t;
  const { slugName } = await params;

  return (
    <div>
      <Article data={data1} />
    </div>
  );
};

export default page;
