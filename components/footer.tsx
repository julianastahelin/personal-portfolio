'use client'
import { useContext } from 'react'

import { getSectionData, Footer } from '@/lib/data/loader.ts'
import { LanguageContext } from '@/components/providers'


export function Footer() {

    const { language } = useContext(LanguageContext)
    const data = getSectionData('Footer', language) as Footer

    return (
        <footer className='
            flex flex-col gap-2 p-4 w-full 
            text-center font-light text-sm
            bg-primary-reverse shadow-small-dark
            '
        >
            {
                data.credits.map((item, index) =>
                    <p key={item.title + index}>
                        {item.title}: <a className='visited:text-accent-quaternary' href={item.url} target='_blank'>@{item.name}</a>
                    </p>
                )
            }
        </footer>
    )
}
