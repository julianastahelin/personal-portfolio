import { Curriculum } from '@/lib/data/loader.ts'

import { ExperiencePart } from './experience'
import { EducationPart } from './education'
import { CoursesPart } from './courses'
import { AbilitiesPart } from './abilities'
import { LanguagesPart } from './languages'
import { LinksPart } from './links'


export function CurriculumSection({ data }: { data: Curriculum }) {

    return (
        <section className='flex flex-col items-center gap-10 w-4/5 max-w-7xl'>
            <h2 className='text-center text-3xl font-light md:pb-6'>
                {data.title}
            </h2>
            <ExperiencePart experience={data.experience} />
            <EducationPart education={data.education} />
            <CoursesPart courses={data.courses} />
            <AbilitiesPart abilities={data.abilities} />
            <LanguagesPart languages={data.languages} />
            <LinksPart links={data.links} />
        </section>
    )
}
