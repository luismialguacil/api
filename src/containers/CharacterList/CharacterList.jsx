import React from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

const CharacterList = ({ characters = [] }) => {
  return (
    <div className="container">
      <CharacterCard characters={characters}></CharacterCard>
    </div>
  );
};

export default CharacterList;
