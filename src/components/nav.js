import styled from 'styled-components';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

function Nav({ content, changeLang, topRef, cvRef, projectRef, contactRef, fadeIn }) {

    const [open, setOpen] = useState(false)

    function scrollTo(section) {
        section.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Navbar>
            <Ul open={open}>
                <Li style={fadeIn} onClick={() => scrollTo(topRef)}>{content.nav.home}</Li>
                <Li style={fadeIn} onClick={() => scrollTo(cvRef)}>{content.nav.cv}</Li>
                <Li style={fadeIn} onClick={() => scrollTo(projectRef)}>{content.nav.projects}</Li>
                <Li style={fadeIn} onClick={() => scrollTo(contactRef)}>{content.nav.contact}</Li>
                <Lang>
                    <Button onClick={() => changeLang('pt')}>
                        <ReactCountryFlag countryCode="BR" svg style={{ borderRadius: 20 }} />
                    </Button>
                    <Button onClick={() => changeLang('en')}>
                        <ReactCountryFlag countryCode="GB" svg style={{ borderRadius: 20 }} />
                    </Button>
                </Lang>
            </Ul>

            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </Navbar>
    )
}

const Navbar = styled.nav`
    list-style-type: none;
    background: linear-gradient(180deg, #DCF2E7 0%, #DEF7F3 100%);
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.71);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 70px;
    padding: 25px 50px 25px 80px;
    z-index: 3;
`
const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    padding: 0;
    gap: 150px;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    @media (max-width: 1100px) {
        gap: 80px;
    }
    @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: #395f56;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding: 60px 20px;
    gap: 30px;
    transition: transform 0.3s ease-in-out;
    }
`
const Li = styled.li`
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        color: #fff;
    }
`
const Lang = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: 768px) {
        gap: 15px;
    }
`
const Button = styled.button`
    background: transparent;
    font-size: 23px;
    border: 0;
    outline: 0;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`
const StyledBurger = styled.div`
    width: 32px;
    height: 32px;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 4;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
    div {
        width: 32px;
        height: 2px;
        background-color: ${({ open }) => open ? '#fff' : '#000'};
        border-radius: 20px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export default Nav