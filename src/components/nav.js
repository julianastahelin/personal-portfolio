import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'


export default function Nav({ content, changeLang, topRef, cvRef, projectRef, contactRef, fadeIn }) {

    const [open, setOpen] = useState(false)

    function scrollTo(section) {
        section.current.scrollIntoView({ behavior: 'smooth' })
        setOpen(!open)
    }

    function handleLanguageChange(lang) {
        changeLang(lang)
        setOpen(!open)
    }

    return (
        <nav className='
            flex items-center justify-center 
            fixed top-0 z-10
            min-h-[70px] w-full py-7 pl-14 pr-20 
            list-none
            bg-primary shadow-small-dark 
        '>
            <ul open={open} className={`
                flex flex-col md:flex-row flex-nowrap items-center justify-start md:justify-between gap-7 md:gap-14 lg:gap-36
                h-full w-52 md:w-full max-w-[1440px] 
                fixed md:static top-0 right-0 px-14 py-8 md:p-0
                list-none 
                bg-tertiary md:bg-inherit
                transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0  
            `}>
                <li
                    className='text-tertiary-foreground md:text-primary-foreground hover:cursor-pointer'
                    style={fadeIn}
                    onClick={() => scrollTo(topRef)}
                >
                    {content.nav.home}
                </li>
                <li
                    className='text-tertiary-foreground md:text-primary-foreground hover:cursor-pointer'
                    style={fadeIn}
                    onClick={() => scrollTo(cvRef)}
                >
                    {content.nav.cv}
                </li>
                <li
                    className='text-tertiary-foreground md:text-primary-foreground hover:cursor-pointer'
                    style={fadeIn}
                    onClick={() => scrollTo(projectRef)}
                >
                    {content.nav.projects}
                </li>
                <li
                    className='text-tertiary-foreground md:text-primary-foreground hover:cursor-pointer'
                    style={fadeIn}
                    onClick={() => scrollTo(contactRef)}
                >
                    {content.nav.contact}
                </li>

                <div className='flex gap-4 md:gap-2'>
                    <button className='text-2xl hover:opacity-80' onClick={() => handleLanguageChange('pt')}>
                        <ReactCountryFlag countryCode='BR' svg style={{ borderRadius: 20 }} />
                    </button>
                    <button className='text-2xl hover:opacity-80' onClick={() => handleLanguageChange('en')}>
                        <ReactCountryFlag countryCode='GB' svg style={{ borderRadius: 20 }} />
                    </button>
                </div>
            </ul>

            <div open={open} onClick={() => setOpen(!open)} className='
                flex md:hidden flex-col flex-nowrap justify-around
                w-8 h-8 fixed top-4 right-5 z-20 
                hover:opacity-80 hover:cursor-pointer
            '>
                <div className={`w-8 h-[2px] rounded-3xl transition-all duration-300 ease-linear origin-[1px] ${open ? 'bg-tertiary-foreground rotate-45' : 'bg-primary-foreground rotate-0'}`} />
                <div className={`w-8 h-[2px] rounded-3xl transition-all duration-300 ease-linear origin-[1px] ${open ? 'bg-tertiary-foreground translate-x-full opacity-0' : 'bg-primary-foreground translate-x-0 opacity-100'}`} />
                <div className={`w-8 h-[2px] rounded-3xl transition-all duration-300 ease-linear origin-[1px] ${open ? 'bg-tertiary-foreground rotate-[-45deg]' : 'bg-primary-foreground rotate-0'}`} />
            </div>
        </nav>
    )
}
