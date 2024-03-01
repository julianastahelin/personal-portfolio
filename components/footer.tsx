'use client'
import { useContext } from 'react'
import { Copy } from 'lucide-react'
import { motion } from 'framer-motion'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { useToast } from '@/components/ui/use-toast'
import { LanguageContext, Language } from '@/components/providers'
import { getSectionData, Attributes, Contact } from '@/lib/data/loader.ts'
import { Icon, IconName } from './icons'


export function Footer() {

    const { language } = useContext(LanguageContext)
    const contact = getSectionData('Contact', language) as Contact
    const attributes = getSectionData('Attributes', language) as Attributes

    return (
        <motion.footer className='
            flex gap-8 md:gap-14 p-5 w-full items-center justify-center flex-wrap
            bg-primary-reverse shadow-small-dark
            '
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={language}
        >
            <ContactIcons data={contact} language={language} />
            <Credits data={attributes} />
        </motion.footer>
    )
}


function ContactIcons({ data, language }: { data: Contact, language: Language }) {

    const { toast } = useToast()

    const toastDescription = {
        en: 'Copied to the clipboard',
        pt: 'Copiado para a área de transferência'
    }

    function copyAddress(address: string) {
        navigator.clipboard.writeText(address)
        toast({
            description: toastDescription[language],
        })
    }

    return (
        <ul className='flex gap-5 md:gap-10 items-center justify-center flex-wrap'>
            {data.contacts.map((contact, index) => {
                return (
                    <li key={contact.title + index} className='flex'>
                        {contact.title === 'Phone' || contact.title === 'Email'
                            ? <TooltipProvider delayDuration={400}>
                                <Tooltip>
                                    <TooltipTrigger onClick={() => copyAddress(contact.address)}>
                                        <Icon name={contact.title as IconName} className='h-8 w-8' />
                                    </TooltipTrigger>
                                    <TooltipContent className='bg-primary-foreground text-tertiary-foreground'>
                                        <button onClick={() => copyAddress(contact.address)} className='flex gap-2 items-center'>
                                            {contact.address}
                                            <Copy className='h-4 w-4' />
                                        </button>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            : <a className='font-light tracking-widest underline' href={contact.address} target='_blank'>
                                <Icon name={contact.title as IconName} className='h-8 w-8' />
                            </a>
                        }
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
