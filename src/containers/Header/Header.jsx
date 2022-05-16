import React from "react";
import Logo from "../../components/Logo/Logo";
import HeaderContainer from "./Header-style";

const Header = () => {
  return (
    <HeaderContainer>
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Characters
              </a>
              <a className="nav-link" href="#">
                Tell Us
              </a>
              <a className="nav-link" href="#">
                Source
              </a>
            </div>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
