import { Experience } from '@/lib/data/loader.ts'


interface ExperiencePartProps {
    experience: Experience
}

export function ExperiencePart({ experience }: ExperiencePartProps) {

    return (
        <>
            {experience.details.map((item, index) => {
                return (
                    <div key={item.name + index}>
                        <h4 className='font-semibold sm:leading-6 leading-5 text-xs sm:text-base'>
                            {item.name}
                        </h4>
                        <p className='font-normal text-xs sm:text-base'>
                            {item.period}
                        </p>
                        <ul className='list-none pl-2 text-xs sm:text-base'>
                            {
                                item.description?.map((item, index) =>
                                    <li className='font-light sm:leading-4 leading-3 before:content-["•"] before:pr-2 before:text-base' key={item + index}>
                                        {item}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                )
            })}
        </>
    )
}
