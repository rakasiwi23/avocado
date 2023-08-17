import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './_components/theme-registry/theme-registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avocado',
  description: '-',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
