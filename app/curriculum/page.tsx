'use client'
import { useContext } from 'react'

import { CurriculumSection } from '@/components/curriculum'
import { LanguageContext } from '@/components/providers'
import { Curriculum, getSectionData } from '@/lib/data/loader.ts'


export default function Page() {

    const { language } = useContext(LanguageContext)
    const data = getSectionData('Curriculum', language) as Curriculum

    return (
        <CurriculumSection data={data} />
    )
}
