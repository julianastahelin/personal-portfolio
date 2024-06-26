import { motion } from 'framer-motion'

import { Projects, Project } from '@/lib/data/loader.ts'
import { AnimatedButton, AnimatedTitle } from '@/components/custom-ui'


export function ProjectsSection({ data }: { data: Projects }) {
    return (
        <section className='flex flex-col items-center gap-12 sm:px-5 w-full max-w-[1440px]'>
            <AnimatedTitle key={'title' + data.language}>
                {data.title}
            </AnimatedTitle>
            {data.projects.map((project, index) => {
                return (
                    <SingleProject project={project} index={index} key={project.title + index} language={data.language} />
                )
            })}
        </section>
    )
}


function SingleProject({
    project,
    index,
    language
}: {
    project: Project,
    index: number,
    language: string
}) {
    return (
        <motion.div key={project.title + index + language}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`
                flex justify-center md:justify-between items-center flex-col-reverse
                ${index === 0 || index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                max-w-7xl w-full md:w-11/12 lg:w-[95%] gap-6 py-5 md:p-5 
                border-4 border-border-tertiary bg-primary-foreground shadow-small-dark
            `}
        >
            <ProjectGif project={project} />
            <div className='text-secondary-foreground w-11/12 md:w-2/5 flex flex-col gap-6'>
                <ProjectInfo project={project} />
                <ProjectLinks project={project} />
            </div>
        </motion.div>
    )
}


function ProjectGif({ project }: { project: Project }) {
    return (
        <picture>
            <source
                media='(min-width: 768px)'
                srcSet={`/assets/img/${project.images.desktop}`}
                about={`Screenshot of ${project.title} project`}
                className='
                        w-11/12 h-full m-auto
                        md:w-[390px] md:h-[235px]
                        min-[825px]:w-[420px] min-[825px]:h-[253px]
                        min-[900px]:w-[500px] min-[900px]-h-[301px]
                        lg:w-[600px] lg:h-[361px]
                        text-secondary-foreground
                    '
            />
            <source
                media='(min-width: 425px)'
                srcSet={`/assets/img/${project.images.tablet}`}
                about={`Screenshot of ${project.title} project`}
                className='
                        w-11/12 h-full m-auto
                        md:w-[450px] md:h-[271px]
                        min-[900px]:w-[500px] min-[900px]:h-[301px]
                        lg:w-[600px] lg:h-[361px]
                        text-secondary-foreground
                    '
            />
            <img
                src={`/assets/img/${project.images.mobile}`}
                about={`Screenshot of ${project.title} project`}
                className='
                        w-11/12 h-full m-auto
                        md:w-[450px] md:h-[271px]
                        min-[900px]:w-[500px] min-[900px]:h-[301px]
                        lg:w-[600px] lg:h-[361px]
                        text-secondary-foreground
                    '
            />
        </picture>
    )
}


function ProjectInfo({ project }: { project: Project }) {
    return (
        <>
            <div>
                <h3 className='font-bold text-lg sm:text-xl text-accent-secondary'>
                    {project.title}
                </h3>
                <p className='text-xs sm:text-sm'>
                    {project.subtitle}
                </p>
            </div>

            <div>
                <h4 className='font-bold text-base sm:text-lg text-accent-secondary'>
                    {project.stack.title}
                </h4>
                <ul>
                    {project.stack.list.map((item, index) =>
                        <li className='list-none before:content-["•"] before:pr-2 before:text-base text-sm sm:text-base' key={item + index}>
                            {item}
                        </li>
                    )}
                </ul>
            </div>

            <div>
                <h4 className='font-bold text-base sm:text-lg text-accent-secondary'>
                    {project.description.title}
                </h4>
                <p className='text-sm sm:text-base'>
                    {project.description.text}
                </p>
            </div>
        </>
    )
}


function ProjectLinks({ project }: { project: Project }) {
    return (
        <div className='flex items-center gap-6 md:gap-5 flex-wrap h-9'>
            {project.links.list.map((link, index) =>
                <AnimatedButton key={link.name + index}>
                    <a href={link.url} target='_blank'
                        className='
                            py-1 px-2 md:p-2 h-fit 
                            no-underline text-base sm:text-lg font-bold text-accent-tertiary
                            border-[1px] border-secondary-foreground shadow-medium-light
                        '
                    >
                        {link.name}
                    </a>
                </AnimatedButton>
            )}
        </div>
    )
}
