import React from 'react';
import FooterContainer from './Footer-style';
import Logo2 from '../../assets/images/Logo2.png';

const Footer = () => {
    return(
        <FooterContainer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="#"><img src={Logo2} alt="" /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col flex-column flex-md-row">
                        <a href="#">Home</a>
                        <a href="#">Characters</a>
                        <a href="#">Tell Us</a>
                        <a href="#">Source</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <a href="#"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-twitter"></i></a>
                        <a href="#"><i class="bi bi-discord"></i></a>
                        <a href="#"><i class="bi bi-github"></i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <small>© Copyrigth 2022 | All rigths reserved Designed and Developed by <a href="https://ladesign.es/" target="_blank" className='m-0'>LADesign</a></small>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;