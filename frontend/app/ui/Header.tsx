import { Link } from "react-router";
import Button from "./Button";
import { useState } from "react";
import { HiBars3, HiMagnifyingGlass } from "react-icons/hi2";

function NavLinks() {
    return <nav className="flex gap-6 max-md:hidden">
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        {/* <p>Divs: {divCount}</p>
                    <p>Depth: {depth}</p> */}
    </nav>
}

function ButtonGroup() {
    return <>
        <button className="pl-4 py-3">
            <HiMagnifyingGlass />
        </button>
        <Button variant="secondary">Login</Button>
        <Button>Subscribe</Button>
    </>
}

const BURGER_SIZE = 32

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(prev => !prev)
    const additionalStyling = isOpen ? '-translate-x-6' : 'translate-x-6'
    return (
        <header className="header grid grid-rows-2 grid-cols-1 items-center">
            <div className="flex justify-between md:grid md:grid-cols-3 items-center content-container ">
                <NavLinks />

                <Link to="/" className="w-full overflow-hidden">
                    <h1 className={`text-4xl font-serif max-md:transition-all max-md:${additionalStyling} font-semibold text-center mx-auto  `}>
                        News<span className={`italic ${isOpen ? 'max-[600px]:hidden' : ''}`}>Today</span>
                    </h1>
                </Link>

                {/* Desktop buttons */}
                <div className="max-md:hidden ml-auto flex gap-2">
                    <ButtonGroup />
                </div>

                {/* Mobile menu that extends left */}
                <div className="md:hidden flex items-center ml-auto">
                    <div
                        className={`
                            flex items-center gap-2 overflow-hidden
                            transition-all duration-300 ease-in-out
                            border-teal-700
                            ${isOpen ? 'w-64 opacity-100 border-l pl-4' : 'w-0 opacity-0'}
                        `}
                    >
                        <ButtonGroup />
                    </div>

                    <button
                        type='button'
                        className={`p-2 ml-2 transition-all duration-300 ${isOpen ? '-rotate-90' : ''}`}
                        onClick={toggle}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        <HiBars3 size={BURGER_SIZE} />
                    </button>
                </div>
            </div>

            <nav className="mb-8 col-span-3 border-t border-gray-200 p-2 relative ">
                <div
                    className="absolute inset-x-0  top-0 h-full bg-teal-700 pointer-events-none"
                />
                <ul className="flex gap-4 relative z-10 items-center justify-center content-container text-white">
                    {[
                        "Tailwind CSS",
                        "MUI",
                        "Chakra"
                    ].map(topic => <li key={topic}>
                        <Link to={topic.toLowerCase() === 'tailwind css' ? '/' : `/${topic.toLowerCase()}`} className="hover:underline text-sm text-white">
                            {topic}
                        </Link>
                    </li>)}
                </ul>
            </nav>
        </header>
    );
}

export default Header;