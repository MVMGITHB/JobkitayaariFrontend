import React from "react";

const WakinHome1 = [
  { company: "Accenture Hiring", date: "Best in Industry", link: "https://unstop.com/competitions/accenture-customer-service-representative-hiring-challenge-accenture-1479413?utm_source=PDTV&utm_medium=Affiliates&utm_campaign=MSK29112024&ref=AffPDTV" },
  { company: "Axis", date: "Rs.10,00,000/- Salary", link: "https://unstop.com/jobs/business-development-associate-insurance-sales-axis-max-life-insurance-limited-1487650?utm_source=PDTV&utm_medium=Affiliates&utm_campaign=MSK29112024&ref=AffPDTV" },
  { company: ".Net Developer", date: "Rs.2,40,000/- to 5,00,000/- Lakhs", link: "https://unstop.com/jobs/net-mvc-developers-unnati-informatics-llp-1445102?utm_source=PDTV&utm_medium=Affiliates&utm_campaign=MSK29112024&ref=AffPDTV" },
 
 
];

const WakinHome = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full  table-auto">
        <thead className="w-full">
          <tr className="bg-[#86003c] text-white text-sm sm:text-base w-full">
  <th
    colSpan={3}
    className="border text-center border-gray-300 px-4 py-3 font-semibold "
  >
    Work From Home
  </th>
</tr>

        </thead>
        <tbody className="w-full text-gray-800 text-sm sm:text-base">
          {WakinHome1.map((item, index) => (
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

export default WakinHome;
