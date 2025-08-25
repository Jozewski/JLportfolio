import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Full-Stack Developer Portfolio",
  description: "Professional portfolio showcasing full-stack development skills and projects",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${sourceSans.style.fontFamily};
  --font-heading: ${playfairDisplay.variable};
  --font-body: ${sourceSans.variable};
}
        `}</style>
      </head>
      <body className={`${playfairDisplay.variable} ${sourceSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
