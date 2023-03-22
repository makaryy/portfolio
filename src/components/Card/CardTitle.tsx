import React from "react";

interface Props {
    title: string;
}

const CardTitle = ({ title }: Props) => {
    return <div className="text-xl text-center w-full mb-1 font-medium">{title}</div>;
};

export default CardTitle;
