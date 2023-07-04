import styled from 'styled-components';

function Footer({content}) {
    return (
        <Foot>
            {content.footer.map((item, index) => <p key={index}>{item.title} - <A href={item.url}>@{item.name}</A></p>)}
        </Foot>
    )   
}

const Foot = styled.footer`
    background: #2F5E55;
    color: #fff;
    text-align: center;
    padding: 30px;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 55px;
`
const A = styled.a`
    color: #fff;
    &:visited {
        color: #f6f6f6;
    }
`
export default Footer