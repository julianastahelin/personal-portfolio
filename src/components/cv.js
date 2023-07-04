import styled from 'styled-components';

function CvSection({ content }) {
    return (
        <Section>
            <H2>{content.cvSection.title}</H2>

            {content.cvSection.experiences.map((exp, index) => {
                return (
                    <Category key={exp.title+index}>
                        <H3 key={index+exp.title}>{exp.title}</H3>
                        <Div>
                            {exp.experience.map((item, index) => {
                                return (
                                    <ExpType key={item.subtitle+index}>
                                        <p>{item.subtitle}</p>
                                        {item.experience.map((item) => {
                                            return (
                                                <>
                                                    <h4>{item.name}</h4>
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
                            <h4>{type.type}</h4>
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
                        {content.cvSection.links.list.map((link) => <Li>{link.name} - {link.url}</Li>)}
                    </Ul>
                </Div>
            </Category>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 30px;
`
const H2 = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    padding-bottom: 25px;
`
const Category = styled.div`
    display: flex;
    width: 90%;
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
    padding-right: 10px;
    border-right: 1px solid;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 768px) {
        border-right: none;
        border-bottom: 1px solid;
        justify-content: center;
        padding-bottom: 5px;
    }
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 10px 0;
    gap: 15px;
`

const ExpType = styled.div`
    display: flex;
    flex-direction: column;
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
` 
export default CvSection