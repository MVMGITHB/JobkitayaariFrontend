import base_url from "@/components/helper/helper";
import JobDescription from "@/components/jobDescription/JobDescription";
import axios from "axios";
import Popup from "@/components/popup/Popup";
import Script from "next/script";

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

/* -------------------- SAFE DATE CONVERTER -------------------- */
function toISO(dateStr) {
  if (!dateStr) return undefined;

  try {
    // already ISO
    if (dateStr.includes("T")) return new Date(dateStr).toISOString();

    // convert DD-MM-YYYY or DD/MM/YYYY → YYYY-MM-DD
    const parts = dateStr.replaceAll("/", "-").split("-");

    if (parts.length === 3) {
      const [dd, mm, yyyy] = parts;
      return new Date(`${yyyy}-${mm}-${dd}`).toISOString();
    }

    return new Date(dateStr).toISOString();
  } catch {
    return undefined;
  }
}

export async function generateMetadata({ params }) {
  const { slugName } = await params;

  try {
    const response = await axios.get(
      `${base_url}/api/job/getJobBySlug/${slugName}`,
    );
    const post = response?.data;
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
      title: `${post?.mtitle} `,
      description: `${post?.mdescription} `,
      metadataBase: new URL("https://jobkityaari.com"),
      alternates: {
        canonical: `https://jobkityaari.com/management-jobs/${slugName}`,
      },
      openGraph: {
        title: `${post?.mtitle} `,
        description: `${post?.mdescription} `,
        url: `https://jobkityaari.com/management-jobs/${slugName}`,
        siteName: "Job Ki Tyaari",
        type: "website",
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

  let job = null;

  try {
    const res = await axios.get(`${base_url}/api/job/getJobBySlug/${slugName}`);
    job = res?.data;

    // console.log("Job data:", job);
  } catch {}

  const stripHtml = (html) =>
    html
      ? html
          .replace(/<[^>]*>?/gm, "")
          .replace(/\s+/g, " ")
          .trim()
      : "";

  const jobSchema = job && {
    "@context": "https://schema.org/",
    "@type": "JobPosting",

    title: job?.title,
    description: stripHtml(job?.mdescription),

    identifier: {
      "@type": "PropertyValue",
      name: job?.organization || "Job Ki Tyaari",
      value: job?._id,
    },

    hiringOrganization: {
      "@type": "Organization",
      name: job?.organization || "Job Ki Tyaari",
      sameAs: `https://jobkityaari.com/government-jobs/${slugName}`,
      logo: "https://jobkityaari.com/logo.png",
    },

    employmentType: "FULL_TIME",
    datePosted: toISO(job?.createdAt),
    validThrough: toISO(job?.updatedAt),

    url: `https://jobkityaari.com/government-jobs/${slugName}`,

    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: job?.location || "India",
        addressCountry: "IN",
      },
    },

    baseSalary: job?.salary
      ? {
          "@type": "MonetaryAmount",
          currency: "INR",
          value: {
            "@type": "QuantitativeValue",
            value: Number(job?.salary),
            unitText: "MONTH",
          },
        }
      : undefined,

    educationRequirements: job?.skill?.[0] || "As per notification",
    experienceRequirements: job?.requirementdata?.[0] || "Not Required",
  };

  return (
    <>
      {jobSchema && (
        <Script
          id="job-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
        />
      )}

      <JobDescription slug={slugName} />
      <Popup />
    </>
  );
}

export default page;
