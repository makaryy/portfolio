import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const CardImage = ({ src, alt, width, height }: Props) => {
    return (
        <div className="w-full h-3/5 overflow-hidden">
            <Image
                width={width}
                height={height}
                src={src}
                alt={alt}
                className="scale-125 duration-100 group-hover:scale-100 group-hover:duration-100 object-center object-cover h-full w-full"
            />
        </div>
    );
};

export default CardImage;
