import React from "react";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You | JobKityaari",
  description:
    "Thank you for registering with JobKityaari. Our team will get in touch with you shortly.",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./thank-you",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Thankyou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-gray-900 shadow-2xl rounded-3xl p-14 text-center max-w-2xl transform transition-all hover:scale-[1.02]">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <CheckCircle2 className="text-green-500 w-20 h-20 animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-green-500 mb-5 tracking-tight">
          Thank You!
        </h1>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-lg md:text-xl mb-10 px-2">
          <span className="font-semibold">You’ve successfully registered.</span>{" "}
          Welcome to JobKityaari! Stay tuned for the latest job alerts, updates,
          and career tips to help you land your dream job.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/"
            className="inline-block bg-green-500 text-black text-lg px-8 py-3 rounded-2xl font-semibold hover:bg-green-600 transition shadow-lg"
          >
            Back to Home
          </a>
          <a
            href="/login"
            className="inline-block bg-gray-700 text-white text-lg px-8 py-3 rounded-2xl font-semibold hover:bg-gray-600 transition shadow-lg"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
