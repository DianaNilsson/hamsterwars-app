import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, NavLink, useRouteMatch } from "react-router-dom";
import './Battle.css';
import DuoBattle from './DuoBattle';
import MultiBattle from './MultiBattle';
import Tournament from './Tournament';
import checkIcon from './check-icon.png';
import { FaLongArrowAltRight } from 'react-icons/fa'

const Battle = () => {

    //Relative parent {path, url} match
    let { path, url } = useRouteMatch();

    const [hamsterIdOne, setHamsterIdOne] = useState("")
    const [hamsterIdTwo, setHamsterIdTwo] = useState()

    useEffect(() => {
        let ignore = false;

        const fetchRandomHamsters = async () => {
            const response = await fetch(`/hamsters/random/2`);
            const result = await response.json();

            if (!ignore) {
                setHamsterIdOne((result[0].id).toString())
                setHamsterIdTwo((result[1].id).toString())
                return (() => { ignore = true; });
            }
        };
        fetchRandomHamsters();

    }, []);

    return (

        <section className="battle-section">
            <h2 className="heading to-uppercase">Start a new battle</h2>
            <div className="choose-battle-type">
                <h4>Duel</h4>
                <NavLink to={`${url}/${hamsterIdOne}/${hamsterIdTwo}`} className="checkbox" activeClassName="checkbox-active">
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

            <div className="center go-to-result-container">
                <h3 className="subheader">... or checkout all <Link to="/matchup"><span className="subheader show-result">results</span></Link></h3><FaLongArrowAltRight className="result-arrow" />
            </div>


            <Switch>
                <Route path={`${path}/tournament`} component={Tournament} />
                <Route path={`${path}/multi-battle`} component={MultiBattle} />
                <Route path={`${path}/:id1/:id2`} component={DuoBattle} />
            </Switch>

        </section >

    );
};

export default Battle;