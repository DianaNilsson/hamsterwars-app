import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import './Result.css';
import moment from 'moment';
import { RiZoomInLine } from 'react-icons/ri';

const Result = () => {

    const { url } = useRouteMatch();

    const [games, setGames] = useState(null);
    const [gameCount, setGameCount] = useState(null);

    useEffect(() => {
        let ignore = false;

        const fetchGames = async () => {
            try {
                const response = await fetch(`/games`);
                const result = await response.json();

                if (!ignore) {
                    setGames(result)
                    setGameCount(result.length)
                    return (() => { ignore = true; });
                }
            } catch (err) {
                return err;
            }
        };
        fetchGames();

    }, []);

    return (
        <section className="result-section">
            <h2 className="heading to-uppercase">Result</h2>
            {gameCount && <p className="played-games">Played games: {gameCount.toString()}</p>}
            {games &&
                <section className="battle-container">
                    <div className="table">
                        <div className="table-header">
                            <h3 className="game-id">Id</h3>
                            <h3 className="game-date">Date</h3>
                            <h3 className="game-winner">Winner</h3>
                            <h3 className="contestants">Loosers</h3>
                        </div>

                        {games.map(game => {

                            const looserContestants = game.contestants.filter(contestant => contestant.id !== game.winner.id);

                            return (
                                <div key={game.id} className="table-row">
                                    <p className="game-id">{game.id}</p>
                                    <p className="game-date">{moment.unix(game.timeStamp._seconds).format("MM/DD/YYYY")}</p>
                                    <p className="game-winner">{game.winner.name}</p>
                                    <p className="contestants">
                                        {
                                            looserContestants.slice(0, 3).map((contestant, i, arr) => {
                                                if (looserContestants.length < 3) {
                                                    if (arr.length - 1 === i) {
                                                        return `${contestant.name} `
                                                    } else {
                                                        return `${contestant.name}, `
                                                    }
                                                } else {
                                                    if (arr.length - 1 === i) {
                                                        return `${contestant.name} et al. `
                                                    } else {
                                                        return `${contestant.name}, `
                                                    }
                                                }
                                            })
                                        }
                                    </p>
                                    <Link to={`${url}/${game.id}`} className="to-game-result">
                                        <RiZoomInLine className="arrow-icon" />
                                    </Link>

                                </div>
                            )
                        }
                        )}
                    </div>
                </section>
            }
        </section>
    );
};

export default Result;