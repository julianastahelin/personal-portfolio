import { Languages } from '@/lib/data/loader.ts'


interface LanguagesPartProps {
    languages: Languages
}

export function LanguagesPart({ languages }: LanguagesPartProps) {

    return (
        <div className='flex flex-col items-center w-full gap-2 md:gap-7'>
            <h3 className='
                text-2xl text-center
                flex justify-center items-center 
                w-4/5 md:w-1/2 pr-0 pb-1
                border-border-primary border-r-0 border-b-[1px]
            '>
                {languages.title}
            </h3>
            <div className='flex flex-col w-4/5 md:w-1/2 px-2 gap-5'>
                <ul className='list-none pl-2'>
                    {
                        languages.list.map((language, index) =>
                            <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base' key={language.name + index}>
                                {language.name} - {language.level}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
