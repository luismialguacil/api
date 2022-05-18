import React from "react";
import Logo from "../../components/Logo/Logo";
import HeaderContainer from "./Header-style";
import { NavLink, Link } from "react-router-dom";
import NavBar from "../../components/Nav/Nav";

const Header = () => {
  return (
    <HeaderContainer className="sticky">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bi bi-list"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <NavBar />
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
