'use client'
import { useContext } from 'react'

import { HeaderSection } from '@/components/header'
import { getSectionData, Header } from '@/lib/data/loader.ts'
import { LanguageContext } from '@/components/providers'

export default function Home() {

  const { language } = useContext(LanguageContext)
  const data = getSectionData('Header', language) as Header

  return (
    <HeaderSection data={data} />
  )
}
