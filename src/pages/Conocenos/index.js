import React from 'react'
import WhatsAppIcon from '../../components/WhatsAppIcon';
const Nosotros = () => {
    return(
      <>

      <div className="relative bg-blue-900 w-screen flex flex-col">
      

          {/*      <!-- Component: Elevated centered simple base sized testimonial --> */}
          <div className="w-3/4 mx-14 mt-4 max-w-screen-xl overflow-hidden text-center bg-white bg-opacity-75 backdrop-blur-sm rounded-lg shadow-2xl text-slate-500 shadow-slate-200">
            <div className="relative p-6 bg-white">
              <figure className="relative z-10">
                <blockquote className="p-6 text-xl leading-relaxed">
                  <p>
                  En CALO nos especializamos en la fabricación y comercialización de indumentaria laboral y elementos de protección personal. (Abastecemos) Nos dirigimos a una amplia gama de clientes, desde pymes y mayoristas hasta particulares, ofreciendo productos de alta calidad que combinan precio y durabilidad, que permitan equipar a los trabajadores de cada sector donde se forja la Industria Nacional.
                  </p>
                </blockquote>
                <figcaption className="flex justify-center items-center gap-4 p-6 pt-2 text-xl text-white-500">
                </figcaption>
              </figure>
            </div>
          </div>
          {/*      <!-- End Elevated centered simple base sized testimonial --> */}

          <div className='flex flex-wrap w-screen'>

{/* <!-- Component: Elevated centered simple base sized testimonial --> */}
<div className='w-full md:w-1/2 p-2'>
  <div className="p-2 m-6 overflow-hidden text-center bg-gradient-to-b from-orange-400 to-orange-200 rounded-lg text-slate-500">
    <div className="relative p-2">
      <h2 className="text-3xl font-bold mb-4 text-black">Nuestros Valores</h2>
      <figure className="relative z-10">
        <blockquote className="p-6 text-xl leading-relaxed">
          <p className="p-2 text-left">- Calidad y compromiso en nuestros productos y servicios.</p>
          <p className="p-2 text-left">- Atención personalizada y soporte técnico especializado.</p>
          <p className="p-2 text-left">- Innovación constante para satisfacer las necesidades del mercado.</p>
        </blockquote>
      </figure>
    </div>
  </div>
</div>
{/* <!-- End Elevated centered simple base sized testimonial --> */}
{/* <!-- Component: Elevated centered simple base sized testimonial --> */}
<div className='w-full md:w-1/2 p-2'>
  <div className="p-2 m-6 overflow-hidden text-center bg-gradient-to-b from-orange-200 to-orange-400 rounded-lg text-slate-500">
    <div className="relative p-6">
    <h2 className="text-3xl font-bold mb-4 text-black">Nuestros Productos y Servicios</h2>
      <figure className="relative z-10">
        <blockquote className="p-2 text-xl leading-relaxed">
          <p className="p-2 text-left">- Ropa de trabajo resistente y calidad asegurada</p>
          <p className="p-2 text-left">- Elementos de seguridad</p>
          <p className="p-2 text-left">- Calzado industrial y de seguridad</p>
          <p className="p-2 text-left">- Asesoramiento técnico y presupuestos en 24hs</p>
          <p className="p-2 text-left">- Envios a todo el País</p>
        </blockquote>
      </figure>
    </div>
  </div>
</div>
{/* <!-- End Elevated centered simple base sized testimonial --> */}
        </div>

          {/*      <!-- Component: Elevated centered simple base sized testimonial --> */}
          <div className="w-4/5 max-w-screen-md p-2 ml-auto mx-8 mb-4 overflow-hidden text-center bg-white bg-opacity-75 backdrop-blur-sm rounded-lg shadow-2xl text-slate-500 shadow-slate-200">
            <div className="relative p-6 bg-white">

            <h2 className="text-3xl font-bold mb-4 text-black">Nuestra Misión</h2>
              <figure className="relative z-10">
                <blockquote className="p-2 text-xl leading-relaxed">
                  <p>
Nuestra misión es proporcionar soluciones integrales de protección personal y ropa de trabajo, garantizando la seguridad, calidad en la indumentaria de los trabajadores en sus entornos laborables. Nos esforzamos por entender las necesidades específicas de cada cliente y ofrecer productos innovadores que superen sus expectativas.
                  </p>
                </blockquote>              </figure>
            </div>
          </div>
          {/*      <!-- End Elevated centered simple base sized testimonial --> */}
      </div>

      {/* Agregar Numero de Telefono */}
      <WhatsAppIcon phoneNumber="NUMERO_DE_TELEFONO" />
  </>
  )
}

export default Nosotros
