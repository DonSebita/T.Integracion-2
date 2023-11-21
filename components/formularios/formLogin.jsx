"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login(props) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const [toastView, setToastView] = useState(false);
  const [texto, setTexto] = useState("");

  const showToast = (texto) => {
    setToastView(true);
    setTexto(texto);

    // Desaparecer después de 2 segundos
    setTimeout(() => {
      setToastView(false);
      setTexto("");
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    showToast("holaaa");

    console.log(correo);
    try {
      const res = await signIn("credentials", {
        correo,
        clave: password,
        //redirect: false,
        callbackUrl: "/paginaAbogados",
      });
      console.log(res);
      if (res.error) {
        setError("Credenciales invalidas");
        return;
      }

      //router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={"shadow-lg p-5 rounded-lg border-t-4 border-green-400 " +
        props.className}
    >
      <h1 className="text-xl font-bold my-4">Inicio de Sesion</h1>

      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="email"
            name="correo"
            className="block  py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <label
            htmlFor="correo"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Correo electronico
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="clave"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label
            htmlFor="contraseña"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Contraseña
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Iniciar cesion
        </button>
      </form>
      {toastView && (
        <div
          id="toast-bottom-right"
          className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert"
        >
          <div className="pl-4 text-sm font-normal">{texto}</div>
        </div>
      )}
    </div>
  );
}
