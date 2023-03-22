import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CardContent = ({ children }: Props) => {
    return (
        <div
            className="flex flex-col relative h-2/5 m-2 p-2 z-0 before:-z-10 before:content-[''] before:w-12 before:h-12 before:absolute before:left-0 before:top-0 before:rounded-sm before:border-t-2 before:border-l-2 before:group-hover:border-white before:duration-150 before:border-zinc-400
after:-z-10 after:content-[''] after:w-[calc(100%-3rem)] after:h-[calc(100%-3rem)] after:absolute after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:group-hover:border-white after:border-zinc-400 after:rounded-sm after:duration-150"
        >
            {children}
        </div>
    );
};

export default CardContent;
