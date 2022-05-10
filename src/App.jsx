import React, { useState, useEffect } from "react";

//Request

//Style
import "./App.css";

//Components
import Header from "./containers/Header/Header";
//Hooks
import { useCharacters } from "./services/character-services";
import CharacterList from "./containers/CharacterList/CharacterList";

function App() {
  const characterService = useCharacters();
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const getCharacterList = async () => {
      const characters = await characterService.getCharacters();
      const { results } = await characters.data;
      setCharacterList(results);
    }
    getCharacterList();
  }, []);


  return (
    <>
      <Header></Header>
     
      <section>
        <CharacterList></CharacterList>
      </section>
    </>
  );
}

export default App;
