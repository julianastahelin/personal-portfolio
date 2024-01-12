'use client'
import { useContext } from 'react'

import { TechStackSection } from '@/components/tech-stack'
import { TechStack, getSectionData } from '@/lib/data/loader.ts'
import { LanguageContext } from '@/components/providers'


export default function Page() {

    const { language } = useContext(LanguageContext)
    const data = getSectionData('TechStack', language) as TechStack

    return (
        <TechStackSection data={data} />
    )
}
