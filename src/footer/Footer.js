import React from 'react';
import './Footer.css';
import { useMediaQuery } from 'react-responsive';
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    const desktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const bigScreen = useMediaQuery({ minDeviceWidth: 1824 })
    const tabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const landscape = useMediaQuery({ orientation: 'landscape' })

    return (
        <footer className="mainFooter">
            <a href="https://github.com/DianaNilsson/hamsterwars-app"><FaGithub className="github-repo-link" /></a>
            <p>Hamsterwars &#xa9; Diana Nilsson</p>
            <p>Utvecklad med bl.a. React, Nodejs, Express & Firestore</p>
            <p>Responsiv design: du befinner dig på en {desktopOrLaptop ? 'laptop/desktop' : 'tablet/mobile'}, {bigScreen && 'med en stor skärm,'} {desktopOrLaptop && tabletOrMobile && 'just nu med storleken av en mobil/tablet,'} i {landscape ? 'landskapsorienterat' : 'porträttorienterat'} läge.</p>
        </footer>
    );
};

export default Footer;