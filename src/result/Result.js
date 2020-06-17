import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import './Result.css';
import moment from 'moment';
import { MdArrowForward } from 'react-icons/md';

const Result = () => {

    const { url } = useRouteMatch();

    const [games, setGames] = useState(null);

    useEffect(() => {
        let ignore = false;

        const fetchGames = async () => {
            const response = await fetch(`/games`);
            const result = await response.json();

            if (!ignore) {
                setGames(result)
                return (() => { ignore = true; });
            }
        };
        fetchGames();

    }, []);

    return (
        <section className="result-section">
            <h2 className="heading to-uppercase">Result</h2>
            {games &&
                <section className="battle-container">
                    <div className="table">
                        <div className="table-header">
                            <h3 className="game-id">Id</h3>
                            <h3 className="game-date">Date</h3>
                            <h3 className="game-winner">Winner (contestants)</h3>
                            <h3 className="display-game-result">View</h3>
                        </div>

                        {games.map(game => (
                            <div key={game.id} className="table-row">
                                <p className="game-id">{game.id}</p>
                                <p className="game-date">{moment.unix(game.timeStamp._seconds).format("MM/DD/YYYY")}</p>
                                <p className="game-winner">{game.winner.name} ({game.contestants.length})</p>
                                <Link to={`${url}/${game.id}`} className="display-game-result">
                                    <MdArrowForward className="arrow-icon" />
                                </Link>

                            </div>
                        ))}
                    </div>
                </section>
            }
        </section>
    );
};

export default Result;