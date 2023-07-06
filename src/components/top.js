import styled from 'styled-components';
import png from '../img/ju.jpg';
import { forwardRef } from 'react';

const TopSection = forwardRef ((props, ref) => {
    const { content } = props;
    const { projectRef } = props;
    const { fadeIn } = props;

    function scrollTo(section) { 
        section.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Section ref={ref}>
            <Container>
            <Img src={png} alt="Profile photo"/>
                <H1>{content.header.name}</H1>
                <Subtitle style={fadeIn}>{content.header.jobTitle}</Subtitle>
            </Container>

            <Div>
                <p style={fadeIn}>{content.header.description}</p>
                <Button style={fadeIn} onClick={() => scrollTo(projectRef)}>&lt;<Span>button</Span>&gt; {content.header.projectsButton} &lt;<Span>button</Span>&gt;</Button>
            </Div>
        </Section>
    )
})

const Section = styled.section`
    display: flex;
    padding: 80px 70px;
    justify-content: space-evenly;
    margin-top: 73px;
    scroll-margin-top: 72px;
    padding-top: 70px;
    align-items: center;
    max-width: 1200px;
    gap: 20px;
    @media (max-width: 980px) {
        padding: 50px 40px;
        gap: 10px;
    }
    @media (max-width: 880px) {
        padding: 50px 30px;
        gap: 8px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 40%;
    text-align: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 500px) {
        width: 90%;
    }
`
const Div = styled.div`
    padding: 35px;
    border: 5px solid #D8D8D8;
    background: #000;
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.71);
    color: #fff;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    font-weight: 300;
    font-size: 14px;
    line-height: 31px;
    width: 45%;
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 500px) {
        width: 90%;
    }
    @media (max-width: 425px) {
        padding: 20px;
        font-size: 12px;
        line-height: 25px;
    }
`
const Img = styled.img`
    width: 200px;
    border-radius: 50%;
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.71);
    @media (max-width: 425px) {
        width: 170px;
    }
`
const H1 = styled.h1`
    font-weight: 400;
    font-size: 40px;
    @media (max-width: 425px) {
        font-size: 30px;
    }
`
const Subtitle = styled.p`
    font-weight: 300;
    font-size: 20px;
    @media (max-width: 425px) {
        font-size: 20px;
    }
`
const Button = styled.button`
    align-self: flex-end;
    padding: 6px;
    border: 1px solid #FFFFFF;
    box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.8);
    background-color: inherit;
    color: #fff;
    cursor: pointer;
    margin-top: 10px;
    font-weight: 300;
    font-size: 14px;
    &:hover{
        transform: scale(1.03);
        transition: ease-in-out 0.2s;
        opacity: 0.7;
    }
`
const Span = styled.span`
    color: #FF00A1;
`

export default TopSection