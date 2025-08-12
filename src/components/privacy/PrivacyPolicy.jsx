export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-gray-100">
        {/* Hero Section */}
        <section
          className="relative h-80 md:h-140 flex items-center justify-center text-center bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url(/images/privacy.png)" }}
        >
          <div className="bg-black bg-opacity-50 p-10 rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300 mt-2">
              Your privacy is our priority. Learn how we protect your data.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-4 lg:py-16 px-4 md:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto text-gray-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Privacy Policy
            </h2>
            <p className="mb-4">
              Our privacy notice for <strong>JobKityaari.com</strong> explains
              how and why, when you use our services, we might gather, store,
              utilize, and share ("process") your personal information. This
              includes, but is not restricted to, the following situations:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Visit{" "}
                <a
                  href="https://jobkityaari.com/"
                  className="text-blue-600 underline"
                >
                  https://jobkityaari.com/
                </a>
                , or any of our websites that have links to this privacy
                statement.
              </li>
              <li>
                Contact us via customer service or other means of communication.
              </li>
            </ul>
            <p className="mt-2">
              To learn what information we gather, how we use it, and your
              rights regarding it, please carefully read this notice. Please
              stop using our services if you disagree with any portion of this
              policy.
            </p>

            {/* Main Policy Sections */}
            <ol className="list-decimal list-inside space-y-4 mt-8">
              {/* Data We Gather */}
              <li className="text-2xl font-bold text-gray-800">
                Data We Gather
                <p className="text-base font-normal mt-2 text-gray-600 text-justify">
                  All the information you give us, like:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li className="text-gray-600 text-justify">
                    Name, email, phone number, and address.
                  </li>
                  <li className="text-gray-600 text-justify">
                    Account details (login information and preferences).
                  </li>
                  <li className="text-gray-600 text-justify">
                    Technical details (IP address, browser type, device info).
                  </li>
                  <li className="text-gray-600 text-justify">
                    Usage information (time spent, features used, sites
                    visited).
                  </li>
                  <li className="text-gray-600 text-justify">
                    Tracking technologies and cookies.
                  </li>
                </ul>
              </li>

              {/* How We Use Data */}
              <li className="text-2xl font-bold text-gray-800">
                How We Use Your Data
                <p className="text-base font-normal mt-2 text-gray-600 text-justify">
                  We process your information to connect with you, deliver,
                  enhance, and manage our services, as well as for security,
                  fraud protection, and legal compliance. With your permission,
                  we may also use your information for purposes like:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Delivering, maintaining, and improving our services.</li>
                  <li>Administering user accounts and offering support.</li>
                  <li>Handling transactions and payments.</li>
                  <li>Notifying you of specials, deals, or updates.</li>
                  <li>Tracking usage trends and improving user experience.</li>
                  <li>Fulfilling legal requirements.</li>
                </ul>
              </li>

              {/* Legal Basis */}
              <li className="text-2xl font-bold text-gray-800">
                Legal Basis for Processing
                <p className="text-base font-normal mt-2 text-gray-600 text-justify">
                  We process your data under applicable laws with your consent,
                  to comply with legal obligations, to perform a contract, to
                  safeguard your rights, or to pursue legitimate business
                  interests.
                </p>
              </li>

              {/* Disclosure */}
              <li className="text-2xl font-bold text-gray-800">
                Disclosure of Your Data
                <p className="text-base font-normal mt-2 text-gray-600 text-justify">
                  We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Service providers assisting with our services.</li>
                  <li>Legal authorities, if required.</li>
                  <li>In case of acquisition, sale, or merger.</li>
                  <li>Advertising partners (with your consent).</li>
                </ul>
                <p className="text-gray-600 mt-2">
                  We never sell your personal information.
                </p>
              </li>

              {/* Cookies */}
              <li className="text-2xl font-bold text-gray-800">
                Cookies & Tracking
                <p className="text-base font-normal mt-2 text-gray-600 text-justify">
                  We may collect and store data using cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Improve website functionality.</li>
                  <li>Analyze usage and traffic.</li>
                  <li>Personalize ads and content.</li>
                </ul>
              </li>

              {/* Rights */}
              <li className="text-2xl font-bold text-gray-800">
                Your Rights
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Access, correct, or delete your information.</li>
                  <li>Withdraw consent anytime.</li>
                  <li>Restrict or object to processing.</li>
                  <li>Complain to a data protection authority.</li>
                </ul>
              </li>

              {/* Third-party links */}
              <li className="text-2xl font-bold text-gray-800">
                Third-Party Links
                <p className="text-base font-normal mt-2 text-gray-600 text-justify">
                  Our services may contain links to external websites. We are
                  not responsible for their privacy practices.
                </p>
              </li>

              {/* Modifications */}
              <li className="text-2xl font-bold text-gray-800">
                Changes to This Policy
                <p className="text-base font-normal mt-2 text-gray-600 text-justify">
                  We may update this notice from time to time. Major changes
                  will be communicated via our services or email.
                </p>
              </li>

              {/* Contact */}
              <li className="text-2xl font-bold text-gray-800">
                Contact Us
                <p className="text-base font-normal mt-2 text-gray-600 text-justify">
                  If you have any questions or concerns, contact us at:
                </p>
                <p className="text-base font-normal mt-2 text-gray-600">
                  <strong>Email:</strong> contact@jobkityaari.com
                </p>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}
