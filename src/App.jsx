import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Style
import "./App.css";

//Components
import Header from "./containers/Header/Header";
import Footer from "./containers/footer/Footer";

import Pagination from "./components/pagination/Pagination";
import Search from "./components/SearchBar/SearchBar";
import Contact from "./Pages/Contact"
import Character from "./Pages/Character";
import Source from "./Pages/Source";
//Hooks
import { useCharacters } from "./services/character-services";
import CharacterList from "./containers/CharacterList/CharacterList";



function App() {
  return(
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Character" element={<Character />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Source" element={<Source />}></Route>
      </Routes>
    </Router>
  )
}


const Home = ( ) => {
  // const characterService = useCharacters();
  // const [characters, setCharacterList] = useState([]);
  // useEffect(() => {
  //   const getCharacterList = async () => {
  //     const characters = await characterService.getCharacters();
  //     const { results } = await characters.data;
  //     setCharacterList(results);
  //   }
  //   getCharacterList();
  // }, []);
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    // const getCharacterList = async () => {
      //     const characters = await characterService.getCharacters();
      //     const { results } = await characters.data;
      //     setCharacterList(results);
      //   }
      //   getCharacterList();
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);


  return (
    <div className="App">
      
      <div className="container d-flex justify-content-center align-center">
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber}></Search>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
      <CharacterList characters={results}></CharacterList>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
