import ThankYou from "@/components/Thankyou.jsx";

export const metadata = {
  title: "Thank You | JobKityaari",
  description:
    "Thank you for registering at JobKityaari. Our team will contact you soon.",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./thank-you",
  },
  robots: {
    index: true,
    follow: true,
  },
   openGraph: {
    title: "Thank You | Job Ki Tyaari - Your Career Guide",
    description:
      "Thank you for registering at Job Ki Tyaari. Our team will contact you soon.",
    url: "https://jobkityaari.com/thankyou",
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

function Page() {
  return (
    <div>
      <ThankYou />
    </div>
  );
}

export default Page;
