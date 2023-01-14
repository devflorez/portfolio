import React, { useState, useEffect } from "react";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import useSection from "../../hooks/useSection";
import useScroll from "../../hooks/useScroll";
const NAVIGATIONS = {
  home: "/",
  about: "/#about",
  projects: "/#projects",
  contact: "/#contact",
};

export default function Navbar({ navbar }) {
  const { navigation, button } = navbar;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-transparent");

  const section = useSection();
  const scroll = useScroll();

  const navigations = Object.keys(navigation).map((key) => {
    return {
      name: navigation[key],
      path: NAVIGATIONS[key],
    };
  });

  useEffect(() => {
    if (section === "home" || scroll === 0) {
      setBackgroundColor("bg-transparent");
    } else {
      setBackgroundColor("bg-white");
    }
  }, [section, scroll]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`flex items-center justify-between flex-wrap p-6 ${backgroundColor}`}
      >
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/">Cristian Florez</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={handleMenuClick}
            className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-primary hover:border-primary"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow  lg:items-center lg:w-auto lg:hidden ${
            isMenuOpen ? "visible" : "hidden"
          }`}
        >
          {navigations.map((nav) => (
            <Link
              href={nav.path}
              key={nav.name}
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary mr-4"
            >
              {nav.name}
            </Link>
          ))}

          <div>
            <a
              href="/CV_Cristian_Florez_Frontend_Developer.pdf"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
            >
              {button}
            </a>
          </div>
        </div>
        <div className="w-full  flex-grow lg:flex lg:items-center lg:w-auto lg:visible hidden">
          <div className="text-sm lg:flex-grow">
            {navigations.map((nav) => (
              <Link
                href={nav.path}
                key={nav.name}
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary mr-4"
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div>
            <a
              href="/CV_Cristian_Florez_Frontend_Developer.pdf"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
            >
              {button}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
