/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  images: {
   remotePatterns: [
      {
       hostname: 'pixabay.com',        
      },
      {
       hostname: 'images.pexels.com',        
      },
    ],
  },
};

module.exports = nextConfig;
