import React, { useState, useEffect } from "react";

//Style

import banner from '../assets/images/banner-image.png'
import Text from "../components/Text/Text";

import Footer from "../containers/footer/Footer";
import Banner from "./Character-Style";


function Character() {

    return (
        <>
        <Banner />
        <Text></Text>
        <Footer />
        </>
    )
}

export default Character;