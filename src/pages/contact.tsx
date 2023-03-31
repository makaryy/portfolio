import { FormEvent, useState } from "react";
import AnimatedPage from "@/components/AnimatedPage";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IFormData } from "@/types";
import Head from "next/head";

function Form() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState<IFormData | null>(null);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/message", { method: "POST", body: JSON.stringify({ email, message }) });
            const data: { message: string; status: number } = await res.json();
            setMessage("");
            setEmail("");
            setResponse(data);
            setTimeout(() => {
                setResponse(null);
            }, 2500);
        } catch (error) {
            setResponse({ status: 500, message: "Something went wrong" });
            setTimeout(() => {
                setResponse(null);
            }, 2500);
        }
    };

    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact Makary Pagacz - send message, ask question etc." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <AnimatedPage>
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-center text-4xl m-4">Contact me</h1>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <div className="flex flex-col items-center justify-center m-2">
                                <a href="https://github.com/makaryy" target="_blank" rel="noreferrer">
                                    <FaGithubSquare className="text-indigo-400 h-12 w-12" />
                                </a>
                                <p className="italic">/makaryy</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <a href="https://www.linkedin.com/in/makarypagacz/" target="_blank" rel="noreferrer">
                                    <FaLinkedin className="text-indigo-400 h-12 w-12" />
                                </a>
                                <p className="italic">/in/makarypagacz</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center m-2">
                            <FaEnvelope className="text-indigo-400 h-12 w-12" />
                            <p className="italic">pagaczmakary@gmail.com</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="p-2 m-2 flex flex-col justify-center items-center min-w-fit w-1/2 max-w-lg">
                        <label htmlFor="email" className="mt-3">
                            E-mail:
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="m-3 bg-zinc-700 rounded-md h-fit w-full p-3 border border-white focus:bg-zinc-800 text-sm sm:text-lg"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <label htmlFor="message" className="mt-3">
                            Message:
                        </label>
                        <textarea
                            name="message"
                            className="m-3 bg-zinc-700 rounded-md h-48 w-full p-3 border border-white focus:bg-zinc-800 text-sm sm:text-lg"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            rows={8}
                            required
                        />
                        <button
                            type="submit"
                            className=" m-3 w-24 h-12 rounded-2xl shadow-md hover:shadow-indigo-700 active:translate-y-0 active:shadow-none hover:-translate-y-1 hover:duration-200 duration-200 bg-indigo-400"
                        >
                            Send
                        </button>
                        {response && (
                            <div
                                className={`fixed bottom-4 right-4 text-center w-[calc(100%-4rem)] sm:w-96 border-2 rounded-lg p-4 m-4 opacity-90 ${
                                    response.status === 200
                                        ? "border-green-500 bg-emerald-600 text-white"
                                        : "border-red-500 bg-rose-800 text-white"
                                }`}
                            >
                                {response.message}
                            </div>
                        )}
                    </form>
                </div>
            </AnimatedPage>
        </>
    );
}

export default Form;
