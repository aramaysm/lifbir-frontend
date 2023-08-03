/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  images: {
   remotePatterns: [
      {
       hostname: 'pixabay.com',        
      },
    ],
  },
};

module.exports = nextConfig;
