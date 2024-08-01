import React from "react";

import botas from "../images/ropa/20170512_115346.jpg";
import camisa from "../images/ropa/Camisa Beige.jpg";
import pantalones from "../images/ropa/Pantalon Azul.jpg";

export default function Pricing() {
  return (
    <>
      <div className="flex mx-auto my-8 justify-center gap-6">
        {/*<!-- Component: Basic Pricing Table --> */}
        <div className="max-w-sm overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200">
          <div className="flex flex-col">
            <header className="flex flex-col gap-6 p-6 text-slate-400">
              <h3 className="text-xl font-bold text-slate-700">
                Botas
                <span className="block text-sm font-normal text-slate-400">
                  Ideal para el camino.
                </span>
              </h3>
              <img
                src={botas}
                alt="botas"
                className="object-cover rounded-md w-full h-48 shadow-md"
              />
              <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-500 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
                <span>Ver más Productos</span>
              </button>
            </header>
          </div>
        </div>
        {/*<!-- End Basic Pricing Table --> */}
        {/*<!-- Component: Basic Pricing Table --> */}
        <div className="max-w-sm overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200">
          <div className="flex flex-col">
            <header className="flex flex-col gap-6 p-6 text-slate-400">
              <h3 className="text-xl font-bold text-slate-700">
                Camisa
                <span className="block text-sm font-normal text-slate-400">
                  Buscar profesional con calificación perfecta.
                </span>
              </h3>
              <img
                src={camisa}
                alt="camisa"
                className="object-cover rounded-md w-full h-48 shadow-md"
              />
              <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-500 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
                <span>Ver más Productos</span>
              </button>
            </header>
          </div>
        </div>
        {/*<!-- End Basic Pricing Table --> */}
        {/*<!-- Component: Basic Pricing Table --> */}
        <div className="max-w-sm overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200">
          <div className="flex flex-col">
            <header className="flex flex-col gap-6 p-6 text-slate-400">
              <h3 className="text-xl font-bold text-slate-700">
                Pantalones
                <span className="block text-sm font-normal text-slate-400">
                  Buscar profesional con calificación perfecta.
                </span>
              </h3>
              <img
                src={pantalones}
                alt="pantalones"
                className="object-cover rounded-md w-full h-48 shadow-md"
              />
              <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-500 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
                <span>Ver más Productos</span>
              </button>
            </header>
          </div>
        </div>
        {/*<!-- End Basic Pricing Table --> */}
      </div>
    </>
  );
}