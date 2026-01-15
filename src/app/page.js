import Home from "@/components/home/Home";
import Popup from "@/components/home/Popup";

export const metadata = {
  title: "Latest Government & Private Jobs in India – Job Ki Tyaari",
  description:
    "Find latest government and private jobs in India. Get eligibility, salary, selection process and apply online updates on Job Ki Tyaari.",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./",
  },

  openGraph: {
    title: "Job Ki Tyaari – Govt & Private Jobs",
    description:
      "Latest government and private jobs in India. Apply online and stay updated.",
    url: "https://jobkityaari.com",
    siteName: "Job Ki Tyaari",
    type: "website",
    images: [
      {
        url: "/images/logo3.webp", 
        width: 1200,
        height: 630,
        alt: "Job Ki Tyaari – Latest Jobs in India",
      },
    ],
  },

  other: {
    language: "en",
    "geo.region": "IN",
    "geo.placename": "India",
    robots: "index, follow",
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "JobKityaari",
      url: "https://jobkityaari.com",
      logo: "https://jobkityaari.com/images/logo2.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@jobkityaari.com",
        contactType: "customer service",
        availableLanguage: ["English"],
      },
    }),
  },
};


export default function Home1() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "jobkityaari",
    url: "https://jobkityaari.com",
    logo: "https://jobkityaari.com/images/logo2.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contact@jobkityaari.com",
        contactType: "customer service",
        areaServed: "INDIA",
        availableLanguage: ["English", "Hindi"],
      },
    ],

    // "sameAs": [
    //   "https://www.facebook.com/yourcompany",
    //   "https://twitter.com/yourcompany",
    //   "https://www.linkedin.com/company/yourcompany"
    // ]
  };

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Popup />
      <Home />
    </div>
  );
}
