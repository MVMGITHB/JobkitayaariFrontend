import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/context/auth";
import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";
import Navbar from "@/components/header/Navbar";
import BreadCrumbSchema from "@/components/BreadCrumb/BreadCrumbSchema";
import MainPopup from "@/components/popup/MainPopup";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ================= GLOBAL SEO ================= */

export const metadata = {
  metadataBase: new URL("https://jobkityaari.com"),

  title: {
    default: "Job Ki Tyaari",
    template: "%s | Job Ki Tyaari",
  },

  description:
    "Prepare for jobs with Job Ki Tyaari – latest exams, tips, and updates",

  icons: {
    icon: "/images/favicon3.png",
  },

  openGraph: {
    title: "Job Ki Tyaari",
    description:
      "Prepare for jobs with Job Ki Tyaari – latest exams, tips, and updates",
    url: "https://jobkityaari.com",
    siteName: "Job Ki Tyaari",
    images: [
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Job Ki Tyaari",
    description:
      "Prepare for jobs with Job Ki Tyaari – latest exams, tips, and updates",
    images: ["/images/social-preview.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ================= LAYOUT ================= */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Google Analytics (Correct way) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B6KBQKWQMS"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B6KBQKWQMS');
          `}
        </Script>

        <AuthProvider>
          <Header />
          <div className="lg:sticky top-0 z-40">
            <Navbar />
          </div>

          <MainPopup />
          <BreadCrumbSchema />

          {children}

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}