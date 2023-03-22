import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";

interface Props {
    children: ReactNode;
    pathname: string;
}
function NavButton({ children, pathname }: Props) {
    const [animate, setAnimate] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const router = useRouter();
    const location = router.asPath;

    useEffect(() => {
        window.matchMedia("(max-width: 640px)").addEventListener("change", (e) => setIsSmallScreen(e.matches));
    }, [isSmallScreen]);

    return isSmallScreen ? (
        <button
            className={`flex items-center justify-center w-full h-16 p-2 shadow-md bg-zinc-900 shadow-zinc-900 ${
                location === pathname && "border-b-2 bg-zinc-800"
            }`}
        >
            {children}
        </button>
    ) : (
        <button
            className={`flex items-center justify-center w-full h-16 p-2 shadow-md bg-zinc-900 shadow-zinc-900 sm:shadow-none sm:bg-zinc-800 sm:w-32 sm:h-24 sm:m-2 overflow-hidden z-0 relative ${
                animate && "sm:animate-nav-click animate-nav-click-mobile"
            } ${
                location === pathname
                    ? `border-b-2  bg-zinc-800 sm:border-0 sm:before:animate-fade-in sm:border-indigo-400 sm:text-indigo-400 sm:before:content-[''] sm:before:w-[200%] sm:before:h-[200%] sm:before:bg-no-repeat sm:before:bg-rotating-border-image sm:before:bg-rotating-border-size sm:before:bg-rotating-border-position sm:before:bg-rotating-border sm:before:absolute sm:before:-left-1/2 sm:before:-top-1/2 sm:before:-z-20 sm:before:animate-rotate sm:after:absolute sm:after:w-[calc(100%-4px)] sm:after:bg-zinc-800 sm:after:-z-10 sm:after:h-[calc(100%-4px)] sm:after:top-[2px] sm:after:left-[2px]`
                    : ` sm:hover:translate-x-1 sm:duration-200 sm:hover:text-zinc-400 sm:hover:border-zinc-400 sm:before:hover:border-zinc-400 sm:after:hover:border-zinc-400 sm:before:content-[''] sm:before:w-4 before:h-4 sm:before:absolute sm:before:left-0 sm:before:top-0 sm:before:rounded-sm sm:before:border-t-2 sm:before:border-l-2 sm:after:content-[''] sm:after:w-28 sm:after:h-20 sm:after:absolute sm:after:bottom-0 sm:after:right-0 sm:after:border-b-2 sm:after:border-r-2 sm:after:rounded-sm`
            }`}
            onClick={() => setAnimate(true)}
            onAnimationEnd={() => setAnimate(false)}
        >
            {children}
        </button>
    );
}

export default NavButton;
