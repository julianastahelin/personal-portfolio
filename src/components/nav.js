import styled from 'styled-components';

function Nav({ content, changeLang }) {

    return (
        <Navbar>
            <Ul>
                <Li>{content.nav.home}</Li>
                <Li>{content.nav.cv}</Li>
                <Li>{content.nav.projects}</Li>
                <Li>{content.nav.contact}</Li>
            </Ul>
            <UlLang>
                <li><Button onClick={() => changeLang('pt')}>PT</Button></li>
                <li><Button onClick={() => changeLang('en')}>EN</Button></li>
            </UlLang>
        </Navbar>
    )
}

const Navbar = styled.nav`
    list-style-type: none;
    background: linear-gradient(180deg, #DCF6F1 14.73%, #DEF7F3 100%);
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.71);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 25px 50px 25px 80px;
`
const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    padding: 0;
    gap: 150px;

`
const Li = styled.li`
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`

const UlLang = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 20px;
`

const Button = styled.button`
    background: transparent;
    border: 0;
    outline: 0;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`
export default Nav