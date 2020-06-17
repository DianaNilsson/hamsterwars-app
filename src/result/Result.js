import React, { useState, useEffect } from 'react';
import './Result.css'

const Result = () => {


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
                            <h3>Id</h3>
                            <h3>Date</h3>
                            <h3>Winner (contestants)</h3>
                            <h3>View</h3>
                        </div>

                        {/* .filter(maybeGame => !maybeGame.gameCount) */}
                        {games.map(game => (
                            <div key={game.id}>
                                <p>{game.id}</p>
                                <p>{game.winner.name}</p>
                            </div>
                        ))}


                    </div>
                </section>
            }
        </section>
    );
};

export default Result;