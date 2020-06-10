import React, { useEffect, useState } from 'react';

const Battle = () => {

    const getContestants = async () => {
        const response = await fetch(`http://localhost:3001/hamsters/random/2`)
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        getContestants();
    }, [])

    return (
        <div>
            <h2>Battle</h2>
        </div>
    );
};

export default Battle;