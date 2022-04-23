import React from "react";

function Container({ children }) {
    return (
        <div className="h-screen w-screen flex flex-col sm:flex-row overflow-hidden bg-zinc-800 text-white">
            {children}
        </div>
    );
}

export default Container;
