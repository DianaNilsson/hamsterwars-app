import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Matchup.css'

const Matchup = () => {

    const { gameId } = useParams();
    const [game, setGame] = useState();

    useEffect(() => {
        let ignore = false;
        if (gameId) {
            const fetchGame = async () => {

                try {
                    const response = await fetch(`/games/${gameId}`);
                    const result = await response.json();

                    if (!ignore) {
                        setGame(result)
                        return (() => { ignore = true; });
                    }

                } catch (err) {
                    return err
                }
            };
            fetchGame();
        }
    }, [gameId]);


    return (

        <section className="matchup-section">
            <h2 className="heading to-uppercase">Result</h2>
            {game &&
                <section className="battle-container">
                    <div className="matchup-container">
                        <h2 className="playful-heading">The winner of this battle is {game.winner.name}</h2>
                        <img src={`/assets/${game.winner.imgName}`} alt={game.winner.imgName} className="winner-img" />
                        <h3 className="subheader">Good work {game.winner.name} keep on doing your thing, like eating {game.winner.favFood} and {game.winner.loves}</h3>
                        <h3 className="subheader competing-hamsters">All competing hamsters: </h3>
                        <ul className="center">
                            {game.contestants.map(contestant => (
                                <li key={contestant.id}>{contestant.name}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            }
        </section>
    );
};

export default Matchup;