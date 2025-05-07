import Link from "next/link";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/images/pt1.png",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/images/pt2.png",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },

  {
    name: "Jane Smith",
    role: "CTO",
    image: "/images/pt3.png",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gray-100 pt[-30px]">
      {/* Hero Section */}
      <section
        className="relative w-full h-80 md:h-170 flex items-center justify-center text-center bg-cover bg-center "
        style={{ backgroundImage: `url("https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?ga=GA1.1.1414107002.1745826214&semt=ais_hybrid&w=740")` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Our mission is to build amazing digital experiences.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 w-[70%] mx-auto px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-800">
          About Us | Job Ki Tyaari - Trusted Job Alert Platform
        </h2>
        <p className="mt-4 text-gray-600  mx-auto text-justify">
          Discover Job Ki Tyaari—your trusted platform for verified government
          jobs, PSU careers, private job updates, and expert preparation tips.
          Stay ahead with daily alerts.
        </p>
        <p className="mt-4 text-gray-600  mx-auto text-justify">
          Welcome to <strong>Job Ki Tyaari</strong>, your trusted partner in
          achieving your dream career.
        </p>
        <p className="mt-4 text-gray-600 mx-auto text-justify">
          In today's competitive job market, staying updated with verified and
          timely job information is not just helpful it's essential. At{" "}
          <strong>Job Ki Tyaari</strong>, we bring you the{" "}
          <strong>
            latest job alerts, exam syllabus, eligibility criteria
          </strong>
          , and <strong>application details</strong> across
        </p>
        <ul className="list-none space-y-2 mt-4 text-gray-600  mx-auto text-justify">
          <li>
            {" "}
            -{" "}
            <Link href="/government-jobs">
              <span className="text-blue-600 underline"> Government Jobs</span>
            </Link>
            (Central & State)
          </li>
          <li>
            -
            <Link href="/technology-jobs" className="text-blue-600 underline">
              Teaching Jobs Opportunities
            </Link>
          </li>
          <li>
            -{" "}
            <Link href="/psu-jobs" className="text-blue-600 underline">
              PSU
            </Link>{" "}
            (Public Sector Undertakings)
          </li>
          <li>
            -
            <Link href="/technology-jobs" className="text-blue-600 underline">
              Technical and Engineering
            </Link>{" "}
            Roles
          </li>
          <li>- Private Sector Positions</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mt-4">Our Mission </h2>
        <p className="mt-4 text-gray-600  mx-auto text-justify">
          Our mission is simple — to empower every job seeker in India by
          providing accurate, fast, and comprehensive career updates in one
          place. We believe no opportunity should be missed due to a lack of
          timely information.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Why Trust Job Ki Tayyari?{" "}
        </h2>
        <p className="mt-2 text-gray-600  mx-auto text-justify">
          Unlike scattered or unreliable sources, our team{" "}
          <strong>scans official websites daily </strong> to bring you:
        </p>

        <ul className=" space-y-2 mt-4 text-gray-600  mx-auto text-justify">
          <li className="text-blue-600 underline"> Latest job notifications</li>
          <li> Application start/end dates</li>
          <li> Eligibility and educational requirements</li>
          <li> Direct application links</li>
          <li> Exam syllabus and study guides</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Why Trust Job Ki Tayyari?
        </h2>
        <p className="mt-4 text-gray-600  mx-auto text-justify">
          <span className="text-black text-lg font-bold">
            Verified Updates Only:{" "}
          </span>
          Sourced from official sites like{" "}
          <Link href="/" className="text-blue-600 underline">
            UPSC
          </Link>
          , SSC, State PSCs, and major PSUs.
        </p>
        <p className="mt-2 text-gray-600  mx-auto text-justify">
          <span className="text-black text-lg font-bold">
            Comprehensive Coverage:{" "}
          </span>
          One-stop portal for all sectors.
        </p>
        <p className="mt-2 text-gray-600  mx-auto text-justify">
          <span className="text-black text-lg font-bold">
            User-Centric Design:{" "}
          </span>{" "}
          Easy navigation and mobile-friendly layout.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Start Your Career Journey With Us
        </h2>
        <p className="mt-2 text-gray-600  mx-auto text-justify">
          Whether you're preparing for a <strong> government exam</strong>,
          applying for a <strong>PSU job</strong>, or starting in the{" "}
          <strong>private sector</strong>, Job Ki Tyaari is here to help.
        </p>
        <p className="mt-4 text-gray-600  mx-auto text-justify">
          Bookmark{" "}
          <Link href="/" className="text-blue-600 underline">
            JobKiTyaari.com
          </Link>{" "}
          and never miss an opportunity again!{" "}
        </p>
      </section>

     
    </div>
  );
}
