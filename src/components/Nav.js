import React from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

function Nav() {
    return (
        <nav className="w-full sm:w-fit sm:h-screen flex sm:flex-col justify-center items-center">
            <div className="grow sm:grow-0">
                <NavLink to="/">
                    <NavButton pathname="/">HEADER</NavButton>
                </NavLink>
            </div>
            <div className="grow sm:grow-0">
                <NavLink to="/about">
                    <NavButton pathname="/about">ABOUT</NavButton>
                </NavLink>
            </div>
            <div className="grow sm:grow-0">
                <NavLink to="/projects">
                    <NavButton pathname="/projects">PROJECTS</NavButton>
                </NavLink>
            </div>
            <div className="grow sm:grow-0">
                <NavLink to="/contact">
                    <NavButton pathname="/contact">CONTACT</NavButton>
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;
