'use client'
import { TechStackSection } from '@/components/tech-stack'
import { TechStack, getSectionData } from '@/lib/data/loader.ts'


interface PageProps {
    params: {
        lang: string
    }
}

export default function Page({ params: { lang } }: PageProps) {

    const data = getSectionData('TechStack', lang) as TechStack

    return (
        <TechStackSection data={data} />
    )
}
