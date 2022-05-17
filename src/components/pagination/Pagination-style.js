import styled from "styled-components";

const PaginationItem = styled.nav`
display:flex;
justify-content:center;
align-items:center;
margin: 40px 0;
.pagination{
    display:flex;
    justify-content:center;
    align-items:center;
}
a{
    color:white !important;
    padding: 5px;
    text-decoration:none !important;
    
}

li.item{
    box-shadow: 0 0 5px white;
    border-radius: 200px;
    margin: 0 5px;
    color:white;
    display:flex;
    justify-content:center;
    align-items: center;
    text-align:center;
    width:40px;
    line-height:50px
    a{
        text-decoration: none;
        color:white;
    }

}

li.break{
    padding:0;
    margin:0;
    
}
li.act{
    background-color: #00B5CC;
}   
li.prev, li.next{
    box-shadow: 0 0 5px white;
    border-radius: 200px;
    margin: 0 5px;
    color:white;
    display:flex;
    justify-content:center;
    align-items: center;
    text-align:center;
    width:85px;
    a{
        text-decoration: none;
        color:white;
    }
}   


`

export default PaginationItem;