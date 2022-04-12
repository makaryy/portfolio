import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Container from "./components/Container";
import First from "./components/First";
import Form from "./components/Form";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Second from "./components/Second";

function App() {
    let location = useLocation();
    return (
        <>
            <Container>
                <Nav />
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Header />} />
                        <Route path="/first" element={<First />} />
                        <Route path="/second" element={<Second />} />
                        <Route path="/contact" element={<Form />} />
                    </Routes>
                </AnimatePresence>
            </Container>
        </>
    );
}

export default App;
