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
                <NavLink to="/first">
                    <NavButton pathname="/first">FIRST</NavButton>
                </NavLink>
                <NavLink to="/second">
                    <NavButton pathname="/second">SECOND</NavButton>
                </NavLink>
                <NavLink to="/contact">
                    <NavButton pathname="/contact">CONTACT</NavButton>
                </NavLink>
            </nav>
        </aside>
    );
}

export default Nav;
