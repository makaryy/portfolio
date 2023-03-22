import React, { ReactNode } from "react";

interface Props {
    description: string;
}

const CardDescription = ({ description }: Props) => {
    return <div className="text-center my-1 text-sm font-normal grow">{description}</div>;
};

export default CardDescription;
