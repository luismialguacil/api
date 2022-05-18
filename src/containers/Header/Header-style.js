import styled from "styled-components";

const HeaderContainer = styled.header`
    position: sticky;
    top:0;
    z-index:2;
    width: 100%;
    padding: 10px 0;
    background-color: #00B5CC;
    margin-bottom:50px;
    box-shadow:5px 0 10px #00353E;
    .nav-link{
        color: white;
        margin-left: 20px !important;
        &:hover{
            color:#00353E;
        }     
    }
    button{
        padding:10px;
        margin:0;
        box-shadow:none;
        border-radius:500px;

    }
    span{
        color:white;
        
    }
.navbar-toggler{
    box-shadow: none !important;
    &:hover{
        background-color:#00353E;
    } 
    
}
`;

export default HeaderContainer;