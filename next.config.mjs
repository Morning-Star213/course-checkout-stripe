/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects: async () => [
    {
      source: '/',
      destination: '/signup?step=1',
      permanent: true,
    },
  ]
};

export default nextConfig;
