import Link from 'next/link'

import { Home } from '@/lib/data/loader.ts'


export function HomeSection({ data } : { data:Home }) {

    return (
        <section className='flex flex-col md:flex-row justify-evenly items-center px-7 md:px-16 py-8 md:py-0 max-w-7xl gap-4'>
            <div className='flex flex-col items-center gap-4 w-11/12 min-[500px]:w-2/3 md:w-2/5 text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-[42px]'>
                    {data.name}
                </h1>
                <p className='font-light text:lg sm:text-xl md:text-2xl'>
                    {data.jobTitle}
                </p>
            </div>

            <div className='
                flex flex-col 
                font-light text-sm leading-8 
                p-9 mt-5 
                w-11/12 min-[500px]:w-2/3 md:w-1/2
                bg-primary-foreground text-secondary-foreground border-4 border-border-tertiary shadow-medium-dark 
                '
            >
                <p>
                    {data.description}
                </p>
                <Link
                    className='
                        self-end p-2 mt-3
                        bg-inherit border-[1px] border-border-secondary shadow-big-light  
                        flex items-center justify-center flex-wrap
                        font-light text-sm text-secondary-foreground text-center
                        hover:scale-105 hover:ease-in-out hover:opacity-70
                    '
                    href='/projects'
                >
                    <div>&lt;<span className='text-accent-primary'>button</span>&gt;</div>
                    {data.projectsButton}
                    <div>&lt;/<span className='text-accent-primary'>button</span>&gt;</div>
                </Link>
            </div>
        </section>
    )
}
