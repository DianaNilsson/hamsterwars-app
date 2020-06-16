import React, { useState, useEffect } from 'react';
import './Result.css'
import { useParams } from "react-router-dom";

const Result = () => {

    const { gameId } = useParams()

    const [games, setGames] = useState(null);

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
            {!gameId && games &&
                <section className="battle-container">
                    <div className="table">
                        <div className="table-header">
                            <h3>Id</h3>
                            <h3>Date</h3>
                            <h3>Winner (contestants)</h3>
                            <h3>View</h3>
                        </div>
                        <button onClick={() => console.log(games)}>Render</button>
                        {
                            games.map(game => (
                                <p key={game}>{game.id}</p>
                            ))
                        }

                    </div>
                </section>
            }

        </section>
    );
};

export default Result;