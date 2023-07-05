import './App.css';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Nav from './components/nav';
import TopSection from './components/top';
import CvSection from './components/cv';
import ProjectsSection from './components/projects';
import ContactSection from './components/contact';
import Footer from './components/footer';
import dataPt from './content/pt.json';
import dataEn from './content/en.json';

function App() {
  const [lang, setLang] = useState('pt');

  const top = useRef(null);
  const cv = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  function changeLang(lang) {
    setLang(lang);
  }

  const [content, setContent] = useState(dataPt);
  useEffect(() => {
    lang === 'pt' ? setContent(dataPt) : setContent(dataEn)
  }, [lang])
  
  return (
    <Div>
      <Nav content={content} changeLang={changeLang} topRef={top} cvRef={cv} projectRef={project} contactRef={contact} />
      <TopSection changeLang={changeLang} content={content} ref={top} projectRef={project} />
      <CvSection content={content} ref={cv}/>
      <ProjectsSection content={content} ref={project} />
      <ContactSection content={content} ref={contact} />
      <Footer content={content} />
    </Div>
  );
}

const Div = styled.div`
  background: linear-gradient(180deg, #DCF2E7 0%, #DEF7F3 100%);
  align-items: center;
  flex-direction: column;
  display: flex;

`
export default App;
