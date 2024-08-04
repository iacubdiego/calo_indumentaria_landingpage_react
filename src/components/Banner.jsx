import React from 'react';

import video from '../images/BANNERWEB.mp4'
const Banner = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-screen min-h-[600px] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 p-8 text-center text-white mb-8">
        <h1 className="text-4xl md:text-4xl max-w-[400px] font-bold mb-4">Calidad en Inundementaria</h1>
        <p className="text-lg md:text-2xl mb-8">Hacemos la diferencia</p>
        <button className="px-6 py-3 bg-white text-black rounded-md text-lg md:text-xl hover:bg-blue-700 transition duration-300">
          Inudmentaria
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};


export default Banner;

