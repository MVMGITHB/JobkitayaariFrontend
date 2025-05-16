export const metadata = {
  title: 'Privacy Policy | How We Protect Your Data',
  description: 'Learn how Job Ki Tyaari protects your data, ensures privacy, and secures your personal information. Read our detailed privacy policy.',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },

  
  // robots: {
  //   index: false, // Disables indexing
  //   follow: false, // Prevents following links
  // },

}


import PrivacyPolicy from "@/components/privacy/PrivacyPolicy"
 const page = () => {
  return (
    <div>
        <PrivacyPolicy/>
    </div>
  )
}

export default page
