"use client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Edit_Form({ id, nombre, apellido, correo, telefono, mensaje }) {
  const [newNombre, setNewNombre] = useState(nombre);
  const [newApellido, setNewApellido] = useState(apellido);
  const [newCorreo, setNewCorreo] = useState(correo);
  const [newTelefono, setNewTelefono] = useState(telefono);
  const [newMensaje, setNewMensaje] = useState(mensaje);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/client?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newNombre, newApellido, newCorreo, newTelefono, newMensaje }),
      });

      if (!res.ok) {
        throw new Error("Error al actualizar");
      }

      router.push(router.pathname);
      //router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /*<form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewNombre(e.target.value)}
        value={newNombre}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Nombre"
      />

      <input
        onChange={(e) => setNewApellido(e.target.value)}
        value={newApellido}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Apellido"
      />

      <input
        onChange={(e) => setNewCorreo(e.target.value)}
        value={newCorreo}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Correo"
      />

      <input
        onChange={(e) => setNewTelefono(e.target.value)}
        value={newTelefono}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Teléfono"
      />

      <input
        onChange={(e) => setNewMensaje(e.target.value)}
        value={newMensaje}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Mensaje"
      />*/

      <button onClick={handleSubmit}className="text-green-600">
        Editar
      </button>
   // </form>
  );
}