import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center lg:text-left">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">
          <div className="gri  gap-8">
            {/* Contact Info / Logo & Description */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Logo Image */}
              <div className="mb-1 bg-white">
                <img
                  src="/images/logo3.webp" // Replace with your actual logo path or URL
                  alt="Company Logo"
                  className="h-30 w-auto object-contain"
                />
              </div>

              {/* Description Text */}
              <p className="text-sm text-white leading-relaxed">
                Explore government and private job opportunities, stay updated
                on exams, and read helpful blogs about recruitment, eligibility,
                applications, and career-related news. We share information, not
                direct employment.
              </p>
            </div>
          </div>

          <div className="sm:text-left text-center sm:items-start items-center sm:justify-start justify-center sm:mx-0 mx-auto">
            <h5 className="uppercase font-semibold mb-4">Top Job Categories</h5>
            <ul className="space-y-0 lg:space-y-2">
              <li>
                <Link
                  href="/government-jobs"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                >
                  Government Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/technology-jobs"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                >
                  Technology Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/management-jobs"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                >
                  Management Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/technology-jobs"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                >
                  Teaching Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/banking-jobs"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                >
                  Banking Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/psu-jobs"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                >
                  PSU Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:text-left text-center sm:items-start items-center sm:justify-start justify-center sm:mx-0 mx-auto">
            <h5 className="uppercase font-semibold mb-4">Legal & Info</h5>
            <ul className="space-y-0 lg:space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:text-left text-center sm:items-start items-center sm:justify-start justify-center sm:mx-0 mx-auto">
            <h5 className="uppercase font-semibold mb-4">Social Media</h5>
            <ul className="space-y-0 lg:space-y-2">
              <li>
                <Link
                  href="https://www.facebook.com/jobkityaari/"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="mr-2" /> Facebook
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/jobkityaari/"
                  className="flex sm:justify-start justify-center text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="mr-2" /> Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Added Paragraph Section before Copyright */}
      <div className="max-w-7xl mx-auto px-4 py-4 border-t border-gray-800 text-center lg:text-left text-xs text-gray-400 leading-relaxed">
        <p>
          JobKityaari provides the latest government job alerts, private job notifications, recruitment news, and career updates across India. Stay updated on bank jobs, railway recruitment, defence vacancies, teaching jobs, admit cards, exam results, answer keys, and eligibility criteria. We also publish informative blogs to help job seekers understand recruitment processes. JobKityaari is an information portal and does not directly offer jobs or conduct recruitment.
        </p>
      </div>

      {/* Copyright Section */}
      <div className="text-center bg-black/20 py-4 text-sm">
        © 2026 Copyright:{" "}
        <a
          href="https://jobkityaari.com/"
          className="text-white hover:underline"
        >
          Jobkityaari.com
        </a>
      </div>
    </footer>
  );
}