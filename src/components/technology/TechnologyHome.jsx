import JobCarousel from "./JobCarousel";
const technologyHome = () => {

  const jobsData = {
    topJobs: [
      {
        title: "Software Engineer",
        company: "Google",
        logo: "https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_1280.jpg",
        salary: "$120K",
        profile: "Full-time",
        link: "#",
      },
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link: "#",
      },
    ],
      };

  return (
    <div>
      <JobCarousel jobs={jobsData} />
    </div>
  );
};

export default technologyHome;
