import React from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
//Styled-components
import CharacterListContainer from "./CharacterList-style";

const CharacterList = ({characters = []}) => {
    return(
        <div className="container">
            <CharacterCard characters={characters}></CharacterCard>
        </div>
    )
};

export default CharacterList;