import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram,FaLinkedinIn  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pl-5 py-8  md:pl-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8  md:text-left">
       
        <div className=" flex flex-col gap-6">
          <p className=" text-white font-bold text-2xl">Company Details</p>
          <div className=" flex gap-5">
            
          <Link href="/" className="text-xl font-bold text-blue-600">
            <img src="/images/logo2.png" alt="" style={{width:"100px"}} />
        </Link>
            <p className=" text-white font-bold ">JobKityaari
            Your Trusted Job Search Partner</p>

          </div>
           

           <p> <span className=" text-white  font-bold"> Address:</span> IThum I.T. Park, Sector 62, Noida</p>
         
            <p> <span className=" text-white  font-bold">📧 Email:</span> contact@jobkityaari.com</p>
           
           {/* <p><span className=" text-white  font-bold">📞 📍 Phone:</span> <br/> +91 9811868368
           </p> */}
          
          
        </div>


        
        

        <div  className=" md:pl-28 md:flex md:flex-col gap-4"> 
          <h4 className=" text-2xl font-bold">Top Job Categories</h4>
          <ul className="mt-2 space-y-4">
           
            <li><Link href="/government-jobs" className="text-white hover:underline">🚀 Government Jobs</Link></li>
           
            <li><Link href="/technology-jobs" className="text-white hover:underline">💻 Technology Jobs</Link></li>
            <li><Link href="/management-jobs" className="text-white hover:underline">📈 Management Jobs</Link></li>
            <li><Link href="/finance-jobs" className="text-white hover:underline">💰 Finance Jobs</Link></li>
            <li><Link href="/teaching-jobs/" className="text-white hover:underline"> 🎓 Teaching Jobs</Link></li>
            <li><Link href="/banking-jobs" className="text-white hover:underline">🏦 Banking Jobs</Link></li>
            <li><Link href="/psu-jobs" className="text-white hover:underline">🏢 PSU Jobs</Link></li>
          </ul>
        </div>



        <div  className=" md:pl-28 md:flex md:flex-col gap-4"> 
          <h4 className="text-2xl font-bold">Useful Resources</h4>
          <ul className="mt-2 space-y-4">
          
            <li><Link href="/career-guide" className="text-white hover:underline">Career Guide</Link></li>
            <li><Link href="#" className="text-white hover:underline">Resume Writing Tips</Link></li>
            <li><Link href="#" className="text-white hover:underline">Interview Preparation</Link></li>
            <li><Link href="#" className="text-white hover:underline">Salary Calculator</Link></li>
            <p className="text-white font-bold ">📜 Company</p>
             <ul className=" list-disc pl-8">
              
             <li><Link href="/about-us" className="text-white hover:underline">About Us</Link></li>
            <li><Link href="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="text-white hover:underline">Terms & Conditions</Link></li>
            <li><Link href="#" className="text-white hover:underline">Contact Us</Link></li>
             </ul>
          </ul>
        </div>
        

        <div className=" md:flex md:flex-col md:items-center gap-4">
          <h4 className="text-lg text-left font-semibold">Social Media</h4>
          <div className="flex flex-col justify-center md:justify-start space-x-4 gap-4">
          <h6 className="text-lg font-semibold">🚀 Stay Updated!</h6>
          <h6 className="text-lg font-semibold">Follow Us:</h6>

          
            <Link href="https://www.facebook.com/mvmbs/" className="text-white flex gap-3 item-center hover:text-gray-400"><FaFacebook size={30} />Facebook</Link>
            <Link href="#" className="text-white flex gap-3 item-center hover:text-gray-400"><FaTwitter size={30} />Twitter</Link>
            <Link href="https://www.instagram.com/mvmbs_official/" className="text-white flex gap-3 item-center hover:text-gray-400"><FaInstagram size={30} />Instagram</Link>
            <Link href="#" className="text-white flex gap-3 item-center hover:text-gray-400"><FaLinkedinIn size={30} />LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}