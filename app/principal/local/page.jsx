import "@/app/globals.css";

import Image from "next/image";
import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";
import Link from "next/link";

export const metadata = {
  title: "Locales",
};

const Lugares = [
  {
    "id": 0,
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
    "region": "Región Metropolitana",
  },
  {
    "id": 1,
    "ciudad": "Valparaíso",
    "dirección": "Calle Condell 1546",
    "horarios": ["Lunes a Domingo de 10:00 a 18:00 Hrs"],
    "ubicación": {
      "tipo": "parque",
      "nombre": "Parque Quinta Vergara",
    },
    "region": "Región de Valparaíso",
  },
  {
    "id": 2,
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
    "region": "Región del Biobío",
  },
  {
    "id": 3,
    "ciudad": "Punta Arenas",
    "dirección": "Av. Colón 946",
    "horarios": ["Lunes a Domingo de 10:00 a 19:00 Hrs"],
    "ubicación": {
      "tipo": "museo",
      "nombre": "Museo Regional de Magallanes",
    },
    "region": "Región de Magallanes",
  },
  {
    "id": 4,
    "ciudad": "Puerto Natales",
    "dirección": "Av. Arturo Prat 690",
    "horarios": ["Lunes a Domingo de 9:00 a 20:00 Hrs"],
    "ubicación": {
      "tipo": "parque",
      "nombre": "Parque Nacional Torres del Paine",
    },
    "region": "Región de Magallanes",
  },
];

export default function Locales() {
  return (
    <main className="grid grid-flow-row auto-rows-max bg-primero">
      <section className="h-auto w-full">
        <h1 className="text-black text-center text-2xl font-bold pt-10">
          Localidades
        </h1>

        <div className="flex flex-wrap gap-6 justify-center lg:px-32 lg:py-12">
          {Lugares.map((lugar) => (
            <div
              className="flex flex-col sm:w-1/2 lg:h-auto lg:w-1/4 bg-segundo shadow-lg rounded-lg overflow-hidden lg:px-4 py-6"
              key={lugar.id}
            >
              <Image
                width={500}
                height={500}
                className="w-full h-50 object-cover px-5"
                src="/Image/locales/TiendaAbogado1.jpg"
                alt="Ubicación"
              />
              <div className="pt-4 px-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b-4 border-tercero pb-2">
                  {lugar.region}
                </h2>
                <h2 className="text-xl text-gray-800 pl-3 pb-4 ">
                  {lugar.ciudad}
                </h2>

                <div>
                  <Link
                     className="rounded-l-lg p-2 bg-cuarto hover:drop-shadow-lg border-r-2 border-black"
                    href={"/principal/local/" + lugar.id}
                  >
                    Información
                  </Link>

                  <Link
                    href={"https://goo.gl/maps/p9puuw3c6wk5zr5i6"}
                    className="rounded-r-lg p-2 bg-cuarto hover:drop-shadow-lg"
                  >
                    Ver direccion
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
