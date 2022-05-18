import React from "react";
import CharacterCardContainer from "./CharacterCard-style";
import pushpin from "../../assets/images/pushpin.png";
import Modal from "../../containers/Modal/Modal";

const CharacterCard = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <CharacterCardContainer className="col col-lg-3 g-3" key={index}>
          <div className="card">
            <img src={pushpin} alt="" className="pushpin" />
            <img src={item.image} alt={item.name} className="m-3" />
            <div className="info mx-3 mb-3 d-flex flex-column">
              <h3>{item.name}</h3>
              <span>Gender: {item.gender}</span>
              <span>Race: {item.species}</span>
              <span>Status: {item.status}</span>
            </div>
            <button
              type="button"
              className="btn mas"
              data-bs-toggle="modal"
              data-bs-target={`#id${item.id}`}
            >
              +
            </button>
            <Modal
              id={`id${item.id}`}
              title={item.name}
              image={item.image}
              location={item.location.name}
              gender={item.gender}
              origin={item.origin.name}
              status={item.status}
              species={item.species}
            />
          </div>
        </CharacterCardContainer>
      ))}
    </div>
  );
};

export default CharacterCard;
