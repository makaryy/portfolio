import { useState } from "react";
import AnimatedPage from "./AnimatedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

function Form() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_ml2bsqf", "template_80zt25s", e.target, "user_pwESjPTQP5z63kOQNawbk");

        setMessage("");
        setEmail("");
    };

    return (
        <AnimatedPage>
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-center text-4xl m-4">Contact me</h1>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-4 items-center justify-center">
                        <div className="flex flex-col items-center justify-center m-2">
                            <a href="https://github.com/makaryy" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} className="text-indigo-400 h-12 w-12" />
                            </a>
                            <p className="italic">/makaryy</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <a href="https://www.linkedin.com/in/makarypagacz/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="text-indigo-400 h-12 w-12" />
                            </a>
                            <p className="italic">/in/makarypagacz</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center m-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-indigo-400 h-12 w-12" />
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
                        type="textarea"
                        name="message"
                        className="m-3 bg-zinc-700 rounded-md h-48 w-full p-3 border border-white focus:bg-zinc-800 text-sm sm:text-lg"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        rows={8}
                        required
                    />
                    <button
                        type="submit"
                        className=" m-3 w-24 h-12 rounded-2xl shadow-md hover:shadow-indigo-700 active:translate-y-0 active:shadow-none hover:-translate-y-1 hover:duration-200 duration-200 bg-indigo-400">
                        Send
                    </button>
                </form>
            </div>
        </AnimatedPage>
    );
}

export default Form;
