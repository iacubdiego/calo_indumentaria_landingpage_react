import React from "react";
import botas from "../images/botin.png";
import camisa from "../images/Elementosdeseguridad.jpg";
import pantalones from "../images/botin.png";

export default function Pricing() {
  return (
    <div className="flex mx-auto h-[400px] my-8 justify-center gap-6">
      {/*<!-- Component: Basic Pricing Table --> */}
      <div className="relative min-w-[300px] max-w-sm overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200 group">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${botas})` }}
        ></div>
        <div className="relative flex flex-col justify-center p-6 text-slate-400 h-full bg-white bg-opacity-25 group-hover:bg-opacity-0 transition duration-300">
          <header className="flex flex-col gap-6">
            <h3 className="text-4xl font-bold text-white text-slate-700 hidden group-hover:block">
              Botas
              <span className="block text-xl text-white font-normal text-slate-400">
                Buscar profesional con calificación perfecta.
              </span>
            </h3>
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-xl font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-500 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
              <span>Botas</span>
            </button>
          </header>
        </div>
      </div>
      {/*<!-- End Basic Pricing Table --> */}
      {/*<!-- Component: Basic Pricing Table --> */}
      <div className="relative min-w-[300px] max-w-sm overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200 group">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${camisa})` }}
        ></div>
        <div className="relative flex flex-col justify-center p-6 text-slate-400 h-full bg-white bg-opacity-25 group-hover:bg-opacity-0 transition duration-300">
          <header className="flex flex-col gap-6">
            <h3 className="text-4xl font-bold text-white text-slate-700 hidden group-hover:block">
              Camisa
              <span className="block text-xl font-normal text-slate-400">
                Buscar profesional con calificación perfecta.
              </span>
            </h3>
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-xl font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-500 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
              <span>Camisa</span>
            </button>
          </header>
        </div>
      </div>
      {/*<!-- End Basic Pricing Table --> */}
      {/*<!-- Component: Basic Pricing Table --> */}
      <div className="relative min-w-[300px] max-w-sm overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200 group">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pantalones})` }}
        ></div>
        <div className="relative flex flex-col justify-center p-6 text-slate-400 h-full bg-white bg-opacity-25 group-hover:bg-opacity-0 transition duration-300">
          <header className="flex flex-col gap-6">
            <h3 className="text-4xl font-bold text-slate-700 hidden group-hover:block">
              Pantalones
              <span className="block text-xl font-normal text-slate-400">
                Buscar profesional con calificación perfecta.
              </span>
            </h3>
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-xl font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-500 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
              <span>Pantalones</span>
            </button>
          </header>
        </div>
      </div>
      {/*<!-- End Basic Pricing Table --> */}
    </div>
  );
}
