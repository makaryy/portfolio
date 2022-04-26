import React from "react";
import AnimatedPage from "./AnimatedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faReact, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";

function About() {
    return (
        <AnimatedPage>
            <div className="grow m-8 flex flex-col items-center justify-center">
                <p className="w-full lg:w-1/2 text-center text-2xl">
                    My name is Makary Pagacz. I'm from Poland and I'm 24 years old. I graduated from WSB University in Wrocław in 2021 earning
                    Bachelor's degree. During studies I realized I'm interested in Web Development.
                </p>
                <p className="text-2xl my-6 text-center">Skills and Technologies I know:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4">
                    <div className="w-28 h-28 flex justify-center items-center flex-col">
                        <FontAwesomeIcon
                            icon={faHtml5}
                            className="h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer hover:text-orange-700"
                        />
                        <p className="visible peer-hover:invisible duration-100 text-center">HTML</p>
                    </div>
                    <div className="w-28 h-28 flex justify-center items-center flex-col">
                        <FontAwesomeIcon
                            icon={faCss3}
                            className="h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer hover:text-blue-500"
                        />
                        <p className="visible peer-hover:invisible duration-100 text-center">CSS</p>
                    </div>
                    <div className="w-28 h-28 flex justify-center items-center flex-col">
                        <FontAwesomeIcon
                            icon={faJs}
                            className="h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer hover:text-yellow-300"
                        />
                        <p className="visible peer-hover:invisible duration-100 text-center">JavaScript</p>
                    </div>
                    <div className="w-28 h-28 flex justify-center items-center flex-col">
                        <svg
                            className="fill-white h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer p-1 hover:fill-blue-400"
                            viewBox="0 0 24 24"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
                        </svg>
                        <p className="visible peer-hover:invisible duration-100 text-center">TypeScript</p>
                    </div>
                    <div className="w-28 h-28 flex justify-center items-center flex-col">
                        <FontAwesomeIcon
                            icon={faReact}
                            className="h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer hover:text-cyan-600"
                        />
                        <p className="visible peer-hover:invisible duration-100 text-center">React</p>
                    </div>
                    <div className="w-28 h-28 flex justify-center items-center flex-col">
                        <svg
                            className="fill-white h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer p-1 hover:fill-cyan-500"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                            />
                        </svg>
                        <p className="visible peer-hover:invisible duration-100 text-center">Tailwind CSS</p>
                    </div>
                    <div className="w-28 h-28 flex justify-center items-center flex-col">
                        <svg
                            className="fill-white h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer p-1 hover:fill-blue-500"
                            viewBox="0 0 24 24"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" />
                        </svg>

                        <p className="visible peer-hover:invisible duration-100 text-center">Material UI</p>
                    </div>
                    <div className="w-28 h-28 flex justify-center items-center flex-col">
                        <svg
                            className="fill-white h-16 w-16 hover:scale-125 hover:translate-y-4 duration-150 peer p-1 hover:fill-violet-500"
                            viewBox="0 0 24 24"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.633 16.504c.869-.075 1.543-.84 1.499-1.754-.046-.914-.795-1.648-1.708-1.648h-.061c-.943.031-1.678.824-1.648 1.769.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.004 4.795-1.603.838-3.296 1.154-4.944.929-1.378-.194-2.456-.81-3.116-1.798-.988-1.499-1.078-3.116-.255-4.734.601-1.169 1.499-2.023 2.099-2.443-.15-.389-.33-1.048-.42-1.542-4.436 3.177-3.985 7.521-2.637 9.574 1.004 1.498 3.057 2.456 5.304 2.456.599 0 1.229-.044 1.843-.194 3.896-.749 6.847-3.086 8.54-6.532l.014-.031zM21.981 12.758c-2.321-2.727-5.738-4.225-9.634-4.225h-.51c-.253-.554-.837-.899-1.497-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074c.675-.03 1.259-.45 1.498-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.004 2.622 2.322 3.236 3.896.538 1.288.509 2.547-.045 3.597-.854 1.647-2.293 2.517-4.195 2.517-1.199 0-2.367-.375-2.967-.644-.359.298-.959.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.093-1.647 5.918-3.236.898-1.798.824-4.824-1.469-7.416l-.014.03zM6.49 17.042c.029.899.793 1.648 1.708 1.648h.06c.959-.03 1.693-.823 1.648-1.768 0-.899-.779-1.647-1.693-1.647h-.061c-.06 0-.149 0-.225.029-1.243-2.098-1.768-4.346-1.572-6.771.119-1.828.719-3.417 1.797-4.735.899-1.124 2.592-1.679 3.746-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.449c-.345-4.914-3.4-7.492-6.322-7.492-2.742 0-5.273 1.993-6.293 4.915-1.393 3.896-.479 7.641 1.229 10.638-.149.195-.239.539-.209.868z" />
                        </svg>

                        <p className="visible peer-hover:invisible duration-100 text-center">Redux</p>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}

export default About;
