import styled from "styled-components";

const FormWrap = styled.div`
  .formInput {
    display: flex;
    flex-direction: column;
    width: 280px;
  }

  input {
    padding: 15px;
    margin: 10px 0px;
    border-radius: 5px;
    border: 1px solid gray;
    display: inline;
    background: none !important;
    border: none;
    border-bottom: 1px solid white;
    border-radius: 0;
    width: 100%;
    color: white !important;
  }
  .name {
    width: 49% !important;
    display: inline-block;
  }
  .fff {
    float: right;
    margin-top: -74px;
  }

  span {
    position: absolute;
    margin-top: -12px;
    font-size: 18px;
    color: red;
    display: none;
  }

  input:invalid[focused="true"] {
    border: 1px solid red;
  }

  input:invalid[focused="true"] ~ span {
    display: block;
  }
  input.text-area {
    height: 150px;
  }
`;
export default FormWrap;
