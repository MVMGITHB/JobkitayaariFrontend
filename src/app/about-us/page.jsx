import AboutUs from "@/components/aboutUs/AboutUs"


export const metadata = {
  title: 'About Us | Job Ki Tyaari - Your Career Guide',
  description: 'Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },

  robots: {
    index: false, // Disables indexing
    follow: false, // Prevents following links
  },

}

export const page = () => {
  return (
    <div>
       
        
        <AboutUs/>
    </div>
  )
}

export default page
