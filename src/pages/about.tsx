import AnimatedPage from "@/components/AnimatedPage";
import Head from "next/head";
import { SiCss3, SiHtml5, SiJavascript, SiMui, SiReact, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";

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
                <div className="grow m-8 flex flex-col items-center justify-center">
                    <p className="w-full lg:w-1/2 text-center text-2xl">
                        My name is Makary Pagacz. I&apos;m from Poland and I&apos;m 24 years old. I graduated from WSB University in Wrocław
                        in 2021 earning Bachelor&apos;s degree. During studies I realized I&apos;m interested in Web Development.
                    </p>
                    <p className="text-2xl my-6 text-center">Skills and Technologies I know:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4">
                        <div className="w-28 h-28 flex justify-center items-center flex-col">
                            <SiHtml5 className="h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer hover:text-orange-700" />
                            <p className="visible peer-hover:invisible duration-100 text-center">HTML</p>
                        </div>
                        <div className="w-28 h-28 flex justify-center items-center flex-col">
                            <SiCss3 className="h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer hover:text-blue-500" />
                            <p className="visible peer-hover:invisible duration-100 text-center">CSS</p>
                        </div>
                        <div className="w-28 h-28 flex justify-center items-center flex-col">
                            <SiJavascript className="h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer hover:text-yellow-300" />
                            <p className="visible peer-hover:invisible duration-100 text-center">JavaScript</p>
                        </div>
                        <div className="w-28 h-28 flex justify-center items-center flex-col">
                            <SiTypescript className="fill-white h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer p-1 hover:fill-blue-400" />
                            <p className="visible peer-hover:invisible duration-100 text-center">TypeScript</p>
                        </div>
                        <div className="w-28 h-28 flex justify-center items-center flex-col">
                            <SiReact className="h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer hover:text-cyan-600" />
                            <p className="visible peer-hover:invisible duration-100 text-center">React</p>
                        </div>
                        <div className="w-28 h-28 flex justify-center items-center flex-col">
                            <SiTailwindcss className="fill-white h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer p-1 hover:fill-cyan-500" />
                            <p className="visible peer-hover:invisible duration-100 text-center">Tailwind CSS</p>
                        </div>
                        <div className="w-28 h-28 flex justify-center items-center flex-col">
                            <SiMui className="fill-white h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer p-1 hover:fill-blue-500" />
                            <p className="visible peer-hover:invisible duration-100 text-center">Material UI</p>
                        </div>
                        <div className="w-28 h-28 flex justify-center items-center flex-col">
                            <SiRedux className="fill-white h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer p-1 hover:fill-violet-500" />

                            <p className="visible peer-hover:invisible duration-100 text-center">Redux</p>
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
}

export default About;
