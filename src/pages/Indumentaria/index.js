import React from 'react';
import WhatsAppIcon from '../../components/WhatsAppIcon';

import camisacolores from "../../images/camisas 3 colores.jpg";
import camisaazulfrente from "../../images/camisa azulino frente.jpg";
import camisamarino from "../../images/camisa frente marino.jpg";
import camisabeige from "../../images/camisa beige frente.jpg";

export default function Indumentaria() {
  return (
    <>
   <div className="container mx-auto ">
    
    <div className="relative p-4 grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
      
    <div className="col-span-4 lg:col-span-7 flex flex-col justify-center p-4">
        <h2 className="text-4xl font-bold mb-4">Indumentaria</h2>
        <p className="mb-4">
        PANTALON DE GABARDINA 8 0Z.
        Confeccionados con triple costura - con boton y cierre para una mayor durabilidad pensados para soportar los esfuerzos diarios.
        </p>
      </div>  
      
      
      <div className="col-span-4 lg:col-span-5 p-4">
        <img
          className="object-cover h-60 w-full"
          src={camisabeige}
          alt="Imagen"
        />
      </div>
    
      <div className="col-span-4 lg:col-span-12 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="mx-auto h-96 w-full md:rounded-l-lg"
          src={camisacolores}
          alt="Imagen"
        />
      </div>

      <div className="col-span-4 lg:col-span-5 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={camisamarino}
          alt="Imagen"
        />
      </div>

      <div className="col-span-4 lg:col-span-7 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={camisaazulfrente}
          alt="Imagen"
        />
      </div>

    </div>
  </div>  
  {/* Agregar Numero de Telefono */}
  <WhatsAppIcon phoneNumber="NUMERO_DE_TELEFONO" />

  </>
  );
}