import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function AnimatedPage({ children }: Props) {
    const animations = {
        initial: {
            opacity: 0,
            y: -20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transitionDuration: "300ms",
        },
        exit: {
            opacity: 0,
            y: 200,
        },
    };
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grow m-4 p-4 flex text-lg relative z-0 before:-z-10 before:content-[''] before:w-28 before:h-28 before:absolute before:left-0 before:top-0 before:rounded-sm before:border-t-2 before:border-l-2
            after:-z-10 after:content-[''] after:w-[calc(100%-7rem)] after:h-[calc(100%-7rem)] after:absolute after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:rounded-sm"
        >
            {children}
        </motion.div>
    );
}

export default AnimatedPage;
