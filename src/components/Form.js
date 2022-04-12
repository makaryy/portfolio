import { useState } from "react";
import AnimatedPage from "./AnimatedPage";

function Form() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");

        setMessage("");
        setEmail("");
    };

    return (
        <AnimatedPage>
            <form
                onSubmit={handleSubmit}
                className="p-6 m-6 flex flex-col justify-center items-center w-full"
                // relative before:absolute before:top-0 before:right-0 before:h-6 before:w-6 before:border-t-2 before:border-r-2 before:border-indigo-400 before:content-['']
            >
                <h1 className="text-center text-4xl m-4">Contact me</h1>
                <label htmlFor="email" className="mt-3">
                    E-mail:
                </label>
                <input
                    type="email"
                    name="email"
                    className="m-3 bg-zinc-600 rounded-md h-fit w-full p-3"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label htmlFor="message" className="mt-3">
                    Message:
                </label>
                <textarea
                    type="textarea"
                    name="message"
                    className="m-3 bg-zinc-600 rounded-md h-48 w-full p-3"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    rows={8}
                />
                <button
                    type="submit"
                    className=" m-3 w-24 h-12 rounded-2xl shadow-md hover:shadow-indigo-700 active:translate-y-0 active:shadow-none hover:-translate-y-1 hover:duration-200 bg-indigo-400"
                >
                    Send
                </button>
            </form>
        </AnimatedPage>
    );
}

export default Form;
