import { Courses } from '@/lib/data/loader.ts'


interface CoursesPartProps {
    courses: Courses
}

export function CoursesPart({ courses }: CoursesPartProps) {

    return (
        <>
            {courses.details.map((item, index) => {
                return (
                    <div key={item.name + index}>
                        <h4 className='leading-5 sm:leading-6 font-semibold text-xs sm:text-base'>
                            {item.name}
                        </h4>
                        <p className='font-normal text-xs sm:text-base'>
                            {item.period}
                        </p>
                        <ul className='list-none pl-2 text-xs sm:text-base'>
                            {
                                item.description?.map((item, index) =>
                                    <li className='font-light leading-3 sm:leading-4 before:content-["•"] before:pr-2 before:text-base text-xs sm:text-base' key={item + index}>
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
