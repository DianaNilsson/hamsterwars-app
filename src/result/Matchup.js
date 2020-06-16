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
                const response = await fetch(`http://localhost:3001/games/${gameId}`);
                const result = await response.json();

                if (!ignore) {
                    setGame(result)
                    return (() => { ignore = true; });
                }
            };
            fetchGame();
        }
    }, []);


    return (

        <section className="battle-container">
            {game &&
                <div className="matchup-container">
                    <h2 className="playful-heading">The winner of this battle is {game.winner.name}</h2>
                    <img src={`http://localhost:3001/assets/${game.winner.imgName}`} alt={game.winner.imgName} className="winner-img" />
                    <h3 className="subheader">Good work {game.winner.name} keep on doing your thing, like eating {game.winner.favFood} and {game.winner.loves}</h3>
                    <h3 className="subheader competing-hamsters">All competing hamsters: </h3>
                    <ul className="center">
                        {game.contestants.map(contestant => (
                            <li key={contestant.id}>{contestant.name}</li>
                        ))}
                    </ul>

                    {/* <p>Datum {game.timeStamp}</p> */}

                </div>
            }
        </section>
    );
};

export default Matchup;