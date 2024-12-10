import React from 'react';
import camisa from "../../images/ropa/Camisa Beige.jpg";
import Galeria from "../../components/Galeria"

export default function Indumentaria() {
  return (
    <>
   <div className="container mx-auto ">
    <div className="relative p-4">
      <div className="bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={camisa}
          alt="Imagen"
        />
      </div>
    
      <div className="flex flex-col justify-center p-4">
        <h2 className="text-4xl font-bold mb-4">Nuestra Indumentaria</h2>
        <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.      Lorem ipsum dolor sit amet consectetur, adipisicing elit.      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>  
    </div>

  <Galeria></Galeria>
  </div>  
  </>
  );
}