import AnimatedPage from "@/components/AnimatedPage";
import Head from "next/head";
import { ComponentType, HTMLProps } from "react";
import { IconBaseProps } from "react-icons";
import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiMui,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiGit,
    SiFramer,
    SiFirebase
} from "react-icons/si";

const age = new Date().getFullYear() - new Date("1998-12-25").getFullYear();
const description = `My name is Makary Pagacz. I&apos;m from Poland and I'm ${age} years old. I graduated from WSB University in Wrocław
in 2021 earning Bachelor's degree. During studies I realized I'm interested in Web Development.`;

const heading = "Skills and Technologies I know:";

type SkillProps = { name: string; Icon: ComponentType<IconBaseProps> } & Pick<HTMLProps<HTMLElement>, "className">;

const skills: SkillProps[] = [
    { name: "HTML", Icon: SiHtml5, className: "hover:text-orange-700" },
    { name: "CSS", Icon: SiCss3, className: "hover:text-blue-500" },
    { name: "JavaScript", Icon: SiJavascript, className: "hover:text-yellow-300" },
    { name: "TypeScript", Icon: SiTypescript, className: "hover:fill-blue-400" },
    { name: "React", Icon: SiReact, className: "hover:text-cyan-600" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, className: "hover:fill-cyan-500" },
    { name: "Material UI", Icon: SiMui, className: "hover:fill-blue-500" },
    { name: "Redux", Icon: SiRedux, className: "hover:fill-violet-500" },
    { name: "Next.js", Icon: SiNextdotjs, className: "hover:fill-neutral-100" },
    { name: "Git", Icon: SiGit, className: "hover:fill-orange-600" },
    { name: "Framer Motion", Icon: SiFramer, className: "hover:fill-neutral-100" },
    { name: "Firebase", Icon: SiFirebase, className: "hover:fill-yellow-500" }
];

function Skill({ name, Icon, className }: SkillProps) {
    return (
        <div className="w-32 h-32 flex justify-center items-center flex-col">
            <Icon className={`h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer ${className}`} />
            <p className="visible peer-hover:invisible duration-100 text-center">{name}</p>
        </div>
    );
}

function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="About Makary Pagacz - frontend developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <AnimatedPage>
                <div className="grow flex flex-col items-center justify-center">
                    <p className="w-full lg:w-1/2 text-center text-2xl">{description}</p>
                    <p className="text-2xl my-6 text-center">{heading}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4">
                        {skills.map(({ Icon, name, className }) => (
                            <Skill key={name} name={name} Icon={Icon} className={className} />
                        ))}
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
}

export default About;
