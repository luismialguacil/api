import React from "react";

//Assets
import logo from "../../assets/images/logo.png";

//Styled-components
import LogoContainer from "./Logo-style";

import { NavLink, Link } from "react-router-dom";

const Logo = () => {
  return (
    <LogoContainer className="navbar-brand">
      <Link to="/">
        <img
          className="logo-image"
          src={logo}
          alt="Logotipo Rick y Morty Wiki"
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
