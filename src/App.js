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
import Footer from './footer/Footer'
import NoMatch from './no-matches/NoMatch'

const App = () => {

  const landscapeOrientation = useMediaQuery({ orientation: 'landscape' })

  return (
    <Router>

      <div className="app">

        {landscapeOrientation &&
          <HorizontalHeader />
        }
        {!landscapeOrientation &&
          <VerticalHeader />
        }

        <Logo />
        <Navbar />

        <Switch>
          <Route path="/battle" component={Battle} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NoMatch} />
        </Switch>

        <Footer />

      </div>

    </Router>

  );
};

export default App;