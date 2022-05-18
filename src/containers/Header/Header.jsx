import React from "react";
import Logo from "../../components/Logo/Logo";
import HeaderContainer from "./Header-style";
import { NavLink, Link } from "react-router-dom";

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
            <div className="navbar-nav ms-auto text-center">
              <Link to="/" className="nav-link my-3 m-lg-0 active" aria-current="page">
                Home
              </Link>
              <Link to="/Character" className="nav-link my-3 m-lg-0">
                Characters
              </Link>
              <Link to="/Contact" className="nav-link my-3 m-lg-0">
                Tell Us
              </Link>
              <Link to="/Source" className="nav-link my-3 m-lg-0">
                Source
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
