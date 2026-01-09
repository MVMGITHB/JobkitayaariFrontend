import Login from "@/components/Auth/Login";

export const metadata = {
  title: "Login | Job Ki Tyaari",
  description:
    "Login to Job Ki Tyaari to access your account, job updates, exam preparation content, and resources.",

  robots: {
    index: false,
    follow: false,
  },

  alternates: {
    canonical: "https://jobkityaari.com/login",
  },

  openGraph: {
    title: "Login | Job Ki Tyaari",
    description:
      "Login to Job Ki Tyaari and continue your job preparation journey.",
    url: "https://jobkityaari.com/login",
    siteName: "Job Ki Tyaari",
    type: "website",
  },
};

export default function Page() {
  return (
    <main>
      <Login />
    </main>
  );
}
