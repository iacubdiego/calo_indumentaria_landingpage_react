import React from 'react';
import logo from '../images/logos/Calo - Logos.png'

const Footer = () => {
  return (
<footer className="flex flex-col mt-4 p-2 border-2 w-full m-auto">
<div className="flex items-center justify-between mt-4 bg-gray-100 w-full m-auto">

  <div className="flex flex-wrap w-full justify-around">
    <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="text-lg font-bold mb-2">EN LA WEB:</h2>
      <ul className="list-none">
        <li className="mb-1">
          <a href="#inicio" className="hover:text-gray-400">Inicio</a>
        </li>
        <li className="mb-1">
          <a href="/Calzado" className="hover:text-gray-400">Calzado</a>
        </li>
        <li className="mb-1">
          <a href="/Indumentaria" className="hover:text-gray-400">Indumentaria</a>
        </li>
        <li className="mb-1">
          <a href="/Seguridad" className="hover:text-gray-400">Seguridad</a>
        </li>
        <li className="mb-1">
          <a href="/Conocenos" className="hover:text-gray-400">Sobre nosotros</a>
        </li>
      </ul>
    </div>
    <div className="w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="text-lg font-bold mb-4">CONTACTO:</h2>
      <ul className="list-none">
        <li className="mb-1">
          <a href="#inicio" className="hover:text-gray-400">Liniers</a>
        </li>
        <li className="mb-1">
          <a href="#inicio" className="hover:text-gray-400">C.A.B.A - Argentina</a>
        </li>
      </ul>
    </div>
    
  </div>
</div>
  <div className="bg-gray-200 border-t border-slate-200 bg-slate-100 py-4 text-sm">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
            <img className="h-10 mr-4" src={logo} alt="Logo" />
            </div>
          </div>
        </div>
</footer>
  )}
  export default Footer;
