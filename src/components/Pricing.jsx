import React from "react";
import indumentaria from "../images/camisascolores.jpg";
import seguridad from "../images/Elementosdeseguridad.jpg";
import calzado from "../images/botin.png";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="flex flex-wrap mx-auto  my-8 justify-center gap-6">
      {/*<!-- Component: Basic Pricing Table --> */}
      <div className="relative w-[300px] h-[400px] overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200 group transform transition duration-300 hover:scale-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${indumentaria})` }}
        ></div>
        <div className="relative flex flex-col justify-end p-6 text-slate-400 h-full bg-white bg-opacity-25 group-hover:bg-opacity-0 transition duration-300">
          <header className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white text-slate-700 hidden group-hover:block">
              Conocé la calidad de nuestros productos.
            </h3>
            <Link href="/Indumentaria">
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-xl font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-700 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
              <span>Indumentaria</span>
            </button>
            </Link>
          </header>
        </div>
      </div>
      {/*<!-- End Basic Pricing Table --> */}
      {/*<!-- Component: Basic Pricing Table --> */}
      <div className="relative w-[300px] h-[400px] overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200 group transform transition duration-300 hover:scale-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${calzado})` }}
        ></div>
        <div className="relative flex flex-col justify-end p-6 text-slate-400 h-full bg-white bg-opacity-25 group-hover:bg-opacity-0 transition duration-300">
          <header className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white text-slate-700 hidden group-hover:block">
              Equipate con la confianza y seguridad de nuestros productos.
            </h3>
            <Link href="/Calzado">
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-xl font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-700 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
              <span>Calzado</span>
            </button>
            </Link>
          </header>
        </div>
      </div>
      {/*<!-- End Basic Pricing Table --> */}
      {/*<!-- Component: Basic Pricing Table --> */}
      <div className="relative w-[300px] h-[400px] overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200 group transform transition duration-300 hover:scale-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${seguridad})` }}
        ></div>
        <div className="relative flex flex-col justify-end p-6 text-slate-400 h-full bg-white bg-opacity-25 group-hover:bg-opacity-0 transition duration-300">
          <header className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white text-slate-700 hidden group-hover:block">
              Protegé con las normas de seguridad apropiadas.
            </h3>
            <Link href="/Seguridad">
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-xl font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-700 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
              <span>Elementos de Seguridad</span>
            </button>
            </Link>
          </header>
        </div>
      </div>
      {/*<!-- End Basic Pricing Table --> */}
    </div>
  );
}

