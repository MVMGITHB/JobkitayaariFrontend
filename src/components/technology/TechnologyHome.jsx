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
    // featuredJobs: [
    //   {
    //     title: "Data Analyst",
    //     company: "Amazon",
    //     logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
    //     salary: "$90K",
    //     profile: "Hybrid",
    //     link: "/apply/amazon",
    //   },
    //   {
    //     title: "Backend Developer",
    //     company: "Microsoft",
    //     logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
    //     salary: "$115K",
    //     profile: "Full-time",
    //     link: "/apply/microsoft",
    //   },
    // ],
    // recentJobs: [
    //   {
    //     title: "Product Manager",
    //     company: "Tesla",
    //     logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
    //     salary: "$130K",
    //     profile: "On-site",
    //     link: "/apply/tesla",
    //   },
    //   {
    //     title: "UI/UX Designer",
    //     company: "Spotify",
    //     logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
    //     salary: "$85K",
    //     profile: "Remote",
    //     link: "/apply/spotify",
    //   },
    //   {
    //     title: "Cybersecurity Analyst",
    //     company: "IBM",
    //     logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
    //     salary: "$100K",
    //     profile: "Hybrid",
    //     link: "/apply/ibm",
    //   },
    //   {
    //     title: "DevOps Engineer",
    //     company: "Netflix",
    //     logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
    //     salary: "$125K",
    //     profile: "Full-time",
    //     link: "/apply/netflix",
    //   },
    // ],
  };

  return (
    <div>
      <JobCarousel jobs={jobsData} />
    </div>
  );
};

export default technologyHome;
