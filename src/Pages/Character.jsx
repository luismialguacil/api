import React, { useState, useEffect } from "react";

//Components

import Footer from "../containers/footer/Footer";
import Pagination from "../components/pagination/Pagination";
import Search from "../components/SearchBar/SearchBar";
import CharacterList from "../containers/CharacterList/CharacterList";

//Página personajes

const Character = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [status] = useState("");
  const [gender] = useState("");
  const [species] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  //Deconstrucción URL

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  //Fetching API

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]); //Le pasamos la URL como array, para que cada vez que cambie la url en la paginación vuelva a ejecutarse el useEffect

  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-center">
        <Search
          setSearch={setSearch}
          updatePageNumber={updatePageNumber}
        ></Search>
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
};
export default Character;
