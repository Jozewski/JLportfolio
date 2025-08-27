/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
  return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;
            `.replace(/\s+/g, ' ').trim(),
          },
        ],
      },
    ];
}
}

export default nextConfig


