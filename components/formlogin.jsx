"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        rut,
        password,
        redirect: false,
      });
      console.log(res)
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
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Inicio de sesión</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setRut(e.target.value)}
            className="h-10 border mt-1 rounded px-4 w-full text-black"
            type="text"
            placeholder="Rut"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="h-10 border mt-1 rounded px-4 w-full text-black"
            type="text"
            placeholder="Contraseña"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

        </form>
      </div>
    </div>
  );
}
