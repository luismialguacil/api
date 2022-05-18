import styled from "styled-components";

const SearchStyle = styled.form`
  background-color: none;
  color: white;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: flex-end;
  width: 80%;
  input {
    background-color: #00353e !important;
    color: white;
    border: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: end;
    width: 100%;
    box-shadow: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
  button {
    background-color: #00353e !important;
    border: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
  i {
    margin-left: 10px;
    color: white;
  }
`;

export default SearchStyle;
