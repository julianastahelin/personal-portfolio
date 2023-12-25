import { LegacyRef, forwardRef } from 'react'

import { Contact, getSectionData } from '@/lib/data/loader.ts'
import { SectionProps } from '@/types/core'


const ContactSection = forwardRef(({ language, fadeIn }: SectionProps, ref: LegacyRef<HTMLElement> ) => {

    const contact = getSectionData('Contact', language) as Contact

    return (
        <section
            ref={ref}
            style={fadeIn}
            className='
                flex flex-col items-center justify-center text-center
                gap-5 scroll-mt-[85px] mt-14 
                w-4/5 max-w-7xl 
            '
        >
            <h2 className='text-center text-3xl font-light pb-6'>
                {contact.title}
            </h2>
            <ul className='list-none w-11/12'>
                {contact.contacts.map((contact, index) => {
                    return (
                        <li className='mb-7 w-full' key={contact.title + index}>
                            <p className='tracking-[3px] text-xl'>{contact.title}:</p>
                            {
                                contact.title === 'Linkedin'
                                    ? <a className='font-light tracking-widest underline' href={contact.address} target='_blank'>{contact.address}</a>
                                    : <p className='font-light tracking-widest'>{contact.address}</p>
                            }
                        </li>
                    )
                })}
            </ul>
        </section>
    )
})

ContactSection.displayName = 'ContactSection'
export default ContactSection
