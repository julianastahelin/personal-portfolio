import { Abilities } from '@/lib/data/loader.ts'


interface AbilitiesPartProps {
    abilities: Abilities
}

export function AbilitiesPart({ abilities }: AbilitiesPartProps) {

    return (
        <div className='flex flex-col items-center w-full gap-2 md:gap-7'>
            <h3 className='
                text-2xl text-center 
                flex justify-center items-center 
                w-4/5 md:w-1/2 pr-0 pb-1
                border-border-primary border-r-0 border-b-[1px]
            '>
                {abilities.title}
            </h3>
            <div className='flex flex-col w-4/5 md:w-1/2 px-2 gap-5'>
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
