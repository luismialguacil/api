import styled from "styled-components";

const CharacterCardContainer = styled.div`
  .card {
    background-color: #00b5cc;
    color: white;
    font-size: 1.2rem;
    line-height: 2rem;
    border-radius: 5px;
    h3 {
      font-size: 1.4rem;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }
    img {
      border-radius: 5px;
    }
    .mas {
      position: absolute;

      border-radius: 500px;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 4%;
      right: 4%;
      font-size: 2rem;
      color: white;
      box-shadow: 0 0 5px white;
      &:hover {
        background-color: #00353e;
      }
    }
    .pushpin {
      width: 30px;
      position: absolute;
      left: 46%;
      top: -2%;
    }
    .modal-content {
      background-color: #00b5cc !important;
    }
  }
`;
export default CharacterCardContainer;
