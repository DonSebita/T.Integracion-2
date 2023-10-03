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
const clientSchema = new Schema({
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
});

const Cliente = mongoose.models.Client || mongoose.model("Client", clientSchema)

export default Cliente
