

export default function PrivacyPolicy() {
    return (

        <>
        
      <div className="bg-gray-100">
        {/* Hero Section */}
        <section className="relative h-80 md:h-140 flex items-center justify-center text-center bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/images/privacy.png)' }}>
          <div className="bg-black bg-opacity-50 p-10 rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
            <p className="text-lg text-gray-300 mt-2">Your privacy is our priority. Learn how we protect your data.</p>
          </div>
        </section>
        
        {/* Privacy Policy Content */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto text-gray-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
            <p className="mb-4">We are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard it.</p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">1. Information We Collect</h2>
            <p className="mt-2">We collect various types of information, including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Personal details (name, email, phone number)</li>
              <li>Usage data (IP address, browser type, device information)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">2. How We Use Your Information</h2>
            <p className="mt-2">We use your information to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Improve our website and services</li>
              <li>Provide customer support</li>
              <li>Send important updates and promotions</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">3. Data Security</h2>
            <p className="mt-2">We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">4. Your Rights</h2>
            <p className="mt-2">You have the right to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Access and update your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">5. Contact Us</h2>
            <p className="mt-2">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2 font-semibold">Email: support@example.com</p>
          </div>
        </section>
      </div>
      </>
    );
  }
  