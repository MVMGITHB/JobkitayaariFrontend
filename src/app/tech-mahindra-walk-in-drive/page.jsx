import React from 'react'
import Mahindra from '@/components/techMahindra/Mahindra'
import TechMahinraHome from '@/components/techMahindra/TechMahinraHome'

export const metadata = {
  title: 'About Us | Job Ki Tyaari - Your Career Guide',
  description: 'Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};


export const page = () => {
  return (
    <div>
        <TechMahinraHome/>
    </div>
  )
}


export default page