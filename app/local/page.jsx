import "@/app/globals.css";

import Image from "next/image";
import Navbar from "../../components/navbar";
import Footbar from "../../components/footbar";

export const metadata = {
  title: "Locales",
};

const Lugares = [
  {
    "id": 1,
    "ciudad": "Santiago",
    "dirección": "Avenida Libertador Bernardo O'Higgins 1010",
    "horarios": [
      "Lunes a Viernes de 8:00 a 18:00 Hrs",
      "Sábado de 9:00 a 14:00 Hrs",
    ],
    "ubicación": {
      "tipo": "museo",
      "nombre": "Museo de Bellas Artes de Santiago",
    },
  },
  {
    "id": 2,
    "ciudad": "Valparaíso",
    "dirección": "Calle Condell 1546",
    "horarios": ["Lunes a Domingo de 10:00 a 18:00 Hrs"],
    "ubicación": {
      "tipo": "parque",
      "nombre": "Parque Quinta Vergara",
    },
  },
  {
    "id": 3,
    "ciudad": "Concepción",
    "dirección": "Av. Chacabuco 1990",
    "horarios": [
      "Lunes a Viernes de 10:00 a 20:00 Hrs",
      "Sábado y Domingo de 10:00 a 18:00 Hrs",
    ],
    "ubicación": {
      "tipo": "mercado",
      "nombre": "Mercado Central de Concepción",
    },
  },
  {
    "id": 4,
    "ciudad": "Punta Arenas",
    "dirección": "Av. Colón 946",
    "horarios": ["Lunes a Domingo de 10:00 a 19:00 Hrs"],
    "ubicación": {
      "tipo": "museo",
      "nombre": "Museo Regional de Magallanes",
    },
  },
  {
    "id": 5,
    "ciudad": "Puerto Natales",
    "dirección": "Av. Arturo Prat 690",
    "horarios": ["Lunes a Domingo de 9:00 a 20:00 Hrs"],
    "ubicación": {
      "tipo": "parque",
      "nombre": "Parque Nacional Torres del Paine",
    },
  },
];

export default function Locales() {
  return (
    <main className="grid grid-flow-row auto-rows-max bg-primero">
      <section className="h-auto w-full">
        <h1 className="text-black text-center">Localidades</h1>

        <div className="flex flex-wrap gap-6 justify-center lg:px-32">
          {Lugares.map((lugar) => (
            <div
              className="flex flex-col sm:w-1/2 lg:w-1/4 bg-segundo shadow-lg rounded-lg overflow-hidden lg:px-4 py-6"
              key={lugar.id}
            >
              <Image
                width={500}
                height={500}
                className="w-full h-50 object-cover px-5"
                src={"/Image/locales/TiendaAbogado1.jpg"}
                alt="Ubicación"
              />
              <div className="pt-4 px-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b-4 border-tercero pb-2">
                  {lugar.ciudad}
                </h2>
                <h2 className="text-xl text-gray-800 pl-3 ">
                  {lugar.dirección}
                </h2>

                <button
                  href={"https://goo.gl/maps/p9puuw3c6wk5zr5i6"}
                  type="button"
                  className="rounded-full p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                >
                  Ver direccion
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
