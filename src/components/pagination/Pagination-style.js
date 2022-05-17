import styled from "styled-components";

const PaginationItem = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin: 40px 0;
button{
    box-shadow: 0 0 5px white;
    border-radius: 200px;
    margin: 0 10px;
    color:white;
    display:flex;
    justify-content:center;
    align-items: center;
    text-align:center;
    width:100px;

    i{
        line-height:0px;
        
    }
}   

`

export default PaginationItem;