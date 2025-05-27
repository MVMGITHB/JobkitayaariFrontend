import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="flex flex-col gap-6">
          <p className="text-white font-bold text-2xl">Company Details</p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center ">
            <Link href="/" className="inline-block">
              <div className="relative w-[120px] h-[60px]">
                <Image
                  src="/images/logo2.png"
                  alt="Job Ki Tyaari logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-white font-bold text-sm sm:text-base">
              JobKityaari<br />Your Trusted Job Search Partner
            </p>
          </div>

          <p>
            <span className="text-white font-bold">Address:</span> IThum I.T. Park, Sector 62, Noida
          </p>
          <p>
            <span className="text-white font-bold">📧 Email:</span> contact@jobkityaari.com
          </p>
        </div>

        <div className="md:pl-10 flex flex-col gap-4">
          <p className="text-2xl font-bold">Top Job Categories</p>
          <ul className="space-y-3">
            <li><Link href="/government-jobs" className="hover:underline">Government Jobs</Link></li>
            <li><Link href="/technology-jobs" className="hover:underline">Technology Jobs</Link></li>
            <li><Link href="/management-jobs" className="hover:underline">Management Jobs</Link></li>
            <li><Link href="/teaching-jobs" className="hover:underline">Teaching Jobs</Link></li>
            <li><Link href="/banking-jobs" className="hover:underline">Banking Jobs</Link></li>
            <li><Link href="/psu-jobs" className="hover:underline">PSU Jobs</Link></li>
          </ul>
        </div>

        <div className="md:pl-10 flex flex-col gap-4">
          <p className="text-2xl font-bold">Useful Resources</p>
          <ul className="space-y-3">
            <li><Link href="/career-guide" className="hover:underline">Career Guide</Link></li>
            <li><Link href="#" className="hover:underline">Resume Writing Tips</Link></li>
            <li><Link href="#" className="hover:underline">Interview Preparation</Link></li>
            <li><Link href="#" className="hover:underline">Salary Calculator</Link></li>
          </ul>

          <p className="text-white font-bold mt-4">📜 Company</p>
          <ul className="list-none pl-4 space-y-2">
            <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
