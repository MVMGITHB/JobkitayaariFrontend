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
          <div>
            <h5 className="uppercase font-semibold mb-4">Contact us</h5>
            <ul className="space-y-2">
              <li>
                <strong>Address:</strong> IThum I.T. Park, Sector 62, Noida
              </li>
              <li>
                <strong> Email:</strong>{" "}
                <a href="mailto:contact@jobkityaari.com">
                  contact@jobkityaari.com
                </a>
              </li>
            </ul>
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

              {/* <li>
    <Link
      href="https://twitter.com/yourhandle"
      className="flex sm:justify-start justify-center text-white hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter className="mr-2" /> Twitter
    </Link>
  </li> */}

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

              {/* <li>
    <Link
      href="https://www.linkedin.com/company/yourcompany"
      className="flex sm:justify-start justify-center text-white hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn className="mr-2" /> LinkedIn
    </Link>
  </li> */}
            </ul>
          </div>
        </div>
      </div>

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
