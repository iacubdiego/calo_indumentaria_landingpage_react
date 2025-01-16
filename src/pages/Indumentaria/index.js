import React from 'react';
import WhatsAppIcon from '../../components/WhatsAppIcon';

import camisacolores from "../../images/camisas 3 colores.jpg";
import camisaazulfrente from "../../images/camisa azulino frente.jpg";
import camisamarino from "../../images/camisa frente marino.jpg";
import camisabeige from "../../images/camisa beige frente.jpg";

import pantaloncolores from "../../images/pantalon 3 colores.jpg";
import pantalonbeige from "../../images/pantalon beige.jpg";
import pantalonazulino from "../../images/pantalon clasico azulino.jpg";
import pantalonmarino from "../../images/pantalon clasico marino frente.jpg";

export default function Indumentaria() {
  return (
    <>
     <div className="container mx-auto ">
        <h2 className="p-4 mx-auto col-span-4 md:col-span-8 lg:col-span-12 text-6xl font-bold m-4">INDUMENTARIA</h2>

        <div className="relative p-4 grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
    
          <div className="col-span-4 md:col-span-8 lg:col-span-12 p-4 m-4">
            <h2 className="text-4xl font-bold mb-4">CAMISA DE GABARDINA</h2>
            <p className="mb-4">
            Camisas gabaridna rigida de 6 oz con mangas reforzadas 2 bolsillos delanteros. reforzadas en las zonas de mayor exigencia.
            </p>
          </div>  

          <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
            <img className="object-contain w-full h-full"
              src={camisabeige}
              alt="Imagen"
            />
          </div>
          <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
            <img className="object-contain w-full h-full"
              src={camisacolores}
              alt="Imagen"
            />
          </div>                

                
          <div className="col-span-4 md:col-span-8 lg:col-span-12 p-4 m-4">
            <h2 className="text-4xl font-bold mb-4">PANTALON DE GABARDINA</h2>
            <p className="mb-4">
            Pantalon de gabardina 8 oz con boton y cierre, triple constura, 2 bolsillos laterales con forreria de primera calidad y un bolsillo ojal resistente.
            </p>
          </div>  

          <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
            <img className="object-contain w-full h-full"
              src={pantalonazulino}
              alt="Imagen"
            />
          </div>
          <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
            <img className="object-contain w-full h-full"
              src={pantaloncolores}
              alt="Imagen"
            />
          </div>     


          <div className="col-span-4 md:col-span-8 lg:col-span-12 p-4 m-4">
            <h2 className="text-4xl font-bold mb-4">CONJUNTOS</h2>
            <p className="mb-4">
            Conjuntos de camisa y pantalón
            </p>
          </div>  

          <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
            <img className="object-contain w-full h-full"
              src={pantalonazulino}
              alt="Imagen"
            />
          </div>
          <div className="relative w-full h-[24rem] col-span-4 lg:col-span-6 bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
            <img className="object-contain w-full h-full"
              src={pantaloncolores}
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
