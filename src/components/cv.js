import { forwardRef } from 'react'
import { FaRegFilePdf } from 'react-icons/fa6'


const CvSection = forwardRef((props, ref) => {
    const { content } = props
    const { fadeIn } = props

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
                {content.cvSection.title}
            </h2>
            {content.cvSection.experiences.map((exp, index) => {
                return (
                    <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7' key={index}>
                        <h3 key={index} className='
                             text-2xl text-center md:text-right
                             flex justify-center md:justify-end items-center 
                             w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1 md:pb-0
                             border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0 
                        '>
                            {exp.title}
                        </h3>
                        <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                            {exp.experience.map((item, index) => {
                                return (
                                    <div className='flex flex-col p-1' key={item.subtitle + index}>
                                        <p className='text-lg font-light leading-6 lowercase [font-variant-caps:small-caps]'>
                                            {item.subtitle}
                                        </p>
                                        <div className='flex flex-col gap-2'>
                                            {item.experience.map((item) => {
                                                return (
                                                    <div>
                                                        <h4 className='leading-6 font-semibold'>
                                                            {item.name}
                                                        </h4>
                                                        <p className='font-normal'>
                                                            {item.period}
                                                        </p>
                                                        <ul className='list-none pl-2'>
                                                            {
                                                                item.description.map((item) =>
                                                                    <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base'>
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
                )
            })}

            <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7'>
                <h3 className='
                    text-2xl text-center md:text-right
                    flex justify-center md:justify-end items-center 
                    w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1
                    border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0 
                '>
                    {content.cvSection.abilities.title}
                </h3>
                <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                    {content.cvSection.abilities.list.map((type) => {
                        return (
                            <div key={type.type}>
                                <h4 className='leading-6 font-semibold'>{type.type}</h4>
                                <ul className='list-none pl-2'>
                                    {
                                        type.abilities.map((ability) =>
                                            <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base'>
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
                    {content.cvSection.languages.title}
                </h3>
                <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                    <ul className='list-none pl-2'>
                        {
                            content.cvSection.languages.list.map((language) =>
                                <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base'>
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
                    {content.cvSection.links.title}
                </h3>
                <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                    <ul className='list-none pl-2'>
                        {
                            content.cvSection.links.list.map((link) =>
                                <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base'>
                                    {link.name} - {
                                        link.name === 'Currículo em pdf' || link.name === 'Curriculum in pdf'
                                            ? <a className='underline leading-6 visited:text-accent-quaternary' href={require(`../files/${link.url}`)} target='_blank'><FaRegFilePdf /></a>
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

export default CvSection
