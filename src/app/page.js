import Home from "@/components/home/Home";

export const metadata = {
  title: 'Latest Government Jobs 2025, IT Jobs, Bank PO & Railway Jobs in India',
  description: 'Find the latest Government Jobs, IT Jobs, Bank PO, Railway Jobs, and Fresher Jobs in India. Apply now at jobkityaari.com',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },

  openGraph: {
    title: 'Job Kityaari',
    description: 'Find your dream job with Job Kityaari. Explore opportunities and grow your career!',
    url: 'https://jobkityaari.com',
    type: 'website',
    images: [
      {
        url: 'https://jobkityaari.com/images/logo2.png',
        width: 500, // Adjust the width accordingly
        height: 200, // Adjust the height accordingly
        alt: 'Job Kityaari Logo',
      },
    ],
  },

  other: {
    "language": "en",
    "geo.region": "IN",
    "geo.placename": "India",
    "robots": "index, follow",
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "JobKityaari",
      "url": "https://jobkityaari.com",
      "logo": "https://jobkityaari.com/images/logo2.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@jobkityaari.com",
        "contactType": "customer service",
        "availableLanguage": ["English"]
      }
    }),
  }

  
}
 




// other: {
//   "application/ld+json": JSON.stringify({
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": "Your Company Name",
//     "url": "https://www.yourcompany.com",
//     "logo": "https://www.yourcompany.com/logo.png",
//     "description": "A brief description of your company.",
//     "sameAs": [
//       "https://www.facebook.com/yourcompany",
//       "https://twitter.com/yourcompany",
//       "https://www.linkedin.com/company/yourcompany",
//       "https://www.instagram.com/yourcompany"
//     ],
//     "contactPoint": {
//       "@type": "ContactPoint",
//       "telephone": "+1-800-555-5555",
//       "contactType": "customer service",
//       "areaServed": "US",
//       "availableLanguage": ["English", "Spanish"]
//     }
//   })
// }

export default function Home1() {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "jobkityaari",
    "url": "https://jobkityaari.com",
    "logo": "https://jobkityaari.com/images/logo2.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "contact@jobkityaari.com",
        "contactType": "customer service",
        "areaServed": "INDIA",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
  
  
    
    // "sameAs": [
    //   "https://www.facebook.com/yourcompany",
    //   "https://twitter.com/yourcompany",
    //   "https://www.linkedin.com/company/yourcompany"
    // ]
  };
  
  
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jobkityaari.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Government Jobs",
        "item": "https://jobkityaari.com/government-jobs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Technology Jobs",
        "item": "https://jobkityaari.com/technology-jobs"
      },
  
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Management Jobs",
        "item": "https://jobkityaari.com/management-jobs/"
      },
  
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Teaching Jobs",
        "item": "https://jobkityaari.com/teaching-jobs"
      },
  
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Banking Jobs",
        "item": "https://jobkityaari.com/banking-jobs"
      },
  
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Psu Jobs",
        "item": "https://jobkityaari.com/psu-jobs"
      },
  
      
    ]
  };


  return (
    <div className="">

<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />


<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      <Home />
    </div>
  );
}
