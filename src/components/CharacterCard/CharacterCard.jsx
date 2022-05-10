import React from "react";
import CharacterCardContainer from "./CharacterCard-style";

const CharacterCard = ({item}) => {
    return (
            <CharacterCardContainer className="card">
                <img src={item.image} alt="" />
            </CharacterCardContainer>
    );
};

export default CharacterCard;