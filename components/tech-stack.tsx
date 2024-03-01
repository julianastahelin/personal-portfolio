import { motion } from 'framer-motion'

import { TechStack } from '@/lib/data/loader.ts'
import { AnimatedTitle } from '@/components/custom-ui/animated-title'
import { Icon, IconName } from '@/components/icons'


export function TechStackSection({ data }: { data: TechStack }) {

    return (
        <section className='flex flex-col items-center gap-10 w-4/5 max-w-7xl'>
            <AnimatedTitle>
                {data.title}
            </AnimatedTitle>
            <div className='flex items-end justify-center gap-11 flex-wrap w-4/5 md:w-3/5'>
                {data.technologies.map((tech, index) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, x: 10, y: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index / 3 }}
                            className='flex flex-col items-center'
                            key={tech.title + index + data.language}
                        >
                            <Icon name={tech.title as IconName} className='h-10 w-10' />
                            {tech.address
                                ? <a href={tech.address} target='_blank'><span>{tech.title}</span></a>
                                : <span>{tech.title}</span>
                            }
                        </motion.div>
                    )
                })}
            </div>
        </section >
    )
}
