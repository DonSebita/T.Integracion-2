import mongoose, { Schema } from "mongoose";

const abogadoSchema = new Schema({
  rut: {
    type: String,
    required: [true, "El RUT es requerido"],
    trim: true,
  },
  clave: {
    type: String,
    required: [true, "La contraseña es requerida"],
    trim: true,
  },
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
    trim: true,
  },
  apellido: {
    type: String,
    required: [true, "El apellido es requerido"],
    trim: true,
  },
  correo: {
    type: String,
    required: [true, "El correo es requerida"],
    unique: true,
    trim: true,
  },
});

module.exports = mongoose.models.Abogado || mongoose.model("Abogado", abogadoSchema);

