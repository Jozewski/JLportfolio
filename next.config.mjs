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
videos
            value: "frame-src 'self' https://www.youtube.com https://youtube.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com; object-src 'none'; media-src 'self' https://www.youtube.com;"

           
          },
        ],
      },
    ]
  },
}

export default nextConfig
