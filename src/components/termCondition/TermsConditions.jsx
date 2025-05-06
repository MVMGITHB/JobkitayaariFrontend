
export default function TermsConditions() {
    return (

        <>
          
      <div className="bg-gray-100">
        {/* Hero Section */}
        <section className="relative h-80 md:h-140 flex items-center justify-center text-center bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/images/terms.png)' }}>
          <div className="bg-black bg-opacity-50 p-10 rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Terms & Conditions</h1>
            <p className="text-lg text-gray-300 mt-2">Understand the rules and policies governing our services.</p>
          </div>
        </section>
        
        {/* Terms & Conditions Content */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto text-gray-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
            <p className="mb-4">These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to comply with these terms.</p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">1. Acceptance of Terms</h2>
            <p className="mt-2">By using our website, you acknowledge that you have read, understood, and agreed to these terms.</p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">2. User Responsibilities</h2>
            <p className="mt-2">You agree to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Provide accurate information when required</li>
              <li>Respect intellectual property rights</li>
              <li>Abide by all applicable laws and regulations</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">3. Prohibited Activities</h2>
            <p className="mt-2">You must not engage in activities that:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Violate any laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Disrupt our website’s functionality</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">4. Limitation of Liability</h2>
            <p className="mt-2">We are not responsible for any damages resulting from the use of our website or services.</p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">5. Changes to Terms</h2>
            <p className="mt-2">We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the updated terms.</p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">6. Contact Us</h2>
            <p className="mt-2">If you have any questions about these Terms & Conditions, please contact us at:</p>
            <p className="mt-2 font-semibold">Email: support@example.com</p>
          </div>
        </section>
      </div>
      </>
    );
  }
  