import Container from "@/components/Container";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Container>
            <Nav />
            <Component {...pageProps} />
        </Container>
    );
}
