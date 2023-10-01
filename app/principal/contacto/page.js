"use client"
import React, { useState } from 'react';

function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nombre,
      apellido,
      correo,
      telefono,
      mensaje,
    });
    setNombre('');
    setApellido('');
    setCorreo('');
    setTelefono('');
    setMensaje('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          id="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: '100%', height: '30px' }}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          id="apellido"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          style={{ width: '100%', height: '30px' }}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="email"
          id="correo"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          style={{ width: '100%', height: '30px' }}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="tel"
          id="telefono"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          style={{ width: '100%', height: '30px' }}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <textarea
          id="mensaje"
          placeholder="Escribe tu mensaje aquí"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          style={{ width: '100%', height: '100px' }}
          required
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;