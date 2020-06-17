import React, { useState } from 'react';
import './Battle.css';
import DuoBattle from './DuoBattle';
import MultiBattle from './MultiBattle';
import Tournament from './Tournament';
import NoMatch from '../no-matches/NoMatch';
import checkIcon from './check-icon.png';
import { Switch, Route, Link, NavLink, useRouteMatch } from "react-router-dom";


import { FaLongArrowAltRight } from 'react-icons/fa'

const Battle = () => {

    //Relative parent path, url match
    let { path, url } = useRouteMatch();

    const [hamsterIdOne, setHamsterIdOne] = useState("1")
    const [hamsterIdTwo, setHamsterIdTwo] = useState("2")

    const getHamsters = async () => {
        const response = await fetch(`/hamsters/random/2`);
        const result = await response.json();

        setHamsterIdOne((result[0].id).toString())
        setHamsterIdTwo((result[1].id).toString())
    }

    return (

        <section className="battle-section">
            <h2 className="heading to-uppercase">Start a new battle</h2>
            <div className="choose-battle-type">
                <h4>Duel</h4>
                <NavLink to={`${url}/${hamsterIdOne}/${hamsterIdTwo}`} onClick={getHamsters} className="checkbox" activeClassName="checkbox-active">
                    <img src={checkIcon} alt="check" className="check-icon" />
                </NavLink>
                <h4>Multiple</h4>
                <NavLink to={`${url}/multi-battle`} className="checkbox" activeClassName="checkbox-active">
                    <img src={checkIcon} alt="check" className="check-icon" />
                </NavLink>
                <h4>Tournament</h4>
                <NavLink to={`${url}/tournament`} className="checkbox" activeClassName="checkbox-active">
                    <img src={checkIcon} alt="check" className="check-icon" />
                </NavLink>
            </div>

            <div className="flexx">
                <h3 className="subheader">... or go checkout all <Link to="/matchup"><span className="subheader show-result">results</span></Link></h3><FaLongArrowAltRight className="result-arrow" />
            </div>


            <Switch>
                <Route path={`${path}/tournament`} component={Tournament} />
                <Route path={`${path}/multi-battle`} component={MultiBattle} />
                {}
                <Route path={`${path}/:id1/:id2`} component={DuoBattle} />
                <Route path="*" component={NoMatch} />
            </Switch>

        </section >

    );
};

export default Battle;