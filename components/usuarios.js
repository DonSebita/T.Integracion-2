"use client"
import RemoveBtn from "./btnDelete"
import { useEffect, useState } from 'react';

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
		      <td>{user.telefono}</td>
		      <td>{user.mensaje}</td>
		      <td>
		        <RemoveBtn id={user._id}/>
		      </td>
		    </tr>
		  ))}
		</tbody>	
      </table>
    </div>
  );
}
export default Usuarios;