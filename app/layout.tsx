import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"
import Footer from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yale School of Art",
  description: "A Living Wiki of Creativity - Yale School of Art",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="flex min-h-screen flex-col">
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Analytics />
          </Suspense>
          <Footer />
        </div>
      </body>
    </html>
  )
}
