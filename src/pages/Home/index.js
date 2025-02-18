import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Pricing from '../../components/Pricing';
import WhatsAppIcon from '../../components/WhatsAppIcon';

export default function Home() {
    return (
    <>
    <div className="relative bg-blue-900 w-screen flex flex-col items-center">
      <div className="relative z-10">
      <Banner />
      </div>
      <div className="relative -top-16 z-10">
      <Title />
      </div>
      <Pricing />

    </div>
      {/* Banner */}
      
      {/* Title */}

      {/* Pricing */}

      {/* Agregar Numero de Telefono */}
      <WhatsAppIcon phoneNumber="541156379430" />
    </>
    )}
