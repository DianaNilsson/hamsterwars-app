import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory, Link } from "react-router-dom";
import './Matchup.css'
import { RiSwordLine } from 'react-icons/ri'

const Matchup = () => {

    const location = useLocation();
    const history = useHistory();
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

            {location.state.from === "battle" &&
                <>
                    <Link to="/battle" className="link">New battle</Link>
                    <Link to="/matchup" className="link">Show all results</Link>
                </>
            }

            {location.state.from === "result" &&
                <button className="link" onClick={() => history.goBack()}>Back to all results</button>
            }


            {game &&
                <section className="battle-container">
                    <div className="matchup-container">
                        <h2 className="playful-heading">The winner of this battle is {game.winner.name}</h2>
                        <img src={`/assets/${game.winner.imgName}`} alt={game.winner.imgName} className="winner-img" />
                        <h3 className="subheader">Good work {game.winner.name} keep on doing your thing, like eating {game.winner.favFood} and {game.winner.loves}</h3>
                        <h3 className="subheader loosing-hamsters-header">Here {game.contestants.length < 3 ? 'is the other competing hamster:' : 'are all the other competing hamsters:'}</h3>
                        <ul className="loosing-hamsters center">
                            <RiSwordLine className="sword-icon" />
                            {game.contestants.filter(contestant => contestant.id !== game.winner.id).map(contestant => {
                                return (
                                    <li key={contestant.id}>{contestant.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            }
        </section>
    );
};

export default Matchup;