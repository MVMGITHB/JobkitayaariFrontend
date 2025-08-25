import ThankYou from "@/components/Thankyou.jsx";

export const metadata = {
  title: "Thank You | JobKityaari",
  description:
    "Thank you for registering at JobKityaari. Our team will contact you soon.",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./thank-you",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Page() {
  return (
    <div>
      <ThankYou />
    </div>
  );
}

export default Page;
