import { Contact } from '@/lib/data/loader'


export function ContactSection ({ data } : { data:Contact }) {

    return (
        <section className='
            flex flex-col items-center justify-center text-center
            gap-5 mt-12 
            w-4/5 max-w-7xl 
            '
        >
            <h2 className='text-center text-3xl font-light pb-6'>
                {data.title}
            </h2>
            <ul className='list-none w-11/12'>
                {data.contacts.map((contact, index) => {
                    return (
                        <li className='mb-7 w-full' key={contact.title + index}>
                            <p className='tracking-[3px] text-xl'>{contact.title}:</p>
                            {
                                contact.title === 'Linkedin'
                                    ? <a className='font-light tracking-widest underline' href={contact.address} target='_blank'>{contact.address}</a>
                                    : <p className='font-light tracking-widest'>{contact.address}</p>
                            }
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
