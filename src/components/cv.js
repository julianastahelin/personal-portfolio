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
                    <Category key={exp.title + index}>
                        <H3 key={index + exp.title}>{exp.title}</H3>
                        <Div>
                            {exp.experience.map((item, index) => {
                                return (
                                    <ExpType key={item.subtitle+index}>
                                        <P>{item.subtitle}</P>
                                        {item.experience.map((item) => {
                                            return (
                                                <>
                                                    <H4>{item.name}</H4>
                                                    <Ul>
                                                        {item.description.map((item) => <Li>{item}</Li>)}
                                                    </Ul>
                                                </>
                                            )
                                        })}
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
        gap: 60px;
    }
`
const H2 = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    padding-bottom: 25px;
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
    font-weight: 300;
    font-size: 23px;
    width: 30%;
    padding-right: 15px;
    border-right: 1px solid;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 768px) {
        border-right: none;
        border-bottom: 1px solid;
        justify-content: center;
        padding-bottom: 5px;
        padding-right: 0;
        width: 50%;
    }
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 10px 0;
    gap: 25px;
`

const ExpType = styled.div`
    display: flex;
    flex-direction: column;
`
const H4 = styled.h4`
    line-height: 25px;
`
const P = styled.p`
    font-size: 18px;
    line-height: 25px;
`
const Ul = styled.ul` 
    list-style: none;
    padding-left: 10px;
`
const Li = styled.li`
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