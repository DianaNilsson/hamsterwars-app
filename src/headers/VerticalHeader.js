import React, { useState, useEffect } from 'react';
import './VerticalHeader.css';
import headerImg from './header-img.jpg';
import styled from 'styled-components';

const VerticalHeader = () => {
    return (
        <header className="v-header">
            <div className="v-header-text">
                <hgroup>
                    <h3>It is time for...</h3>
                    <h1>Hamster-</h1>
                    <h2>wars</h2>
                </hgroup>
            </div>
            <img src={headerImg} alt="Hero" />
            <div className="bottom-color-filler" />

        </header>
    );
};

export default VerticalHeader;