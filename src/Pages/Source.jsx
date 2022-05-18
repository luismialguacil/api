import React, { useState, useEffect } from "react";

//Style
import SourceStyled from "./Source-style";

import Drunk from '../assets/images/drunk.png';
import Figma from '../assets/images/Figma.png';
import Html from '../assets/images/HTML5.png';
import Css from '../assets/images/CSS3.png';
import JaS from '../assets/images/JavaS.png';
import Rjs from '../assets/images/RJS.png';



import Footer from "../containers/footer/Footer";

function Source() {

    return (
        <>
        <SourceStyled>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6 order-lg-1 order-2">
                    <img src={Drunk} alt="" />
                </div>
                <div className="col-12 col-lg-6 order-lg-2 order-1 text-center text-lg-start d-flex justify-content-center flex-column">
                    <h4>Developed and designed with:</h4>
                    <div className="logos">
                        <img src={Html} alt="HTML5" />
                        <img src={Css} alt="CSS3" />
                        <img src={JaS} alt="JavaScript" />
                        <img src={Rjs} alt="ReactJS" />
                        <img src={Figma} alt="Figma" />
                    </div>
                    <h4>API Request</h4>
                    <a href="https://rickandmortyapi.com/">https://rickandmortyapi.com/</a>
                    <p>Author: <br />
                        Luis Miguel Alguacil<br />
                        Design and Web Development<br />
                        Escuela Arte Granada</p>
                </div>
            </div>
        </div>
        </SourceStyled>
        <Footer></Footer>
        </>
    )
}

export default Source;