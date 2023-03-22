import AnimatedPage from "@/components/AnimatedPage";
import Card from "@/components/Card/Card";
import CardContent from "@/components/Card/CardContent";
import CardDescription from "@/components/Card/CardDescription";
import CardFooter from "@/components/Card/CardFooter";
import CardImage from "@/components/Card/CardImage";
import CardTitle from "@/components/Card/CardTitle";
import { projects } from "@/constants";

const Projects = () => {
    return (
        <AnimatedPage>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 md:gap-8 gap-2 mx-auto justify-center items-center">
                {projects.map((project, i) => {
                    return (
                        <a href={project.link} target="_blank" rel="noreferrer" className="h-fit" key={i}>
                            <Card>
                                <CardImage src={project.image} alt={project.title} />
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
    );
};

export default Projects;
