import { forwardRef } from 'react'
import { FaRegFilePdf } from 'react-icons/fa6'

import { getSectionData } from '@/lib/data/loader.ts'


const CvSection = forwardRef((props, ref) => {
    const { lang } = props
    const { fadeIn } = props

    const cv = getSectionData('Curriculum', lang)

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
            <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7'>
                <h3 className='
                             text-2xl text-center md:text-right
                             flex justify-center md:justify-end items-center 
                             w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1 md:pb-0
                             border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0 
                        '>
                    {cv.experience.title}
                </h3>
                <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                    {cv.experience.details.map((item, index) => {
                        return (
                            <div key={item + index}>
                                <h4 className='leading-6 font-semibold'>
                                    {item.name}
                                </h4>
                                <p className='font-normal'>
                                    {item.period}
                                </p>
                                <ul className='list-none pl-2'>
                                    {
                                        item.description.map((item, index) =>
                                            <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base' key={item + index}>
                                                {item}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7'>
                <h3 className='
                             text-2xl text-center md:text-right
                             flex justify-center md:justify-end items-center 
                             w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1 md:pb-0
                             border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0 
                        '>
                    {cv.education.title}
                </h3>
                <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                    {cv.education.degrees.map((degree, index) => {
                        return (
                            <div key={degree + index}>
                                <p className='text-lg font-light leading-6 lowercase [font-variant-caps:small-caps]'>
                                    {degree.level}
                                </p>
                                <div className='flex flex-col gap-2'>
                                {degree.details.map((detail, index) => {
                                    return (
                                        <div key={detail + index}>
                                            <h4 className='leading-6 font-semibold'>
                                                {detail.name}
                                            </h4>
                                            <p className='font-normal'>
                                                {detail.period}
                                            </p>
                                            <ul className='list-none pl-2'>
                                                {
                                                    detail.description?.map((item, index) =>
                                                        <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base' key={item + index}>
                                                            {item}
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7'>
                <h3 className='
                             text-2xl text-center md:text-right
                             flex justify-center md:justify-end items-center 
                             w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1 md:pb-0
                             border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0 
                        '>
                    {cv.courses.title}
                </h3>
                <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                    {cv.courses.details.map((item, index) => {
                        return (
                            <div key={item + index}>
                                <h4 className='leading-6 font-semibold'>
                                    {item.name}
                                </h4>
                                <p className='font-normal'>
                                    {item.period}
                                </p>
                                <ul className='list-none pl-2'>
                                    {
                                        item.description.map((item, index) =>
                                            <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base' key={item + index}>
                                                {item}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7'>
                <h3 className='
                    text-2xl text-center md:text-right
                    flex justify-center md:justify-end items-center 
                    w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1
                    border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0 
                '>
                    {cv.abilities.title}
                </h3>
                <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                    {cv.abilities.list.map((item, index) => {
                        return (
                            <div key={item.sort + index}>
                                <h4 className='leading-6 font-semibold'>{item.sort}</h4>
                                <ul className='list-none pl-2'>
                                    {
                                        item.abilities.map((ability, index) =>
                                            <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base' key={ability + index}>
                                                {ability}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7'>
                <h3 className='
                    text-2xl text-center md:text-right
                    flex justify-center md:justify-end items-center 
                    w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1
                    border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0 '>
                    {cv.languages.title}
                </h3>
                <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                    <ul className='list-none pl-2'>
                        {
                            cv.languages.list.map((language, index) =>
                                <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base' key={language + index}>
                                    {language.name} - {language.level}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7'>
                <h3 className='
                    text-2xl text-center md:text-right
                    flex justify-center md:justify-end items-center 
                    w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1
                    border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0
                 '>
                    {cv.links.title}
                </h3>
                <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                    <ul className='list-none pl-2'>
                        {
                            cv.links.list.map((link, index) =>
                                <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base' key={link + index}>
                                    {link.name} -
                                    {
                                        link.name === 'Currículo em pdf' || link.name === 'Curriculum in pdf'
                                            ? <a className='underline leading-6 visited:text-accent-quaternary' href={`../assets/pdf/${link.url}`} target='_blank'><FaRegFilePdf /></a>
                                            : <a className='underline leading-6 visited:text-accent-quaternary' href={link.url} target='_blank'>{link.url}</a>
                                    }
                                </li>)
                        }
                    </ul>
                </div>
            </div>

        </section>
    )
})

CvSection.displayName = 'CvSection'
export default CvSection
