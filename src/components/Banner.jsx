import React from 'react';

import banner_horizontal from '../images/web/BannerOficial.png'


const Banner = () => {
  return (
<section className="p-1 flex flex-col items-center justify-center">
  <div className="relative">
    <img src={banner_horizontal} alt="banner_principal" className="mx-auto w-full h-auto rounded-md" />
  </div>
</section>  )}
  export default Banner;
