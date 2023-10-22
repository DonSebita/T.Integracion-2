"use client"
import { useEffect, useState } from 'react';

// const aaaa = (userId) => {
//   if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
//     fetch(`/api/client/${userId}`, {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           // Recarga la lista de usuarios después de la eliminación
//           fetchUsers();
//         } else {
//           console.error('Error al eliminar el usuario');
//         }
//       })
//       .catch((error) => console.error('Error:', error));
//   }
// };

// const borrar = (userId)=>{
// 	if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
// 		const request = {
// 	    method: 'DELETE',
// 	    headers: { 'Content-Type': 'application/json' },
// 	    body: JSON.stringify(userId)
// 	    };

// 	    fetch(`/api/client/${userId}`, request)
// 	    .then(response => {
// 	        if (response.status == 200) {
// 	        this.loadList();
// 	    }
// 		});
// }}


function Usuarios() {
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
		  {users.map((user, index) => (
		    <tr key={index}>
		      <td>{user.nombre}</td>
		      <td>{user.apellido}</td>
		      <td>{user.telefono}</td>
		      <td>{user.mensaje}</td>
		      <td>
		        <button >
		          Enviar Mensaje
		        </button>
		        <button >
		          Editar
		        </button>
		        <button onClick={() => borrar(user._id)}>
		          Eliminar
		        </button>
		      </td>
		    </tr>
		  ))}
		</tbody>	
      </table>
    </div>
  );
}
export default Usuarios;