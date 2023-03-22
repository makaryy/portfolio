import Link from "next/link";
import NavButton from "./NavButton";

function Nav() {
    return (
        <nav className="sm:h-screen flex justify-center items-center sticky top-0 z-20">
            <ul className="flex items-stretch w-full sm:flex-col">
                <li className="grow sm:grow-0 ">
                    <Link href="/">
                        <NavButton pathname="/">HOME</NavButton>
                    </Link>
                </li>
                <li className="grow sm:grow-0 ">
                    <Link href="/about">
                        <NavButton pathname="/about">ABOUT</NavButton>
                    </Link>
                </li>
                <li className="grow sm:grow-0 ">
                    <Link href="/projects">
                        <NavButton pathname="/projects">PROJECTS</NavButton>
                    </Link>
                </li>
                <li className="grow sm:grow-0 ">
                    <Link href="/contact">
                        <NavButton pathname="/contact">CONTACT</NavButton>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
