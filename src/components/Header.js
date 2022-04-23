import React, { useEffect, useState } from "react";
import AnimatedPage from "./AnimatedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import {
    faCss3,
    faGithubSquare,
    faLinkedin,
    faLinkedinIn,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
    const [color, setColor] = useState("text-zinc-800");
    const delays = [
        "",
        "animation-delay-100",
        "animation-delay-200",
        "animation-delay-300",
        "animation-delay-400",
        "animation-delay-500",
        "animation-delay-600",
        "animation-delay-700",
        "animation-delay-800",
        "animation-delay-900",
        "animation-delay-1000",
        "animation-delay-1100",
        "animation-delay-1200",
        "animation-delay-1300",
        "animation-delay-1400",
        "animation-delay-1500",
        "animation-delay-1600",
        "animation-delay-1700",
        "animation-delay-1800",
        "animation-delay-1900",
        "animation-delay-2000",
    ];
    return (
        <AnimatedPage>
            <div className="flex flex-col justify-center items-start">
                <p className="w-full md:w-1/2 my-5 xl:w-full">
                    {"Hi! I'm Makary".split("").map((char, index) => {
                        return (
                            <span
                                key={index}
                                className={`${color} font-extrabold text-4xl md:text-8xl animate-display-text ${delays[index]} `}
                                onAnimationEnd={(e) => {
                                    setColor("text-white");
                                    e.currentTarget.style.textShadow =
                                        "0 25px 50px rgba(0, 0, 0, 0.75)";
                                }}
                            >
                                {char}
                            </span>
                        );
                    })}
                </p>
                <div>
                    <span className="absolute bg-indigo-400 animate-move-blue-blob w-96 h-64 top-8 right-8 md:opacity-80 opacity-0 -z-50 md:z-0"></span>
                    <span className="absolute bg-zinc-100 rounded-tl-[95%] rounded-tr-[40%] rounded-br-[90%] rounded-bl-[30%] animate-move-white-blob w-80 h-80 md:opacity-80 opacity-0 -z-50 md:z-0 top-8 right-10 flex justify-center items-center">
                        <img
                            src="/assets/makary.jpg"
                            alt=""
                            className="rounded-full h-48 w-48 object-cover shadow-md shadow-indigo-200"
                        />
                    </span>
                </div>
                <p className="my-5">
                    {"I'm front-end developer and this is my potrfolio website"
                        .split(" ")
                        .map((word, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`${color} font-normal text-2xl animate-display-text ${
                                        delays[index * 2]
                                    } `}
                                    onAnimationEnd={(e) => {
                                        setColor("text-white");
                                        e.currentTarget.style.textShadow =
                                            "0 25px 50px rgba(0, 0, 0, 0.75)";
                                    }}
                                >
                                    {`${word} `}
                                </span>
                            );
                        })}
                </p>
            </div>
            <span className="right-8 bottom-8 absolute flex flex-row gap-2">
                <a href="https://www.linkedin.com/in/makarypagacz/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="text-indigo-400 h-6 w-6" />
                </a>
                <a href="https://github.com/makaryy" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} className="text-indigo-400 h-6 w-6" />
                </a>
            </span>
        </AnimatedPage>
    );
}

export default Header;
