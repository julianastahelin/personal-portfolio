'use client'
import { ProjectsSection } from '@/components/projects'
import { Projects, getSectionData } from '@/lib/data/loader.ts'


interface PageProps {
    params: {
        lang: string
    }
}

export default function Page({ params: { lang } }: PageProps) {

    const data = getSectionData('Projects', lang) as Projects

    return (
        <ProjectsSection data={data} />
    )
}
