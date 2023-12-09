/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/films/:path*',
        destination: `${process.env.DESTINATION_URL}/films/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
