import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/context/auth";
import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";
import Navbar from "@/components/header/Navbar";
import BreadCrumbSchema from "@/components/BreadCrumb/BreadCrumbSchema";
import JobKityaariPopup from "@/components/popup/RegisterPopup";
import MainPopup from "@/components/popup/MainPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // prevents invisible text during font load
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Job Ki Tyaari",
  description: "Prepare for jobs with Job Ki Tyaari – latest exams, tips, and updates",
  openGraph: {
    title: "Job Ki Tyaari",
    description: "Prepare for jobs with Job Ki Tyaari – latest exams, tips, and updates",
    url: "https://jobkityaari.com",
    siteName: "Job Ki Tyaari",
    images: [
      {
        url: "https://jobkityaari.com/images/social-preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Ki Tyaari",
    description: "Prepare for jobs with Job Ki Tyaari – latest exams, tips, and updates",
    images: ["https://jobkityaari.com/images/social-preview.png"],
    site: "@YourTwitterHandle", // replace with your Twitter handle
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          href="/images/favicon3.png"
          type="image/x-icon"
          sizes="16x16"
        />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Social Media / Open Graph */}
        <meta property="og:title" content="Job Ki Tyaari" />
        <meta property="og:description" content="Prepare for jobs with Job Ki Tyaari – latest exams, tips, and updates" />
        <meta property="og:image" content="https://jobkityaari.com/images/social-preview.png" />
        <meta property="og:url" content="https://jobkityaari.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Job Ki Tyaari" />
        <meta name="twitter:description" content="Prepare for jobs with Job Ki Tyaari – latest exams, tips, and updates" />
        <meta name="twitter:image" content="https://jobkityaari.com/images/social-preview.png" />
        <meta name="twitter:site" content="@YourTwitterHandle" />

        {/* HSTS Header via meta (works if you don't have NGINX headers) */}
        <meta httpEquiv="Strict-Transport-Security" content="max-age=63072000; includeSubDomains; preload" />

        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B6KBQKWQMS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B6KBQKWQMS');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <Header />
          <div className="lg:sticky top-0 z-40">
            <Navbar />
          </div>
          <MainPopup />
          <BreadCrumbSchema />
          {/* <JobKityaariPopup /> */}
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
