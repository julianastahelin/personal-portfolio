import styled from 'styled-components';
import { forwardRef } from 'react';
import { FaRegFilePdf } from 'react-icons/fa6';

const CvSection = forwardRef((props, ref) => {
    const { content } = props;
    const { fadeIn } = props;
    return (
        <Section ref={ref} style={fadeIn}>
            <H2>{content.cvSection.title}</H2>
            {content.cvSection.experiences.map((exp, index) => {
                return (
                    <Category key={index}>
                        <H3 key={index}>{exp.title}</H3>
                        <Div>
                            {exp.experience.map((item, index) => {
                                return (
                                    <ExpType key={item.subtitle+index}>
                                        <P>{item.subtitle}</P>
                                        <ExpDiv>
                                        {item.experience.map((item) => {
                                            return (
                                                <div>
                                                    <H4>{item.name}</H4>
                                                    <TimeP>{item.period}</TimeP>
                                                    <Ul>
                                                        {item.description.map((item) => <Li>{item}</Li>)}
                                                    </Ul>
                                                </div>
                                            )
                                        })}
                                        </ExpDiv>
                                    </ExpType>
                                )
                            })}
                        </Div>
                    </Category>
                )
            })}

            <Category>
                <H3>{content.cvSection.abilities.title}</H3>
                <Div>
                    {content.cvSection.abilities.list.map((type) => {
                        return (
                            <div key={type.type}>
                                <H4>{type.type}</H4>
                                <Ul>
                                    {type.abilities.map((ability) => <Li>{ability}</Li>)}
                                </Ul>
                            </div>
                        )
                    })}
                </Div>
            </Category>

            <Category>
                <H3>{content.cvSection.languages.title}</H3>
                <Div>
                    <Ul>
                        {content.cvSection.languages.list.map((language) => <Li>{language.name} - {language.level}</Li>)}
                    </Ul>
                </Div>
            </Category>

            <Category>
                <H3>{content.cvSection.links.title}</H3>
                <Div>
                    <Ul>
                        {content.cvSection.links.list.map((link) => <Li>{link.name} - {link.name === "Currículo em pdf" || link.name === "Curriculum in pdf" ? <A href={require(`../files/${link.url}`)} target="_blank"><FaRegFilePdf /></A> : <A href={link.url} target="_blank">{link.url}</A>} </Li>)}
                    </Ul>
                </Div>
            </Category>

        </Section>
    )
})

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding-bottom: 30px;
    scroll-margin-top: 85px;
    margin-top: 55px;
    width: 80%;
    max-width: 1200px;
    @media (max-width: 768px) {
        gap: 40px;
        width: 100%;
    }
`
const H2 = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    padding-bottom: 25px;
    @media (max-width: 768px) {
        padding-bottom: 0;
    }
`
const Category = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`

const H3 = styled.h3`
    font-weight: 400;
    font-size: 23px;
    width: 30%;
    padding-right: 15px;
    border-right: 1px solid;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    @media (max-width: 768px) {
        border-right: none;
        border-bottom: 1px solid;
        justify-content: center;
        text-align: center;
        padding-bottom: 5px;
        padding-right: 0;
        width: 55%;
    }
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 10px 0;
    @media (max-width: 768px) {
        width: 80%;
    }
    gap: 20px;
`
const ExpType = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`
const ExpDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const H4 = styled.h4`
    line-height: 25px;
    font-weight: 600;
`
const TimeP = styled.p`
    font-weight: 400;
`
const P = styled.p`
    font-size: 18px;
    line-height: 25px;
    font-variant: small-caps;
    text-transform: lowercase;
    font-weight: 300;
`
const Ul = styled.ul` 
    list-style: none;
    padding-left: 10px;
`
const Li = styled.li`
    font-weight: 300;
    &:before{
        content: "•";
        padding-right: 10px;
        font-size: 15px;
    }
    line-height: 25px;
`
const A = styled.a`
    text-decoration: underline;
    &:visited {
        color: #2F5E55;
    }
    line-height: 25px;
`
export default CvSection