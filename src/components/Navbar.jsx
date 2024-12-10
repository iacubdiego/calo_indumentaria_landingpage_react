import React, { useState } from "react"

import { Link } from "wouter";
import logo from '../images/logos/Calo - Logos.png';


export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <>
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="sticky top-0 inset-x-0 z-50 shadow-lg bg-gradient-to-b from-black to-blue-900">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img className="h-14 mr-2 mb-2 mt-4" src={logo} alt="Logo"/>
              </Link>
            </div>

            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center md:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
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
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 md:visible md:relative md:top-0  md:z-0 md:flex md:h-full md:w-auto md:items-stretch md:overflow-visible md:bg-white/0 md:px-0 md:py-0  md:pt-0 md:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link href="/Indumentaria">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="text-base flex items-center gap-1 py-4 transition-colors  duration-300 hover:text-gray-300 focus:text-gray-300 focus:outline-none focus-visible:outline-none md:px-6"
                    href="/Indumentaria"
                  >
                    <span>Indumentaria</span>
                  </a>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
              <Link href="/Calzado">
                  <a
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="text-base flex items-center gap-2 py-4 transition-colors  duration-300 hover:text-gray-300 focus:text-gray-300 focus:outline-none focus-visible:outline-none md:px-6"
                    href="/Calzado"
                  >
                    <span>Calzado</span>
                  </a>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
              <Link href="/Seguridad">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="font-montserrat text-base flex items-center gap-1 py-4 transition-colors  duration-300 hover:text-gray-300 focus:text-gray-300 focus:outline-none focus-visible:outline-none md:px-6"
                    href="/Seguridad"
                  >
                    <span>Elementos de Seguridad</span>
                  </a>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
              <Link href="/Conocenos">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="text-base flex items-center gap-1 py-4 transition-colors  duration-300 hover:text-gray-300 focus:text-gray-300 focus:outline-none focus-visible:outline-none md:px-6"
                    href="/Conocenos"
                  >
                    <span>Conocenos</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </>
  )
}
