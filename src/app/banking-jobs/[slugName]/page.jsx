import base_url from "@/components/helper/helper";
import JobDescription from "@/components/jobDescription/JobDescription";
import axios from "axios";

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

/* -------------------- METADATA -------------------- */
export async function generateMetadata({ params }) {
  const { slugName } = params;

  try {
    const response = await axios.get(
      `${base_url}/api/job/getJobBySlug/${slugName}`
    );
    const post = response?.data;

    if (!post) {
      return {
        title: "Post not found",
        description: "This blog post could not be found.",
      };
    }

    return {
      title: post?.mtitle,
      description: post?.mdescription,

      metadataBase: new URL("https://jobkityaari.com"),

      // RELATIVE ONLY
      alternates: {
        canonical: `/banking-jobs/${slugName}`,
      },

      openGraph: {
        title: `${post?.postName} 2026 - Job Ki Tyaari`,
        description: `Apply for ${post?.postName} in ${post?.companyName}. Check Eligibility, Salary & Age Limit at Job Ki Tyaari.`,
        url: `https://jobkityaari.com/banking-jobs/${slugName}`,
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

/* -------------------- PAGE -------------------- */
export default async function Page({ params }) {
  const { slugName } = params;

  let job = null;

  try {
    const res = await axios.get(
      `${base_url}/api/job/getJobBySlug/${slugName}`
    );
    job = res?.data;
  } catch {}

  const stripHtml = (html) =>
    html ? html.replace(/<[^>]*>?/gm, "").replace(/\s+/g, " ").trim() : "";

  const jobSchema =
    job && {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: job?.postName,
      description: stripHtml(job?.mdescription),
      
      identifier: {
        "@type": "PropertyValue",
        name: job?.organization || "Job Ki Tyaari",
        value: job?._id,
      },

      hiringOrganization: {
        "@type": "Organization",
        name: job?.organization || "Job Ki Tyaari",
        sameAs: `https://jobkityaari.com/banking-jobs/${slugName}`,
        logo: "https://jobkityaari.com/logo.png",
      },

      employmentType: "FULL_TIME",
      datePosted: toISO(job?.createdAt),
      validThrough: toISO(job?.updatedAt),

      url: `https://jobkityaari.com/banking-jobs/${slugName}`,

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
      {/* SERVER RENDERED SCHEMA — IMPORTANT */}
      {jobSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
        />
      )}

      <JobDescription slug={slugName} data={job} />
    </>
  );
}