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
    </section>
  );
};


export default Banner;

