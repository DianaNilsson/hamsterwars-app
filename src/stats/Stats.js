import React, { useState, useEffect } from 'react';
import './Stats.css'
import Podium from './Podium';
import { RiEmotionSadLine } from 'react-icons/ri';

const Stats = () => {

    const [topHamsters, setTopHamsters] = useState([]);
    const [bottomHamsters, setBottomHamsters] = useState([]);

    useEffect(() => {
        let ignore = false;
        const fetchTopHamsters = async () => {
            try {
                const responseTop = await fetch("/charts/top");
                const responseBottom = await fetch("/charts/bottom");


                const resultTop = await responseTop.json();
                const resultBottom = await responseBottom.json();

                if (!ignore) {
                    setTopHamsters(resultTop);
                    setBottomHamsters(resultBottom);
                    return (() => { ignore = true; });
                }
            } catch (error) {
                return error;
            }
        };
        fetchTopHamsters();
    }, []);

    return (
        <section className="stats-section">

            <Podium topHamsters={topHamsters} />

            <h3 className="heading bottom-hamsters-header">The hamsters that really need your love though are:</h3>

            <div className="bottom-container">
                {bottomHamsters.map(bottomHamster => (
                    <div key={setBottomHamsters.id} className="bottom-hamster-item">
                        <img src={`/assets/${bottomHamster.imgName}`} alt={bottomHamster.imgName} />
                        <p>{bottomHamster.name}</p>
                    </div>
                ))}
            </div>

            <p className="subheader">they are the most losing hamsters...</p>
            <RiEmotionSadLine className="sad-icon" />


        </section >
    );
};

export default Stats;