import { TechStack } from '@/lib/data/loader.ts'
import { TechIcon, TechName } from '@/components/tech-icons'


export function TechStackSection ({ data }: { data:TechStack }) {

    return (
        <section className='
            flex flex-col items-center
            gap-10 pb-7 mt-12
            w-full md:w-4/5 max-w-7xl
            '
        >
            <h2 className='text-center text-3xl font-light md:pb-6'>
                {data.title}
            </h2>
            <div className='flex items-end justify-center gap-9 flex-wrap w-4/5 md:w-3/5'>
                {data.technologies.map((tech, index) => {
                    return (
                        <div className='flex flex-col items-center' key={tech.title + index}>
                            <TechIcon name={tech.title as TechName} className='h-10 w-10' />
                            {tech.address
                                ? <a href={tech.address} target='_blank'><span>{tech.title}</span></a>
                                : <span>{tech.title}</span>
                            }
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
