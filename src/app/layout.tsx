import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Employee Next App',
  description: 'Human resource application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  )
}
