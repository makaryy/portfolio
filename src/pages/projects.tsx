import AnimatedPage from "@/components/AnimatedPage";
import Card from "@/components/Card/Card";
import CardContent from "@/components/Card/CardContent";
import CardDescription from "@/components/Card/CardDescription";
import CardFooter from "@/components/Card/CardFooter";
import CardImage from "@/components/Card/CardImage";
import CardTitle from "@/components/Card/CardTitle";
import Head from "next/head";

const projects = [
    {
        image: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703177534/portfolio/chess_lwamqd.jpg",
        title: "Chess online",
        description: "Simple chess game to play online using chess.js engine",
        technologies: ["TypeScript", "React", "Redux", "RxJS", "Firebase", "Tailwind CSS"],
        link: "https://chess-online-7aa1c.web.app/"
    },
    {
        image: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703177532/portfolio/djkuba_hwkoxl.jpg",
        title: "DJ KUBA",
        description: "Brochure website for small DJ and bellwether",
        technologies: ["Next JS 12", "TypeScript", "Material UI"],
        link: "https://djkuba.pl"
    },
    {
        image: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703177527/portfolio/youtube_az7vlc.jpg",
        title: "YouTube Clone",
        description: "Clone of YouTube's UI",
        technologies: ["React", "Tailwind CSS"],
        link: "https://chimerical-banoffee-dd6d52.netlify.app/"
    },
    {
        image: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703177531/portfolio/kubawarkocz_feaege.jpg",
        title: "Kuba Warkocz",
        description: "Brochure website for magician",
        technologies: ["Next JS 12", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://kubawarkocz.pl/"
    },
    {
        image: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703177525/portfolio/portfolio_dps4py.jpg",
        title: "Portfolio",
        description: "My portfolio to showcase my abilities",
        technologies: ["Next JS 12", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://makarypagacz.com/"
    },
    {
        image: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703177528/portfolio/tesla-system_qaiabn.jpg",
        title: "Tesla System",
        description: "Website for company providing alarm systems services",
        technologies: ["Next JS 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Formik", "yup"],
        link: "https://teslasystem.pl/"
    }
];

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
                    {projects.map(({ description, image, link, technologies, title }) => {
                        return (
                            <a href={link} target="_blank" rel="noreferrer" className="h-fit" key={title}>
                                <Card>
                                    <CardImage src={image} alt={title} width={288} height={192} />
                                    <CardContent>
                                        <CardTitle title={title} />
                                        <CardDescription description={description} />
                                        <CardFooter>{technologies.join(", ")}</CardFooter>
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
