import React from 'react';
import WhatsAppIcon from '../../components/WhatsAppIcon';

import guantes1 from "../../images/Guantes.jpg";
import guantes2 from "../../images/Guantes2.jpg";

import audifono1 from "../../images/Audifonos.jpg";
import audifono2 from "../../images/Tapones.jpg";

import lentes1 from "../../images/Lentes1.jpg";
import lentes2 from "../../images/Lentes2.jpg";
import lentes3 from "../../images/Lentes3.jpg";

import faja1 from "../../images/Faja.jpg";

export default function Seguridad() {
  return (
  <>
<div className="container mx-auto">
  <h2 className="p-4 mx-auto col-span-4 md:col-span-8 lg:col-span-12 text-6xl font-bold m-4">ELEMENTOS DE SEGURIDAD</h2>

  <div className="relative p-4 grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">

  <div className="col-span-4 md:col-span-8 lg:col-span-12 p-4 m-4">
    <h2 className="text-4xl font-bold mb-4">Guantes</h2>
    <p className="mb-4">
    Guantes de seguridad en descarne con refuerzo palmar.
    Guantes de seguridad multiflex nylon Pu negros.
    </p>
  </div>  
  
  <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
    <img
      className="object-contain w-full h-full"
      src={guantes1}
      alt="Imagen"
    />
  </div>

  <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
    <img
      className="object-contain w-full h-full"
      src={guantes2}
      alt="Imagen"
    />
  </div>
        
  <div className="col-span-4 md:col-span-8 lg:col-span-12 p-4 m-4">
        <h2 className="text-4xl font-bold mb-4">Protectores Auditivos</h2>
        <p className="mb-4">
        Diferentes Modelos.
        </p>
      </div>  
          
  <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-contain w-full h-full"
          src={audifono1}
          alt="Imagen"
        />
      </div>
  <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-contain w-full h-full"
          src={audifono2}
          alt="Imagen"
        />
      </div>

  <div className="col-span-4 md:col-span-8 lg:col-span-12 p-4 m-4">
        <h2 className="text-4xl font-bold mb-4">Lentes</h2>
        <p className="mb-4">
        Anteojos transparentes o gris antirayaduras diferentes modelos.
        </p>
      </div>  
          
  <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-contain w-full h-full"
          src={lentes1}
          alt="Imagen"
        />
      </div>
  <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-contain w-full h-full"
          src={lentes2}
          alt="Imagen"
        />
      </div>
  <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-contain w-full h-full"
          src={lentes3}
          alt="Imagen"
        />
      </div>            

  <div className="col-span-4 md:col-span-8 lg:col-span-12 p-4 m-4">
        <h2 className="text-4xl font-bold mb-4">Fajas</h2>
        <p className="mb-4">
        Lumbar Reforzada.
        </p>
      </div>  
          
      <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-contain w-full h-full"
          src={faja1}
          alt="Imagen"
        />
      </div>

            
    </div>
  </div>  
  {/* Agregar Numero de Telefono */}
  <WhatsAppIcon />
  </>
  );
}
