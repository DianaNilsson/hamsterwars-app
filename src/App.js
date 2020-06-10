import React from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HorizontalHeader from './headers/HorizontalHeader'
import VerticalHeader from './headers/VerticalHeader'
import Logo from './logo/Logo'
import Navbar from './navigation/Navbar'
import Home from './home/Home'
import Battle from './battle/Battle'

const App = () => {

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

  return (
    <Router>

      <div className="app">

        {!isPortrait &&
          <HorizontalHeader />
        }
        {isPortrait &&
          <VerticalHeader />
        }

        <Logo />
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/battle" exact component={Battle} />
        </Switch>


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

      </div>

    </Router>

  );
};

export default App;