import React from "react";

// const walkinData = [
//   { company: "Genpact (Video Call)", date: "6th June 2025", link: "#" },
//   { company: "HDFC Bank", date: "10th June 2025", link: "#" },
//   { company: "Cognizant", date: "10th June 2025", link: "#" },
//   { company: "Infosys", date: "12th & 13th June 2025", link: "#" },
//   { company: "Cognizant", date: "7th June 2025", link: "#" },
//   { company: "HDFC Bank", date: "11th June 2025", link: "#" },
//   { company: "Wipro", date: "9th June 2025", link: "#" },
//   { company: "Tech Mahindra", date: "8th June 2025", link: "#" },
//   { company: "TCS", date: "10th June 2025", link: "#" },
//   { company: "Accenture", date: "6th June 2025", link: "#" },
//   { company: "Amazon", date: "14th June 2025", link: "#" },
//   { company: "Google", date: "15th June 2025", link: "#" },
//   { company: "Microsoft", date: "16th June 2025", link: "#" },
//   { company: "Capgemini", date: "17th June 2025", link: "#" },
//   { company: "Mindtree", date: "18th June 2025", link: "#" },
//   { company: "Zensar", date: "19th June 2025", link: "#" },
//   { company: "NTT Data", date: "20th June 2025", link: "#" },
//   { company: "Concentrix", date: "21st June 2025", link: "#" },
//   { company: "BYJU'S", date: "22nd June 2025", link: "#" },
//   { company: "Swiggy", date: "23rd June 2025", link: "#" },
// ];

const WalkinTable = ({walkinData}) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full  table-auto">
        <thead className="w-full">
          <tr className="bg-[#86003c] text-white text-sm sm:text-base w-full">
            <th className="border border-gray-300 px-21 py-3 font-semibold text-left w-1/3">
              Company Name
            </th>
            <th className="border border-gray-300 px-4 py-3 font-semibold text-left w-1/3">
              Date
            </th>
            <th className="border border-gray-300 px-4 py-3 font-semibold text-left w-1/3">
              Full Details
            </th>
          </tr>
        </thead>
        <tbody className="w-full text-gray-800 text-sm sm:text-base">
          {walkinData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 w-full">
              <td className="border border-gray-300 px-4 py-3 w-1/3">
                {item.company}
              </td>
              <td className="border border-gray-300 px-4 py-3 w-1/3">
                {item.date}
              </td>
              <td className="border border-gray-300 px-4 py-3 w-1/3">
                <a
                  href={item.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Here
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WalkinTable;
