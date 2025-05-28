"use client";

import base_url from "../helper/helper";

 
 
export default function AuthorJsonLd({ author }) {
  if (!author) return null;
 
  // Construct full image URL if relative path given
  let imageUrl = author.image || "/images/default-user.png";
  if (imageUrl && !imageUrl.startsWith("http")) {
    imageUrl = `${base_url}${imageUrl}`;
  }
 
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://jobkityaari.com/author/${author.slug}`,
    name: `${author.name}`,
    url: `https://jobkityaari.com/author/${author.slug}`,
    image: imageUrl,
    jobTitle: author.role || "Contributor",
    description: author.shortBio || "",
    sameAs: [author.twitter, author.linkedin, author.website].filter(Boolean),
  };
 
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
 
 
 