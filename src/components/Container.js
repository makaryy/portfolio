import React from "react";

function Container({ children }) {
    return (
        <div className="min-h-screen max-w-screen overflow-hidden flex flex-col sm:flex-row bg-zinc-800 text-white">
            {children}
        </div>
    );
}

export default Container;
