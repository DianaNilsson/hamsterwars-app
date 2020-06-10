import React from 'react';
import './Navbar.css'
import NavButton from './NavButton'

import { FaHome } from 'react-icons/fa';
import { RiSwordLine } from 'react-icons/ri';
import { AiOutlineTrophy } from 'react-icons/ai';
import { IoIosStats } from 'react-icons/io';
import { AiOutlineUpload } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';


const Navbar = () => {
    return (
        <section className="nav-section">
            <h2>What would you like to start with?</h2>
            <nav>
                <div className="flex-group">
                    <NavButton navigate="/" icon={<FaHome className="nav-icon" />} name="Home" />
                    <NavButton navigate="/battle" icon={<RiSwordLine className="nav-icon" />} name="Battle" />
                    <NavButton navigate="/" icon={<AiOutlineTrophy className="nav-icon" />} name="Podium" />
                </div>
                <div className="flex-group">
                    <NavButton navigate="/" icon={<IoIosStats className="nav-icon" />} name="Statistics" />
                    <NavButton navigate="/" icon={<AiOutlineUpload className="nav-icon" />} name="Upload" />
                    <NavButton navigate="/" icon={<BsGrid className="nav-icon" />} name="Album" />
                </div>

            </nav>
        </section>
    );
};

export default Navbar;