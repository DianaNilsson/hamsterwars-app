import React from 'react';
import './VerticalHeader.css';
import headerImg from './header-img.jpg';

const VerticalHeader = () => {

    //v = vertical
    return (
        <header className="v-header">
            <div className="v-header-text center">
                <hgroup>
                    <h3>It is time for...</h3>
                    <h1>Hamster-<span>wars</span></h1>
                </hgroup>
            </div>
            <img src={headerImg} alt="Hamster hero" />
            <div className="bottom-color-filler" />
            <a href="http://www.freepik.com">Image designed by gstudioimagen / Freepik</a>
        </header >
    );
};

export default VerticalHeader;