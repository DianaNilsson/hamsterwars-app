import React from 'react';
import './NavButton.css';
import { NavLink } from 'react-router-dom';

const NavButton = (props) => {
    return (
        <NavLink exact to={props.navigate} className="nav-button" activeClassName="nav-button-active">
            <span>{props.icon}</span>
            <p>{props.name}</p>
        </NavLink>
    );
};

export default NavButton;