import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

import { Providers } from '@/components/providers'
import { CustomToaster } from '@/components/custom-ui/toaster'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

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
    <html lang='en' className={`${roboto_mono.variable} font-sans`}>
      <body className='flex flex-col min-h-screen bg-primary'>
        <Providers>
          <Nav />
          <div className='mt-12 md:mt-16 py-10 flex justify-center flex-grow bg-primary break-words'>
            {children}
          </div>
          <Footer />
          <CustomToaster />
        </Providers>
      </body>
    </html>
  )
}
