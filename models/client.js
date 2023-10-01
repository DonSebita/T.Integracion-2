const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  correo: String,
  telefono: String,
  mensaje: String,
});

const Client = mongoose.model('client', clientSchema);

module.exports = Client;