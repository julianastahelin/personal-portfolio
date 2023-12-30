import { FaRegFilePdf } from 'react-icons/fa6'

import { Curriculum } from '@/lib/data/loader.ts'


interface LinksPartProps {
    links: Curriculum['links']
}

export function LinksPart({ links }: LinksPartProps) {

    return (
        <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7'>
            <h3 className='
                text-2xl text-center md:text-right
                flex justify-center md:justify-end items-center 
                w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1
                border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0
            '>
                {links.title}
            </h3>
            <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                <ul className='list-none pl-2'>
                    {
                        links.list.map((link, index) =>
                            <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base' key={link.name + index}>
                                {link.name} -
                                {
                                    link.name === 'Currículo em pdf' || link.name === 'Curriculum in pdf'
                                        ? <a className='underline leading-6 visited:text-accent-quaternary' href={`../assets/pdf/${link.url}`} target='_blank'><FaRegFilePdf /></a>
                                        : <a className='underline leading-6 visited:text-accent-quaternary' href={link.url} target='_blank'>{link.url}</a>
                                }
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
