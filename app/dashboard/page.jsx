"use client";
import Caso from "@/components/CardCasos";
import FormCaso from "@/components/formularios/formCaso";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const [casos, setCasos] = useState([]);
  const [mostar, setMostar] = useState(false);

  let contador = 0;

  function generarClaveUnica() {
    contador += 1;
    return contador;
  }

  useEffect(() => {
    fetch("/api/casoJuridico")
      .then((response) => response.json())
      .then((data) => setCasos(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const mostrarFuncion = () => {
    setMostar(!mostar);
  };

  return (
    <main className="mx-auto w-full min-h-screen bg-gray-50 pb-10">
      <div className="px-16 py-6">
        <div className="bg-white px-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 py-3">
              Estudio Juridico S&S
            </h2>
          </div>
        </div>
        <div className="px-4">
          <div className="my-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Casos Activos
            </h2>
            {mostar && <FormCaso fun={mostrarFuncion} />}
            <button
              type="button"
              onClick={mostrarFuncion}
              className="p-3 bg-gray-300 rounded-md hover:bg-gray-500 hover:text-white"
            >
              Crear Caso
            </button>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
            {casos
              .filter((caso) => session?.user?.id == caso.Abogado_info._id)
              .map((caso, indice) => (
                <Caso
                  key={generarClaveUnica()}
                  titulo={caso.titulo}
                  descripcion={caso.descripcion}
                  abogado={caso.Abogado_info}
                  cliente={caso.Cliente_info}
                  activo={caso.activo}
                />
              ))}
          </div>
        </div>
        <div className="px-4">
          <div className="my-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Todos los casos
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
            {casos
              .filter((caso) => session?.user?.id != caso.Abogado_info._id)
              .map((caso, indice) => (
                <Caso
                  key={generarClaveUnica()}
                  titulo={caso.titulo}
                  descripcion={caso.descripcion}
                  abogado={caso.Abogado_info}
                  cliente={caso.Cliente_info}
                  activo={caso.activo}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
