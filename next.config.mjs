/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.jobkityaari.com",
      "api.shopsmaart.com",
      "localhost",
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
