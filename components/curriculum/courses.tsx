import { Courses } from '@/lib/data/loader.ts'


interface CoursesPartProps {
    courses: Courses
}

export function CoursesPart({ courses }: CoursesPartProps) {

    return (
        <div className='flex flex-col items-center w-full gap-2 md:gap-7'>
            <h3 className='
                text-2xl text-center
                flex justify-center items-center 
                w-4/5 md:w-1/2 pr-0 pb-1
                border-border-primary border-r-0 border-b-[1px]
            '>
                {courses.title}
            </h3>
            <div className='flex flex-col w-4/5 md:w-1/2 px-2 gap-5'>
                {courses.details.map((item, index) => {
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
