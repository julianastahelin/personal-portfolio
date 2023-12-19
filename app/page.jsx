'use client'
import { useState, useEffect, useRef } from 'react'

import Nav from '@/components/nav'
import Header from '@/components/header'
import CvSection from '@/components/cv'
import ProjectsSection from '@/components/projects'
import ContactSection from '@/components/contact'
import Footer from '@/components/footer'


export default function Home() {
  const [lang, setLang] = useState('en')

  const top = useRef(null)
  const cv = useRef(null)
  const project = useRef(null)
  const contact = useRef(null)

  function changeLang(lang) {
    setLang(lang)
  }

  const show = { opacity: 1, transition: 'ease-in-out 0.5s' }
  const hide = { opacity: 0 }
  const [fadeIn, setFadeIn] = useState(show)

  useEffect(() => {
    setFadeIn(hide)
    setTimeout(() => {
      setFadeIn(show)
    }, 80)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return (
    <div className='flex flex-col items-center bg-primary'>
      <Nav lang={lang} changeLang={changeLang} topRef={top} cvRef={cv} projectRef={project} contactRef={contact} fadeIn={fadeIn} />
      <Header changeLang={changeLang} lang={lang} ref={top} projectRef={project} fadeIn={fadeIn} />
      <CvSection lang={lang} ref={cv} fadeIn={fadeIn} />
      <ProjectsSection lang={lang} ref={project} fadeIn={fadeIn} />
      <ContactSection lang={lang} ref={contact} fadeIn={fadeIn} />
      <Footer lang={lang} fadeIn={fadeIn} />
    </div>
  )
}
