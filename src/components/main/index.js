import { useState, useEffect } from 'react';

async function getMainContent(lang) {
    const response = await fetch(`../../public/json/main-${lang}.json`)
    return await response.json()
}

function Main(props) {

        const [main, setMain] = useState({
            data: {
                title: '',
                text: ''
            }
        })
    
        useEffect(() => {
            async function fetchData() {
                const mainContent = await getMainContent(props.lang)
                setMain(mainContent.data)
                console.log(main)
            }
            fetchData()
        }, [props.lang])
        
    return (
        <main>
            <h1>{main.title}</h1>
            <p>{main.text}</p>
        </main>
    )
}

export default Main