import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import { ReactNode } from 'react';
import './global.css';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Avocado',
  description: '-',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${ubuntu.variable} text-[#fff]`}>
      <head></head>
      <body className="bg-[#181818] p-8">{children}</body>
    </html>
  );
}
