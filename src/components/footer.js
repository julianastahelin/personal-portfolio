export default function Footer({ content, fadeIn }) {

    return (
        <footer className='
            flex flex-col gap-2 mt-14 p-7 w-full 
            text-center font-light 
            bg-primary-reverse shadow-small-dark
        '>
            {
                content.footer.map((item, index) =>
                    <p key={index} style={fadeIn}>
                        {item.title} - <a className='visited:text-accent-quaternary' href={item.url} target='_blank'>@{item.name}</a>
                    </p>
                )
            }
        </footer>
    )
}
