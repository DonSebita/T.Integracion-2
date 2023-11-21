"use client";
import Navbar from "@/components/navbarAbogados";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const Perfil = () => {
  const { data: session } = useSession();

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    rut: "",
    correo: "",
  });

  const [toast, setToast] = useState(null);

  const showToast = (texto) => {
    const ToastPersonalizado = (
      <div
        id="toast-bottom-right"
        className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
        role="alert"
      >
        <div className="text-sm font-normal">{texto}</div>
      </div>
    );

    setToast(ToastPersonalizado);

    // Desaparecer después de 2 segundos
    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  const postData = async (form) => {
    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data) {
        showToast(data.message);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [mostrar, setMostrar] = useState(false);

  const mostrarFuncion = () => {
    setMostrar(!mostrar);
    setForm({
      nombre: session?.user?.nombre,
      apellido: session?.user?.apellido,
      rut: session?.user?.rut,
      correo: session?.user?.correo,
    });
  };

  return (
    <main>
      <Navbar/>
      {mostrar == false
        ? (
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center">
              Perfil de usuario
            </h2>
            <div className="relative font-sans w-full flex flex-row justify-center py-36">
              <div className="card w-full bg-white  shadow-xl hover:shadow">
                <Image
                  className="w-64 mx-auto rounded-full -mt-32 border-8 border-white"
                  width={500}
                  height={500}
                  src="/Image/users/Christian_Verdugo.jpeg"
                  alt=""
                />
                <div className="absolute -mt-32 left-0">
                  <button type="button" onClick={mostrarFuncion}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 m-3 hover:text-blue-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex p-4 border-t border-gray-300 mx-3">
                  <div className="w-1/2 text-center">
                    <span className="font-bold">Nombre</span>
                    <br />
                    {session?.user?.nombre}
                  </div>
                  <div className="w-0 border border-gray-300">
                  </div>
                  <div className="w-1/2 text-center">
                    <span className="font-bold">Apellido</span>
                    <br />
                    {session?.user?.apellido}
                  </div>
                </div>
                <div className="flex p-4 border-t border-gray-300 mx-3">
                  <div className="w-1/2 text-center">
                    <span className="font-bold">Rut</span>
                    <br />
                    {session?.user?.rut}
                  </div>
                  <div className="w-0 border border-gray-300">
                  </div>
                  <div className="w-1/2 text-center">
                    <span className="font-bold">Correo</span>
                    <br />
                     {session?.user?.correo}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
        : (
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center">
              Perfil de usuario
            </h2>
            <div className="relative font-sans w-full flex flex-row justify-center py-36">
              <form className="card w-full bg-white  shadow-xl hover:shadow">
                <div className="relative flex justify-center">
                  <Image
                    className="w-64 mx-auto rounded-full -mt-32 border-8 border-white"
                    width={500}
                    height={500}
                    src="/Image/users/Christian_Verdugo.jpeg"
                    alt=""
                  />

                  <button className="absolute w-64 h-64 rounded-full -mt-32 opacity-0 hover:opacity-70 bg-white text-black
                transition duration-1000 ease-in-out">
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-1/5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </div>
                    <p className="font-bold">Cambiar Foto</p>
                  </button>
                </div>

                <div className="absolute -mt-32 left-0">
                  <button type="button" onClick={mostrarFuncion}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 m-3 hover:text-blue-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                  </button>
                </div>
                <div className="absolute -mt-32 right-0">
                  <button
                    className="flex flex-row"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 m-3 hover:text-blue-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex p-4 border-t border-gray-300 mx-3">
                  <div className="w-1/2 text-center">
                    <label htmlFor="nombre" className="font-bold">Nombre</label>
                    <br />
                    <input
                      id="nombre"
                      name="nombre"
                      className="focus:outline-none focus:border-blue-600 hover:border-blue-400 transition duration-500 ease-in-out border-b-2 border-gray-300 text-center"
                      value={form.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-0 border border-gray-300">
                  </div>
                  <div className="w-1/2 text-center">
                    <label htmlFor="apellido" className="font-bold">
                      Apellido
                    </label>
                    <br />
                    <input
                      id="apellido"
                      name="apellido"
                      className="focus:outline-none focus:border-blue-600 hover:border-blue-400 transition duration-500 ease-in-out border-b-2 border-gray-300 text-center"
                      value={form.apellido}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex p-4 border-t border-gray-300 mx-3">
                  <div className="w-1/2 text-center">
                    <label htmlFor="rut" className="font-bold">Rut</label>
                    <br />
                    <input
                      id="rut"
                      name="rut"
                      className="focus:outline-none focus:border-blue-600 hover:border-blue-400 transition duration-500 ease-in-out border-b-2 border-gray-300 text-center"
                      value={form.rut}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-0 border border-gray-300">
                  </div>
                  <div className="w-1/2 text-center">
                    <label htmlFor="correo" className="font-bold">Correo</label>
                    <br />
                    <input
                      id="correo"
                      name="correo"
                      className="focus:outline-none focus:border-blue-600 hover:border-blue-400 transition duration-500 ease-in-out border-b-2 border-gray-300 text-center"
                      value={form.correo}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>
            </div>
            {toast}
          </section>
        )}
    </main>
  );
};

export default Perfil;
