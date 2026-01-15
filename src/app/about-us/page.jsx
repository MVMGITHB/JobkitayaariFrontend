import AboutUs from "@/components/aboutUs/AboutUs"


export const metadata = {
  title: 'About Us | Job Ki Tyaari - Your Career Guide',
  description: 'Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },
   openGraph: {
    title: "About Us | Job Ki Tyaari - Your Career Guide",
    description:
      "Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us",
    url: "https://jobkityaari.com",
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

  //  
}

export const page = () => {
  return (
    <div>
       
        
        <AboutUs/>
    </div>
  )
}

export default page
