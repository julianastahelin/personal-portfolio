import { forwardRef } from 'react'


const ProjectsSection = forwardRef((props, ref) => {
    const { content } = props
    const { fadeIn } = props

    return (
        <>
            <h2
                ref={ref}
                style={fadeIn}
                className='text-center text-3xl font-light pb-6 mt-14 scroll-mt-24'
            >
                {content.projectSection.title}
            </h2>
            <section className='
                    flex flex-col items-center gap-14 md:gap-12 
                    px-5 py-14 w-full max-w-[1440px]
                    bg-secondary 
                '
            >
                {content.projectSection.projects.map((project, index) => {
                    return (
                        <div key={project + index} number={index} className={`
                                flex justify-center md:justify-between items-center flex-col-reverse 
                                ${index === 0 || index % 2 === 0
                                ? 'md:flex-row'
                                : 'md:flex-row-reverse'
                            }
                                max-w-7xl w-11/12 lg:w-[95%] gap-5 p-5 
                                border-4 border-border-tertiary bg-primary-foreground shadow-small-dark
                            `}
                        >
                            <picture>
                                <source
                                    media='(max-width: 425px)'
                                    srcSet={require(`../img/${project.image.mobile}`)}
                                    alt={`Screenshot of ${project.title} project`}
                                    className='
                                        w-11/12 h-full m-auto
                                        md:w-[450px] md:h-[271px] 
                                        min-[900px]:w-[500px] min-[900px]:h-[301px] 
                                        lg:w-[600px] lg:h-[361px] 
                                    '
                                />
                                <source
                                    media='(max-width: 560px)'
                                    srcSet={require(`../img/${project.image.tablet}`)}
                                    alt={`Screenshot of ${project.title} project`}
                                    className='
                                        w-11/12 h-full m-auto
                                        md:w-[450px] md:h-[271px] 
                                        min-[900px]:w-[500px] min-[900px]:h-[301px] 
                                        lg:w-[600px] lg:h-[361px]
                                    '
                                />
                                <img
                                    src={require(`../img/${project.image.desktop}`)}
                                    alt={`Screenshot of ${project.title} project`}
                                    className='w-11/12 h-full m-auto 
                                        md:w-[390px] md:h-[235px] 
                                        min-[825px]:w-[420px] min-[825px]:h-[253px]
                                        min-[900px]:w-[500px] min-[900px]-h-[301px] 
                                        lg:w-[600px] lg:h-[361px]
                                    '
                                />
                            </picture>
                            <div key={project.title + index} style={fadeIn} className='text-secondary-foreground w-11/12 md:w-2/5'>
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
                                    {project.stack.list.map((item) =>
                                        <li className='list-none before:content-["•"] before:pr-2 before:text-base' key={item}>
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
                                <div className='flex items-center gap-5 mt-7'>
                                    {project.links.map((link, index) =>
                                        <a key={link + index} href={link.url} target='_blank'
                                            className='
                                                p-2
                                                no-underline text-lg font-bold text-accent-tertiary 
                                                border-[1px] border-secondary-foreground shadow-medium-light 
                                                hover:scale-105 hover:ease-in-out hover:duration-200 hover:opacity-70
                                            '
                                        >
                                            {link.title}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
})

export default ProjectsSection
