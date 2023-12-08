import { forwardRef } from 'react'

import png from '../img/ju2.JPG'


const TopSection = forwardRef((props, ref) => {
    const { content } = props
    const { projectRef } = props
    const { fadeIn } = props

    function scrollTo(section) {
        section.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section ref={ref} className='
                flex flex-col md:flex-row justify-evenly items-center 
                px-7 md:px-16 min-[880px]:px-10 pb-12 pt-[70px] md:py-20 mt-[73px] scroll-mt-[72px]  
                max-w-7xl
            '
        >
            <div className='flex flex-col items-center gap-4 w-11/12 min-[500px]:w-2/3 md:w-2/5 text-center'>
                <img
                    className='w-40 min-[425px]:w-52 rounded-[50%] shadow-medium-dark'
                    src={png}
                    alt='Profile photo'
                />
                <h1 className='text-3xl sm:text-4xl'>
                    {content.header.name}
                </h1>
                <p className='font-light text:lg sm:text-xl' style={fadeIn}>
                    {content.header.jobTitle}
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
                <p style={fadeIn}>
                    {content.header.description}
                </p>
                <button
                    className='
                            self-end p-2 mt-3
                            bg-inherit border-[1px] border-border-secondary shadow-big-light  
                            font-light text-sm text-secondary-foreground
                            hover:scale-105 hover:ease-in-out hover:opacity-70
                        '
                    style={fadeIn}
                    onClick={() => scrollTo(projectRef)}
                >
                    &lt;<span className='text-accent-primary'>button</span>&gt;
                    {content.header.projectsButton}
                    &lt;<span className='text-accent-primary'>/button</span>&gt;
                </button>
            </div>
        </section>
    )
})

export default TopSection
