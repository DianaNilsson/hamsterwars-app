import React from 'react';
import './Podium.css'
import { IoMdTrophy } from 'react-icons/io'

const Podium = (props) => {
    return (
        <>
            <h2 className="heading to-uppercase">Podium</h2>

            {props.topHamsters.length > 0 &&
                <div className="podium">
                    <div className="first center">
                        <div className="podium-hamster-holder">
                            <img src={`/assets/${props.topHamsters[0].imgName}`} alt={props.topHamsters[1].ImgName} />
                            <p className="podium-hamster-name">{props.topHamsters[0].name}</p>
                        </div>
                        <p className="placing">1</p>
                    </div>
                    <div className="second-third">
                        <div className="podium-hamster-holder podium-left">
                            <img src={`/assets/${props.topHamsters[1].imgName}`} alt={props.topHamsters[1].ImgName} />
                            <p className="podium-hamster-name">{props.topHamsters[1].name}</p>
                        </div>
                        <p className="placing">2</p>
                        <div className="podium-hamster-holder podium-right">
                            <img src={`/assets/${props.topHamsters[2].imgName}`} alt={props.topHamsters[1].ImgName} />
                            <p className="podium-hamster-name">{props.topHamsters[2].name}</p>
                        </div>
                        <p className="placing">3</p>

                    </div>
                    <div className="fourth-fifth">
                        <div className="podium-hamster-holder podium-left">
                            <img src={`/assets/${props.topHamsters[3].imgName}`} alt={props.topHamsters[1].ImgName} />
                            <p className="podium-hamster-name">{props.topHamsters[3].name}</p>
                        </div>
                        <p className="placing">4</p>
                        <div className="podium-hamster-holder podium-right">
                            <img src={`/assets/${props.topHamsters[4].imgName}`} alt={props.topHamsters[1].ImgName} />
                            <p className="podium-hamster-name">{props.topHamsters[4].name}</p>
                        </div>

                        <IoMdTrophy className="hamsterwars-trophy" />

                        <p className="placing">5</p>
                    </div>
                </div>
            }

        </>
    );
};

export default Podium;