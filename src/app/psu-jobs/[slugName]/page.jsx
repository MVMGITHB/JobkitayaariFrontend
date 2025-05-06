import JobDescription from "@/components/jobDescription/JobDescription"

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

async function page({params}) {

  const {slugName} = await params
  return (
    <>
    <JobDescription slug={slugName}/>
    </>
  )
}

export default page