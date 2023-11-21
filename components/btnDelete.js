"use client";

import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const eliminarCliente = async () => {
    const confirmed = confirm("¿Estas seguro?");

    if (confirmed) {
      const res = await fetch(`/api/client?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        location.reload()
      }
    }
  };

  return (
    <button
      onClick={eliminarCliente}
      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-700"
    >
      Eliminar
    </button>
  );
}
