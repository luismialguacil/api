import React from "react";
import { Link } from "react-router-dom";
import NavbarStyled from "./Nav-style";

const NavBar = () => {
  return (
    <NavbarStyled className="navbar-nav ms-auto text-center">
      <Link to="/" className="nav-link my-3 m-lg-0" aria-current="page">
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
    </NavbarStyled>
  );
};
export default NavBar;
