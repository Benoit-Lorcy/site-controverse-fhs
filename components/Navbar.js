import React from "react";

const Navbar = () => {
    return (
        <nav>
            <header class="header">
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul class="menu">
                    <li><a href="#work">Our Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </header>
        </nav>
    )
}


export default Navbar;