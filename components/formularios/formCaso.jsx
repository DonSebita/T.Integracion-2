"use client";

import { set } from "mongoose";
import Image from "next/image";
import { useEffect, useState } from "react";

const FormCaso = ({ fun }) => {
  const [abogados, setAbogados] = useState([]);
  const [clientes, setClientes] = useState([]);

  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    abogado: "ffffffffffffffffffffffff",
    cliente: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetForm = (e) => {
    setForm({
      titulo: "",
      descripcion: "",
      abogado: "ffffffffffffffffffffffff",
      cliente: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
    resetForm();
  };

  const postData = async (form) => {
    try {
      const res = await fetch("/api/casoJuridico", {
        method: "POST",
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

  useEffect(() => {
    fetch("/api/user/")
      .then((response) => (
        response.json()
      ))
      .then((data) => setAbogados(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch("/api/client/")
      .then((response) => response.json())
      .then((data) => {
        let resultado = data.map((
          { _id, nombre, apellido, correo, asignado },
        ) => ({
          _id,
          nombre,
          apellido,
          correo,
          asignado,
        }));
        setClientes(resultado);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

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
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-center bg-cover overflow-y-auto"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-30 inset-0 z-0">
      </div>
      {toast}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl relative mx-auto my-auto rounded-xl shadow-lg  bg-white p-6"
      >
        <button
          onClick={fun}
          type="button"
          className="absolute right-0 top-0 p-3 mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block text-grey-darker font-bold mb-2"
              htmlFor="titulo"
            >
              Titulo
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="titulo"
              name="titulo"
              type="text"
              placeholder="Ingrese titulo"
              value={form.titulo}
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block text-grey-darker font-bold mb-2"
              htmlFor="abogado"
            >
              Abogado
            </label>
            <select
              name="abogado"
              className="block w-full border border-grey-lighter text-grey-darker py-3 shadow-0 px-4 pr-8 rounded"
              value={form.abogado}
              onChange={handleChange}
            >
              <option>
                - - - - - - - - - - - - - - - - -
              </option>
              {abogados.map((abogado, indice) => (
                <option value={abogado._id} key={indice}>
                  {abogado.nombre} {abogado.apellido} - {abogado.correo}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-4">
          <div className="md:w-full px-3">
            <label
              className="block text-grey-darker font-bold mb-2"
              htmlFor="descripcion"
            >
              Descripcion
            </label>
            <textarea
              className=" w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 resize-none"
              id="descripcion"
              name="descripcion"
              placeholder="Ingrese descripcion del caso"
              rows={6}
              value={form.descripcion}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="-mx-3 flex mb-2">
          <div className="md:w-3/4 px-3">
            <label
              className="block text-grey-darker font-bold mb-2"
              htmlFor="cliente"
            >
              Cliente
            </label>
            <div className="relative">
              <select
                className="w-full shadow-0 border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="cliente"
                name="cliente"
                value={form.cliente}
                onChange={handleChange}
              >
                <option>
                  - - - - - - - - - - - - - - - - -
                </option>
                {clientes.filter((cliente) => cliente.asignado == false).map((
                  cliente,
                  indice,
                ) => (
                  <option value={cliente._id} key={indice}>
                    {cliente.nombre} {cliente.apellido} - {cliente.correo}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:w-1/2 px-3 flex justify-end items-center">
            <button type="submit" className="bg-blue-500 rounded-lg p-3 mt-6">
              Crear caso
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCaso;
