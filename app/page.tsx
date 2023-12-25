'use client'
import { useState, useEffect, useRef } from 'react'

import Nav from '@/components/nav'
import Header from '@/components/header'
import CvSection from '@/components/cv'
import ProjectsSection from '@/components/projects'
import ContactSection from '@/components/contact'
import Footer from '@/components/footer'
import { FadeIn, Language } from '@/types/core'


export default function Home() {
  const [lang, setLang] = useState<Language>('en')

  const top = useRef<null | HTMLDivElement>(null)
  const cv = useRef<null | HTMLDivElement>(null)
  const project = useRef<null | HTMLDivElement>(null)
  const contact = useRef<null | HTMLDivElement>(null)

  function changeLang(lang:Language) {
    setLang(lang)
  }

  const show = { opacity: 1, transition: 'ease-in-out 0.5s' }
  const hide = { opacity: 0 }
  const [fadeIn, setFadeIn] = useState<FadeIn>(show)

  useEffect(() => {
    setFadeIn(hide)
    setTimeout(() => {
      setFadeIn(show)
    }, 80)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return (
    <div className='flex flex-col items-center bg-primary'>
      <Nav language={lang} fadeIn={fadeIn} changeLang={changeLang} topRef={top} cvRef={cv} projectRef={project} contactRef={contact} />
      <Header language={lang} fadeIn={fadeIn} ref={top} projectRef={project} />
      <CvSection language={lang} fadeIn={fadeIn} ref={cv} />
      <ProjectsSection language={lang} fadeIn={fadeIn} ref={project} />
      <ContactSection language={lang} fadeIn={fadeIn} ref={contact} />
      <Footer language={lang} fadeIn={fadeIn} />
    </div>
  )
}
