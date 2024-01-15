'use client'
import { useContext } from 'react'

import { getSectionData, Attributes, Contact } from '@/lib/data/loader.ts'
import { LanguageContext } from '@/components/providers'
import { Icon, IconName } from './icons'


export function Footer() {

    const { language } = useContext(LanguageContext)
    const contact = getSectionData('Contact', language) as Contact
    const attributes = getSectionData('Attributes', language) as Attributes

    return (
        <footer className='
            flex gap-14 p-5 w-full items-center justify-center flex-wrap
            bg-primary-reverse shadow-small-dark
            '
        >
            <ContactIcons data={contact} />
            <Credits data={attributes} />
        </footer>
    )
}


function ContactIcons({ data }: { data: Contact }) {
    return (
        <ul className='flex gap-5 md:gap-10 items-center justify-center flex-wrap'>
            {data.contacts.map((contact, index) => {
                return (
                    <li key={contact.title + index}>
                        <a className='font-light tracking-widest underline'
                            href={contact.title === 'Phone'
                                ? `tel:${contact.address}`
                                : contact.title === 'Email'
                                    ? `mailto:${contact.address}`
                                    : contact.address
                            }
                            target='_blank'
                        >
                            <Icon name={contact.title as IconName} className='h-8 w-8' />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}


function Credits({ data }: { data: Attributes }) {
    return (
        <div className='flex flex-col items-center justify-center gap-1 text-center font-light text-xs'>
            {
                data.attributes.map((item, index) =>
                    <span key={item.title + index}>
                        {item.title}: <a className='visited:text-accent-quaternary font-normal underline' href={item.url} target='_blank'>@{item.name}</a>
                    </span>
                )
            }
        </div>
    )
}
