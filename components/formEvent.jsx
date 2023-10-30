"use client";
import React, { useState } from "react";

const FormEventCalendar = () => {
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    lugar: "",
    fechaInicio: "",
    fechaFinal: "",
    correo: "",
    reunion: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
  ...form,
      [name]: value,
    });
  };
  const [toast, setToast] = useState(null);
  const [avanzado, setAvanzado] = useState(false);

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

  const handleMostrarAvanzado = () => {
    setAvanzado(!avanzado);
    if (avanzado) {
      const valores = ["reunion", "fechaFinal", "correo"];
      let actualizacionForm = { ...form };
      valores.forEach((valor) => {
        actualizacionForm[valor] = "";
      });
      setForm(actualizacionForm);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  const postData = async (form) => {
    try {
      console.log(form);

      const res = await fetch("/api/eventCalendar", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const { succes } = await res.json();
      if (succes) {
        showToast("Creado con exito");
      } else {
        showToast("Error al crear");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded p-4"
    >
      <h1 className="text-2xl font-semibold mb-4 text-black">
        Formulario Evento
      </h1>

      <div className="mb-4">
        <label
          htmlFor="titulo"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Título
        </label>
        <input
          name="titulo"
          type="text"
          autoComplete="off"
          className="w-full p-2 border border-gray-300 rounded text-gray-500"
          value={form.titulo}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="descripcion"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Descripción
        </label>
        <textarea
          name="descripcion"
          className="w-full p-2 border border-gray-300 rounded text-gray-500"
          value={form.descripcion}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="lugar"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Lugar
        </label>
        <input
          name="lugar"
          type="text"
          className="w-full p-2 border border-gray-300 rounded text-gray-500"
          value={form.lugar}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="fechaInicio"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Fecha de Inicio
        </label>
        <input
          name="fechaInicio"
          type="datetime-local"
          className="w-full p-2 border border-gray-300 rounded text-gray-500"
          value={form.fechaInicio}
          onChange={handleChange}
        />
      </div>
      <label className="relative inline-flex items-center mb-4 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          id="avanzado"
          onChange={handleMostrarAvanzado}
        />

        <div className="w-11 h-6 bg-gray-200 rounded-full 
          dark:bg-gray-700 peer-checked:after:translate-x-full 
          peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
          after:left-[2px] after:bg-white after:border-gray-300 after:border 
          after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
        <span className="ml-3 text-sm font-medium text-gray-900">
          Opciones Avanzadas
        </span>
      </label>

      {avanzado && (
        <div>
          <div className="mb-4">
            <label
              htmlFor="fechaFinal"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Fecha Final
            </label>
            <input
              name="fechaFinal"
              type="datetime-local"
              className="w-full p-2 border border-gray-300 rounded text-gray-500"
              value={form.fechaFinal}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="correo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Correo
            </label>
            <input
              name="correo"
              type="email"
              className="w-full p-2 border border-gray-300 rounded text-gray-500"
              value={form.correo}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="reunion"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Reunion
            </label>
            <input
              name="reunion"
              type="text"
              className="w-full p-2 border border-gray-300 rounded text-gray-500"
              value={form.reunion}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Enviar
      </button>
      <div>
        <button type="button" onClick={showToast}>
          Mostrar Toast Personalizado
        </button>
        {toast}
      </div>
    </form>
  );
};
export default FormEventCalendar;
