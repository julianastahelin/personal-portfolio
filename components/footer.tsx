import { getSectionData, Footer } from '@/lib/data/loader.ts'
import { SectionProps } from '@/types/core'


export default function Footer({ language, fadeIn }: SectionProps) {

    const footer = getSectionData('Footer', language) as Footer

    return (
        <footer className='
            flex flex-col gap-2 mt-14 p-7 w-full 
            text-center font-light 
            bg-primary-reverse shadow-small-dark
        '>
            {
                footer.credits.map((item, index) =>
                    <p key={item.title + index} style={fadeIn}>
                        {item.title} - <a className='visited:text-accent-quaternary' href={item.url} target='_blank'>@{item.name}</a>
                    </p>
                )
            }
        </footer>
    )
}
