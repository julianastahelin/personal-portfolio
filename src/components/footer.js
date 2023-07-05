import styled from 'styled-components';

function Footer({content}) {
    return (
        <Foot>
            {content.footer.map((item, index) => <p key={index}>{item.title} - <A href={item.url} target="_blank">@{item.name}</A></p>)}
        </Foot>
    )   
}

const Foot = styled.footer`
background: linear-gradient(180deg, #DEF7F3 0%,  #DCF2E7 100%);
    box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.6);
    text-align: center;
    padding: 30px;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 55px;
    width: 100%;
`
const A = styled.a`
    &:visited {
        color: #2F5E55;
    }
`
export default Footer