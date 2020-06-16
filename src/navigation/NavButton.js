import React from 'react';
import './NavButton.css';
import { NavLink } from 'react-router-dom';

const NavButton = (props) => {

    const isExact = props.exact

    return (
        <>
            {isExact
                ?
                <NavLink to={props.navigate} exact className="nav-button center" activeClassName="nav-button-active">
                    <span className="nav-icon">{props.icon}</span>
                    <p>{props.name}</p>
                </NavLink>
                :
                <NavLink to={props.navigate} className="nav-button center" activeClassName="nav-button-active">
                    <span className="nav-icon">{props.icon}</span>
                    <p>{props.name}</p>
                </NavLink>
            }
        </>
    );
};

export default NavButton;