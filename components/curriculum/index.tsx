import { Curriculum } from '@/lib/data/loader.ts'

import { ExperiencePart } from './experience'
import { EducationPart } from './education'
import { CoursesPart } from './courses'
import { AbilitiesPart } from './abilities'
import { LanguagesPart } from './languages'
import { LinksPart } from './links'


export function CurriculumSection({ data }: { data: Curriculum }) {

    const curriculumParts: {title:string, component:JSX.Element}[] = [
        {title: data.experience.title, component: <ExperiencePart experience={data.experience} />},
        {title: data.education.title, component: <EducationPart education={data.education} />},
        {title: data.courses.title, component: <CoursesPart courses={data.courses} />},
        {title: data.abilities.title, component: <AbilitiesPart abilities={data.abilities} />},
        {title: data.languages.title, component: <LanguagesPart languages={data.languages} />},
        {title: data.links.title, component: <LinksPart links={data.links} />},
    ]

    return (
        <section className='flex flex-col items-center gap-10 w-4/5 max-w-7xl'>
            <h2 className='text-center text-3xl font-light md:pb-6'>
                {data.title}
            </h2>
            {curriculumParts.map((part, index) => {
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
            })}
        </section>
    )
}
