import base_url from "@/components/helper/helper";
import JobDescription from "@/components/jobDescription/JobDescription";
import axios from "axios";
import Popup from "@/components/popup/Popup";
import Script from "next/script";
import { notFound } from "next/navigation";
import ShowJobTemplate from "@/components/jobDescription/ShowJobTemplate";

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
  const { slugName } = params;

  try {
    const res = await fetch(`${base_url}/api/job/getJobBySlug/${slugName}`, {
      next: { revalidate: 60 },
    });

    // console.log("Metadata fetch status:", res);

    if (!res.ok) {
      // console.log("Failed to fetch job data for metadata");
      return {
        title: "Post not found",
        description: "This blog post could not be found.",
      };
    }

    const data = await res.json();
    const post = data?.job;

    return {
      title: post?.mtitle,
      description: post?.mdescription,

      alternates: {
        canonical: `https://jobkityaari.com/technology-jobs/${slugName}`,
      },

      openGraph: {
        title: post?.mtitle,
        description: post?.mdescription,
        url: `https://jobkityaari.com/technology-jobs/${slugName}`,
        siteName: "Job Ki Tyaari",
        type: "article",
        images: [
          {
            url: `${base_url}${post?.image}`,
            width: 1200,
            height: 630,
            alt: "Job Ki Tyaari – Latest Jobs in India",
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

async function page({ params }) {
  const { slugName } = await params;

  let job = null;
  let recommednedJobs = [];

  try {
    const res = await axios.get(`${base_url}/api/job/getJobBySlug/${slugName}`);
    job = res?.data?.job;
    recommednedJobs = res?.data.recommendedJobs || [];

    // console.log("Job data:", job);
  } catch {}

  if (!job) {
    notFound(); // 👈 show 404 page
  }
  const stripHtml = (html) =>
    html
      ? html
          .replace(/<[^>]*>?/gm, "")
          .replace(/\s+/g, " ")
          .trim()
      : "";

  const jobSchema = job && {
    "@context": "https://schema.org",
    "@type": "JobPosting",

    title: job?.postName,
    description: stripHtml(job?.mdescription),

    identifier: {
      "@type": "PropertyValue",
      name: job?.companyName || "Job Ki Tyaari",
      value: job?._id,
    },

    datePosted: toISO(job?.createdAt),

    // ✅ IMPORTANT: use LAST DATE instead of updatedAt
    validThrough: toISO(job?.lastDate),

    employmentType: job?.Jobrole || "FULL_TIME",

    hiringOrganization: {
      "@type": "Organization",
      name: job?.companyName || "Job Ki Tyaari",
      sameAs: "https://jobkityaari.com",
      logo: "https://jobkityaari.com/logo.png",
    },

    url: `https://jobkityaari.com/technology-jobs/${slugName}`,

    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job?.location || "India",
        addressCountry: "IN",
      },
    },

    // ✅ FIXED salary (string issue handled)
    ...(job?.salary && !isNaN(Number(job.salary))
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              value: Number(job.salary),
              unitText: "MONTH",
            },
          },
        }
      : {}),

    // ✅ ADD THESE FOR GOOGLE RANKING
    qualifications: job?.jobDescription || "As per notification",

    responsibilities: job?.responsibility || stripHtml(job?.mdescription),

    skills: job?.skill || [],

    experienceRequirements: job?.experience
      ? {
          "@type": "OccupationalExperienceRequirements",
          monthsOfExperience: Number(job.experience) || 0,
        }
      : undefined,
  };

  return (
    <>
    
    { job.status === "Active" && jobSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
        />
      )}

      <JobDescription slug={slugName} data={job}  recommednedJobs={recommednedJobs} />
      
      {/* <ShowJobTemplate slug={slugName} data={job} /> */}
      <Popup />
    </>
  );
}

export default page;
