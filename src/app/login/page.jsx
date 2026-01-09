import Login from "@/components/Auth/Login";

export const metadata = {
  title: "Login – Apply for Govt & Private  Jobs",
  description:
    "Login to Job Ki Tyaari to access your account, job updates, exam preparation content, and resources.",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./",
  },
};

export default function Page() {
  return (
    <main>
      <Login />
    </main>
  );
}
