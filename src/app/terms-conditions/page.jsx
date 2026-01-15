import TermsConditions from "@/components/termCondition/TermsConditions"

export const metadata = {
  title: 'Terms & Conditions | Job Ki Tyaari Guidelines',
  description: 'Read Job Ki Tyaari’s terms and conditions to understand our website policies, user responsibilities, and legal guidelines.',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },
   openGraph: {
    title: "Terms & Conditions | Job Ki Tyaari Guidelines",
    description:
      "Read Job Ki Tyaari’s terms and conditions to understand our website policies, user responsibilities, and legal guidelines.",
    url: "https://jobkityaari.com/terms-conditions",
    siteName: "Job Ki Tyaari",
    type: "website",
    images: [
      {
        url: "/images/logo3.webp", 
        width: 1200,
        height: 630,
        alt: "Job Ki Tyaari – Latest Jobs in India",
      },
    ],
  },

  
  // robots: {
  //   index: false, // Disables indexing
  //   follow: false, // Prevents following links
  // },

}
const page = () => {
  return (
    <div>
        <TermsConditions/>
    </div>
  )
}

export default page
