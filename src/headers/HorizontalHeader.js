import React, { useState, useEffect } from 'react';
import './HorizontalHeader.css';
import headerImg from './header-img.jpg';
import styled from 'styled-components';


// Styled Components (responsive)
const ColorFiller = styled.div`
flex-grow: 1;
&:first-of-type{
    background-color: #E2F3FA;
}
&:last-of-type{
    background-color: #A895C2;
}
`
const HorizontalMainHeader = styled.header`
display: flex;
height: ${props => props.width};
`

const HorizontalHeaderImage = styled.img`
margin: 0;
height: 100%;
`

const ColorFillerInner = styled.div`
background-color: #A2D6E3;
height: 12.06%;
&:last-of-type{
    background-color: #A895C2;
    height: 23.84%
}
`

const HorizontalHeader = () => {

    // Responsive image size
    const [imageWidth, setImageWidth] = useState(`${JSON.stringify(window.innerWidth / 2)}px`)
    useEffect(() => {
        function handleResize() {
            setImageWidth(`${JSON.stringify(window.innerWidth / 2)}px`)
        }
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    // h = horizontal
    // div = only for styling purposes
    return (
        <header className="h-header">
            <ColorFiller />
            <HorizontalMainHeader width={imageWidth}>
                <HorizontalHeaderImage src={headerImg} alt="Hero" />
                <div className="h-header-text-wrapper">
                    <div className="h-header-text">
                        <hgroup>
                            <h3>It is time for...</h3>
                            <h1>Hamster-</h1>
                            <h2>wars</h2>
                        </hgroup>
                    </div>
                    <ColorFillerInner />
                    <ColorFillerInner />
                </div>
            </HorizontalMainHeader>
            <ColorFiller />
        </header>
    );
}

export default HorizontalHeader; 