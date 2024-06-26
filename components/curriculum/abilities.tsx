import { Abilities } from '@/lib/data/loader.ts'


interface AbilitiesPartProps {
    abilities: Abilities
}

export function AbilitiesPart({ abilities }: AbilitiesPartProps) {

    return (
        <div className='flex flex-col gap-5 md:flex-row md:gap-16 lg:gap-28 text-xs sm:text-base'>
            {
                abilities.list.map((item, index) => {
                    return (
                        <div key={item.sort + index}>
                            <h4 className='leading-5 sm:leading-6 font-semibold'>{item.sort}</h4>
                            <ul className='list-none pl-2'>
                                {
                                    item.abilities.map((ability, index) =>
                                        <li className='font-light leading-3 sm:leading-4 before:content-["•"] before:pr-2 before:text-base' key={ability + index}>
                                            {ability}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
