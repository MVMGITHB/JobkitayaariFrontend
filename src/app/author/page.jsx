import Authors from "@/components/authorSection/Authors";

export const metadata = {
  title: "Our Authors – Job Ki Tyaari",
  description:
    "Meet the expert authors at Job Ki Tyaari who provide accurate government and private job updates, career guidance, and exam preparation tips.",

  metadataBase: new URL("https://jobkityaari.com"),

  alternates: {
    canonical: "/authors",
  },

  openGraph: {
    title: "Our Authors – Job Ki Tyaari",
    description:
      "Get to know the expert authors behind Job Ki Tyaari delivering trusted job updates and career guidance.",
    url: "https://jobkityaari.com/authors",
    siteName: "Job Ki Tyaari",
    type: "website",
    images: [
      {
        url: "/images/logo3.webp",
        width: 1200,
        height: 630,
        alt: "Job Ki Tyaari Authors",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Authors – Job Ki Tyaari",
    description:
      "Meet the experts who write trusted job updates and career content at Job Ki Tyaari.",
    images: ["/og-authors.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div>
      <Authors />
    </div>
  );
}
