import React, { useState, useEffect } from 'react';
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
    const [expandedHamster, setExpandedHamster] = useState("Start Game");

    //Start Game
    const startGame = async () => {
        if (numberOfContestants) {

            const response = await fetch(`/hamsters/random/${numberOfContestants}`);
            const result = await response.json();

            //Set contestants
            setContestants(result);

            //Set expandedHamster
            setExpandedHamster(result[0])

            //Set gameButton
            setGameButton("New Game")

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

                    <div className="expanded-img-container">
                        <FaChevronLeft onClick={prevHamster} className="prev-hamster" />
                        <img src={`/assets/${expandedHamster.imgName}`} alt="Expanded" className="expanded-img" />
                        <FaChevronRight onClick={nextHamster} className="next-hamster" />
                    </div>

                    <button className="select-winner-button">Select {expandedHamster.name} as winner</button>

                    <div className="hamster-items">
                        {contestants.map(contestant => (
                            <figure key={contestant.id} className="hamster-item">
                                <img
                                    src={`/assets/${contestant.imgName}`}
                                    alt="hamster"
                                    onClick={() => { setExpandedHamster(contestant) }}
                                />
                                {/* <h4>{contestant.name}</h4> */}
                            </figure>
                        ))}
                    </div>

                </section>
            }

        </section>
    );
};

export default MultiBattle;
