import React from 'react';
import WhatsAppIcon from '../../components/WhatsAppIcon';

import botin from "../../images/botin de seguridad.jpg";
import botinfondo from "../../images/botin de seguridad fondo.jpg";
import botincerca from "../../images/botin seguridad cerca.jpg";
import botinsuela from "../../images/botin suela.jpg";


export default function Calzado() {
  return (
    <>
   <div className="container mx-auto ">
    
    <div className="relative p-4 grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
      
    <div className="col-span-4 lg:col-span-7 flex flex-col justify-center p-4">
        <h2 className="text-4xl font-bold mb-4">Botas y Zapatos para el trabajo</h2>
        <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.      Lorem ipsum dolor sit amet consectetur, adipisicing elit.      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>  
      
      
      <div className="col-span-4 lg:col-span-5 p-4">
        <img
          className="object-cover h-60 w-full rounded-lg"
          src={botin}
          alt="Imagen"
        />
      </div>
    
      <div className="col-span-4 max-w-5xl md:col-span-12 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">         <img
          className="mx-auto h-96 w-full md:rounded-l-lg"
          src={botinfondo}
          alt="Imagen"
        />
      </div>

      <div className="col-span-4 lg:col-span-5 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={botincerca}
          alt="Imagen"
        />
      </div>

      <div className="col-span-4 lg:col-span-7 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={botinsuela}
          alt="Imagen"
        />
      </div>

    </div>

    <div>

    </div>

  </div>  

  {/* Agregar Numero de Telefono */}
  <WhatsAppIcon phoneNumber="NUMERO_DE_TELEFONO" />

  </>
  );
}

