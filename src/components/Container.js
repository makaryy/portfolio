import React from "react";

function Container({ children }) {
    return (
        <div className="relative min-h-screen max-w-screen overflow-hidden flex flex-col sm:flex-row bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-900 text-white">
            {children}
        </div>
    );
}

export default Container;
