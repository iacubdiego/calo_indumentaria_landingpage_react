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
  {/* Título que abarca toda la pantalla */}
  <h2 className="text-4xl font-bold text-center mb-4">ELEMENTOS DE SEGURIDAD</h2>
  
  {/* Subtítulo con descripción que abarca toda la pantalla */}
  <p className="text-lg text-center mb-8">
    Aquí encontrarás una selección de nuestros guantes de seguridad. 
    Diseñados para ofrecer la mejor protección y comodidad.
  </p>

  {/* Contenedor principal para las imágenes */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Contenedor de 2/3 de ancho */}
    <div className="col-span-2 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
      <img
        className="object-cover h-60 w-full md:rounded-l-lg"
        src={guantes1}
        alt="Guantes de Seguridad 1"
      />
    </div>

    {/* Contenedor de 1/3 de ancho */}
    <div className="col-span-1 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
      <img
        className="object-cover h-60 w-full md:rounded-l-lg"
        src={guantes2}
        alt="Guantes de Seguridad 2"
      />
    </div>
  </div>
    <div className="w-3/4 mx-14 mt-4 max-w-screen-xl col-span-4 lg:col-span-7 flex flex-col justify-center p-4">
        <h2 className="text-4xl font-bold mb-4">Protectores Auditivos</h2>
        <p className="mb-4">
        Diferentes Modelos.
        </p>
      </div>  
          
      <div className="col-span-4 lg:col-span-5 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={audifono1}
          alt="Imagen"
        />
      </div>

      <div className="col-span-4 lg:col-span-7 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={audifono2}
          alt="Imagen"
        />
      </div>

      <div className="w-3/4 mx-14 mt-4 max-w-screen-xl col-span-4 lg:col-span-7 flex flex-col justify-center p-4">
        <h2 className="text-4xl font-bold mb-4">Lentes</h2>
        <p className="mb-4">
        Anteojos transparentes o gris antirayaduras diferentes modelos.
        </p>
      </div>  
          
      <div className="col-span-4 lg:col-span-5 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={lentes1}
          alt="Imagen"
        />
      </div>

      <div className="col-span-4 lg:col-span-7 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={lentes2}
          alt="Imagen"
        />
      </div>

      <div className="col-span-4 lg:col-span-7 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={lentes3}
          alt="Imagen"
        />
      </div>            

      <div className="w-3/4 mx-14 mt-4 max-w-screen-xl col-span-4 lg:col-span-7 flex flex-col justify-center p-4">
        <h2 className="text-4xl font-bold mb-4">Fajas</h2>
        <p className="mb-4">
        Lumbar Reforzada.
        </p>
      </div>  
          
      <div className="col-span-4 lg:col-span-5 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
        <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={faja1}
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
