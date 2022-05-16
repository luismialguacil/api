import styled from "styled-components";

const ModalContainer = styled.div`
    max-width: 800px;
    margin: 1.75rem auto;
    display:flex;
    justify-content: center;
    align-items:center;
    span{
        display:block;
    }
    .modal-body{
      
    }
    .info{
        
        display:flex;
        
        justify-content: center;
        flex-direction:column;
    }
    h5{
        font-size: 2rem;
        font-weight: bold;
    }
`
export default ModalContainer;