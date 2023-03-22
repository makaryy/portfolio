import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CardFooter = ({ children }: Props) => {
    return <div className="text-right text-xs font-extralight mt-2 w-3/4 self-end">{children}</div>;
};

export default CardFooter;
