/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["firebasestorage.googleapis.com", "raw.githubusercontent.com", "cdn.worldvectorlogo.com"],
  },
};

module.exports = nextConfig;
