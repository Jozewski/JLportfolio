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
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://youtube-nocookie.com; frame-ancestors 'self'; media-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://youtube.com;"
          },
        ],
      },
    ]
  },
}

export default nextConfig
