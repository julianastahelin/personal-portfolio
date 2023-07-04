import './App.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Nav from './components/nav';
import Header from './components/header';
import CvSection from './components/cv';
import ProjectsSection from './components/projects';
import ContactSection from './components/contact';

import dataPt from './content/pt.json';
import dataEn from './content/en.json';

function App() {
  const [lang, setLang] = useState('pt');

  function changeLang(lang) {
    setLang(lang);
  }

  const [content, setContent] = useState(dataPt);
  useEffect(() => {
    lang === 'pt' ? setContent(dataPt) : setContent(dataEn)
  }, [lang])
  
  return (
    <Div>
      <Nav content={content} changeLang={changeLang} />
      <Header changeLang={changeLang} content={content} />
      <CvSection content={content} />
      <ProjectsSection content={content} />
      <ContactSection content={content} />
    </Div>
  );
}

const Div = styled.div`
  background: linear-gradient(180deg, #DCF2E7 0%, #DEF7F3 100%);
`
export default App;
