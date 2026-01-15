import Login from "@/components/Auth/Login";

export const metadata = {
  title: "JobKityaari Login | Access Latest Govt & Private Job Updates",
  description:
    "Log in to JobKityaari to access the latest government and private job updates, exam notifications, results, and career alerts in one place.",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "About Us | Job Ki Tyaari - Your Career Guide",
    description:
      "Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us",
    url: "https://jobkityaari.com/login",
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

export default function Page() {
  return (
    <main>
      <Login />
    </main>
  );
}
