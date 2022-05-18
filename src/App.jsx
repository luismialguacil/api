import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Style
import "./App.css";

//Components
import Header from "./containers/Header/Header";
import Contact from "../src/Pages/Contact";
import Character from "../src/Pages/Character";
import Source from "../src/Pages/Source";
import Text from "../src/components/Text/Text";
import Footer from "../src/containers/footer/Footer";
import Banner from "./Pages/Character-Style";

//Navegación react-router-dom

function App() {
  return (
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
  );
}

//Página Home

function Home() {
  return (
    <>
      <Banner />
      <Text></Text>
      <Footer />
    </>
  );
}

export default App;
