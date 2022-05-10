import React from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
//Styled-components
import CharacterListContainer from "./CharacterList-style";

const CharacterList = ({characters = []}) => {
    return (
        
            <CharacterListContainer className="row">
                {characters.map((index) => {
                   <CharacterCard key={index} className="col">
                       
                   </CharacterCard>
                })}
            </CharacterListContainer>
        
    );
};

export default CharacterList;