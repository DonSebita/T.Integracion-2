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
        router.refresh();
      }
    }
  };

  return (
    <button onClick={eliminarCliente} className="text-red-400">
      Eliminar
    </button>
  );
}