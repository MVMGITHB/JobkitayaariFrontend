"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import axios from "axios";
import base_url from "../helper/helper";

export default function BreadCrumbSchema() {
  const pathname = usePathname();
  const router = useRouter(); // ✅ Moved before any conditional return

  const [hasMounted, setHasMounted] = useState(false);
  const [jobdata, setJobData] = useState([]);
  const [blogsdata, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${base_url}/api/job/getAllJob`);
        setJobData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${base_url}/api/blog/getAllBlog`);
        setBlogsData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
    fetchBlogs();
  }, []); // ✅ Avoid using `[loading]` as a dependency — it will loop

  if (!hasMounted) return null; // ✅ Safe now — hooks already declared

  const pathSegments = pathname.split("/").filter(Boolean);

  const staticBreadcrumbItems = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jobkityaari.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Government Jobs",
        item: "https://jobkityaari.com/government-jobs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Technology Jobs",
        item: "https://jobkityaari.com/technology-jobs",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Management Jobs",
        item: "https://jobkityaari.com/management-jobs/",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Teaching Jobs",
        item: "https://jobkityaari.com/teaching-jobs",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Banking Jobs",
        item: "https://jobkityaari.com/banking-jobs",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Psu Jobs",
        item: "https://jobkityaari.com/psu-jobs",
      },
    ],
  };

  const dynamicBreadcrumbItems =
    jobdata?.map((item, index) => ({
      "@type": "ListItem",
      position: staticBreadcrumbItems.itemListElement.length + index + 1,
      name: item?.postName,
      item: `https://jobkityaari.com/${item?.category?.slug}/${item?.slug}`,
    })) || [];

  const dynamicBreadcrumbItems1 =
    blogsdata?.map((item, index) => ({
      "@type": "ListItem",
      position:
        staticBreadcrumbItems.itemListElement.length +
        dynamicBreadcrumbItems.length +
        index +
        1,
      name: item?.postName,
      item: `https://jobkityaari.com/${item?.category?.slug}/articles/${item?.slug}`,
    })) || [];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ...staticBreadcrumbItems.itemListElement,
      ...dynamicBreadcrumbItems,
      ...dynamicBreadcrumbItems1,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        className="w-full px-4 sm:px-6 md:px-16 mt-2 mb-2 text-sm text-gray-600 overflow-x-auto whitespace-nowrap"
        aria-label="Breadcrumb"
      >
      <ol className="hidden sm:flex items-center space-x-1 sm:space-x-2">
  <li>
    <Link
      href="/"
      className="text-muted-foreground text-blue-400 hover:text-primary transition-colors"
    >
      Home
    </Link>
  </li>
  {pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const isLast = index === pathSegments.length - 1;
    const label = decodeURIComponent(segment.replace(/-/g, " "));

    return (
      <li
        key={index}
        className="flex items-center gap-2 bg-blue-50  py-3 rounded-xl shadow-md text-sm"
      >
        <ChevronRight className="w-4 h-4 text-blue-400" />
        {isLast ? (
          <span
            className="text-blue-700 font-semibold capitalize"
            aria-current="page"
          >
            {label}
          </span>
        ) : (
          <Link
            href={href}
            className="capitalize text-blue-600 hover:text-blue-800 transition-colors"
          >
            {label}
          </Link>
        )}
      </li>
    );
  })}
</ol>

      </nav>
    </>
  );
}
