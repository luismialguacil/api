import React from 'react';

//Assets
import logo from '../../assets/images/logo.png';

//Styled-components
import LogoContainer from './Logo-style';

const Logo = () => {
    return (
        <LogoContainer className='navbar-brand'>
            <a href="#">
                <img className="logo-image" src={logo} alt="Logotipo Rick y Morty Wiki" />
            </a>
        </LogoContainer>
    );
};

export default Logo;