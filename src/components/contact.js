import styled from 'styled-components';
import { forwardRef } from 'react';

const ContactSection = forwardRef ((props, ref) => {
    const { content } = props;
    return (
        <Section ref={ref}>
        <H2>{content.contactSection.title}</H2>
        <Ul>
            {content.contactSection.contact.map((contact) => { return(
            <>
                <Li key={contact.title}>{contact.title}:</Li>
                {contact.title === 'Linkedin' ? <A href={contact.address} target="_blank">{contact.address}</A> : <P>{contact.address}</P>}
            </>)})}
        </Ul>
    </Section>
    )
})

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    scroll-margin-top: 85px;
    margin-top: 55px;
`
const H2 = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    padding-bottom: 25px;
`
const Ul = styled.ul` 
    list-style: none;
    padding-left: 10px; 
    width: 90%;
`
const Li = styled.li`
    &:before{
        content: "•";
        padding-right: 10px;
        font-size: 15px;
    }
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: 300;
`
const P = styled.p`
    font-weight: 300;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
`
const A = styled.a`
    font-weight: 300;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    text-decoration: underline;
    &:visited {
        color: #2F5E55;
    }
`

export default ContactSection