import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BMW Rental Manager',
  description: "Manage your customers' rental requests for available BMW cars.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} data-testid="layout">
        <Header />
        {children}
      </body>
    </html>
  )
}
