import React from 'react';
import WhatsAppIcon from '../../components/WhatsAppIcon';

import botin from "../../images/botin de seguridad.jpg";
import botinfondo from "../../images/botin de seguridad fondo.jpg";
import botaslluvia from "../../images/Botas.jpg";

import botincerca from "../../images/botin seguridad cerca.jpg";
import botinsuela from "../../images/botin suela.jpg";

export default function Calzado() {
  return (
  <>
   <div className="container mx-auto ">
    <h2 className="p-4 mx-auto col-span-4 md:col-span-8 lg:col-span-12 text-6xl font-bold m-4">CALZADO</h2>    
    <div className="relative p-4 grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">      
    
      <div className="col-span-4 md:col-span-8 lg:col-span-12 p-4 m-4">
        <h2 className="text-4xl font-bold mb-4">Botines</h2>
        <p className="mb-4">
          Botas de PVC con punta de acero de la marca Proforce        
        </p>
      </div>  

      <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-contain w-full h-full"
          src={botin}
          alt="Imagen"
        />
      </div>
      <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-contain w-full h-full"
          src={botinfondo}
          alt="Imagen"
        />
      </div>

      
      <div className="col-span-4 md:col-span-8 lg:col-span-12 p-4 m-4">
        <h2 className="text-4xl font-bold mb-4">Botas</h2>
        <p className="mb-4">
          Botas de lluvia pvc con puntera de acero        
        </p>
      </div>  

      <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-contain w-full h-full"
          src={botaslluvia}
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

