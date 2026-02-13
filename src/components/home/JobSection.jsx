import { getBestJobs, getFeaturedJobs, getRecentJobs } from "@/lib/jobs";
import JobCards from "./JobCards";

export default async function JobSection() {
  const [bestJob, featuredJob, recentJob] = await Promise.all([
    getBestJobs(),
    getFeaturedJobs(),
    getRecentJobs(),
  ]);

  const bestMobile = bestJob.slice(0, 2);
  const featuredMobile = featuredJob.slice(0, 2);
  const recentMobile = recentJob.slice(0, 4);

  return (
    <section className="max-w-[95%] mx-auto px-4 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-green-500 text-white rounded-xl py-2 text-center">
            Best Job in 2026
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bestMobile?.map((job, i) => (
              <JobCards key={job?._id} job={job} priority={i === 0} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-orange-400 text-white rounded-xl py-2 text-center">
            Featured Jobs in 2026
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredMobile?.map((job) => (
              <JobCards key={job?._id} job={job} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 bg-purple-500 text-white rounded-xl py-2 text-center">
          Recent Job Vacancy in 2026
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentMobile?.map((job) => (
            <JobCards key={job?._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}