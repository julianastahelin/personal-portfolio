import styled from 'styled-components'
// import portfolio from '../img/portfolio.png';
// import juflix from '../img/julflix.png';
// import pokedex from '../img/pokedex.png';

function ProjectsSection({ content }) {
    return (
        <>
            <H2>{content.projectSection.title}</H2>
            <Section> 
                {content.projectSection.projects.map((project, index) => {
                    return (
                        <Project key={project+index} number={index}>
                                <Img src={require(`../img/${project.image.desktop}`)} alt={project.image.desktop} />
                                <Div key={project.title+index} style={project.image.boxPosition}>
                                    <H3>{project.title}</H3>
                                    <P>{project.subtitle}</P>
                                    <H4>{project.stack.title}</H4>
                                    <ul>
                                        {project.stack.list.map((item) => <Li key={item}>{item} </Li>)}
                                    </ul>
                                    <H4>{project.description.title}</H4>
                                    <P>{project.description.text}</P>
                                    <BtnContainer>
                                        {project.links.map((link,index) => <Btn key={link+index} href={link.url} target="_blank">{link.title}</Btn>)}
                                    </BtnContainer>
                                </Div>                             
                        </Project>
                    )
                })}
            </Section>
        </>
    )
}

const Section = styled.section`
    background: linear-gradient(180deg, #2F5E55 0%, #ACCCC6 45.83%, #2F5E55 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
`

const H2 = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    padding-bottom: 20px;
`
const Project = styled.div`
    display: flex;
    width: 90%;
    gap: 30px;
    justify-content: space-around;
    align-items: center;
    flex-direction: ${props => props.number === 0 || props.number%2 === 0 ? 'row' : 'row-reverse'};
    @media (max-width: 1000px) {
        width: 95%;
        gap: 20px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`

const Div = styled.div` 
    padding: 20px;
    background: #000000;
    border: 5px solid #D8D8D8;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.71);
    color: #fff;
    width: 40%;
    @media (max-width: 768px) {
        width: 90%;
    }
`
const Img = styled.img`
    width: 600px;
    height: 361px;
    @media (max-width: 1000px) {
        width: 500px;
        height: 301px;
    }
    @media (max-width: 900px) {
        width: 450px;
        height: 271px;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`
const H3 = styled.h3`
    font-weight: 700;
    font-size: 22px;
    color: #0FF76C;
`
const P = styled.p`
    font-weight: 400;
    font-size: 13px;
`
const H4 = styled.h4`
    font-weight: 700;
    font-size: 17px;
    color: #0FF76C;
    padding-top: 30px;
`

const Li = styled.li`
    list-style: none;
    &:before {
        content: "•";
        padding-right: 10px;
        font-size: 15px;
    }
`
const BtnContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 30px;
`
const Btn = styled.a`
    text-decoration: none;
    padding: 10px;
    font-size: 18px;
    color: #F0E508;
    border: 1px solid #FFFFFF;
    box-shadow: 3px 3px 3px rgba(255, 255, 255, 0.5);
    font-weight: 700;
    &:hover{
        transform: scale(1.03);
        transition: ease-in-out 0.2s;
        opacity: 0.7;
    }
    `

export default ProjectsSection