"use client"
import RemoveBtn from "./btnDelete"
import { useEffect, useState } from 'react';
import EditBtn from "./btnEdit";
import Editar_usuario from "./Editar_usuario";

function Usuarios(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/client')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (   
  	<div>
      <h2>Lista de Usuarios:</h2>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Consulta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
		  {users.map((user,index) => (
		    <tr key={index}>
		      <td>{user.nombre}</td>
		      <td>{user.apellido}</td>
          <td>{user.correo}</td>
		      <td>{user.telefono}</td>
		      <td>{user.mensaje}</td>
		      <td>
		        <RemoveBtn id={user._id}/>
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
