'use client'
import { useContext, useState } from 'react'
import Link from 'next/link'
import ReactCountryFlag from 'react-country-flag'

import { getSectionData, Nav } from '@/lib/data/loader.ts'
import { Language, LanguageContext } from '@/components/providers'


export function Nav() {
    
    const { language, setLanguage } = useContext(LanguageContext)
    const data = getSectionData('Nav', language) as Nav

    const [open, setOpen] = useState<boolean>(false)

    function handleLanguageChange(language: Language) {
        setLanguage(language)
        setOpen(!open)
    }

    return (
        <nav className='
            flex items-center justify-center 
            fixed top-0 z-10
            min-h-[48px] w-full py-5 pl-14 pr-20 
            list-none
            bg-primary shadow-small-dark 
            '
        >
            <ul className={`
                flex flex-col md:flex-row flex-nowrap items-center md:justify-between gap-7 md:gap-14 lg:gap-32
                h-full w-52 md:w-full max-w-[1440px] 
                fixed md:static top-0 right-0 px-14 py-8 md:p-0
                list-none 
                bg-tertiary md:bg-inherit
                transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0  
            `}>
                <li className='text-tertiary-foreground md:text-primary-foreground hover:cursor-pointer text-center'>
                    <Link href='/' onClick={() => setOpen(!open)}>{data.home}</Link>
                </li>
                <li className='text-tertiary-foreground md:text-primary-foreground hover:cursor-pointer text-center'>
                    <Link href='/tech-stack' onClick={() => setOpen(!open)}>{data.tech}</Link>
                </li>
                <li className='text-tertiary-foreground md:text-primary-foreground hover:cursor-pointer text-center'>
                    <Link href='/projects' onClick={() => setOpen(!open)}>{data.projects}</Link>
                </li>
                <li className='text-tertiary-foreground md:text-primary-foreground hover:cursor-pointer text-center'>
                    <Link href='/curriculum' onClick={() => setOpen(!open)}>{data.cv}</Link>
                </li>
                <li className='text-tertiary-foreground md:text-primary-foreground hover:cursor-pointer text-center'>
                    <Link href='/contact' onClick={() => setOpen(!open)}>{data.contact}</Link>
                </li>
                <div className='flex gap-4 md:gap-2 flex-wrap justify-center'>
                    {/* TODO: map on languages array to define buttons dinamically */}
                    <button className='flex text-2xl hover:opacity-80' onClick={() => handleLanguageChange('pt')}>
                        <ReactCountryFlag countryCode='BR' svg style={{ borderRadius: 20 }} />
                    </button>
                    <button className='flex text-2xl hover:opacity-80' onClick={() =>  handleLanguageChange('en')}>
                        <ReactCountryFlag countryCode='GB' svg style={{ borderRadius: 20 }} />
                    </button>
                </div>
            </ul>

            <div 
                onClick={() => setOpen(!open)}
                className='
                    flex md:hidden flex-col flex-nowrap justify-around
                    w-7 h-7 fixed top-2 right-5 z-20 
                    hover:opacity-80 hover:cursor-pointer
                '
            >
                <div className={`w-7 h-[2px] rounded-3xl transition-all duration-300 ease-linear origin-[1px] ${open ? 'bg-tertiary-foreground rotate-45' : 'bg-primary-foreground rotate-0'}`} />
                <div className={`w-7 h-[2px] rounded-3xl transition-all duration-300 ease-linear origin-[1px] ${open ? 'bg-tertiary-foreground translate-x-full opacity-0' : 'bg-primary-foreground translate-x-0 opacity-100'}`} />
                <div className={`w-7 h-[2px] rounded-3xl transition-all duration-300 ease-linear origin-[1px] ${open ? 'bg-tertiary-foreground rotate-[-45deg]' : 'bg-primary-foreground rotate-0'}`} />
            </div>
        </nav>
    )
}
