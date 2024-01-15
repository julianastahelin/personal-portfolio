import { Languages } from '@/lib/data/loader.ts'


interface LanguagesPartProps {
    languages: Languages
}

export function LanguagesPart({ languages }: LanguagesPartProps) {

    return (
        <>
            <ul className='list-none pl-2'>
                {
                    languages.list.map((language, index) =>
                        <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base' key={language.name + index}>
                            {language.name} - {language.level}
                        </li>
                    )
                }
            </ul>
        </>
    )
}
