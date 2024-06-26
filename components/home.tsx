import Link from 'next/link'
import { motion } from 'framer-motion'

import { Home } from '@/lib/data/loader.ts'
import { AnimatedButton } from '@/components/custom-ui'
import { Language } from '@/components/providers'


export function HomeSection({ data, language }: { data: Home, language: Language }) {

    return (
        <section className='flex flex-col md:flex-row justify-evenly items-center px-3 md:px-16 py-5 sm:py-8 md:py-0 max-w-7xl gap-4'>
            <motion.div
                className='flex flex-col items-center gap-2 sm:gap-4 w-11/12 min-[500px]:w-2/3 md:w-2/5 text-center'
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                key={'title' + data.language}
            >
                <h1 className='text-3xl sm:text-4xl md:text-[42px]'>
                    {data.name}
                </h1>
                <p className='font-light text:lg sm:text-xl md:text-2xl'>
                    {data.jobTitle}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                key={'description' + data.language}
                className='
                flex flex-col 
                font-light text-xs sm:text-sm leading-7 sm:leading-8 
                p-7 sm:p-9 mt-5 
                w-full min-[500px]:w-2/3 md:w-1/2
                bg-primary-foreground text-secondary-foreground border-4 border-border-tertiary shadow-medium-dark 
                '
            >
                <p>
                    {data.description}
                </p>
                <AnimatedButton>
                    <Link
                        className='
                        self-end p-2 mt-3
                        bg-inherit border-[1px] border-border-secondary shadow-big-light  
                        flex items-center justify-center flex-wrap
                        font-light text-xs sm:text-sm text-secondary-foreground text-center
                    '
                        href={`/${language}/projects`}
                    >
                        <div>&lt;<span className='text-accent-primary'>button</span>&gt;</div>
                        {data.projectsButton}
                        <div>&lt;/<span className='text-accent-primary'>button</span>&gt;</div>
                    </Link>
                </AnimatedButton>
            </motion.div>
        </section>
    )
}
