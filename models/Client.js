import mongoose, { Schema } from "mongoose";
/*
const clientSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: String, required: true },
  mensaje: String,
});
*/
const clienteSchema = new Schema({
  nombre: {
    type: String,
    require: [true, "El nombre es requerido"],
    trim: true,
  },
  apellido: {
    type: String,
    require: [true, "El apellido es requerido"],
    trim: true,
  },
  correo: {
    type: String,
    require: [true, "El apellido es requerido"],
    trim: true,
  },
  telefono: {
    type: Number,
    require: [true, "El apellido es requerido"],
    trim: true,
  },
  mensaje: {
    type: String,
    require: [true, "El apellido es requerido"],
    trim: true,
  },
  asignado:{
    type: Boolean,
    default: false,    
  }
});

const clients = mongoose.models.clients || mongoose.model("clients", clienteSchema)

export default clients
