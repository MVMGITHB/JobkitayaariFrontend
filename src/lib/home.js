import base_url from "@/components/helper/helper";

async function safeFetch(url) {
  try {
    const res = await fetch(url, {
      next: { revalidate: 600 },
      cache: "no-store",
    });

    if (!res.ok) return [];

    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      return [];
    }
  } catch {
    return [];
  }
}

export async function getHomeBlog() {
  const data = await safeFetch(`${base_url}/api/blog/getHomeBlog`);
  return data?.slice(0, 4) ?? [];
}

export async function getLatestJobs() {
  const data = await safeFetch(`${base_url}/api/job/homePageLatestJob`);
  return data ?? [];
}