import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Editar_usuario(props) {
   const id = props.id
   
   const [form, setForm] = useState({
    nombre: props.nombre,
    apellido: props.apellido,
    correo: props.correo,
    telefono: props.telefono,
    mensaje: props.mensaje ,
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
    //console.log(form)
    
    
  
};

  const postData = async (form) => {

      try {
        const res = await fetch(`/api/client?id=${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form),
        });
      const data = await res.json();
      router.reload(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  // 

  return (
    <div>
      <button onClick={openModal} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800" type="button">
        Editar 
      </button>

      {modalVisible && (
  <div id="defaultForm" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full">
    <div className="relative w-full max-w-2xl max-h-full">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Completa el formulario
          </h3>
          <button onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white">
            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Cerrar formulario</span>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre" className="text-gray-500 dark-text-gray-400">Nombre:</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={form.nombre}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus-outline-none focus-ring-2 focus-ring-blue-300" required />

            <label htmlFor="apellido" className="text-gray-500 dark-text-gray-400">Apellido:</label>
            <input 
              type="text" 
              id="apellido" 
              name="apellido" 
              value={form.apellido} 
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus-outline-none focus-ring-2 focus-ring-blue-300" required />

            <label htmlFor="correo" className="text-gray-500 dark-text-gray-400">Correo electrónico:</label>
            <input 
              type="text" 
              id="correo" 
              name="correo" 
              value={form.correo} 
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus-outline-none focus-ring-2 focus-ring-blue-300" required />

            <label htmlFor="telefono" className="text-gray-500 dark-text-gray-400">Teléfono:</label>
            <input 
              type="tel" 
              id="telefono" 
              name="telefono" 
              value={form.telefono} 
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus-outline-none focus-ring-2 focus-ring-blue-300" required />

            <label htmlFor="mensaje" className="text-gray-500 dark-text-gray-400">Mensaje:</label>
            <textarea 
              id="mensaje" 
              name="mensaje" 
              value={form.mensaje} 
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus-outline-none focus-ring-2 focus-ring-blue-300" required></textarea>


            <button type="submit" className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default Editar_usuario;

