import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import './MultiBattle.css';

import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

const MultiBattle = () => {

    // Possible number of contestants 
    const selectNumbers = ["2", "3", "4", "5", "6", "7", "8", "9"];

    //Number of contestants
    const [numberOfContestants, setNumberOfContestants] = useState(null);

    //Actual contestants
    const [contestants, setContestants] = useState([])

    //Game Button
    const [gameButton, setGameButton] = useState("Start Game")

    //Expanded Hamster
    const [expandedHamster, setExpandedHamster] = useState("");

    //Start Game
    const startGame = async () => {
        if (numberOfContestants) {

            try {
                const response = await fetch(`/hamsters/random/${numberOfContestants}`);
                const result = await response.json();

                //Set contestants
                setContestants(result);

                //Set expandedHamster
                setExpandedHamster(result[0])

                //Set gameButton
                setGameButton("New Game")
            } catch (err) {
                return err;
            }
        }
    }

    //Browse expanded hamster (Next >)
    const nextHamster = () => {
        let index = contestants.indexOf(expandedHamster);

        if (index < (contestants.length - 1)) {
            setExpandedHamster(contestants[index + 1]);
        } else {
            setExpandedHamster(contestants[0])
        }
    }

    //Browse expanded hamster  (Prev <)
    const prevHamster = () => {
        let index = contestants.indexOf(expandedHamster);

        if (index === 0) {
            setExpandedHamster(contestants[contestants.length - 1]);
        } else {
            setExpandedHamster(contestants[index - 1])
        }
    }

    //Post match result
    const [gameId, setGameId] = useState(null)

    const postWinner = async () => {
        const config = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contestants: contestants,
                winner: expandedHamster
            })
        };

        try {
            const response = await fetch(`/games`, config);
            const data = await response.json();
            setGameId(data.gameId);
        } catch (error) {
            return error;
        }
    }


    return (
        <section className="multi-battle-section">
            <h4 className="subheader"> Select the number of competing hamsters:</h4>
            {selectNumbers.map(selectNumber => (
                <button
                    className={`select-number-button ${selectNumber <= numberOfContestants && "active"}`}
                    key={selectNumber}
                    onClick={(e) => setNumberOfContestants(e.target.value)}
                    value={selectNumber}
                >
                    {selectNumber}
                </button>
            ))}

            <button className="start-game-button" onClick={startGame}>{gameButton}</button>

            {
                contestants.length > 0 &&
                <section className="battle-container">

                    <h2 className="playful-heading">Let the game begin</h2>
                    <h3 className="subheader">Who are the cutest hamster? </h3>

                    <div className="center">

                        <FaChevronLeft onClick={prevHamster} className="prev-hamster" />
                        <div className="expanded-img-container" onClick={postWinner}>
                            <img src={`/assets/${expandedHamster.imgName}`} alt="Expanded" className="expanded-img" />
                            <button className="set-winner-button">Select {expandedHamster.name} as winner</button>
                        </div>
                        <FaChevronRight onClick={nextHamster} className="next-hamster" />

                    </div>

                    <div className="hamster-items">
                        {contestants.map(contestant => (
                            <figure key={contestant.id} className="hamster-item">
                                <img
                                    src={`/assets/${contestant.imgName}`}
                                    alt="hamster"
                                    className={expandedHamster.id === contestant.id ? 'hamster-expand' : ''}
                                    onClick={() => { setExpandedHamster(contestant) }}
                                />
                                <p>{contestant.name}</p>
                            </figure>
                        ))}
                    </div>

                    {gameId &&
                        <Redirect to={
                            {
                                pathname: `/matchup/${gameId}`,
                                state: {
                                    from: "battle"
                                }
                            }
                        } />
                    }

                </section>
            }

        </section>
    );
};

export default MultiBattle;
