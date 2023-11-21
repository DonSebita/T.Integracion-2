import React from "react";
import Image from "next/image";


const CasoEstado = [
  {key:1, color: "text-gray-300", valor: "Finalizado" },
  {key:2, color: "text-green-600", valor: "Activo" },
  {key:3, color: "text-gray-black", valor: (
    <button className="border border-gray-300 hover:bg-gray-300 p-2 rounded-lg">
      Tomar Caso
    </button>
  ) },
];

const Caso = ({ abogado, activo, cliente, titulo, descripcion }) => {
  const indice = activo;

  // Verificar si el índice es válido
  const estado = CasoEstado[indice]
    ? CasoEstado[indice].valor
    : "Estado Desconocido";

  return (
    <div className="mb-6 rounded-lg bg-white p-6 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            className="mr-2 h-10 w-10 rounded-full object-cover"
            width={500}
            height={500}
            src="/Image/users/Christian_Verdugo.jpeg"
            alt="imagen_usuario"
          />
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              {abogado.nombre + " " + abogado.apellido}
            </h3>
          </div>
        </div>
        <p  className={`text-sm font-medium ${CasoEstado[indice].color}`}>
          {estado}
        </p>
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold my-4">{titulo}</h3>
        <p className="text-sm font-normal text-gray-500">
          {descripcion}
        </p>
      </div>
      <div className="mt-4 items-center justify-between text-sm font-semibold text-gray-900 content-end">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <span className="mr-1">
            {cliente.nombre + " " + cliente.apellido}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Caso;
