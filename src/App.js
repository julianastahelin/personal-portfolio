import { useState, useEffect, useRef } from 'react'

import './App.css'
import Nav from './components/nav'
import TopSection from './components/top'
import CvSection from './components/cv'
import ProjectsSection from './components/projects'
import ContactSection from './components/contact'
import Footer from './components/footer'
import dataPt from './content/pt.json'
import dataEn from './content/en.json'


export default function App() {
  const [lang, setLang] = useState('pt')

  const top = useRef(null)
  const cv = useRef(null)
  const project = useRef(null)
  const contact = useRef(null)

  function changeLang(lang) {
    setLang(lang)
  }

  const [content, setContent] = useState(dataPt)
  useEffect(() => {
    lang === 'pt' ? setContent(dataPt) : setContent(dataEn)
  }, [lang])

  const show = { opacity: 1, transition: 'ease-in-out 0.5s' }
  const hide = { opacity: 0 }
  const [fadeIn, setFadeIn] = useState(show)

  useEffect(() => {
    setFadeIn(hide)
    setTimeout(() => {
      setFadeIn(show)
    }, 80)
  }, [lang])

  return (
    <div className='flex flex-col items-center bg-primary'>
      <Nav content={content} changeLang={changeLang} topRef={top} cvRef={cv} projectRef={project} contactRef={contact} fadeIn={fadeIn} />
      <TopSection changeLang={changeLang} content={content} ref={top} projectRef={project} fadeIn={fadeIn} />
      <CvSection content={content} ref={cv} fadeIn={fadeIn} />
      <ProjectsSection content={content} ref={project} fadeIn={fadeIn} />
      <ContactSection content={content} ref={contact} fadeIn={fadeIn} />
      <Footer content={content} fadeIn={fadeIn} />
    </div>
  )
}
