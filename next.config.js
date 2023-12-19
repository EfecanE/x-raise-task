/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "via.placeholder.com",
      "prl-content-publish-prod.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
