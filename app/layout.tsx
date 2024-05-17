import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

import { Providers } from '@/components/providers'
import { CustomToaster } from '@/components/custom-ui/toaster'
import { NavBar } from '@/components/nav'
import { Footer } from '@/components/footer'


const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'block',
})

export const metadata: Metadata = {
  title: {
    default: 'Juliana Stahelin - Front-end web developer | Portfolio',
    template: '%s | Juliana Stahelin - Front-end web developer',
  },
  description: 'Driven front-end web developer with experience in React, Next.js, TypeScript, JavaScript, Tailwind, and Git. Eager learner dedicated to excellence.',
  verification: {
    google: 'zdhzXXAUX7whEn2K13bEyu5mGVEOjkozqtrtpsiVckA'
  },
  keywords: [ 'Front-end development', 'Front-end developer', 'Frontend developer', 'Software developer', 'React', 'Next.js', 'Typescript', 'Javascript', 'Tailwind', 'Git', 'Juliana Stahelin', 'Juliana Coelho Stahelin' ],
  creator: 'Juliana Stahelin and Sabrina Stahelin',
  publisher: 'Vercel',
  openGraph: {
    title: 'Juliana Stahelin - Front-end web developer | Portfolio',
    description: 'Driven front-end web developer with experience in React, Next.js, TypeScript, JavaScript, Tailwind, and Git. Eager learner dedicated to excellence.',
    type: 'website',
    url: 'https://julianastahelin.com',
    siteName: 'Juliana Stahelin - Front-end web developer | Portfolio',
    locale: 'en_US'
  },
  alternates: {
    canonical: './',
    languages: {
      'pt-BR': '/',
      'en-US': '/'
    }
  }
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
          <NavBar />
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
