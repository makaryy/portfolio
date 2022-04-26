import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About";
import Container from "./components/Container";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
    let location = useLocation();
    return (
        <>
            <Container>
                <Nav />
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Header />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            </Container>
        </>
    );
}

export default App;
