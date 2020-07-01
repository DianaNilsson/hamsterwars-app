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

    // Responsive image width
    const [imageWidth, setImageWidth] = useState(`${JSON.stringify(window.innerWidth / 2)}px`)

    useEffect(() => {
        function handleResize() {
            setImageWidth(`${JSON.stringify(window.innerWidth / 2)}px`)
        }
        window.addEventListener('resize', handleResize)

        //Clean up
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    // h = horizontal
    return (
        <header className="h-header">
            <ColorFiller />
            <HorizontalMainHeader width={imageWidth}>
                <HorizontalHeaderImage src={headerImg} alt="Hamster hero" />
                <div className="h-header-text-wrapper">
                    <div className="h-header-text center">
                        <hgroup>
                            <h3>It is time for...</h3>
                            <h1>Hamster-<span>wars</span></h1>
                        </hgroup>
                    </div>
                    <ColorFillerInner />
                    <ColorFillerInner />
                </div>
            </HorizontalMainHeader>
            <ColorFiller />
            <a href="http://www.freepik.com">Image: designed by gstudioimagen / Freepik</a>
        </header>
    );
}

export default HorizontalHeader; 