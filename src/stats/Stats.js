import React, { useState, useEffect } from 'react';
import './Stats.css'
import Podium from './Podium';

const Stats = () => {

    const [topHamsters, setTopHamsters] = useState([]);

    useEffect(() => {
        let ignore = false;
        const fetchTopHamsters = async () => {
            try {
                const response = await fetch("/charts/top");
                const result = await response.json();

                if (!ignore) {
                    setTopHamsters(result);
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

        </section >
    );
};

export default Stats;