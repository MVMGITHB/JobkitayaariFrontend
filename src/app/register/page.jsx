import Register from "@/components/Auth/Register";

export const metadata = {
    title: 'Register – Apply for Govt & Private  Jobs',
    description: 'Looking for  jobs in India? Find vacancies in government & private sector.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}

export default function page() {
  return (
    <div className="">
     
      <Register />
    </div>
  );
}
