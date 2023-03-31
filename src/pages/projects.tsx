import AnimatedPage from "@/components/AnimatedPage";
import Card from "@/components/Card/Card";
import CardContent from "@/components/Card/CardContent";
import CardDescription from "@/components/Card/CardDescription";
import CardFooter from "@/components/Card/CardFooter";
import CardImage from "@/components/Card/CardImage";
import CardTitle from "@/components/Card/CardTitle";
import { projects } from "@/constants";
import Head from "next/head";

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Projects Makary's worked on - see and explore." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <AnimatedPage>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 md:gap-8 gap-2 mx-auto justify-center items-center">
                    {projects.map((project, i) => {
                        return (
                            <a href={project.link} target="_blank" rel="noreferrer" className="h-fit" key={i}>
                                <Card>
                                    <CardImage src={project.image} alt={project.title} width={288} height={192} />
                                    <CardContent>
                                        <CardTitle title={project.title} />
                                        <CardDescription description={project.description} />
                                        <CardFooter>{project.technologies.join(", ")}</CardFooter>
                                    </CardContent>
                                </Card>
                            </a>
                        );
                    })}
                </div>
            </AnimatedPage>
        </>
    );
};

export default Projects;
