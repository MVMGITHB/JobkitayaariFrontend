import TechnologyHome3 from "@/components/technology/technologyHome3";


export const metadata = {
    title: 'PSU Jobs in India 2025 – Government Sector Recruitment Updates',
    description: 'Find PSU jobs in India. Apply for ONGC, BHEL, SAIL, NTPC, and other public sector unit vacancies.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}


const page = () => {
  return (
    <div>
      <TechnologyHome3 title={"Latest PSU Jobs 2025 – ONGC, BHEL, SAIL & More"} />
    </div>
  );
};

export default page;
