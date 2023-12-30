import { Abilities } from '@/lib/data/loader.ts'


interface AbilitiesPartProps {
    abilities: Abilities
}

export function AbilitiesPart({ abilities }: AbilitiesPartProps) {

    return (
        <div className='flex flex-col md:flex-row items-center md:items-stretch w-full gap-2 md:gap-7'>
            <h3 className='
            text-2xl text-center md:text-right
            flex justify-center md:justify-end items-center 
            w-1/2 md:w-1/3 pr-0 md:pr-4 pb-1
            border-border-primary border-r-0 md:border-r-[1px] border-b-[1px] md:border-b-0 
            '>
                {abilities.title}
            </h3>
            <div className='flex flex-col w-4/5 md:w-2/3 px-2 gap-5'>
                {abilities.list.map((item, index) => {
                    return (
                        <div key={item.sort + index}>
                            <h4 className='leading-6 font-semibold'>{item.sort}</h4>
                            <ul className='list-none pl-2'>
                                {
                                    item.abilities.map((ability, index) =>
                                        <li className='font-light leading-4 before:content-["•"] before:pr-2 before:text-base' key={ability + index}>
                                            {ability}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
