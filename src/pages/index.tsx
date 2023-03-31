import Head from "next/head";
import Image from "next/image";

import React, { useState } from "react";
import AnimatedPage from "@/components/AnimatedPage";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Home = () => {
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
        <>
            <Head>
                <title>Makary Pagacz</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="description" content="Makary Pagacz - frontend developer. HTML, CSS, React, TypeScript." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <AnimatedPage>
                <div className="flex flex-col md:justify-center justify-end pb-6 items-start xl:mx-16">
                    <p className="w-full md:w-1/2 my-5 xl:w-full">
                        {"Hi! I'm Makary".split("").map((char, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`${color} font-extrabold text-6xl md:text-8xl animate-display-text ${delays[index]} `}
                                    onAnimationEnd={(e) => {
                                        setColor("text-white");
                                        e.currentTarget.style.textShadow = "0 25px 50px rgba(0, 0, 0, 0.75)";
                                    }}
                                >
                                    {char}
                                </span>
                            );
                        })}
                    </p>
                    <div>
                        <span className="absolute bg-indigo-400 animate-move-blue-blob md:w-96 md:h-64 md:top-8 md:right-8 top-3 right-3 w-64 h-48 xl:top-24 xl:right-24  opacity-80 z-0"></span>
                        <span className="absolute bg-zinc-100 rounded-tl-[95%] rounded-tr-[40%] rounded-br-[90%] rounded-bl-[30%] animate-move-white-blob md:w-80 w-60 md:h-80 h-60 opacity-80 z-0 md:top-8 top-3 md:right-10 right-3 xl:top-24 xl:right-24 flex justify-center items-center">
                            <Image
                                src="/makary.jpg"
                                width={192}
                                height={192}
                                alt=""
                                className="rounded-full md:h-48 md:w-48 w-36 h-36 object-cover shadow-md shadow-indigo-200"
                            />
                        </span>
                    </div>
                    <p className="my-5">
                        {"I'm front-end developer and this is my potrfolio website".split(" ").map((word, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`${color} font-normal text-2xl animate-display-text ${delays[index * 2]} `}
                                    onAnimationEnd={(e) => {
                                        setColor("text-white");
                                        e.currentTarget.style.textShadow = "0 25px 50px rgba(0, 0, 0, 0.75)";
                                    }}
                                >
                                    {`${word} `}
                                </span>
                            );
                        })}
                    </p>
                </div>
                <span className="right-8 bottom-8 absolute flex flex-row gap-2">
                    <a href="https://www.linkedin.com/in/makarypagacz/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="text-indigo-400 h-6 w-6" />
                    </a>
                    <a href="https://github.com/makaryy" target="_blank" rel="noreferrer">
                        <FaGithubSquare className="text-indigo-400 h-6 w-6" />
                    </a>
                </span>
            </AnimatedPage>
        </>
    );
};

export default Home;
