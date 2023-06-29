import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header () {
    const [lang, setLang] = useState('pt');
    const navigate = useNavigate();

    function changeLang(lang){
        setLang(lang);
        navigate(`./${lang}`);
    }
    return (
        <header>
            <nav>
                <ul>
                    <li><button onClick={() => changeLang('pt')}>PT</button></li>
                    <li><button onClick={() => changeLang('en')}>EN</button></li>
                </ul>
                <p>Lang now is: {lang}</p>
            </nav>
        </header>
    )
}

export default Header