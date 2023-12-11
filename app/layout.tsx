import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const roboto_mono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-roboto-mono', 
  display: 'block',
})

export const metadata: Metadata = {
  title: 'Juliana Stahelin - Portfolio',
  description: 'Frontend web developer - Next.js | Typescript | Tailwind | Git',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto_mono.variable} font-sans`}>
      <body>
        {children}
      </body>
    </html>
  )
}
