import React from 'react';
import camisa from "../../images/ropa/Camisa Beige.jpg";

export default function Calzado() {
  return (
    <>
   <div className="container mx-auto">
    <div className="relative p-4">
    <div className="bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
    <div className="">
    <div className="">
      <img
        className="object-cover h-60 w-full md:rounded-l-lg"
        src={camisa}
        alt="Imagen"
      />
    </div>
  
    <div className="justify-center p-4">
      <h2 className="text-4xl font-bold mb-4">Nuestro Laboratorio</h2>
    </div>
  </div>
</div>  
</div>  
</div>  
    </>
  );
}
