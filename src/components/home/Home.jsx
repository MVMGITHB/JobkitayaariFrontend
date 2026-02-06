// "use client";
// import JobSection from "./JobSection";
// // import Cookies from "js-cookie";
// import HomeBlog from "./HomeBlog";
// // import { useEffect, useState } from "react";

// const Home = () => {
//   // const [token, setToken] = useState("");

//   // useEffect(() => {
//   //   const userToken = Cookies.get("jwt");
//   //   if (userToken) {
//   //     setToken(userToken);
//   //   }
//   // }, []);

//   return (
//     <div>
//       <h1
//         className="hidden md:block text-lg lg:text-xl text-center font-bold px-2 lg:px-4"
//         style={{ fontDisplay: "swap" }}
//       >
//         Find Your Dream Job – Government, IT, Bank & Private Jobs in India
//       </h1>

//       <JobSection />
//       <HomeBlog />
//     </div>
//   );
// };

// export default Home;


import JobSection from "./JobSection";
import HomeBlog from "./HomeBlog";

export default function Home() {
  return (
    <main>
      <h1 className="hidden md:block text-lg lg:text-xl text-center font-bold px-2 lg:px-4">
        Find Your Dream Job – Government, IT, Bank & Private Jobs in India
      </h1>

      <JobSection />
      <HomeBlog />
    </main>
  );
}