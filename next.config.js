/** @type {import('next').NextConfig} */
const nextConfig = {
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
