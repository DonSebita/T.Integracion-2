"use client";
import React, { useEffect, useState } from 'react';
import RemoveBtn from "./btnDelete";
import 'tailwindcss/tailwind.css';
import Editar_usuario from './Editar_usuario';

function Usuarios(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/client')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de Usuarios:</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">Nombre</th> 
            <th className="py-2 px-4">Apellido</th>
            <th className="py-2 px-4">Teléfono</th>
            <th className="py-2 px-4">Consulta</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="py-2 px-4">{user.nombre}</td>
              <td className="py-2 px-4">{user.apellido}</td>
              <td className="py-2 px-4">{user.telefono}</td>
              <td className="py-2 px-4">{user.mensaje}</td>
              <td className="py-2 px-4">
                <RemoveBtn id={user._id} />
                <Editar_usuario nombre = {user.nombre} apellido = {user.apellido} correo = {user.correo} telefono = {user.telefono} mensaje = {user.mensaje} id={user._id}/> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
