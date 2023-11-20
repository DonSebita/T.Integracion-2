import "@/app/globals.css";

import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Locales from "../page";

export default function Page({ params }) {
  let atencion = [
    "Lunes-Vienes: ",
    "Sabado: ",
    "Domingo: ",
  ];

  const locales = [
    {
      "ubicacion": "Santiago, Avenida Libertador Bernardo O'Higgins 1010",
      "encargado": "Diego Rivas",
      "horario": [
        "9:00AM - 6:00PM",
        "9:00AM - 5:00PM",
        "10:00PM - 2:30PM",
      ],
      "servicios": [],
    },
    {
      "ubicacion": "Valparaíso, Calle Condell 1546",
      "encargado": "María López",
      "horario": ["10:00AM - 6:00PM"],
      "servicios": [],
    },
    {
      "ubicacion": "Concepción, Av. Chacabuco 1990",
      "encargado": "Juan Pérez",
      "horario": [
        "10:00AM - 8:00PM",
        "10:00AM - 8:00PM",
        "10:00AM - 6:00PM",
      ],
      "servicios": [],
    },
    {
      "ubicacion": "Punta Arenas, Av. Colón 946",
      "encargado": "Ana Torres",
      "horario": ["10:00AM - 7:00PM"],
      "servicios": [],
    },
    {
      "ubicacion": "Puerto Natales, Av. Arturo Prat 690",
      "encargado": "Luis Rodríguez",
      "horario": ["9:00AM - 8:00PM"],
      "servicios": [],
    },
  ];

  if (params.local >= 0 && params.local < 5) {
    return (
      <main className="grid grid-flow-row auto-rows-max bg-primero">
        <section className="flex flex-row h-screen items-center w-full bg-segundo px-14">
          <div className="w-3/5 bg-primero p-14">
            <div className="flex justify-center">
              <Image
                className="flex justify-center"
                src={"/Image/locales/TiendaAbogado1.jpg"}
                width={500}
                height={500}
              />
            </div>

            <h2 className="pt-14 text-black font-bold border-b-4 text-xl">
              Informacion:
            </h2>
            <div className="pt-2 text-black">
              <h2 className="font-bold">Ubicacion:</h2>
              <p className="pl-5 pb-3">{locales[params.local].ubicacion}</p>
              <h2 className="font-bold">Encargado:</h2>
              <p className="pl-5 pb-3">{locales[params.local].encargado}</p>
              <h2 className="font-bold">Horario:</h2>
              <div className="pl-5 pb-3">
                {locales[params.local].horario.map((valor, index) => {
                  return <p key={index}>{atencion[index]}{valor}</p>;
                })}
              </div>
              <h2 className="font-bold">Servicios Ofrecidos:</h2>
              <p className="pl-5">Ubicacion bien ubicada</p>
            </div>
          </div>
          <div className="flex justify-center py-20 w-2/5 bg-segundo ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.192993466944!2d-72.59030064803784!3d-38.74123893402254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3dd6ace23af%3A0x4a2b662f3bd3f027!2sSalgado%20%26%20Cia.%20Abogados!5e0!3m2!1ses!2scl!4v1694563775565!5m2!1ses!2scl"
              width={600}
              height={450}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </section>
      </main>
    );
  } else {
    return notFound();
  }
}
