import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

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
      <section className="relative w-full h-80 md:h-170 flex items-center justify-center text-center bg-cover bg-center " style={{ backgroundImage: 'url(/images/about-bg.png)' }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <p className="text-lg text-gray-300 mt-2">Our mission is to build amazing digital experiences.</p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Mission & Vision</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-justify">
          Our mission is to revolutionize the digital landscape by creating cutting-edge, user-centric solutions that empower businesses and individuals alike. We are committed to innovation, quality, and continuous improvement, ensuring that our products and services enhance productivity, efficiency, and user experience. Our team of dedicated professionals works tirelessly to develop technology-driven solutions tailored to meet the evolving needs of our clients.
        </p>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-justify">
          Our vision is to become a global leader in digital transformation by fostering a culture of creativity, collaboration, and excellence. We aim to bridge the gap between technology and human interaction, making digital experiences seamless, intuitive, and impactful. By embracing emerging technologies and industry trends, we strive to shape the future of the digital world and inspire positive change across industries.
        </p>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg w-64 text-center">

                <div className="w-full">
                <img src={member.image} className=" w-[100px] h-[100px] rounded-full mx-auto" alt={member.name} />
                </div>
             
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <div className="flex justify-center gap-3 mt-3">
                <a href={member.linkedin} className="text-blue-600 text-xl"><FaLinkedin /></a>
                <a href={member.twitter} className="text-blue-400 text-xl"><FaTwitter /></a>
                <a href={member.github} className="text-gray-800 text-xl"><FaGithub /></a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="bg-gray-900 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Join Us On Our Journey</h2>
        <p className="mt-4 max-w-2xl mx-auto">Want to collaborate or learn more about us? Get in touch now!</p>
        <a href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl mt-6">Contact Us</a>
      </section>
    </div>
  );
}
