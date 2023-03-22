import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Card = ({ children }: Props) => {
    return (
        <div className="flex flex-col rounded-md w-72 h-80 group overflow-hidden bg-neutral-500 bg-opacity-20 shadow-md">{children}</div>
    );
};

export default Card;
