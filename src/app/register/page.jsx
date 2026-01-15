import Register from "@/components/Auth/Register.jsx";

export const metadata = {
  title: "Register – Apply for Govt & Private  Jobs",
  description:
    "Looking for  jobs in India? Find vacancies in government & private sector.",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./",
  },
   openGraph: {
    title: "Register – Apply for Govt & Private  Jobs",
    description:
      "Looking for  jobs in India? Find vacancies in government & private sector.",
    url: "https://jobkityaari.com/register",
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

export default function page() {
  return (
    <div className="">
      <Register />
    </div>
  );
}
