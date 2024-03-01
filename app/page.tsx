'use client'
import { useContext } from 'react'

import { HomeSection } from '@/components/home'
import { getSectionData, Home } from '@/lib/data/loader.ts'
import { LanguageContext } from '@/components/providers'


export default function Home() {

  const { language } = useContext(LanguageContext)
  const data = getSectionData('Home', language) as Home

  return (
    <HomeSection data={data} />
  )
}
