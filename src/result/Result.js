import React, { useState, useEffect } from 'react';
import Matchup from './Matchup'
import './Result.css'
import { useParams } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Result = () => {

    const { gameId } = useParams()

    //Relative parent path, url match
    let { path } = useRouteMatch();

    const [games, setGames] = useState([]);

    useEffect(() => {
        let ignore = false;
        if (!gameId) {
            const fetchGames = async () => {
                const response = await fetch(`http://localhost:3001/games`);
                const result = await response.json();

                if (!ignore) {
                    setGames(result)
                    return (() => { ignore = true; });
                }
            };
            fetchGames();
        }
    }, []);

    return (
        <section className="result-section">
            <h2 className="heading to-uppercase">Result</h2>
            {!gameId && games.length > 0 &&
                <section className="battle-container">
                    <div className="table">
                        <div className="table-header">
                            <h3>Id</h3>
                            <h3>Date</h3>
                            <h3>Winner (contestants)</h3>
                            <h3>View</h3>
                        </div>
                        <button onClick={() => console.log(games[1].timeStamp)}>Render</button>

                    </div>
                </section>
            }


            <Switch>
                <Route path={`${path}/:gameId`} component={Matchup} />
            </Switch>

        </section>
    );
};

export default Result;