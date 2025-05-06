import TechnologyHome4 from "@/components/technology/technologyHome4";


export const metadata = {
    title: 'Management Jobs in India 2025 – MBA, Marketing, HR & Finance Roles',
    description: 'Browse top management job opportunities in India. Apply for MBA, marketing, HR, finance, and leadership roles today!',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}
const page = () => {
  return (
    <div>
      <TechnologyHome4 title={"Top Management Job Opportunities in India 2025"} />
    </div>
  );
};

export default page;
