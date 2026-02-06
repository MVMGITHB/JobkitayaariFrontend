import { getHomeBlog, getLatestJobs } from "@/lib/home";
import HomeBlogClient from "./HomeBlogClient";

export default async function HomeBlog() {
  const [blog, latest] = await Promise.all([
    getHomeBlog(),
    getLatestJobs(),
  ]);

  return <HomeBlogClient blog={blog} latest={latest} />;
}