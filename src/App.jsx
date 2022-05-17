import React, { useState, useEffect } from "react";

//Style
import "./App.css";

//Components
import Header from "./containers/Header/Header";
import Footer from "./containers/footer/Footer";
import FiltersBar from "./containers/Filters/Filters";
import Pagination from "./components/pagination/Pagination";



//Hooks
import { useCharacters } from "./services/character-services";
import CharacterList from "./containers/CharacterList/CharacterList";



function App() {
  const characterService = useCharacters();
  const [characters, setCharacterList] = useState([]);


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
      <FiltersBar />
      <Pagination></Pagination>
      <CharacterList characters={characters}></CharacterList>
      <Pagination></Pagination>
      <Footer></Footer>
    </>
  );
}

export default App;
