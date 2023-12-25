import { LegacyRef, forwardRef } from 'react'

import { getSectionData, Curriculum } from '@/lib/data/loader.ts'
import { SectionProps } from '@/types/core'

import { ExperiencePart } from './experience'
import { EducationPart } from './education'
import { CoursesPart } from './courses'
import { AbilitiesPart } from './abilities'
import { LanguagesPart } from './languages'
import { LinksPart } from './links'


const CurriculumSection = forwardRef(({ language, fadeIn }: SectionProps, ref: LegacyRef<HTMLElement>) => {

    const cv = getSectionData('Curriculum', language) as Curriculum

    return (
        <section
            ref={ref}
            style={fadeIn}
            className='
                flex flex-col items-center
                gap-10 pb-7 scroll-mt-20 mt-14
                w-full md:w-4/5 max-w-7xl
            '
        >
            <h2 className='text-center text-3xl font-light mt-4 scroll-mt-24 md:pb-6'>
                {cv.title}
            </h2>
            <ExperiencePart experience={cv.experience} />
            <EducationPart education={cv.education} />
            <CoursesPart courses={cv.courses} />
            <AbilitiesPart abilities={cv.abilities} />
            <LanguagesPart languages={cv.languages} />
            <LinksPart links={cv.links} />
        </section>
    )
})

CurriculumSection.displayName = 'CvSection'
export default CurriculumSection
