"use client";
import { useState } from "react";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  const postData = async (form) => {
    try {
      //console.log(form);

      if (Object.values(form).every((valor) => valor !== "")) {
        const res = await fetch("/api/client", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const data = await res.json();
        console.log(data);
        if (data) {
          showToast(data.message);
          setForm({
            nombre: "",
            apellido: "",
            correo: "",
            telefono: "",
            mensaje: "",
          });
        }
      } else {
        showToast("Tiene campos vacios");
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <main className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <h4 className="font-semibold text-xl text-gray-600">
          Formulario de Contacto
        </h4>
        <p className="text-gray-500 mb-6">
          Rellena este formulario para comunicarte con uno de nuestros abogados
        </p>

        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Datos Personales</p>
              <p>Porfavor completa todos los campos.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label
                      htmlFor="nombre"
                      className="font-semibold text-l text-gray-500"
                    >
                      Nombre
                    </label>
                    <input
                      className="h-10 border mt-1 rounded px-4 w-full text-black"
                      type="text"
                      name="nombre"
                      autoComplete="off"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Ingrese su Nombre"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label
                      htmlFor="apellido"
                      className="font-semibold text-l text-gray-500"
                    >
                      Apellido
                    </label>
                    <input
                      className="h-10 border mt-1 rounded px-4 w-full text-black"
                      type="text"
                      name="apellido"
                      autoComplete="off"
                      value={form.apellido}
                      onChange={handleChange}
                      placeholder="Ingrese su Apellido"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label
                      htmlFor="correo"
                      className="font-semibold text-l text-gray-500"
                    >
                      Correo Electronico
                    </label>
                    <input
                      className="h-10 border mt-1 rounded px-4 w-full text-black"
                      type="email"
                      name="correo"
                      autoComplete="off"
                      value={form.correo}
                      onChange={handleChange}
                      placeholder="Ingrese su Correo"
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label
                      htmlFor="telefono"
                      className="font-semibold text-l text-gray-500"
                    >
                      Numero de Contacto
                    </label>
                    <input
                      className="h-10 border mt-1 rounded px-4 w-full text-black appearance-none"
                      type="number"
                      name="telefono"
                      autoComplete="off"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="Ingrese telefono"
                    />
                  </div>
                  <div className="md:col-span-5">
                    <textarea
                      className="font-semibold text-l h-auto border min-height mt-1 rounded px-4 w-full text-black resize-none"
                      name="mensaje"
                      autoComplete="off"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Deje su Mensaje"
                    >
                    </textarea>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {toast}
    </main>
  );
};
export default Contacto;
