'use client'
import { useContext } from 'react'

import { ContactSection } from '@/components/contact'
import { LanguageContext } from '@/components/providers'
import { Contact, getSectionData } from '@/lib/data/loader.ts'


export default function Page() {

    const { language } = useContext(LanguageContext)
    const data = getSectionData('Contact', language) as Contact

    return (
        <ContactSection data={data} />
    )
}
