import Image from 'next/image'
import Link from 'next/link'

import { Header } from '@/lib/data/loader.ts'
import profileImg from '@/public/assets/img/ju.jpg'


export function HeaderSection({ data } : { data:Header }) {

    return (
        <section className='
            flex flex-col md:flex-row justify-evenly items-center 
            px-7 md:px-16 min-[880px]:px-10 pb-6 pt-[70px] md:py-20  
            max-w-7xl      
            '
        >
            <div className='flex flex-col items-center gap-4 w-11/12 min-[500px]:w-2/3 md:w-2/5 text-center'>
                <Image
                    src={profileImg}
                    className='w-40 min-[425px]:w-52 rounded-[50%] shadow-medium-dark'
                    alt='Profile photo'
                    priority
                />
                <h1 className='text-3xl sm:text-4xl'>
                    {data.name}
                </h1>
                <p className='font-light text:lg sm:text-xl'>
                    {data.jobTitle}
                </p>
            </div>

            <div className='
                flex flex-col 
                font-light text-sm leading-8 
                p-9 mt-5 
                w-11/12 min-[500px]:w-2/3 md:w-1/2
                bg-primary-foreground text-secondary-foreground border-4 border-border-tertiary shadow-medium-dark 
            '>
                <p>
                    {data.description}
                </p>
                <Link
                    className='
                        self-end p-2 mt-3
                        bg-inherit border-[1px] border-border-secondary shadow-big-light  
                        font-light text-sm text-secondary-foreground
                        hover:scale-105 hover:ease-in-out hover:opacity-70
                    '
                    href='/projects'
                >
                    &lt;<span className='text-accent-primary'>button</span>&gt;
                    {data.projectsButton}
                    &lt;<span className='text-accent-primary'>/button</span>&gt;
                </Link>
            </div>
        </section>
    )
}
