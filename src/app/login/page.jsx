import Login from "@/components/Auth/Login";

export const metadata = {
  title: "JobKityaari Login | Access Latest Govt & Private Job Updates",
  description:
    "Log in to JobKityaari to access the latest government and private job updates, exam notifications, results, and career alerts in one place.",
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
