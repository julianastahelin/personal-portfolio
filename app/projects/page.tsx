'use client'
import { useContext } from 'react'

import { ProjectsSection } from '@/components/projects'
import { Projects, getSectionData } from '@/lib/data/loader.ts'
import { LanguageContext } from '@/components/providers'


export default function Page() {

    const { language } = useContext(LanguageContext)
    const data = getSectionData('Projects', language) as Projects

    return (
        <ProjectsSection data={data} />
    )
}
