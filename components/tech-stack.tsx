import { LegacyRef, forwardRef } from 'react'

import { TechStack, getSectionData } from '@/lib/data/loader.ts'
import { SectionProps } from '@/types/core'
import { TechIcon, TechName } from '@/components/tech-icons'


const TechStackSection = forwardRef(({ language, fadeIn }: SectionProps, ref: LegacyRef<HTMLElement>) => {
    const technologies = getSectionData('TechStack', language) as TechStack

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
                {technologies.title}
            </h2>
            <div className='flex items-end justify-center gap-9 flex-wrap w-4/5 md:w-3/5'>
                {technologies.technologies.map((tech, index) => {
                    return (
                        <div className='flex flex-col items-center' key={tech.title + index}>
                            <TechIcon name={tech.title as TechName} className='h-10 w-10' />
                            {tech.address
                                ? <a href={tech.address} target='_blank'><span>{tech.title}</span></a>
                                : <span>{tech.title}</span>
                            }
                        </div>
                    )
                })}
            </div>
        </section>
    )
})

TechStackSection.displayName = 'TechStackSetcion'
export default TechStackSection
