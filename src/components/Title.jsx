import React from "react";

export default function Title() {
  return (
    <>
      {/*      <!-- Component: Elevated centered simple base sized testimonial --> */}
      <div className=" overflow-hidden text-center bg-white bg-opacity-75 backdrop-blur-sm rounded-lg shadow-2xl text-slate-500 shadow-slate-200">
        <div className="relative p-6 bg-gradient-to-b from-blue-900 to-black">
          <figure className="relative z-10">
            <blockquote className="p-6 text-xl leading-relaxed text-white">
              <p>
                Descubre la excelencia en cada detalle: ofrecemos una increíble
                variedad de productos de la más alta calidad, diseñados para
                satisfacer todas tus necesidades y superar tus expectativas.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center gap-4 p-6 pt-2 text-xl text-white-500">
            <button className="px-6 py-3 justify-center bg-white text-black rounded-md  text-lg md:text-xl hover:bg-blue-700 transition duration-300">
          Contactarse
        </button>

            </figcaption>
          </figure>
        </div>
      </div>
      {/*      <!-- End Elevated centered simple base sized testimonial --> */}
    </>
  );
}
