import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Container = ({ children }: Props) => {
    return (
        <div className="relative max-w-screen min-h-screen flex flex-col sm:flex-row bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-900 text-white">
            {children}
        </div>
    );
};

export default Container;
