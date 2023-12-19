import { getSectionData } from '@/lib/data/loader.ts'


export default function Footer({ lang, fadeIn }) {

    const footer = getSectionData('Footer', lang)

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
