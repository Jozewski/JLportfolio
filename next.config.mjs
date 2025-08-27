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
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.0.8:3000',
  ],
}


// Add CSP header to allow YouTube and other video embeds
export default {
  ...nextConfig,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; frame-src https://www.youtube.com https://www.youtube-nocookie.com; script-src 'self' 'unsafe-inline' https://www.youtube.com https://www.youtube-nocookie.com; connect-src 'self'; img-src 'self' data: https://i.ytimg.com; style-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ]
  }
}
