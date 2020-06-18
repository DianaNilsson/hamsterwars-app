import React from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HorizontalHeader from './headers/HorizontalHeader';
import VerticalHeader from './headers/VerticalHeader';
import Logo from './logo/Logo';
import Navbar from './navigation/Navbar';
import Home from './home/Home';
import Battle from './battle/Battle';
import Result from './result/Result';
import Matchup from './result/Matchup';
import Stats from './stats/Stats';
import Upload from './upload/Upload';
import Footer from './footer/Footer';
import NoMatch from './no-matches/NoMatch';

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

        <main>
          <Switch>
            <Route path="/battle" component={Battle} />
            <Route path="/matchup/:gameId" component={Matchup} />
            <Route path="/matchup" exact component={Result} />
            <Route path="/stats" exact component={Stats} />
            <Route path="/upload" exact component={Upload} />
            <Route path="/" exact component={Home} />
            <Route path="*" component={NoMatch} />
          </Switch>

        </main>

        <Footer />

      </div>

    </Router>

  );
};

export default App;