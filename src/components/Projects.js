import React from "react";
import AnimatedPage from "./AnimatedPage";
import Card from "./Card";
import CardContent from "./CardContent";
import CardDescription from "./CardDescription";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

function Projects() {
    const projects = [
        {
            image: "/assets/chess.jpg",
            title: "Chess online",
            description: "Simple chess game to play online using chess.js engine",
            technologies: ["TypeScript", "React", "Redux", "RxJS", "Firebase", "Tailwind CSS"],
            link: "https://chess-online-7aa1c.web.app/"
        },
        {
            image: "/assets/djkuba.jpg",
            title: "DJ KUBA",
            description: "Brochure website for small DJ and bellwether",
            technologies: ["JavaScript", "React", "Material UI", "React Router"],
            link: "https://djkuba.pl"
        },
        {
            image: "/assets/youtube.jpg",
            title: "YouTube Clone",
            description: "Clone of YouTube's UI",
            technologies: ["React", "Tailwind CSS"],
            link: "https://chimerical-banoffee-dd6d52.netlify.app/"
        },
        {
            image: "/assets/cozy-whiff.jpg",
            title: "Cozy Whiff",
            description: "Brochure website for handmade candle merchant",
            technologies: ["React, Material UI", "React Router"],
            link: "https://majestic-kataifi-ceb872.netlify.app/"
        },
        {
            image: "/assets/portfolio.jpg",
            title: "Portfolio",
            description: "My portfolio to showcase my abilities",
            technologies: ["React", "Tailwind CSS", "React Router", "Framer Motion"],
            link: "https://makarypagacz.com/"
        }
    ];
    return (
        <AnimatedPage>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 md:gap-8 gap-2 mx-auto justify-center items-center">
                {projects.map((project) => {
                    return (
                        <a href={project.link} target="_blank" rel="noreferrer" className="h-fit">
                            <Card>
                                <CardImage src={project.image} alt={project.title} />
                                <CardContent>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                    <CardFooter>{project.technologies.join(", ")}</CardFooter>
                                </CardContent>
                            </Card>
                        </a>
                    );
                })}
            </div>
        </AnimatedPage>
    );
}

export default Projects;
