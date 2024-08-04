import React, { useState } from "react";
import { Link } from "wouter";

import logo from '../images/logos/Calo - Logos.png';

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleLinkClick = () => {
    setIsToggleOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 inset-x-0 z-50 shadow-lg bg-gradient-to-b from-black to-blue-900">
        <div className="relative w-full px-8 min-w-[200px]">
          <nav
            aria-label="main navigation"
            className="flex h-[4rem]  items-stretch  font-medium text-white"
            role="navigation"
          >
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img className="h-14 mr-2 mb-2 mt-4" src={logo} alt="Logo" />
              </Link>
            </div>
            
            <button
              className={`relative order-10 block h-10 w-10 self-center md:hidden
                ${isToggleOpen ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 " : ""}
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
              </div>
            </button>
            
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 md:visible md:relative md:top-0 md:z-0 md:flex md:h-full md:w-auto md:items-stretch md:overflow-visible md:px-0 md:py-0 md:pt-0 md:opacity-100 ${
                isToggleOpen ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
              }`}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
            >
              <li role="none" className="flex items-stretch">
                <Link href="/botas">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="text-xl text-white flex items-center gap-1 py-4 transition-colors duration-300 hover:text-gray-300 focus:text-gray-300 focus:outline-none focus-visible:outline-none md:px-6"
                    href="#serviciotecnico"
                  >
                    <span>Botas</span>
                  </a>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link href="/camisa">
                  <a
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="text-xl text-white flex items-center gap-2 py-4 transition-colors duration-300 hover:text-gray-300 focus:text-gray-300 focus:outline-none focus-visible:outline-none md:px-6"
                    href="#consultoria"
                  >
                    <span>Camisas</span>
                  </a>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link href="/pantalones">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="text-xl text-white flex items-center gap-1 py-4 transition-colors duration-300 hover:text-gray-300 focus:text-gray-300 focus:outline-none focus-visible:outline-none md:px-6"
                    href="#productos"
                  >
                    <span>Pantalones</span>
                  </a>
                </Link>
              </li>
            </ul>

            <div className="ml-auto flex items-stretch">
              <Link href="/nosotros">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="text-black bg-white text-sm flex items-center gap-2 py-4 transition-colors duration-300 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus-visible:outline-none md:px-6"
                  href="#sobre-nosotros"
                  onClick={handleLinkClick}
                >
                  <span>Sobre Nosotros</span>
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
