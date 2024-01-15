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
        </>
    )
}
