import styled from 'styled-components'

const SearchStyle = styled.div`
    background-color:none;
    color:white;
    border-bottom: 1px solid white;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: flex-end;
    input{
        background-color:#00353E !important;
        color:white;
        border: none;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        text-align:end;
        width:100%;
        box-shadow:none;
        &:focus{
            border:none;
            outline:none;
        }
    }
    i{
        margin-left:20px;
    }
`



export default SearchStyle;