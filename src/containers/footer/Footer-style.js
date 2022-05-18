import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #00b5cc;
  margin-top: 50px;
  a {
    color: white;
    text-decoration: none;
    margin: 20px;
    &:hover {
      color: #00353e;
    }
  }
  div.row {
    margin: 50px;
  }
  .col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default FooterContainer;
