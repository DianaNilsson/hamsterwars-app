import React, { useState, useEffect } from 'react';
import './Catalog.css';

// import { FaChevronLeft } from 'react-icons/fa'
// import { FaChevronRight } from 'react-icons/fa'

const Catalog = () => {

    const [hamsters, setHamsters] = useState();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        let ignore = false;
        const fetchHamsters = async () => {
            try {
                const response = await fetch(`/hamsters`);
                const result = await response.json();

                if (!ignore) {
                    setHamsters(result.hamsters)
                    setPhoto(result.hamsters[0])
                    return (() => { ignore = true; });
                }
            } catch (error) {
                return error;
            }
        };
        fetchHamsters();
    }, [])

    // //Browse in catalog (Next >)
    // const nextHamster = () => {
    //     let index = hamsters.indexOf(photo);

    //     if (index < (hamsters.length - 1)) {
    //         setPhoto(hamsters[index + 1]);
    //     } else {
    //         setPhoto(hamsters[0])
    //     }
    // }

    // //Browse in catalog (Prev <)
    // const prevHamster = () => {
    //     let index = hamsters.indexOf(photo);

    //     if (index === 0) {
    //         setPhoto(hamsters[hamsters.length - 1]);
    //     } else {
    //         setPhoto(hamsters[index - 1])
    //     }
    // }

    return (
        <section className="catalog-section">
            <h2 className="heading to-uppercase">Catalog</h2>
            {/* {photo &&
                <section className="center">

                    <FaChevronLeft onClick={prevHamster} className="prev-hamster" />
                    <div className="photo-container">

                        <FaChevronLeft onClick={prevHamster} className="prev-hamster prev-hamster-small-screen" />
                        <FaChevronRight onClick={nextHamster} className="next-hamster next-hamster-small-screen" />


                        <img src={`/assets/${photo.imgName}`} alt="hamster" />
                        <div className="hamster-info">
                            <h3 className="playful-heading">{photo.name}</h3>

                            <p>{photo.age} years</p>
                            <p>Loves: {photo.loves}</p>
                            <p>Favourite food: {photo.favFood}</p>

                            <h4>Statistics</h4>
                            <ul>
                                <li>Games: {photo.games}</li>
                                <li>Wins: {photo.wins}</li>
                                <li>Defeats: {photo.defeats}</li>
                            </ul>

                        </div>
                    </div>
                    <FaChevronRight onClick={nextHamster} className="next-hamster" />

                </section>
            } */}
        </section>
    );
};

export default Catalog;