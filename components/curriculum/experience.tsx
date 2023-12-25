import { Experience } from '@/lib/data/loader.ts'


interface ExperiencePartProps {
    experience: Experience
}

export function ExperiencePart ({experience}: ExperiencePartProps) {

    return (
            <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7'>
                <h3 className='
                             text-2xl text-center md:text-right
                             flex justify-center md:justify-end items-center 
                             w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1 md:pb-0
                             border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0 
                        '>
                    {experience.title}
                </h3>
                <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                    {experience.details.map((item, index) => {
                        return (
                            <div key={item.name + index}>
                                <h4 className='leading-6 font-semibold'>
                                    {item.name}
                                </h4>
                                <p className='font-normal'>
                                    {item.period}
                                </p>
                                <ul className='list-none pl-2'>
                                    {
                                        item.description?.map((item, index) =>
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
}
