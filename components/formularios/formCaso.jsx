"use client";

import Image from "next/image";
import { useState } from "react";

const FormCaso = (props) => {
  
  // Preguntar por los abogados

  // Preguntar por los clientes


  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-center bg-cover overflow-y-auto"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-30 inset-0 z-0"></div>
      <div className="w-full max-w-5xl relative mx-auto my-auto rounded-xl shadow-lg  bg-white p-6">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block text-grey-darker font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Titulo
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Ingrese titulo"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block text-grey-darker font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Abogado
            </label>
            <select
                className="block w-full border border-grey-lighter text-grey-darker py-3 shadow-0 px-4 pr-8 rounded"
              >
                <option>
                  Christian Verdugo - crischandel@gmail.com
                </option>
                <option>
                  Leonardo Placeres - leonardo@gmail.com
                </option>
                <option>Texas</option>
              </select>
           </div>
        </div>
        <div className="-mx-3 md:flex mb-4">
          <div className="md:w-full px-3">
            <label
              className="block text-grey-darker font-bold mb-2"
              htmlFor="grid-password"
            >
              Descripcion
            </label>
            <textarea
              className=" w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 resize-none"
              id="grid-password"
              type="password"
              placeholder="Ingrese descripcion del caso"
              rows={6}
            />
          </div>
        </div>
        <div className="-mx-3 flex mb-2">
          <div className="md:w-3/4 px-3">
            <label
              className="block text-grey-darker font-bold mb-2"
              htmlFor="grid-state"
            >
              Cliente
            </label>
            <div className="relative">
              <select
                className="w-full shadow-0 border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
              >
                <option>
                  Christian Verdugo - crischandel@gmail.com
                </option>
                <option>
                  Leonardo Placeres - leonardo@gmail.com
                </option>
                <option>Texas</option>
              </select>
            </div>
          </div>
          <div className="md:w-1/2 px-3 flex justify-end items-center">
            <button className="bg-blue-500 rounded-lg p-3 mt-6">
              Crear caso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCaso;
