import styled from 'styled-components';
import { forwardRef } from 'react';

const ContactSection = forwardRef ((props, ref) => {
    const { content } = props;
    const { fadeIn } = props;

    return (
        <Section ref={ref} style={fadeIn}>
        <H2>{content.contactSection.title}</H2>
        <Ul>
            {content.contactSection.contact.map((contact) => { return(
            <>
                <Li key={contact.title}>
                    <Title>{contact.title}:</Title>
                    {contact.title === 'Linkedin' ? <A href={contact.address} target="_blank">{contact.address}</A> : <P>{contact.address}</P>}
                </Li>
            </>)})}
        </Ul>
    </Section>
    )
})

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    scroll-margin-top: 85px;
    margin-top: 55px;
    width: 80%;
    max-width: 1200px;
    text-align: center;
`
const H2 = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    padding-bottom: 25px;
`
const Ul = styled.ul` 
    list-style: none;
    width: 90%;
`
const Li = styled.li`
    margin-bottom: 30px;
    width: 100%;
`
const Title = styled.p`
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: 400;
`
const P = styled.p`
    font-weight: 300;
    letter-spacing: 1.5px;
`
const A = styled.a`
    font-weight: 300;
    letter-spacing: 1.5px;
    text-decoration: underline;
    &:visited {
        color: #2F5E55;
    }
`

export default ContactSection