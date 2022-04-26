import React from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

function Nav() {
    return (
        <aside className="h-screen w-fit flex items-center justify-center">
            <nav className="flex flex-col justify-center items-center">
                <NavLink to="/">
                    <NavButton pathname="/">HEADER</NavButton>
                </NavLink>
                <NavLink to="/about">
                    <NavButton pathname="/about">ABOUT</NavButton>
                </NavLink>
                <NavLink to="/projects">
                    <NavButton pathname="/projects">PROJECTS</NavButton>
                </NavLink>
                <NavLink to="/contact">
                    <NavButton pathname="/contact">CONTACT</NavButton>
                </NavLink>
            </nav>
        </aside>
    );
}

export default Nav;
