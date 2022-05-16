import styled from "styled-components";

const FooterContainer = styled.footer`
    display:flex; 
    justify-content:center;
    text-align: center;
    align-items: center;
    background-color: #00B5CC;
    margin-top: 100px;
    a{
        color:white;
        text-decoration:none;
        margin: 30px;
        &:hover{
            color:#00353E;
        }
    }
    div.row{
        margin: 50px;
    }
`

export default FooterContainer;
