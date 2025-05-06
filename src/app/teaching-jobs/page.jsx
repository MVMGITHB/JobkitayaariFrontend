import TechnologyHome2 from "@/components/technology/technologyHome2";

export const metadata = {
    title: 'Teaching Jobs in India 2025 – Apply for Govt & Private School Jobs',
    description: 'Looking for teaching jobs in India? Find vacancies in government & private schools, universities & coaching institutes.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}

const page = () => {
  return (
    <div>
      <TechnologyHome2 title="Find Your Next Govt & Private Teaching Job in India 2025" />
    </div>
  );
};

export default page;
