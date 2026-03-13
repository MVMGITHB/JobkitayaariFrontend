import { Blog } from "@/components/blog/Blog";

export async function generateMetadata() {
  return {
    title: "Teaching Jobs Articles & Exam Updates – Job Ki Tyaari",
    description:
      "Teaching jobs articles with exam updates, eligibility details, preparation tips and recruitment news on Job Ki Tyaari.",
    metadataBase: new URL("https://jobkityaari.com"),
    alternates: {
      canonical: "./",
    },
  };
}

const page = async () => {
  return (
    <div>
      <Blog filters={"teaching-jobs"} />
    </div>
  );
};

export default page;