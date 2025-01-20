import React from 'react'
import WhatsAppIcon from '../../components/WhatsAppIcon';
const Nosotros = () => {
    return(
      <>

      <div className="relative bg-blue-900 w-screen flex flex-col">
      

          {/*      <!-- Quienes Somos --> */}
          <div className="w-3/4 mx-auto mt-4 max-w-screen-xl overflow-hidden text-center bg-white bg-opacity-75 backdrop-blur-sm rounded-lg shadow-2xl text-slate-500 shadow-slate-200">
            <div className="relative p-6 bg-white">
              <h2 className="text-3xl font-bold mb-4 text-black">Quienes somos</h2>
              <figure className="relative z-10">
                <blockquote className="p-6 text-xl leading-relaxed">
                    <p>
                    Bienvenidos a CALO indumentaria laboral , somos fabricantes y distribuidores de ropa de trabajo y elementos de seguridad en el rubro de la construcción y la Industria Nacional. Con más de 10 años de experiencia y compromiso con la excelencia, nos hemos consolidado como proveedores confiables para nuestros clientes.
                    </p>
                </blockquote>
                <figcaption className="flex justify-center items-center gap-4 p-6 pt-2 text-xl text-white-500">
                </figcaption>
              </figure>
            </div>
          </div>
          {/*      <!-- End Quienes Somos --> */}

          {/*      <!-- Nuestra Misión --> */}
          <div className="w-3/4 mx-auto mt-4 max-w-screen-xl overflow-hidden text-center bg-white bg-opacity-75 backdrop-blur-sm rounded-lg shadow-2xl text-slate-500 shadow-slate-200">
            <div className="relative p-6 bg-white">
                <h2 className="text-3xl font-bold mb-4 text-black">Nuestra Misión</h2>
                <figure className="relative z-10">
                  <blockquote className="p-2 text-xl leading-relaxed">
                    <p>
                     Nuestra misión es proporcionar soluciones integrales de protección personal y ropa de trabajo, garantizando la seguridad, calidad en la indumentaria de los trabajadores en sus entornos laborables. Nos esforzamos por entender las necesidades específicas de cada cliente y ofrecer productos innovadores que superen sus expectativas.
                    </p>
                </blockquote>              
              </figure>
            </div>
          </div>
          {/*      <!-- End Nuestra Misión --> */}
      </div>
    
          <div className='flex flex-wrap w-screen'>

        {/* <!-- Nuestros Valore --> */}
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
        {/* <!-- End Nuestros Valore --> */}

        {/* <!-- Nuestros Productos y Servicios --> */}
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
        {/* <!-- End Nuestros Productos y Servicios --> */}
        </div>

      <WhatsAppIcon phoneNumber="541156379430" />
  </>
  )
}

export default Nosotros
