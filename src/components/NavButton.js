import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function NavButton({ children, pathname }) {
    const location = useLocation();
    const [animate, setAnimate] = useState(false);
    return (
        <button
            className={`w-32 h-24 m-2 overflow-hidden z-0 relative ${
                animate && "animate-nav-click"
            } ${
                location.pathname === pathname
                    ? `before:animate-fade-in border-indigo-400 text-indigo-400 before:content-[''] before:w-[200%] before:h-[200%] before:bg-no-repeat before:bg-rotating-border-image before:bg-rotating-border-size before:bg-rotating-border-position before:bg-rotating-border before:absolute before:-left-1/2 before:-top-1/2 before:-z-20 before:animate-rotate after:absolute after:w-[calc(100%-4px)] after:bg-zinc-800 after:-z-10 after:h-[calc(100%-4px)] after:top-[2px] after:left-[2px]`
                    : ` hover:translate-x-1 duration-200 hover:text-zinc-400 hover:border-zinc-400 before:hover:border-zinc-400 after:hover:border-zinc-400 before:content-[''] before:w-4 before:h-4 before:absolute before:left-0 before:top-0 before:rounded-sm before:border-t-2 before:border-l-2 after:content-[''] after:w-28 after:h-20 after:absolute after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:rounded-sm`
            }`}
            onClick={() => setAnimate(true)}
            onAnimationEnd={() => setAnimate(false)}
        >
            {children}
        </button>
    );
}

export default NavButton;
