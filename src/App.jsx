import React, { useState, useEffect } from "react";
import axios from "axios";
//Request
import { getCharactersRequest } from "./lib/api/get-characters-request";

//Style
import "./App.css";

//Components
import Header from "./containers/Header/Header";

//Hooks
import { useCharacters } from "./services/character-services";

function App() {
  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
