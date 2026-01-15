import TechnologyHome3 from "@/components/technology/technologyHome3";

export const metadata = {
  title: "Latest PSU Jobs & Government PSU Vacancies – Job Ki Tyaari",
  description:
    "Discover latest PSU jobs and government PSU vacancies. Check eligibility, salary and apply online through Job Ki Tyaari.",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Latest PSU Jobs & Government PSU Vacancies – Job Ki Tyaari",
    description:
      "Discover latest PSU jobs and government PSU vacancies. Check eligibility, salary and apply online through Job Ki Tyaari.",
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
};

const para = [
  {
    id: 1,
    title:
      "With steady careers, competitive pay, and great growth opportunities, Public Sector Undertakings (PSUs) are among India's most sought-after employers. This is the place for you if you want to have a fulfilling career while also helping the country thrive.",
  },

  {
    id: 2,
    title:
      "Oil and Natural Gas Corporation (ONGC), Bharat Heavy Electricals Limited (BHEL), Steel Authority of India Limited (SAIL), Indian Oil Corporation Limited (IOCL), NTPC, Coal India, GAIL, Hindustan Aeronautics Limited (HAL), and other organizations have the most recent PSU job vacancies for 2026 listed here.",
  },

  {
    id: 3,
    title:
      "For positions such as engineers, management trainees, executives, technicians, finance officers, human resources managers, and more, there are opportunities for recent graduates, seasoned professionals, and technical specialists.",
  },
  {
    id: 4,
    title:
      "For frequent updates on PSU employment vacancies that fit your qualifications, keep checking this page.",
  },
];
const page = () => {
  return (
    <div>
      <TechnologyHome3
        title={"Latest PSU Jobs 2026 – ONGC, BHEL, SAIL & More"}
        para={para}
        slug={"psu-jobs"}
      />
    </div>
  );
};

export default page;
