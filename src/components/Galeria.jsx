import React from "react";

// import botas from "../images/ropa/20170512_115346.jpg";
import camisa from "../images/ropa/Camisa Beige.jpg";
// import pantalones from "../images/ropa/Pantalon Azul.jpg";
import banner_horizontal from '../images/web/BannerOficial.png'


const products = [
  {
    id: 1,
    image: camisa,
    title: "LanXPLORER",
    description:
      "In-Line network tester for LAN management with active and passive troubleshooting capabilities for Ethernet connectivity and cabling issues in multi-media environments including copper,fibre and WiFi.",
    brand: "Ideal",
    brandbaner: "{banner_oscilloquartz}",
  },
  {
    id: 2,
    image: camisa,
    title: "Power Meter",
    description:
      "Maximum input 600Vrms and 20Arms. Bandwidth 100KHZ. Voltage, Current, Power, Frequency, Harmonics. USB, GPIB, RS232, LAN remote control.",
    brand: "Itech",
    brandbaner: { banner_horizontal },
  },
  {
    id: 3,
    image: camisa,
    title: "Signal Generators",
    description:
      "Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.",
    brand: "Keysight",
    brandbaner: { banner_horizontal },
  },
  {
    id: 4,
    image: camisa,
    title: "LED High Power DC E-Load",
    description:
      "Simulate real output of LED lights. CR-LED mode. Duty ratio PWM dimming output port. I-pp/I-max. LED driver power dimming test.",
    brand: "Keysight",
  },
  {
    id: 5,
    image: camisa,
    title: "Signal Generators",
    description:
      "Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.",
    brand: "Keysight",
  },
  {
    id: 6,
    image: camisa,
    title: "Signal Generators",
    description:
      "Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.",
    brand: "Keysight",
  },
  {
    id: 7,
    image: camisa,
    title: "Signal Generators",
    description:
      "Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.",
    brand: "Keysight",
  },
  // Agrega más productos aquí
];

const Galeria = () => {
  return (
    <div className="container mx-auto">
   <div className="flex flex-wrap gap-2 justify-center p-4 pb-0">
  {products.map((product) => (
    <div
      key={product.id}
      className="border border-gray-300 rounded-md p-2 shadow-md w-[200px] flex flex-col justify-between"
    >
      <div className="aspect-w-3 aspect-h-2">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover rounded-md w-full h-full shadow-md"
        />
      </div>
      <div className="mt-4 flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-3">
          {product.title}
        </h3>
        <p className="text-gray-600 line-clamp-3">{product.description}</p>
      </div>
      <div className="flex flex-row justify-end gap-2 py-0">
        <a
          href="https://articulo.mercadolibre.com.ar/MLA-1400485671-osciloscopio-20-mhz-doble-canal-gen-func-1-mhz-2-en-1-_JM#position=5&search_layout=stack&type=item&tracking_id=62004a24-28ef-4901-b0d6-c29883083579"
          target="_blank"
          rel="noopener noreferrer"
          className="self-end"
        >
          <button className="inline-flex h-10 items-end justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-gray-500 transition duration-300 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-200 focus:text-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-gray-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span>Ver en</span>
            <img
              src={camisa}
              alt="logoMercado"
              className="object-cover rounded-md w-full h-8 shadow-md"
            />
          </button>
        </a>
      </div>
    </div>
  ))}
</div> 
    </div>
  );
};

export default Galeria;
