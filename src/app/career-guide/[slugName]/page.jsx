import Article from "@/components/Article/Article"


export const metadata = {
  title: 'About Us | Job Ki Tyaari - Your Career Guide',
  description: 'Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },
   
  // robots: {
  //   index: false, // Disables indexing
  //   follow: false, // Prevents following links
  // },

}
 


 const page = async({params}) => {


   let t ;
  const {slugName} = await params
  


  return (
    <div>
        <Article data={data1} />
    </div>
  )
}

export default page
