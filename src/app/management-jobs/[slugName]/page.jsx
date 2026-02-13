import base_url from "@/components/helper/helper";
import JobDescription from "@/components/jobDescription/JobDescription";
import axios from "axios";
import Popup from "@/components/popup/Popup";

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

    const post = await res.json();

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

  try {
    const res = await axios.get(`${base_url}/api/job/getJobBySlug/${slugName}`);
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
    };

  return (
    <>
      {jobSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
        />
      )}

      <JobDescription slug={slugName} data={job} />
      <Popup />
    </>
  );
}