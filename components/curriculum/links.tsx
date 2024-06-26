import { FaRegFilePdf } from 'react-icons/fa6'

import { Curriculum } from '@/lib/data/loader.ts'


interface LinksPartProps {
    links: Curriculum['links']
}

export function LinksPart({ links }: LinksPartProps) {

    return (
        <>
            <ul className='list-none pl-2 text-xs sm:text-base'>
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
        </>
    )
}
