import React from 'react';
import './Logo.css'
import logoImg from './logo.png'

const Logo = () => {
    return (
        <figure className="logo">
            <figcaption>Let's play</figcaption>
            <img src={logoImg} alt="Hamsterwars logo" />
            <figcaption>Hamster<span>wars</span></figcaption>
        </figure>
    );
};

export default Logo;