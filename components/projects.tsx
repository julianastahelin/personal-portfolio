import { motion } from 'framer-motion'

import { Projects, Project } from '@/lib/data/loader.ts'
import { AnimatedButton, AnimatedTitle } from '@/components/custom-ui'


export function ProjectsSection({ data }: { data: Projects }) {

    const activeProjects = data.projects.filter((project) => project.title !== 'Juflix')

    return (
        <section className='flex flex-col items-center gap-14 md:gap-12 px-5 w-full max-w-[1440px]'>
            <AnimatedTitle key={'title' + data.language}>
                {data.title}
            </AnimatedTitle>
            {activeProjects.map((project, index) => {
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
                max-w-7xl w-11/12 lg:w-[95%] gap-5 p-5 pb-8
                border-4 border-border-tertiary bg-primary-foreground shadow-small-dark
            `}
        >
            <ProjectGif project={project} />
            <div className='text-secondary-foreground w-11/12 md:w-2/5'>
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
            <h3 className='font-bold text-xl text-accent-secondary'>
                {project.title}
            </h3>
            <p className='text-sm'>
                {project.subtitle}
            </p>
            <h4 className='font-bold text-lg text-accent-secondary pt-7'>
                {project.stack.title}
            </h4>
            <ul>
                {project.stack.list.map((item, index) =>
                    <li className='list-none before:content-["•"] before:pr-2 before:text-base' key={item + index}>
                        {item}
                    </li>
                )}
            </ul>
            <h4 className='font-bold text-lg text-accent-secondary pt-7'>
                {project.description.title}
            </h4>
            <p>
                {project.description.text}
            </p>
        </>
    )
}


function ProjectLinks({ project }: { project: Project }) {
    return (
        <div className='flex items-center gap-6 md:gap-5 mt-7 flex-wrap'>
            {project.links.list.map((link, index) =>
                <AnimatedButton key={link.name + index}>
                    <a href={link.url} target='_blank'
                        className='
                            p-2
                            no-underline text-lg font-bold text-accent-tertiary
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
