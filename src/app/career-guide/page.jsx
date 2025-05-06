
import { Blog } from "@/components/blog/Blog"


export const metadata = {
  title: 'Career Guide: Latest Job Updates & Career Tips 2025',
  description: 'Looking for a job? Find the latest government & private job updates, career tips, and guides on our Career Guide page. Check now!',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },

  robots: {
    index: false, // Disables indexing
    follow: false, // Prevents following links
  },
}


 const page = () => {


  
const cards = [
  { id: 1, title: "Heading 1", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg",base:"banking-jobs" },
  { id: 2, title: "Heading 2", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg",base:"finance-jobs" },
  { id: 3, title: "Heading 3", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg",base:"government-jobs" },
  { id: 4, title: "Heading 4", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg",base:"management-jobs" },
  { id: 5, title: "Heading 5", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg",base:"psu-jobs" },
  { id: 6, title: "Heading 6", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg",base:"teaching-jobs" },
  { id: 7, title: "Heading 7", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg",base:"technology-jobs" },
];
  return (
    <div>
        <Blog cards={cards}/>
    </div>
  )
}

export default page
