import base_url from "@/components/helper/helper";

async function fetcher(url) {
  try {
    console.log("Fetching URL:", url);

    const res = await fetch(url, {
      next: { revalidate: 3600 },
      cache: "no-store", // IMPORTANT for local dev
    });

    // If backend crashed
    if (!res.ok) {
      console.error("API Status Error:", res.status, url);
      return [];
    }

    // If response not JSON
    const text = await res.text();

    try {
      return JSON.parse(text);
    } catch {
      console.error("Invalid JSON from API:", url);
      return [];
    }

  } catch (err) {
    console.error("Fetch failed:", url, err.message);
    return [];
  }
}

export async function getBestJobs() {
  const data = await fetcher(`${base_url}/api/bestJob/getAllBestJob`);
  return data?.[0]?.jobs ?? [];
}

export async function getFeaturedJobs() {
  const data = await fetcher(`${base_url}/api/featueJob/getAllFeatureJob`);

  console.log("Featured Jobs API response:", data);
  return data?.[0]?.jobs ?? [];
}

export async function getRecentJobs() {
  const data = await fetcher(`${base_url}/api/recentJob/getAllRecentJOb`);
    console.log("Recent Jobs API response:", data);
  return data?.[0]?.jobs ?? [];
}