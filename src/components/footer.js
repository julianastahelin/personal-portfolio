export default function Footer({ content, fadeIn }) {

    return (
        <footer className='
            flex flex-col gap-2 mt-14 p-7 w-full 
            text-center font-light 
            bg-gradient-to-b from-[#DEF7F3] to-[#DCF2E7] shadow-[1px_1px_7px_0px_rgba(0,0,0,0.6)]
        '>
            {
                content.footer.map((item, index) =>
                    <p key={index} style={fadeIn}>
                        {item.title} - <a className='visited:text-[#2F5E55]' href={item.url} target='_blank'>@{item.name}</a>
                    </p>
                )
            }
        </footer>
    )
}
