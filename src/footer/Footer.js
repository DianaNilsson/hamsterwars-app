import React from 'react';
import './Footer.css'
import { useMediaQuery } from 'react-responsive'

const Footer = () => {

    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })

    return (
        <footer className="mainFooter">
            <div>
                <h1 css={{ color: 'red' }}>Device Test!</h1>
                {isDesktopOrLaptop && <>
                    <p>You are a desktop or laptop</p>
                    {isBigScreen && <p>You also have a huge screen</p>}
                    {isTabletOrMobile && <p>You are sized like a tablet or mobile phone though</p>}
                </>}
                {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
                <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
                {isRetina && <p>You are retina</p>}
            </div>
        </footer>
    );
};

export default Footer;