import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav>
        <h1>Book A Call</h1>
        <link href="/components/HeroSection">Hero Section</link>
        <link href="/components/FeaturesSection">Features</link>
        <link href="/components/CallToAction">Contact Me</link>
      </nav>
      {children}</body>
    </html>
  )
}
