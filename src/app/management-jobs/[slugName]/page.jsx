import base_url from "@/components/helper/helper";
import JobDescription from "@/components/jobDescription/JobDescription";
import axios from "axios";
import Popup from "@/components/popup/Popup";
import { notFound } from "next/navigation";

/* -------------------- SAFE DATE CONVERTER -------------------- */
function toISO(dateStr) {
  if (!dateStr) return undefined;
  try {
    if (dateStr.includes("T")) return new Date(dateStr).toISOString();
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

    if (!res.ok) {
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
        canonical: `https://jobkityaari.com/management-jobs/${slugName}`,
      },

      openGraph: {
        title: post?.mtitle,
        description: post?.mdescription,
        url: `https://jobkityaari.com/management-jobs/${slugName}`,
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

export default async function Page({ params }) {
  const { slugName } = params;

  let job = null;
  let recommednedJobs = [];
  let recommendedBlogs = [];


 

  try {
    const res = await axios.get(`${base_url}/api/job/getJobBySlug/${slugName}`);
    job = res?.data?.job;
    recommednedJobs = res?.data.recommendedJobs || [];
    recommendedBlogs = res?.data.recommendedBlog || [];
  } catch {}

  if (!job) {
    notFound(); // 👈 show 404 page
  }


   console.log("Job is devandh " , job);

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

    datePosted: job?.createdAt,

    // ✅ IMPORTANT: use LAST DATE instead of updatedAt
    validThrough: job?.lastDate || job?.createdAt,

    employmentType: job?.Jobrole === "Part Time" ? "PART_TIME" : "FULL_TIME",

    hiringOrganization: {
      "@type": "Organization",
      name: job?.companyName || "Job Ki Tyaari",
      sameAs: "https://jobkityaari.com",
      logo: "https://jobkityaari.com/logo.png",
    },

    url: `https://jobkityaari.com/management-jobs/${slugName}`,

    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: job?.streetAddress || "India",
        addressLocality: job?.location || "India",
        addressRegion: job?.state || "India",
        postalCode: job?.pincode || "000000",
        addressCountry: "IN",
      },
    },

    // ✅ FIXED salary (string issue handled)
    ...(job?.salaryNumber && !isNaN(Number(job.salaryNumber))
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              value:
                job?.salaryDuration === "LPA"
                  ? Number(job.salaryNumber) * 100000 // ✅ convert LPA → INR/year
                  : Number(job.salaryNumber) || 0,

              unitText: job?.salaryDuration === "month" ? "MONTH" : "YEAR",
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

      <JobDescription slug={slugName} data={job} recommednedJobs={recommednedJobs} recommendedBlogs={recommendedBlogs} />
      <Popup />
    </>
  );
}
