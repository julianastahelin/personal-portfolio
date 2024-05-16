'use client'
import { CurriculumSection } from '@/components/curriculum'
import { Curriculum, getSectionData } from '@/lib/data/loader.ts'


interface PageProps {
    params: {
        lang: string
    }
}

export default function Page({ params: { lang } }: PageProps) {

    const data = getSectionData('Curriculum', lang) as Curriculum

    return (
        <CurriculumSection data={data} />
    )
}
