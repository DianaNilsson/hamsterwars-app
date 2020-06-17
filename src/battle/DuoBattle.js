import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import './DuoBattle.css';


const DuoBattle = () => {

    const { id1, id2 } = useParams();

    const [hamsterOne, setHamsterOne] = useState("");
    const [hamsterTwo, setHamsterTwo] = useState("");

    //On params changes
    useEffect(() => {
        let ignore = false;
        if (id1 !== id2) {
            const fetchHamsters = async () => {
                try {
                    const responseId1 = await fetch(`/hamsters/${id1}`);
                    const responseId2 = await fetch(`/hamsters/${id2}`);
                    const resultId1 = await responseId1.json();
                    const resultId2 = await responseId2.json();

                    if (!ignore) {
                        setHamsterOne(resultId1)
                        setHamsterTwo(resultId2)
                        return (() => { ignore = true; });
                    }
                } catch (error) {
                    return error;
                }
            };
            fetchHamsters();
        }
    }, [id1, id2]);


    //Post match result
    const [gameId, setGameId] = useState(null)

    const postWinner = async (winner) => {
        const config = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contestants: [hamsterOne, hamsterTwo],
                winner: winner
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

        <section className="battle-container">
            <h2 className="playful-heading">Let the duel begin</h2>
            <h3 className="subheader">Click on the cutest hamster! </h3>

            <div className="duellists-container center">
                <div className="duellist" onClick={() => postWinner(hamsterOne)}>
                    <img src={`/assets/${hamsterOne.imgName}`} alt={hamsterOne.imgName} />
                    <button>Select {hamsterOne.name} as winner</button>
                </div>
                <h4 className="heading">vs</h4>
                <div className="duellist" onClick={() => postWinner(hamsterTwo)}>
                    <img src={`/assets/${hamsterTwo.imgName}`} alt={hamsterTwo.imgName} />
                    <button>Select {hamsterTwo.name} as winner</button>
                </div>

                {gameId && <Redirect to={`/matchup/${gameId}`} />}

            </div>
        </section >

    );
};

export default DuoBattle;