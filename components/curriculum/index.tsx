import { Download } from 'lucide-react'

import { Curriculum } from '@/lib/data/loader.ts'
import { Language } from '@/components/providers'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { ExperiencePart } from './experience'
import { EducationPart } from './education'
import { CoursesPart } from './courses'
import { AbilitiesPart } from './abilities'
import { LanguagesPart } from './languages'


export function CurriculumSection({ data }: { data: Curriculum }) {

    const curriculumParts: { title: string, component: JSX.Element }[] = [
        { title: data.experience.title, component: <ExperiencePart experience={data.experience} /> },
        { title: data.education.title, component: <EducationPart education={data.education} /> },
        { title: data.courses.title, component: <CoursesPart courses={data.courses} /> },
        { title: data.abilities.title, component: <AbilitiesPart abilities={data.abilities} /> },
        { title: data.languages.title, component: <LanguagesPart languages={data.languages} /> },
    ]

    const { language } = data

    return (
        <section className='flex flex-col items-center gap-5 w-4/5 max-w-7xl'>
            <div className='w-full md:w-2/3 flex flex-col gap-2'>
                <h2 className='text-center text-3xl font-light md:pb-6'>
                    {data.title}
                </h2>
                <DownloadPDFButton language={language as Language} />
            </div>
            {
                curriculumParts.map((part, index) => {
                    return (
                        <div className='flex flex-col items-center w-full gap-2 md:gap-7' key={part.title + index}>
                            <h3 className='text-2xl text-center flex justify-center items-center w-full md:w-2/3 pr-0 pb-1 border-border-primary border-r-0 border-b-[1px]'>
                                {part.title}
                            </h3>
                            <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                                {part.component}
                            </div>
                        </div>
                    )
                })
            }
        </section >
    )
}


function DownloadPDFButton({language} : { language: Language }) {

    type PDFButton = {
        en: string,
        pt: string
    }

    const downloadPDFButton: PDFButton = {
        en: 'Download PDF',
        pt: 'Baixar PDF'
    }

    const pdfFileName = {
        en: 'Juliana Coelho Stahelin - Front-end web developer',
        pt: 'Juliana Coelho Stahelin - Desenvolvedora Front-end',
    }

    return (
        <a className='self-end' href={`../assets/pdf/${pdfFileName[language]}.pdf`} target='_blank'>
        <TooltipProvider>
            <Tooltip delayDuration={400}>
                <TooltipTrigger>
                    <Download className='h-6 w-6'/>
                </TooltipTrigger>
                <TooltipContent className='bg-primary-foreground text-tertiary-foreground'>
                    <p>{downloadPDFButton[language]}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </a>
    )
}
