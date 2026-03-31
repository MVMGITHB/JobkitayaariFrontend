import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-2xl  p-5 mt-6">
    <h2 className="text-xl md:text-2xl font-semibold mb-3 border-l-4 border-blue-500 pl-3">
      {title}
    </h2>
    {children}
  </div>
);

const ShowJobTemplate = ({ slug, data }) => {
  if (!data) return <div className="p-6">Loading...</div>;

  const makeArray = (field) => {
    if (!field) return [];
    return Array.isArray(field) ? field : field.split("\n");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4">
      <div className="max-w-5xl mx-auto">
        {/* H1 */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          {data.postName} Recruitment 2026 – Apply Online, Eligibility, Last
          Date
        </h1>

        {/* Intro */}
        {(data?.title1 || data?.title2 || data?.title3) && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
            <p className="mb-2">{data.title1}</p>
            <p className="mb-2">{data.title2}</p>
            <p>{data.title3}</p>
          </div>
        )}

        {/* Job Overview */}
        <Section title="Job Overview">
          <div className="overflow-x-auto">
            <table className="w-full border text-sm md:text-base">
              <tbody>
                {data.companyName && (
                  <tr>
                    <td className="border p-2 font-semibold">Organization</td>
                    <td className="border p-2">{data.companyName}</td>
                  </tr>
                )}
                {data.postName && (
                  <tr>
                    <td className="border p-2 font-semibold">Post Name</td>
                    <td className="border p-2">{data.postName}</td>
                  </tr>
                )}
                {data.totalPost && (
                  <tr>
                    <td className="border p-2 font-semibold">
                      Total Vacancies
                    </td>
                    <td className="border p-2">{data.totalPost}</td>
                  </tr>
                )}
                {data.location && (
                  <tr>
                    <td className="border p-2 font-semibold">Location</td>
                    <td className="border p-2">{data.location}</td>
                  </tr>
                )}
                {data.salary && (
                  <tr>
                    <td className="border p-2 font-semibold">Salary</td>
                    <td className="border p-2 text-green-600 font-medium">
                      {data.salary}
                    </td>
                  </tr>
                )}
                {data.lastDate && (
                  <tr>
                    <td className="border p-2 font-semibold">Last Date</td>
                    <td className="border p-2 text-red-500">{data.lastDate}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Important Dates */}

        {(data?.applicationStartDate ||
          data?.lastDate ||
          data?.adminCardDate) && (
          <Section title="Important Dates">
            <ul className="list-disc ml-6 space-y-1">
              {data.applicationStartDate && (
                <li>Start Date: {data.applicationStartDate}</li>
              )}
              {data.lastDate && <li>Last Date: {data.lastDate}</li>}
              {data.adminCardDate && <li>Admit Card: {data.adminCardDate}</li>}
            </ul>
          </Section>
        )}

        {/* Eligibility */}
        {makeArray(data.requirementdata).length > 0 && (
          <Section title="Eligibility Criteria">
            <ul className="list-disc ml-6 space-y-1">
              {makeArray(data.requirementdata).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>
        )}

        {/* Who Should Apply */}
        {makeArray(data.ageLimit).length > 0 && (
          <Section title="Who Should Apply">
            <ul className="list-disc ml-6 space-y-1">
              {makeArray(data.ageLimit).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>
        )}

        {/* Preparation */}
        {makeArray(data.jobDescription).length > 0 && (
          <Section title="Preparation Tips">
            <ul className="list-disc ml-6 space-y-1">
              {makeArray(data.jobDescription).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>
        )}

        {/* Salary */}
        {makeArray(data.skill).length > 0 && (
          <Section title="who can apply">
            <ul className="list-disc ml-6 space-y-1">
              {makeArray(data.skill).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>
        )}

        {makeArray(data.salaryBenefit).length > 0 && (
          <Section title="Salary & Benefits">
            <ul className="list-disc ml-6 space-y-1">
              {makeArray(data.salaryBenefit).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>
        )}

        {makeArray(data.preperationTips).length > 0 && (
          <Section title="Preparation Tips">
            <ul className="list-disc ml-6 space-y-1">
              {makeArray(data.preperationTips).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>
        )}

        {/* Links */}
        {(data.applylink || data.officialwebsitelink) && (
          <Section title="Important Links">
            <div className="flex flex-wrap gap-3">
              {data.applylink && (
                <a
                  href={data.applylink}
                  target="_blank"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Apply Online
                </a>
              )}
              {data.officialwebsitelink && (
                <a
                  href={data.officialwebsitelink}
                  target="_blank"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg"
                >
                  Official Website
                </a>
              )}
              {data.downloadDetailsNotification && (
                <a
                  href={data.downloadDetailsNotification}
                  target="_blank"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Notification
                </a>
              )}
            </div>
          </Section>
        )}

        {/* FAQ */}
        {data?.faqs?.length > 0 && (
          <Section title="FAQs">
            {data.faqs.map((faq, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold">
                  Q{i + 1}: {faq.ques}
                </p>
                <p className="text-gray-700">A: {faq.ans}</p>
              </div>
            ))}
          </Section>
        )}

        {/* Extra */}
        {(data.Jobtype || data.Jobrole || data.experience) && (
          <Section title="Other Details">
            <ul className="list-disc ml-6 space-y-1">
              {data.Jobtype && <li>Job Type: {data.Jobtype}</li>}
              {data.Jobrole && <li>Job Role: {data.Jobrole}</li>}
              {data.experience && <li>Experience: {data.experience}</li>}
            </ul>
          </Section>
        )}
      </div>
    </div>
  );
};

export default ShowJobTemplate;
