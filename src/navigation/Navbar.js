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
            <h2 className="heading">What would you like to do?</h2>
            <nav>
                <div className="flex-group">
                    <NavButton navigate="/" icon={<FaHome className="nav-icon" />} name="Home" exact />
                    <NavButton navigate="/battle" icon={<RiSwordLine className="nav-icon" />} name="Battle" />
                    <NavButton navigate="/matchup" icon={<AiOutlineTrophy className="nav-icon" />} name="Result" />
                </div>
                <div className="flex-group">
                    <NavButton navigate="/stats" icon={<IoIosStats className="nav-icon" />} name="Statistics" />
                    <NavButton navigate="/test3" icon={<AiOutlineUpload className="nav-icon" />} name="Upload" />
                    <NavButton navigate="/test4" icon={<BsGrid className="nav-icon" />} name="Album" />
                </div>

            </nav>
        </section>
    );
};

export default Navbar;