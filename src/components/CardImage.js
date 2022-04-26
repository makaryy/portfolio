import React from "react";

function CardImage({ src, alt }) {
    return (
        <div className="w-full h-3/5 overflow-hidden">
            <img
                src={src}
                alt={alt}
                className="scale-125 duration-100 group-hover:scale-100 group-hover:duration-100 object-center object-cover h-full w-full"
            />
        </div>
    );
}

export default CardImage;
